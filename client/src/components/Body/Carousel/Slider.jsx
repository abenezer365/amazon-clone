import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import {images} from '../../../assets/Courasel/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import css from './Carousel.module.css'
function Slider() {
  return (
    <>
    <div className={css.container}>
        <Carousel
        className={`${css.carousel}`}
              showArrows={false}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              swipeable={true}
        >
          {
              images.map(item => <img src={item} alt="" />)
          }
        </Carousel>
    </div>
    </>
  )
}

export default Slider
