import React from 'react'
import { useContext } from 'react';
import { Context } from '../../components/Context';
import css from './Cart.module.css'
import SingleUI from '../Detail/SingleUI';
import {currency} from '../../../utils/constants'

function Cart() {
  const[{basket},dispach]=useContext(Context)
  const subtotal = basket?.reduce((acc, item) => acc + item.price, 0);
  const totalItems = basket?.length || 0;
  return (
    <div className={css.cart}>
      <div className={css.items}>

      {basket?.length === 0 ? (<p>Opps! You don't have any item in the cart</p>):(
        basket?.map(item =>
          <SingleUI key={item.id} {...item} cart={true}/>
        )
      )}
      </div>
      <div className={css.checkout}>
        <p>Subtotals ({totalItems} items)</p>
        <p>Price: {currency(subtotal)}</p>
        <div className={css.term}>
        <input type="checkbox" />
        <label>I agree to terms and conditions</label>

        </div>
        <button>Procced to checkout</button>
      </div>
    </div>
  )
}

export default Cart
