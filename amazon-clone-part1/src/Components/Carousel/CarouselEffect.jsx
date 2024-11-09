import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import { img } from './Img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import classes from '../Carousel/Carousel.module.css'

const CarouselEffect = () => {
  return (
    <div>
       <Carousel 
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={true}
       >
        {
            img.map((imageItemLink)=> {
                return <img src={imageItemLink} />
            })

        }
        
       </Carousel>
       <div className={classes.hero__img}></div>

    </div>
  )
}

export default CarouselEffect