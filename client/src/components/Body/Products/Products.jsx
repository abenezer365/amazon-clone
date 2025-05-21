import React, { useEffect } from 'react'
import css from './Products.module.css'
import { useState } from 'react'
import axios from 'axios'
import Card from './Card'
import {HashLoader} from 'react-spinners'
function Products() {
    const[products,setProducts]=useState(null)
    const[loading, setLoading] = useState(true)
    useEffect(()=>{
            (async () => {
                try {
                    const res = await axios.get('https://fakestoreapi.com/products')
                    setProducts(res.data)  
                    setLoading(false)
                } catch (error) {
                    console.log(`Unable to fetch products ${error}`)
                    setLoading(false)
                }finally{
                  setLoading(false)
                }
            })()
    },[])
    if(loading){
      return (
        <HashLoader className={css.loader}/>
      )
    }
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
