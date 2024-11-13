import React, { useEffect, useState} from 'react'
import axios from 'axios'
import ProductCard from './ProductCard.jsx';
import classes from './Product.module.css'

function Product() {
   const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((res)=> {
      // console.log(res)
      setProducts(res.data)
    }) 
    .catch((err) => {
      console.log(err)
    })
  }, [setProducts])

  return (
    <section className={classes.products_container}>
      {
        products.map((singgleProduct) => {
          return <ProductCard Product={singgleProduct} key={singgleProduct.id}/>
        })
      }
      
    </section>
  )
}

export default Product
