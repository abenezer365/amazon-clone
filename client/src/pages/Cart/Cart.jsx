import React from 'react'
import { useContext } from 'react';
import { Context } from '../../components/Context';
import css from './Cart.module.css'
import SingleUI from '../Detail/SingleUI';
import {currency} from '../../../utils/constants'
import { Link } from 'react-router-dom';
import Layout from '../Layout';

function Cart() {
  const[{basket},dispach]=useContext(Context)
  const subtotal = basket?.reduce((acc, item) => acc + item.price * item.amount, 0)
  const totalItems = basket?.reduce((acc, item) => acc + item.amount, 0)

  return (
    <Layout>
      
    <div className={css.cart}>
      <div className={css.items}>

      {basket?.length === 0 ? (<div>
                                 <p>Opps! You don't have any item in the cart</p> 
                                <Link to="/"> <button className={css.go}>Go shop</button> </Link>
                           </div>):(
                             basket?.map(item =>
          <SingleUI key={item.id} {...item} cart={true}/>
        )
      )}
      </div>
      {
        basket?.length !== 0 && <div className={css.checkout}>
        <p>Subtotals ({totalItems} items)</p>
        <p>Price: {currency(subtotal)}</p>
        <div className={css.term}>
        <input type="checkbox" />
        <label>This order contains a gift.</label>

        </div>
        <Link to="/payment">
        <button>Procced to checkout</button>
        </Link>
      </div>
      }
      
    </div>
    </Layout>
  )
}

export default Cart
