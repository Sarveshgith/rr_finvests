import React from 'react'
import './Corp_1.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Corp_1 = () => {
  return (
    <>
    <div className='motor'>
       <Container> 
      <Row>
      <h1 className='text-center motar-ins1-content4'>FIRE INSURANCE</h1>
        <Col sm="12" md="4" lg="4"><div className='motar-ins1-content1'><img src="fireins.jpg"/></div></Col>
        <Col sm="12" md="7" lg="8">
        <h1 className='text-center motar-ins1-content3'>FIRE INSURANCE</h1>
        <p className='motar-ins1-content2 '>Fire insurance provides essential financial protection against losses caused by fire, covering damages to both the structure and contents within a property, such as furniture, machinery, and inventory. Policies typically include coverage for incidents related to fire, lightning, and explosions, with options for extended coverage to protect against additional risks like floods or earthquakes. However, damages resulting from war, nuclear events, or negligence are usually excluded. In the event of a fire, policyholders must inform the insurance provider, supply evidence of the damage, and follow the claim process to receive compensation. Fire insurance reduces financial strain and offers peace of mind by covering repair or replacement expenses.</p>
        
        {/* <Link to='/Fire_ins2'><Button className='btn2'>Know more →</Button></Link> */}
        </Col>
         </Row>
    </Container>
    
    </div>
    </>
  )
}

export default Corp_1
