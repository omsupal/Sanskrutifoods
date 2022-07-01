import React from 'react'
import { Carousel } from 'react-bootstrap';
import image1 from './../assets/slider1.png';
import image2 from './../assets/slider2.jpg';
import image3 from './../assets/slider3.jpg';

const Carouselcontainer = () => {
  return (
    <div>
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carouselcontainer;
