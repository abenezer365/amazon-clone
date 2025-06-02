import React from 'react'
import Layout from '../Layout'
import { useContext } from 'react'
import { Context } from '../../components/Context'
import { useState } from 'react'
import axios from 'axios'
import Card from '../../components/Body/Products/Card'
import {ClipLoader} from 'react-spinners'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import css from './Payment.module.css'
import { currency } from '../../../utils/constants'
import { Link } from 'react-router-dom'
import { db } from '../../../utils/firebase'
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'
import { Type } from '../../../utils/action.type'
import {firebase_server,deployed_server,native_server} from '../../../utils/endpoint'
function PaymentForm() {
  const[{basket,user},dispach]=useContext(Context)
  const subtotal = parseInt((basket?.reduce((acc, item) => acc + item.price * item.amount, 0))*100)
  const totalPrice = basket?.reduce((acc, item) => acc + item.price * item.amount, 0)
  const totalItems = basket?.reduce((total, item) => total + item.amount, 0)|| 0 
  const [Error, setError] = useState()
  const [processing, setProcessing] = useState(false)
  const navigate= useNavigate()
  const stripe = useStripe();
  const elements = useElements();
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#f0f0f0',
      fontFamily: '"Inter", system-ui, sans-serif',
      fontSize: '15px',
      fontSmoothing: 'antialiased',
      '::placeholder': {
        color: '#888',
      },
      iconColor: '#cbd5e0',
    },
    invalid: {
      color: '#ff6b6b',
      iconColor: '#ff6b6b',
    },
  },
  hidePostalCode: true,
};



  async function handlePayment(e) {
  e.preventDefault();
  setProcessing(true);

  if (!stripe || !elements) {
    setError("Stripe is not loaded properly. Please refresh the page.");
  }

  try {
    const response = await axios.post(`${deployed_server.url}/payment/create?subtotal=${subtotal}`);
    console.log(response)
    const clientSecret = response.data.clientSecret;
       if (!clientSecret) {
          throw new Error("Failed to get payment secret from server.");
        }
    // Confirm the payment
    const confirmation = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: user?.displayName,
          email: user?.email,
        }
      }
    })

    if (confirmation.error) {
      console.log(confirmation.error.message)
        setError(confirmation.error.message)
      setProcessing(false);
    } else if (confirmation.paymentIntent.status === 'succeeded') {
      await setDoc(doc(db, "users", user?.uid, "orders", confirmation.paymentIntent.id), {
        basket: basket,
        amount: confirmation.paymentIntent.amount,
        created: confirmation.paymentIntent.created,
      })
      dispach({
        type : Type.EMPTY_BASKET
      })
      console.log('✅ Payment successful!')
      setError("")
      alert('Payment successful!')
      setProcessing(false)
      navigate('/order',{state:{message:"You have placed new order!"}})

    }else{
      setError("Unexpected payment status. Please try again.")
      setProcessing(false)
    }
  } catch (err) {
   console.error("Payment error:", err);
    const message = err?.response?.data?.error || err.message || "An unknown error occurred.";
    setError(`❌ ${message}`);
    setProcessing(false);
}

}
if(totalItems <= 0){
  return (
    <Layout>
      <h1 className={css.header}>Your cart is empty</h1>
      <div className={css.empty}>
          <p>Please add items to your cart before proceeding to checkout.</p>
          <Link to="/"> <button className={css.go}>Go shop</button> </Link>
         
       </div>
    </Layout>
  )
}
  return (

    <Layout>

      <h1 className={css.header}>
       Checkout ({totalItems}) items
      </h1>
    <div className={css.payment}>
      <div className={css.address}>
        <h3>
        Shipping addres
        </h3>
        <div className={css.place}>
          <p>Addis Ababa</p>
          <p>Ethiopia</p>
          <p>Bole, Churchul square 02</p>
          <p>{`At ${new Date().toLocaleString()}`}</p>
        </div>
      </div>
      <div className={css.detail}>
        <h3>
       Personal detail
        </h3>
        <div className={css.place}>
          <p>{user?.displayName}</p>
          <p>{user?.email}</p>
        </div>
      </div>
      <div className={css.list_of_product}>
        <h3>Review your cart</h3>
        <div className={css.items}>
        {
          basket?.map(item => <Card key={item.id} {...item} notextra={true}/>)
        }
        </div>
      </div>
      <form onSubmit={handlePayment} className={css.pay}>
        <CardElement className={css.visa} options={CARD_ELEMENT_OPTIONS}/>
         {Error && <small className={css.error}>{Error}</small>}
        <button disabled={!stripe || processing} className={css.submit} type="submit">{processing  ? <ClipLoader size={23} color='#000' /> : `Pay ${currency(totalPrice)}`}</button>
      </form>
    </div>
    </Layout>
  )
  
}

export default PaymentForm