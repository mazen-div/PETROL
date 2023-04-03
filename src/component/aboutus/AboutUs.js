import React from 'react';
import './aboutus.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

const AboutUs = () => {
    return (
        <div className='aboutus'>
             <section className="Productss ">
      <p>About Us</p>
      <p>
        Know about Euro 10 international
      </p>
    </section>
    <Container >
      <Row>
        <Col sm={6}>
          
        <div id="containerAnimation" class="container-bottom-to-up" >
             <p class="top-to-bottom">
             <Alert variant="secondary">
      <Alert.Heading>Our Vision ,</Alert.Heading>
      <p>
      being one of the leading and top engine oil companies in the industry and focusing on customer satisfaction with product and service quality has started its activities in 2020.
      </p>
      <hr>
      </hr>
      <Alert.Heading>Us ,</Alert.Heading>

      <p>Euro 10 international is the fastest growing group of engine oil companies in Cairo Middle East whereas our activities are focused on Petroleum Products and espresso Coffee in Egypt.
During the past few years, the worldwide distribution network was expanded to make sure global availability of our products.
</p>
      </Alert>
             </p>
              </div>

        </Col>
        <Col sm={6}>
        <div id="containerAnimation" class="container-overFlowVisible" >  
         <img class="left-to-right" src='https://i.ibb.co/VMQnPDC/back3.jpg'></img>
          </div>


        </Col>
      </Row>
      </Container>
        </div>
    );
}

export default AboutUs;
