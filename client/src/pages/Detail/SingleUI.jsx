import React from 'react'
import css from './SingleUI.module.css'
import {truncate} from '../../../utils/constants'
import {currency} from '../../../utils/constants'
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../../components/Context';
import { Type } from '../../../utils/action.type';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";


function SingleUI({id,title,price,description,category,image,rating,cart}) {
  const[state,dispach]=useContext(Context)
  function addtocart(e) {
     e.stopPropagation(); // Prevents the click from reaching the Link
      e.preventDefault();  // Optional: prevents default anchor behavior, extra safety
    dispach({
      type: Type.ADD_TO_CART,
      item : {
        id,title,price,description,category,image,rating
      }
    })
  }
  function remove(e) {
     e.stopPropagation(); // Prevents the click from reaching the Link
      e.preventDefault();  // Optional: prevents default anchor behavior, extra safety
    dispach({
      type: Type.REMOVE_FROM_CART,
      item : {
        id,title,price,description,category,image,rating
      }
    })
  }
  function prevent(e) {
     e.stopPropagation(); // Prevents the click from reaching the Link
     e.preventDefault();  // Optional: prevents default anchor behavior, extra safety
  }
  return (
     <Link to={`/product/${id}`}>
       <div className={`${css.single } ${css.cartSingle }`}>
        <img src={image} alt={`${title} Image`} />
         <div className={css.description}>
            <p>{cart && window.innerWidth <= 600 ? truncate(description,80) : description}</p>
        </div>
            <div className="info">
                    <h1>{truncate(title,100)}</h1>
                    <div className={css.rating}>
                    <Rating
                    emptySymbol={<FaRegStar size={13} color="#ccc" />}
                    fullSymbol={<FaStar size={13} color="#ffd700" />}
                    initialRating={rating?.rate}
                    fractions={2}
                    />
                    <p>{rating?.count} Raters</p>
                    </div>
                    <p>{currency(price)}</p>
                   {cart && <button onClick={remove} className={`${css.button} ${css.remove}`}>Remove from cart</button>}
                    
                    <button onClick={addtocart} className={`${css.button} ${cart == true ? css.none : ''}`}>Add to cart</button>
            </div>
            {cart && (
  <div className={css.amount} onClick={prevent}>
    <IoMdArrowDropup onClick={() =>
      dispach({
        type: Type.INCREMENT_ITEM,
        item: { id }
      })
    } />

    <p>{state.basket.find(item => item.id === id)?.amount || 1}</p>

    <IoMdArrowDropdown onClick={() =>
      dispach({
        type: Type.DECREMENT_ITEM,
        item: { id }
      })
    } />
  </div>
)}

      </div>
      </Link>
    
     
  )
}

export default SingleUI
