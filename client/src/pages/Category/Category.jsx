import React from 'react'
import axios from 'axios'
import { HashLoader } from 'react-spinners'
import { useEffect,useState } from 'react'
import Card from '../../components/Body/Products/Card'
import {Link, useParams} from 'react-router-dom'
import css from './Category.module.css'
import { FaAngleRight } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import Layout from '../Layout'
function Category() {
    const { name } = useParams()
     const[products,setProducts]=useState(null)
    const[loading, setLoading] = useState(true)
    useEffect(()=>{
            (async () => {
                try {
                    const res = await axios.get(`https://fakestoreapi.com/products/category/${name}`)
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
    <>
    <Layout>
      <div className={css.navigation}>
        <div className={css.path}>
          <FaHome />
          <p><Link to="/">Home</Link></p>
          <FaAngleRight />
          <BiCategory />
          <p><Link to="#">{name}</Link></p>
        </div>
          <hr />
        </div>
      <div className={css.category}>
        {
          products?.map(item => <Card key={item.id} {...item} />)
        }
      </div>
        </Layout>
    </>
  )
}

export default Category
