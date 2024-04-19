/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigateByUrl=useNavigate()

  return (
   <>
   <Row className='d-flex justify-content-center align-item-center mt-5'>
    <Col lg={1}></Col>
    <Col lg={5}>
      <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
      <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, reprehenderit maiores nemo dolore est animi odit ducimus! Cum laudantium at quae exercitationem eaque quos, quaerat quisquam. Consequatur magnam natus vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ducimus, consequuntur laborum exercitationem nisi adipisci asperiores, quis voluptatum ratione tempore minus sit culpa alias nulla soluta? Molestias sunt et incidunt?</p>
      <button onClick={()=>navigateByUrl('/home')} className='btn btn-warning mt-4'>Get Started <i class="fa-solid fa-arrow-right"></i></button>
    </Col>
    <Col lg={1}></Col>
    <Col lg={5}>
      <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="img" style={{height:'80%'}}/>
    </Col>
   </Row>
   <div className="container d-flex justify-content-center align-item-center mt-2 flex-column">
      <h3>Features</h3>
      <div className="d-flex justify-content-center align-item-center mt-5">
      <Card className='p-4 m-3' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:"100%",height:"300px"}} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title className='text-center'>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-4 m-3' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:"100%",height:"300px"}} src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title className='text-center'>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-4 m-3' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:"100%",height:"300px"}} src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title className='text-center'>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
      </Card.Body>
    </Card>

      </div>
  </div>

  <Row className='container d-flex justify-content-center align-items-center border border-1 border-light m-5'>
    <Col lg={6}>
      <div>
        <h4 className='text-warning mx-5 mt-4 fs-3'>Simple, Fast, and Powerful</h4>
        <p style={{textAlign:'justify',lineHeight:'20px'}} className='ms-5 mt-4'><span className='text-white fw-bold fs-5'>Play Everything : </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum accusantium iusto consequatur laudantium esse aliquid beatae, omnis quidem.</p>
      </div>
      <div>
        <p style={{textAlign:'justify',lineHeight:'20px'}} className='ms-5'><span className='text-white fw-bold fs-5'>Play Everything : </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum accusantium iusto consequatur laudantium esse aliquid beatae, omnis quidem.</p>
      </div>
      <div>
        <p style={{textAlign:'justify',lineHeight:'20px'}} className='ms-5 mb-5'><span className='text-white fw-bold fs-5'>Play Everything : </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum accusantium iusto consequatur laudantium esse aliquid beatae, omnis quidem.</p>
      </div>
    </Col>
    <Col lg={6}>
    <iframe className='ms-5 me-5' width="480" height="275" src="https://www.youtube.com/embed/OGwyhjk_fhE" frameborder="0" allowfullscreen></iframe>
  </Col>
  
  </Row>
   </>
  )
}

export default LandingPage