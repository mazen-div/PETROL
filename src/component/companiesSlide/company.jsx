import React, { useRef, useState } from "react";
import { Fade } from 'react-reveal';
import './company.css'
// Import Swiper React components
// Import Swiper styles
import "swiper/css/pagination";


// import required modules
import { Grid,Pagination } from "swiper";
import suit from './suit.png'
import comp1 from './comp1.png'
import comp7 from './comp7.png'
import comp3 from './comp3.png'
import comp4 from './comp4.png'
import comp6 from './comp6.png'
import comp5 from './comp5.png'
import contex from './contex.png'
import chev from './chev.png'
import covim from './covim.png'
import hynd from './hynd.png'
import petros from './petros.png'
import eurologo from './eurologo.png'

import iran from './iran.jpg'
import kia from  './kia.jpg'
import toyota from './toyota.jpg'
import peug from './peug.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Navigation } from "swiper";
const Company = () => {

  return (
   <>
  <Swiper
    
       breakpoints={{
         "@0.00": {
           slidesPerView: 1,
           spaceBetween: 10,
         },
         "@0.75": {
           slidesPerView: 2,
           spaceBetween: 20,
         },
         "@1.00": {
           slidesPerView: 3,
           spaceBetween: 40,
         },
         "@1.50": {
           slidesPerView: 4,
           spaceBetween: 50,
         },
       }}
   
       spaceBetween={10}
       loop={true}
       centeredSlides={true}
       autoplay={{
         delay: 2200,
         disableOnInteraction: false,
       }}
       pagination={{
         clickable: true,
       }}
       modules={[Autoplay, Pagination, Navigation]}
      
          style={{ height: "100%", paddingBottom: "80px"}}
          className="mySwiper container  carSlide"

       
        >
          <SwiperSlide className='company-slide'>
            <img src={covim} alt=""/>
            <p>Covim</p>



          </SwiperSlide>
          <SwiperSlide className='company-slide'>
            <img src={contex} alt=""/>
            <p>Contex</p>



          </SwiperSlide>
          <SwiperSlide className='company-slide' >
          <img src={comp5} alt=""/>
            <p>Adnoc</p>

          </SwiperSlide>
          <SwiperSlide className='company-slide' >
          <img src={petros} alt=""/>
            <p>petros</p>

          </SwiperSlide>
          <SwiperSlide className='company-slide' >
          <img src={comp6} alt=""/>
            <p>Lion</p>

          </SwiperSlide>

          <SwiperSlide className='company-slide' >
          <img src={eurologo} alt=""/>
            <p>Euro 10</p>

          </SwiperSlide>

     
        
          </Swiper>

          <div className="suitableSection ">
            <div className="suitable-rightSide">
              <Fade right delay="1100">
         <img src={suit} alt="" />
         </Fade>
            </div>
            <div className="suitable-leftSide">
              <Fade left delay="1400">
                <h2 style={{color:"#ef7601",fontWeight:"900"
                ,textTransform:"capitalize",
                marginBottom:"20px"
                }} >
                Suitable for a variety of cars
                </h2>
                </Fade>
                <Fade bottom delay="1500">
                <p style={{  marginBottom:"30px"}}>
                Euro 10 international is the fastest growing group of engine oil companies in Cairo Middle East whereas our activities are focused on Petroleum Products and espresso Coffee in Egypt.
During the past few years, the worldwide distribution network was expanded to make sure global availability of our products.

                </p>
                </Fade>
                <Swiper
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
          
              spaceBetween={20}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
             
                 style={{ height: "100%", paddingBottom: "80px" }}
                 className="mySwiper container carSlide"
         
        >
          <SwiperSlide className='suit-slide'>
          <img src={kia} alt=""/>


          </SwiperSlide>
          <SwiperSlide className='suit-slide'>
          <img src={peug} alt=""/>



          </SwiperSlide>
          <SwiperSlide className='suit-slide' >
          <img src={toyota} alt=""/>

          </SwiperSlide>

          <SwiperSlide className='suit-slide' >
          <img src={chev} id="soraaa" alt=""/>

          </SwiperSlide>

          <SwiperSlide className='suit-slide' >
          <img src={hynd}id="soraaa" alt=""/>

          </SwiperSlide>
        
          
     

     
        
          </Swiper>
                </div>
          </div>
   
   </>
  )
}

export default Company;