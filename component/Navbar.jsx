import React, { useState ,useEffect} from 'react'
import "./navbar.css"
import {Link} from 'react-router-dom'
import logogded1 from './logogded1.png'
import eurologo2 from './eurologo2.png'

import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import {BiPhoneCall} from 'react-icons/bi'
import {HiOutlineMail} from 'react-icons/hi'
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle,AiFillInstagram} from 'react-icons/ai'
import BlackHead from './blackheader/BlackHead'
const Menu = () => (  
 
  <>
    <p><Link to='/' className='liks'>Home</Link></p>

    <div className="dropdown">
    <p  className="dropbtnn" ><Link to='/products' className='liks' style={{textDecoration:"none"}}>Petrol Products</Link></p>
    {/* <div className="dropdown-content">
      <Link to="/filterproduct">Engine oil</Link>
      <Link to="/filterproduct">Car gear oil</Link>

      <Link to="/filterproduct">Maine oil</Link>

      <Link href="/filterproduct">Industrial oil</Link>

      <Link href="/filterproduct">Grease</Link>
      <Link href="/filterproduct">Antifreeze and anti-boling</Link>

    </div> */}
  </div> 
    <p><Link to='/coffee' className='liks'>Espresso Coffee</Link></p>
    <p><Link to='/aboutus' className='liks'>About Us</Link></p>
    <p><Link to='/contactus' className='liks'>Contact Us</Link></p>
  </>
)

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const [toggleMenu, setToggleMenu] = useState(false)
  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navbarStyle = {
    backgroundColor: scrollPosition > 0 ? '#fff' : 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'sticky',
    top: '0',
    zIndex: '999',
  };
  
 
  
  return (
    <>
       <div className="heroHeader ">
    <div className="mail">
    <span><BiPhoneCall size={"24px"} style={{marginRight:"5px"}}/> <a href="tel:+201111495011" id='mail'> +201111495011</a> </span> 
        <span><HiOutlineMail size={"23px"} style={{marginRight:"5px"}}/> <a href="mailto:info@euro10int.com" id='mail'>info@Euro10int.com</a></span>
    </div>
    <div className="socialIcons">
     
    <span>  <a href='https://www.facebook.com/'><FaFacebook  /> </a></span>
    <span>  <a href='https://www.facebook.com/' >  <AiFillTwitterCircle /> </a></span>
    <span>  <a href='https://www.facebook.com/' ><AiFillInstagram /> </a></span>

      
    </div>
       </div>
    <div className="gpt3__navbar  navShadow" style={navbarStyle} >
        
      <div className="gpt3__navbar-links ">
        <div className="gpt3__navbar-links_logo">
          <img src={logogded1} alt="GPT3 Logo" />          <img src={eurologo2} id='sora' alt="GPT3 Logo" />

        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
        <div className="gpt3__navbar-wrapper">

       
        
          <div className="gpt3__navbar-menu" >
            {toggleMenu
              ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
              : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu &&
              <div className="gpt3__navbar-menu_container " >
                  <Menu />
                <div className="gpt3__navbar-menu_container-links-sign">
                  <button type='button'>Sign up</button>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar