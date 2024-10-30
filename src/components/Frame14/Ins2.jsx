import React from 'react'
import './Ins2.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const Ins2 = () => {
  return (
    <>
    <Container>
      <Row>
        <Col sm="12" md="7" lg="9">
        <h1 className='text-center health-ins1-content3'>GENERAL LIABILITY INSURANCES</h1>
        <p className='motar-ins1-content2'>General liability insurance is a type of insurance coverage that protects businesses from claims involving bodily injury, property damage, and personal injury, such as slander or libel. This insurance is essential for businesses of all sizes, as it helps safeguard against potential lawsuits and financial losses resulting from accidents or negligence that may occur during normal operations.

With general liability insurance, businesses can cover legal defense costs, settlements, or judgments awarded to third parties, allowing them to focus on their core activities without the constant worry of unexpected liabilities..</p>
       {/* <Button className='btn2'>next→</Button>*/}
        </Col>
        <Col sm="12" md="5" lg="3"><div className='health-ins1-content1'><img src="gli.jpg"/></div></Col>
         </Row>
    </Container>
    
    </>
  )
}

export default Ins2
