import React from 'react'
import css from './Products.module.css'
import {truncate} from '../../../../utils/constants'
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";

function Card({id,title,price,description,category,image,rating}) {
  return (
    <div className={css.card}>
      <img src={image} alt={`${title} Image`} />
      <h1>{truncate(title,30)}</h1>
      <div className="rating">
       <Rating
        emptySymbol={<FaRegStar size={13} color="#ccc" />}
        fullSymbol={<FaStar size={13} color="#ffd700" />}
        initialRating={rating.rate}
        fractions={2}
      />
      </div>
      <p>{price}</p>
      <button>Add to cart</button>
    </div>
  )
}

export default Card
