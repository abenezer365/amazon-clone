import React from 'react'
import css from './Header.module.css'
import logo from '../../assets/img/logo-w.png'
import { useState, useEffect } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";
import { IoCartSharp } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../Context';


function Header() {
     const [country, setCountry] = useState('USA')
  useEffect(()=>{
    (async () => {
        try {
           const res = await axios.get('https://ipapi.co/json/')
           setCountry(res.data)
        } catch (err) {
            console.log(`Unable to get the country name ${err}`)
        }
    })()
  },[])

  const countryCode = country?.country_code?.toLowerCase() || 'us'
  const[{basket},dispach]=useContext(Context)
  return (
    <>
      <header>
       <div className={css.left}>
        <Link to="/">
        <img className={css.logo} src={logo} alt="Logo" />
        </Link>
        <div className={css.delivery}>
            <IoLocationOutline />
            <div>
            <p>Deliver to:</p>
            <p>{country?.country_name || 'United State'}</p>
            </div>
        </div>
       </div>
       <div className={css.center}>
         <select>
              <option value="">All</option>
              <option value="arts-crafts">Arts & Crafts</option>
              <option value="automotive">Automotive</option>
              <option value="baby">Baby</option>
              <option value="beauty">Beauty & Personal Care</option>
              <option value="books">Books</option>
              <option value="boys-fashion">Boys' Fashion</option>
              <option value="computers">Computers</option>
              <option value="deals">Deals</option>
              <option value="digital-music">Digital Music</option>
              <option value="electronics">Electronics</option>
              <option value="girls-fashion">Girls' Fashion</option>
              <option value="health-household">Health & Household</option>
              <option value="home-kitchen">Home & Kitchen</option>
              <option value="industrial-scientific">Industrial & Scientific</option>
              <option value="kindle-store">Kindle Store</option>
              <option value="luggage">Luggage</option>
              <option value="mens-fashion">Men's Fashion</option>
              <option value="movies-tv">Movies & TV</option>
              <option value="music-cds-vinyl">Music, CDs & Vinyl</option>
         </select>
        <input type="text" />
        <div className={css.search}>
            <IoSearchSharp />
        </div>
       </div>
       <div className={css.right}>
        <div className={css.country}>
            <img src={`https://flagcdn.com/w160/${countryCode}.png`} alt="" />
            <p>{country.country_code || 'US'}</p>
            <GoTriangleDown />
        </div>
        <Link to="/auth">
          <div className={css.account}>
              <p>Hello, sign in</p>
              <span>Account and Lists
                  <GoTriangleDown />
              </span>
          </div>
        </Link>
         <Link to="/order">
        <div className={css.return}>
             <p>Returns</p> 
             <p>& Orders</p>
        </div>
        </Link>
        <Link to="/cart">
          <div className={css.cart}>
              <IoCartSharp />
              <p>{basket.reduce((total, item) => total + item.amount, 0)}</p>
          </div>
        </Link>
       </div>
      </header>
       <nav>
      <IoIosMenu />
      <ul> 

        <li>All</li>
        <li>Today's Deals</li>
        <li>Registry</li>
        <li>Prime Video</li>
        <li>Gift Cards</li>
        <li>Customer Service</li>
        <li>Sell</li>
      </ul>
    </nav>
    </>
  )
}

export default Header
