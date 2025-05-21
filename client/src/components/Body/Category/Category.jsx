import React from 'react'
import css from './Category.module.css'
import electronicsIMG from '../../../assets/img/electronics.png'
import fashionIMG from '../../../assets/img/clothing.png'
import jewleryIMG from '../../../assets/img/jewlery.png'
import clothingsIMG from '../../../assets/img/fashion.png'
import {Link} from 'react-router-dom'
function Category() {
  return (
    <div className={`${css.category}`}>
      <Link to={`/category/electronics`}>
      <div className={`${css.item} ${css.electronics}`}>
        <span>Electronics</span>
        <img src={electronicsIMG} alt="Electronics" />
        <p>Shop now!</p>
      </div>
      
      </Link>
      <Link to={`/category/women's%20clothing`}>
      <div className={`${css.item} ${css.fashion}`}>
        <span>Discover Fashion Trends</span>
        <img src={fashionIMG} alt="Fashion" />
        <p>Shop now!</p>
      </div>
      
      </Link>
      <Link to={`/category/men's%20clothing`}>
      <div className={`${css.item} ${css.clothing}`}>
        <span>Men's Clothing</span>
        <img src={clothingsIMG} alt="Clothing" />
        <p>Shop now!</p>
      </div>
      
      </Link>
      <Link to={`/category/jewelery`}>
      
      <div className={`${css.item} ${css.jewlery}`}>
        <span>Jewelry</span>
        <img src={jewleryIMG} alt="Jewelry" />
        <p>Shop now!</p>
      </div>
      </Link>
    </div>
  )
}

export default Category
