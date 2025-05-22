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
  return (
      <Link to={`/${id}`}>
       <div className={`${css.single}`}>
        <img src={image} alt={`${title} Image`} />
         <div className={css.description}>
            <p>{description}</p>
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
                    <button onClick={addtocart} className={`${css.button} ${cart == true ? css.none : ''}`}>Add to cart</button>
            </div>
       
      </div>
      </Link>
    
     
  )
}

export default SingleUI
