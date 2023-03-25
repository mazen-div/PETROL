import React from 'react'
import './footer.css'
import logo from './logo.png'
import {GrLocation} from 'react-icons/gr'
import {BiPhoneCall} from 'react-icons/bi'
import { AiOutlineMail} from 'react-icons/ai'

const Footer = () => {

  return (
   <div className='footer'>
   <div className="footerContent ">
<img src={logo} alt="" />
<p>Euro 10 international is the fastest growing group of engine oil companies in Cairo Middle East  </p>
<p>whereas our activities are focused on Petroleum Products and espresso Coffee in Egypt.</p>
<div className="contactIcons-footer">
  <span>  <GrLocation style={{marginRight:"10px",fontSize:"30px",color:"black"}}/> Dargahan, Qeshm Island, Iran</span>
  <span> <BiPhoneCall style={{marginRight:"10px",fontSize:"30px",color:"black"}}/> <a href="tel:07635262268" style={{textDecoration:"none",color:"black"}}>07635262268</a></span>
  <span> <AiOutlineMail style={{marginRight:"10px",fontSize:"30px",color:"black"}}/> 
  <a href="mailto:info@noroozqeshm.ir" style={{textDecoration:"none",color:"black"}}>info@noroozqeshm.ir</a>
</span>
</div>
   </div>
   
   <div className="copyRight">
    <p>noroozqeshm.ir - Copyright © 2023 - All rights reserved </p>
   </div>
   </div>
  )
}

export default Footer;