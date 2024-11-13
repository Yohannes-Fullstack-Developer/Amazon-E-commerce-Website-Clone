import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './Product.module.css'

function ProductCard({Product}) {
  const {image, title, id, rating, price} = Product;
  return (
    <div className={`${classes.card__container}`}>
        {/* <a href to change to Link to */}
        <a href="">
            <img src={image} alt="" />
        </a>
        <div>
            <h3>{title}</h3>
                <div className={classes.rating}>
                  {/* rating */}
                  <Rating value={rating.rate} precision={0.1}/>
                  {/* count of rating */}
                  <small>{rating.count}</small>
               </div>
            <div>
                {/* price */}  
                <CurrencyFormat amount={price}/>      
            </div>

            <button className={classes.button}>
              Add to Cart
            </button>

        </div>

    </div>
  )
}

export default ProductCard
// Render to product.jsx 


