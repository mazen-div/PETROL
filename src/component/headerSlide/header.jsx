import React from "react";
import { Fade } from "react-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../imgs/img1.png";
import img2 from "../../imgs/img2.png";
import img3 from "../../imgs/img3.png";
import img4 from "../../imgs/img4.png";
import icon1 from "../../imgs/icon1.png";
import icon2 from "../../imgs/icon2.png";
import icon4 from "../../imgs/icon4.png";
import contex from "../../imgs/contex.png";
import petros from "../../imgs/petros.png";

import "swiper/css";
import "swiper/css/navigation";

import "./header.css";
import Navbar from "../Navbar";
// import required modules
import { Navigation } from "swiper";
import Search from "./search";
import SwiperCore, { Autoplay } from "swiper";
import Company from "../companiesSlide/company";
import About from "../about/about";
import BlackHead from "../blackheader/BlackHead";
import GalleryPage from "../gallery/GalleryPage";

const Head = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        className="mySwiper "
      >
        <Navbar />

        <SwiperSlide id="slide1">
          <div className="slideContainer">
            <div className="leftSide">
              
            <Fade left delay="1200">
                  <img src={contex} id="logobr" className="icon1" alt="" />
                  <p>
                    Contex
                    <br />
                    Lubricants
                  </p>
             </Fade>
            
            </div>
            <div className="rightSide">   <Fade right delay="1200">

              <img src={img1} className="img1" alt="" />
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="slide2">
          <div className="slideContainer">
            <div className="leftSide">
            <Fade left delay="1200">
                  <img src={contex} id="logobr2" className="icon2" alt="" />
                  <p>
                    Contex
                    <br />
                    DEX III
                  </p>
             </Fade>
            </div>
            <div className="rightSide">
            <Fade right delay="1200">
              <img src={img2} className="img2" alt="" />
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="slide3">
          <div className="slideContainer">
            <div className="leftSide">
            <Fade left delay="1200">
            <img src={contex} id="logobr2" className="icon3" alt="" />

                  <p>
                    Contex
                    <br />
                    Supreme
                  </p>
             </Fade>
            </div>
            <div className="rightSide">
            <Fade right delay="1200">

              <img src={img3} className="img3" alt="" />
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="slide4">
          <div className="slideContainer">
            <div className="leftSide">
            <Fade left delay="1200">

                  <img src={petros} id="logobr2" className="icon4" alt="" />

                  <p>
                    Petro S
                    <br />
                    SUPER
                  </p>
           </Fade>
            </div>
            <div className="rightSide">
            <Fade right delay="1200">

              <img src={img4} className="img4" alt="" />
              </Fade>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
     <h1 id="tit">Our Brands ...</h1>
      <Company/>
      <About/>
      <GalleryPage/>
    </div>
  );
};

export default Head;
