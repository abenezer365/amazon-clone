import React from 'react'
import Home from './Home/Home'
import {Routes, Route} from 'react-router-dom'
import Auth from './Auth/Auth'
import Cart from './Cart/Cart'
import Order from './Order/Order'
import Category from './Category/Category'
import Detail from './Detail/Detail'
import NEP from './404/NEP'
import Payment from './Payment/Payment'
import Protected from './Protected'

function Router() {
  return (
    <>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:singleID" element={<Detail />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/payment" element={
          <Protected>
            <Payment /> 
          </Protected>}/>
        <Route path="/category/:name" element={<Category />} />
        <Route path="*" element={<NEP />} />
    </Routes>
    </>
  )
}

export default Router
