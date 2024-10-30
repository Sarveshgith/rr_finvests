import React from 'react'
import './ins1.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const Ins1 = () => {
  return (
    <>
     <div className='motor'>
    <Container>
      <Row>
      <h1 className='text-center motar-ins1-content4'>LIFE INSURANCES</h1>
        <Col sm="12" md="4" lg="4"><div className='motar-ins1-content1'><img src="lifeinsur.png"/></div></Col>
        <Col sm="12" md="7" lg="8">
        <h1 className='text-center motar-ins1-content3'>LIFE INSURANCES</h1>
        <p className='motar-ins1-content2'>Life insurance is a financial product designed to provide a safety net for your loved ones in the event of your untimely death. By paying regular premiums, you secure a death benefit that can help cover expenses such as mortgages, education costs, and daily living expenses, ensuring financial stability for your family during a difficult time.Ultimately, life insurance plays a vital role in financial planning, providing peace of mind and ensuring that your loved ones are protected against unforeseen circumstances. </p>
        {/*<Button className='btn2'>next→</Button>*/}
        </Col>
         </Row>
    </Container>
    </div>
    </>
  )
}

export default Ins1
