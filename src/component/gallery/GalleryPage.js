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
          src={"https://i.ibb.co/v12dQTd/photo-5861514896359930723-y.jpg"}
          alt="First slide"
        />
      
      </Carousel.Item>

          
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-40"
          src={"https://i.ibb.co/hVjR4HL/photo-5861514896359930724-x.jpg"}
          alt="Second slide"
        />
     
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-40"
          src="https://i.ibb.co/x3mNyMp/photo-5861514896359930725-x-1.jpg"
          alt="Third slide"
        />
     
      </Carousel.Item>


      <Carousel.Item interval={2000}>
        <img
          className="d-block w-40"
          src={"https://i.ibb.co/V9M9wv1/photo-5861514896359930726-x.jpg"}
          alt="Fourth slide"
        />
       
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-40"
          src={"https://i.ibb.co/x3mNyMp/photo-5861514896359930725-x-1.jpg"}
          alt="Fifth slide"
        />
       
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-40"
          src={"https://i.ibb.co/LSMgWP2/photo-5861514896359930727-x.jpg"}
          alt="sixth slide"
        />
       
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-40"
          src={"https://i.ibb.co/Jp8JyXJ/photo-5861514896359930728-x.jpg"}
          alt="sixth slide"
        />
       
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-40"
          src={"https://i.ibb.co/W2zRFS3/photo-5861514896359930729-x.jpg"}
          alt="sixth slide"
        />
       
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-40"
          src={"https://i.ibb.co/Y77bfgW/photo-5861514896359930730-x.jpg"}
          alt="sixth slide"
        />
       
      </Carousel.Item>


      <Carousel.Item interval={2000}>
        <img
          className="d-block w-40"
          src={"https://i.ibb.co/nQ778W6/photo-5861514896359930731-x.jpg"}
          alt="sixth slide"
        />
       
      </Carousel.Item>


      
    </Carousel></div>
  );
}

export default GalleryPage;
