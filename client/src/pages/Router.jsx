import React from 'react'
import Home from './Home/Home'
import {Routes, Route} from 'react-router-dom'
import Auth from './Auth/Auth'
import Cart from './Cart/Cart'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Order from './Order/Order'
import Category from './Category/Category'
import Detail from './Detail/Detail'
import NEP from './404/NEP'

function Router() {
  return (
    <>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:singleID" element={<Detail />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="*" element={<NEP />} />
    </Routes>
    </>
  )
}

export default Router
