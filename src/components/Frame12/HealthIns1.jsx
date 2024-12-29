import React from 'react'
import './HealthIns1.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const HealthIns1 = () => {
  return (
    <>
     <div className='health-content'>
      <Row>
        <Col sm="12" md="7" lg="8">
        <h1 className='text-center health-ins1-content3'>HEALTH INSURANCE</h1>
        <Col sm="12" md="5" lg="3"><div className='health-ins1-content4'><img src ="healthins.jpg" className='health-img'/> </div></Col>
        <p className='motar-ins1-content2'>Health insurance is a crucial form of coverage that helps individuals manage the cost of medical care. It typically covers a range of services, including hospital visits, surgeries, preventive care, and prescription drugs. By spreading the financial risk among a large group of people, health insurance enables individuals to access necessary healthcare without facing overwhelming expenses. Various plans are available, each with different premium rates, coverage limits, and provider networks, allowing individuals to choose options that best suit their healthcare needs and financial situations.</p>
        {/*<Link to='/HealthIns1'><Button className='btn2'>Explore</Button></Link>*/}
        </Col>
        <Col sm="12" md="5" lg="3"><div className='health-ins1-content1'><img src ="healthins.jpg" className='health-img'/> </div></Col>
         </Row>
    </div>
    </>
  )
}

export default HealthIns1
