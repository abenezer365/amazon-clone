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
import { FaUserCircle } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { signOut } from 'firebase/auth';
import { auth } from '../../../utils/firebase';
import { Type } from '../../../utils/action.type';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("Are you sure, You are loging out of you account")
        dispach({
          type: Type.SET_USER,
          user: null
        });
        navigate("/")
      })
      .catch((error) => {
        alert("Logout error:", error);
      });
  };
  const[{basket,user},dispach]=useContext(Context)
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
            <p>Ethiopia</p>
            </div>
        </div>
                 <Link to="/order">
        <div className={css.orderMobile}>
             <p>Returns</p> 
             <p>& Orders</p>
        </div>
        </Link>
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
            <img src={`https://flagcdn.com/w160/et.png`} alt="" />
            <p>ETH</p>
            <GoTriangleDown />
        </div>
       {
        user ?
            <div className={css.logout}>
                <p>Hello, {user?.displayName || user?.email?.split('@')[0] || 'User!'}</p>
             
                <span onClick={handleLogout}>Log out
                    <LuLogOut />
                </span>
          
            </div>
        : 
          <Link to="/auth">
            <div className={css.account}>
                <p>Hello, sign in</p>
                <span>Account and Lists
                    <GoTriangleDown />
                </span>
            </div>
          </Link>
       }
         <Link to="/order">
        <div className={css.return}>
             <p>Returns</p> 
             <p>& Orders</p>
        </div>
        </Link>
       
          <Link to={!user && "/auth"}>
            <div className={css.user} onClick={() => {if (user) handleLogout()}}
>
                <FaUserCircle/>
                {
                  user ? <div className={css.status}>{" "}</div> : <div className={css.status_bad}>{" "}</div>
                }
            </div>
          </Link>
        
        <Link to="/cart">
          <div className={css.cart}>
              <IoCartSharp />
              <p>{basket?.reduce((total, item) => total + item.amount, 0)|| 0}</p>
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
