import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './gallery.css';

import gall1 from "../../imgs/gall1.jpg";


    const GalleryPage = () => {
        return (
          <div className='gallery'>
            <h1> Gallery ...</h1>
    <Carousel>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-40"
          src={gall1}
          alt="First slide"
        />
      
      </Carousel.Item>

          
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-40"
          src={gall1}
          alt="First slide"
        />
     
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-40"
          src="https://i.ibb.co/gDRgvbh/gall1.jpg"
          alt="First slide"
        />
     
      </Carousel.Item>


      <Carousel.Item interval={2000}>
        <img
          className="d-block w-40"
          src={gall1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>


      
    </Carousel></div>
  );
}

export default GalleryPage;
