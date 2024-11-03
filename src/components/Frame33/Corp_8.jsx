import React from 'react'
import './Corp_8.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const Corp_8 = () => {
  return (
    <div>
      <Container>
      <Row>
        <Col sm="12" md="7" lg="9">
        <h1 className='text-center health-ins1-content3'>ENGINEERING INSURANCES</h1>
        <p className='motar-ins1-content2'>Engineering insurance is a specialized type of coverage designed to protect businesses and professionals in the engineering sector against various risks associated with construction and engineering projects. This insurance typically encompasses several policies, including contractor's all-risk insurance, professional indemnity insurance, and machinery breakdown insurance.

Contractor's all-risk insurance covers physical loss or damage to construction works, materials, and equipment during the project, providing financial protection against unforeseen events like accidents, theft, or natural disasters.</p>
        
        
        {/*<Button className='btn2'>Explore →</Button>*/}
        </Col>
        <Col sm="12" md="5" lg="3"><div className='health-ins1-content1'><img src="engineeringinsurance.png" className='health-img'/> </div></Col>
         </Row>
    </Container>
    </div>
  )
}

export default Corp_8
