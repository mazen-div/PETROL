import React from "react";
import "../productDetails/details.css";
import { useLocation, useParams } from 'react-router-dom';
import { useEffect,useState } from "react";
 import Filtering from "../productFilter/filterMethod";
const CoffeeDetails = () => {

  const location = useLocation();
  console.log(location.state)
  const [data, setdata] = useState({})
  useEffect(() => {
    setdata(location.state['data'])
  

  }, [])
  return (

    <div>
      

      <div className="productDetails container">
        <div className="productLeft container">
          <h1 style={{color:"#0773df" ,fontWeight:"bold"}}>{data.name}</h1>
          <p style={{fontWeight:"bold",fontSize:"20px"}}>
          latte coffee
          </p>
          <p style={{fontWeight:"",fontSize:"18px"}}> <span style={{fontWeight:"bold" ,color:"#0773df"}}>Description :  </span> 
          
     {data.des}</p>
          <p style={{marginBottom:"50px"}}>
           
          </p>
          
    
        </div>
        <div className="productRight">
          <img src={data.image}  alt="" className="ProductDetails_Img" />
        </div>
      </div>
    
    </div>
    
  );
};

export default CoffeeDetails;
