import React, { useContext, useEffect, useState } from 'react'
import Layout from '../Layout'
import css from './Order.module.css'
import { db } from '../../../utils/firebase'
import { Context } from '../../components/Context'
import { collection, getDocs } from "firebase/firestore"
import Card from '../../components/Body/Products/Card'
import { Link } from 'react-router-dom'
import { HashLoader } from 'react-spinners'

function Order() {
 const[{user},dispatch] = useContext(Context)
 const [orders, setOrders] = useState(null)
 const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (!user || !user.uid) return;

      (async () => {
        try {
          const data = await getDocs(collection(db, "users", user.uid, "orders"));
          const orderList = data.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setOrders(orderList);
          setLoading(false)
        } catch (error) {
          console.error("Error fetching orders:", error);
          setLoading(false)
        }
      })();
    }, [user]);

const status = ['To be shipped', 'Shipped', 'Delivered', 'Untracked', 'Succeed']
 if(loading){
      return (
        <HashLoader className={css.loader}/>
      )
    }
if(orders?.length == 0){
     return (
       <Layout>
        <div className={css.order}>
              <h1>Return and Order</h1>
              <p className={css.missing}>You have no orders yet. Browse our products and start <Link to="/">shopping</Link>!</p>
          </div>
      </Layout>
     )
}
  return (
    <Layout>
      <div className={css.order}>
        <h1>Return and Order</h1>
        <br />
        <br />
        <div className={css.orderList_container}>
        {orders?.map(order=>{
            const randomStatus = status[Math.floor(Math.random() * status.length)]
            return(<div className={css.single_order}> 
            <div className={css.title}>
               <div key={order.id}><strong>Order ID:</strong> {order?.id}</div>
              <p className={`${css.status} ${css["status-" + randomStatus.toLowerCase().replaceAll(" ", "-")]}`}>
                    Status: {randomStatus}
                  </p>

            </div>
               <div className={css.single_products_container}>
               {order?.basket.map((item, index) => (<Card order={item?.amount} key={index} notextra={true} {...item} />))}
               </div>
               <hr className={css.line}/>
            </div>)
           
          })}
         </div> 
      </div>
    </Layout>
  )
}

export default Order
