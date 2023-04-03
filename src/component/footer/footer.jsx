import React from 'react'
import './footer.css'
import logo from './logo.png'
import eurologo from './eurologo.png'
import eurologo2 from './eurologo2.png'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BiPhoneCall} from 'react-icons/bi'
import { AiOutlineMail} from 'react-icons/ai'

const Footer = () => {

  return (
   <div className='footer'>
   <div className="footerContent ">
   <img id="logoz" src={eurologo} alt="" />
<p>Euro 10 international is the fastest growing group of engine oil companies in Cairo Middle East  </p>
<p>whereas our activities are focused on Petroleum Products and espresso Coffee in Egypt.</p>
<div className="contactIcons-footer">
  <span>  <HiOutlineLocationMarker style={{marginRight:"1px",fontSize:"30px"}} className="footerIcon"/> Oboor City Cairo, Egypt.</span>
  <span> <BiPhoneCall style={{marginRight:"1px",fontSize:"30px"}} className="footerIcon"/> <a href="tel:+201111495011" style={{textDecoration:"none",color:"#fff"}}>+201111495011 & +201151555865</a></span>
  <span> <AiOutlineMail style={{marginRight:"5px",fontSize:"30px"}} className="footerIcon"/> 
  <a href="mailto:info@euro10int.com" style={{textDecoration:"none",color:"#fff"}}>info@euro10int.com</a>
</span>
</div>
   </div>
   
   <div className="copyRight">
    <p>Euro10int - Copyright © 2023 - All rights reserved </p>
   </div>
   </div>
  )
}

export default Footer;