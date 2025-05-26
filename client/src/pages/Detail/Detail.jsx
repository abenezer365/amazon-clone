import React from 'react'
import axios from 'axios'
import { HashLoader } from 'react-spinners'
import { useEffect,useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import css from './Detail.module.css'
import { FaAngleRight } from "react-icons/fa6"
import Card from '../../components/Body/Products/Card'
import SingleUI from './SingleUI'
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import {truncate} from '../../../utils/constants'
import Layout from '../Layout'
function Detail() {
    const {singleID } = useParams()
    const[product,setProduct]=useState(null)
    const[loading, setLoading] = useState(true)
     useEffect(()=>{
            (async () => {
                try {
                    const res = await axios.get(`https://fakestoreapi.com/products/${singleID}`)
                    setProduct(res.data) 
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
    <>
    <Layout >

         <div className={css.navigation}>
            <div className={css.path}>
              <FaHome />
              <p><Link to="/">Home</Link></p>
              <FaAngleRight />
              <BiCategory />
              <p><Link to={`/category/${product?.category}`}>{product?.category}</Link></p>
              <FaAngleRight />
              <p><Link to="#">{truncate(product?.title,30)}</Link></p>
            </div>
              <hr />
        </div>
            <div className={css.detail}>
            {
              <SingleUI {...product}/>
            }
            </div>
            </Layout>
    </>
  )
}

export default Detail



     
  
   