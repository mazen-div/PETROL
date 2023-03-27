import React, { useEffect,useState } from 'react'
import './filterProduct.css'
import{Link} from 'react-router-dom'
import Filtering from './filterMethod'
import {useNavigate} from 'react-router-dom'

const FilterProPetro = () => {
 
    useEffect(() => {
        Filtering();
       
      }, []);
//   const{products,ispending,error,setproducts}=FetchData(URL);
    const navigate = useNavigate();

    const productDetails = () => {
      // 👇️ navigate programmatically
      navigate('/productdetails');
    };
    Filtering();

  

  return (
    <div>
     
    <section className="Products ">
        <p>Product</p>
        <p>
        whereas our activities are focused on Petroleum Products and espresso Coffee in Egypt.

</p>
      </section>


    <div className="btns container">
        <button type="button" data-menu="all">All</button>
        <button type="button" data-menu="Gasoline">Gasoline</button>
        <button type="button" data-menu="Diesel">Diesel</button>
        <button type="button" data-menu="Hydraulic">Hydraulic</button>
        <button type="button" data-menu="Transmission">Transmission</button>
    </div>
    <div className="allwrps">
        <Link to="/productdetailsPetro" data-menu="data" className="single news-Slide-up" id="cardHover" >
            <img src="https://i.ibb.co/4YPJ9Zj/petro1.png"  alt="" className='singleCard'/>
            <div className='newsCaption'>
    <h2 className='newsCaption-title'> Petro S</h2>
    <p className='newsCaption-content'>
    Petro S GOLD SAE 5W40 API SN

</p>
  </div>
        </Link>


        
    </div>

    </div>
  )
}

export default FilterProPetro;