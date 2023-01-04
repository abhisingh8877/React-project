import React from 'react'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/fullstack.jpg";
import img2 from "../assets/5998384.jpg";
const Myservices = () => {
  return (
    <div className="services">
     <Carousel infiniteloop autoPlay showStatus={false} showArrows={false}
     interval={1000} showThumbs={false}
     >
        <div>
            <img src={img1} alt="Item" />
            <p className="legend">Full Stack</p>
        </div>
        <div>
            <img src={img2} alt="Item3" />
            <p className="legend">peer-to-peer support</p>
        </div>
     </Carousel>
    </div>
  )
}

export default Myservices
