import React from 'react'
import css from './Products.module.css'
import {truncate} from '../../../../utils/constants'
import {currency} from '../../../../utils/constants'
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../../Context';
import { Type } from '../../../../utils/action.type';

function Card({id,title,price,description,category,image,rating,notextra,order}) {
  const[{basket},dispach]=useContext(Context)
  const itemInBasket = basket?.find(item => item.id === id);
  const itemCount =itemInBasket?.amount || order;

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
      <Link to={`/product/${id}`}>
       <div className={`${css.card} ${notextra ? css.notextra : ''}`}>
        <img src={image} alt={`${title} Image`} />
        <h1>{truncate(title,30)}</h1>
        {
          notextra ? `${itemCount} items` : <div className={css.rating}>
        <Rating
          emptySymbol={<FaRegStar size={13} color="#ccc" />}
          fullSymbol={<FaStar size={13} color="#ffd700" />}
          initialRating={rating?.rate}
          fractions={2}
        />
        <p>{rating?.count} Raters</p>
        </div>
        }
        
        <p>{currency(price)}</p>

        <button className={`${notextra ? css.none : ''}`} onClick={addtocart}>Add to cart</button>
      </div>
      </Link>
    
     
  )
}

export default Card
