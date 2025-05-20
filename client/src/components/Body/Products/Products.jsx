import React, { useEffect } from 'react'
import css from './Products.module.css'
import { useState } from 'react'
import axios from 'axios'
import Card from './Card'

function Products() {
    const[products,setProducts]=useState(null)
    useEffect(()=>{
            (async () => {
                try {
                    const res = await axios.get('https://fakestoreapi.com/products')
                    setProducts(res.data)  
                } catch (error) {
                    console.log(`Unable to fetch products ${error}`)
                }
            })()
    },[])
  return (
    <div className={css.products}>
      {
        products?.map(item=> {
            return <Card key={item.id} {...item}/>
        })
      }
    </div>
  )
}

export default Products
