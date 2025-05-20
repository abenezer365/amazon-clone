import React from 'react'
import css from './Category.module.css'
import electronicsIMG from '../../../assets/img/electronics.png'
import fashionIMG from '../../../assets/img/clothing.png'
import jewleryIMG from '../../../assets/img/jewlery.png'
import clothingsIMG from '../../../assets/img/fashion.png'

function Category() {
  return (
    <div className={`${css.category}`}>
      <div className={`${css.item} ${css.electronics}`}>
        <span>Electronics</span>
        <img src={electronicsIMG} alt="Electronics" />
        <p>Shop now!</p>
      </div>
      <div className={`${css.item} ${css.fashion}`}>
        <span>Discover Fashion Trends</span>
        <img src={fashionIMG} alt="Fashion" />
        <p>Shop now!</p>
      </div>
      <div className={`${css.item} ${css.clothing}`}>
        <span>Men's Clothing</span>
        <img src={clothingsIMG} alt="Clothing" />
        <p>Shop now!</p>
      </div>
      <div className={`${css.item} ${css.jewlery}`}>
        <span>Jewelry</span>
        <img src={jewleryIMG} alt="Jewelry" />
        <p>Shop now!</p>
      </div>
    </div>
  )
}

export default Category
