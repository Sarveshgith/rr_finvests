import React from 'react'
import './Corp_7.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const Corp_7 = () => {
  return (
    <div>
      <Container>
      <Row>
        <Col sm="12" md="4" lg="4"><div className='motar-ins1-content1'><img src="generalinsurance.png"/></div></Col>
        <Col sm="12" md="7" lg="8">
        <h1 className='text-center motar-ins1-content3'>GENERAL INSURANCES</h1>
        <p className='motar-ins1-content2'>General insurance is a broad category of insurance coverage that protects individuals and businesses against financial losses from unforeseen events, excluding life insurance. It encompasses various types of policies, including auto insurance, homeowners insurance, travel insurance, and commercial insurance, providing protection against risks such as theft, damage, liability, and accidents.

General insurance policies typically offer coverage for specific events or perils and can be customized based on individual needs. For example, auto insurance covers damages to vehicles and liability for injuries caused in accidents, while homeowners insurance protects against property damage and liability claims related to one's home. </p>
        {/*<Button className='btn2'>Explore →</Button>*/}
        </Col>
         </Row>
    </Container>
    </div>
  )
}

export default Corp_7
