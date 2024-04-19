/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook,faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



function Footer() {
  return (
    <>
    <Container className='mt-3'>
      <Row>
        <Col>
        <i class="fa-solid fa-video text-warning fa-1x"></i>{' '}
          <span style={{color:'white',fontSize:'20px'}}>Video Player</span>
          <p style={{fontSize:'13px',marginTop:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing<br></br> elit. Tempora dolor aliquid adipisci ratione cum, error possimus quam rem illum veritatis!<br></br> Quas dolorem cum sunt ipsum eveniet. Facere dolores at sed?</p>

        </Col>

 
        <Col className='ms-5'>
        <span style={{color:'white',fontSize:'20px'}}>Links</span>
          <p style={{marginTop:"8px"}}><Link to={'/'}>Landing Page</Link></p>
          <p><Link to={'/home'}>Home Page</Link></p>
          <p><Link to={'/watchHistory'}>Watch History</Link></p>
        </Col>

        <Col>
        <span style={{color:'white',fontSize:'20px'}}>Guides</span>
          <p style={{marginTop:"8px"}}>React</p>
          <p>React bootstrap</p>
          <p>BootsWatch</p>
        </Col>


        <Col>
        <div>
        <span style={{color:'white',fontSize:'16px'}}>Contact Us</span>
            <form action="" style={{ marginTop: '20px' }} className='d-flex'>
              <input type="text" placeholder="Enter your Email ID" style={{ marginRight: '10px', width: '200px' }} />
              <button className="btn btn-warning">Subscribe</button>
            </form>
            <div className='d-flex justify-content-around mt-3 pt-2'>
            <FontAwesomeIcon icon={faInstagram} size='2xl'/>
            <FontAwesomeIcon icon={faFacebook} size='2xl'/>
            <FontAwesomeIcon icon={faTwitter} size='2xl'/>
            <FontAwesomeIcon icon={faLinkedinIn} size='2xl'/>
            </div></div>
        </Col>
        </Row>
    </Container>


    </>
  )}


export default Footer