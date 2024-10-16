import React from 'react'
import './MotarIns1.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const MotarIns1 = () => {
  return (
    <>
    <h1 className='text-center motar-ins1-content3'>MOTOR INSURANCE</h1>
    <Container>
      <Row>
        <Col sm="12" md="4" lg="4"><div className='motar-ins1-content1'></div></Col>
        <Col sm="12" md="7" lg="8"><p className='motar-ins1-content2 '>Auto insurance can help pay claims if you injure or damage someone else's property in a car accident, help pay for accident-related repairs on your vehicle, or repair or replace your vehicle if stolen, vandalised, or damaged by a natural disaster.
        Instead of paying out of pocket for auto accidents and damage, people pay annual premiums to an auto insurance company. The company then pays all or most of the covered costs associated with an auto accident or other vehicle damage.
        If you have a leased vehicle or borrowed money to buy a car, your lender or leasing dealership will likely require you to carry auto insurance. As with homeowners insurance, the lender may purchase insurance for you if necessary.</p>
        <Link to='/vite-project/MotorIns1'><Button className='btn2'>next→</Button></Link>
        </Col>
         </Row>
    </Container>
    
    </>
  )
}

export default MotarIns1
