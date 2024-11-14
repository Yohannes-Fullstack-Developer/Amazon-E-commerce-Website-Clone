import React, { useEffect } from 'react'
import classes from './Results.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {productUrl} from '../../Api/endPoints'
import { useState } from 'react'
import ProductCard from '../../Components/Product/ProductCard'



function Results() {
  const [results, setResults] = useState([]);
  const {categoryName} = useParams()
  console.log(categoryName)
  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`)
  .then((res) => {
    console.log(res)
    setResults(res.data)
  }) .catch((err) => {
    console.log(err)
  })

  }, [])

  
  return (
    <LayOut>
       <section>
           <h1 style={{padding: "25px"}}>Results</h1>
           <p style={{padding: "25px"}}>Category /{categoryName}</p>
             <div className={classes.products_container}>
              {results?.map((Product) => (
                <ProductCard 
                  key={Product.id}
                  Product={Product}
                  />
              ))}

             </div>
       </section>
        
    </LayOut>
   
  )
}

export default Results