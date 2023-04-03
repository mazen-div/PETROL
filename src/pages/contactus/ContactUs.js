import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import './contactus.css';
import { FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillGeoAltFill } from 'react-icons/bs';

import { BsBuilding } from 'react-icons/bs';
import { BsPersonSquare } from 'react-icons/bs';

const ContactUs = () => {
    return (
      <div className='contactpage'>
      <section className="Productscontact ">
      <p>Contact Us</p>
      <p>
    Get in Touch With Euro 10 international
      </p>
    </section>
    <Container>
   
      <Row>
        <Col sm={6}>
          <Alert variant="success text-center" >
            <Alert.Heading>How To Reach to Euro 10</Alert.Heading>
          </Alert>
          
          <Alert variant="dark"id='ale' >
          <span id="faceid"> <FaFacebook/> <a href='https://www.facebook.com/'>    Our Facebook Page </a></span><hr/>
          <span id="faceid"> <HiOutlineMail/>  <a href="mailto:info@euro10int.com">     info@euro10int.com </a></span><hr/>

          <span id="faceid"> <BsBuilding/> <a href="tel:+201111495011">Office: +201111495011</a> </span><br></br>
          <span id="faceid"> <BsBuilding/> <a href="tel:+201151555865">Office: +201151555865</a> </span><hr/>

          <span id="faceid"> <BsFillGeoAltFill/>  <a href="#" id='loca'> 10 Alsafwa tower, Samera Mousa St, 5th dist, Oboor City Cairo, Egypt. </a></span>

          </Alert>

        </Col>
        <Col sm={6}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.7895611439803!2d31.472428014238716!3d30.219882481818814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14580533570535ff%3A0xcd031bb8b15a5f53!2z2LPZhdmK2LHYqSDZhdmI2LPZiiwgQWwgT2JvdXIsIEFsIFFhbHl1YmlhIEdvdmVybm9yYXRl!5e1!3m2!1sen!2seg!4v1679848884168!5m2!1sen!2seg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </Col>
      </Row><hr/>
      <Row>
        <Col sm={6}>
          <Alert variant="danger  "id='ales' >
          <span id="faceid"> <BsPersonSquare/> <a href="tel:+201103830086">Sales: +201103830086</a> </span><br></br>
          <span id="faceid"> <BsPersonSquare/> <a href="tel:+201111995801">Sales: +201111995801</a> </span><br></br>
          <span id="faceid"> <BsPersonSquare/> <a href="tel:+201004824991">Sales: +201004824991</a> </span><br></br>
          </Alert>

        </Col>
        <Col sm={6}>
        <Alert variant="success"id='ales' >
          <span id="faceid"> <BsPersonSquare/> <a href="https://web.whatsapp.com/send?phone=+201103830089&text=" >Whatsapp: +201103830089</a> </span><hr/>
          <span id="faceid"> <BsPersonSquare/> <a href="https://web.whatsapp.com/send?phone=+201103830087&text=">Whatsapp: +201103830087</a> </span><br/>
          </Alert>
          </Col>
      </Row><br/>
      <Row>
      <img src={"https://i.ibb.co/HGxwkYP/back3.jpg"} id='contactimg'></img>
      </Row>
      </Container>
</div>

  );
}


export default ContactUs;
