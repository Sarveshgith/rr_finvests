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
    
    <Container>
      <Row>
        <Col sm="12" md="7" lg="9">
        <h1 className='text-center motar-ins1-content3'>HEALTH INSURANCE</h1>
        <p className='motar-ins1-content2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit inventore illum consequatur nulla ea ullam possimus odio voluptatum quibusdam nobis quidem eligendi pariatur quisquam dignissimos illo, numquam libero. Maxime delectus rerum veniam quae est aliquam magnam eligendi incidunt dolore! Adipisci saepe reiciendis aut neque quaerat. Quisquam repellat nemo voluptatem ex veritatis minus similique est fugiat iusto commodi, eligendi aspernatur blanditiis atque repellendus, aperiam impedit perferendis quo consectetur minima enim esse! Aspernatur reiciendis est impedit necessitatibus nihil eligendi, quo quasi? Animi id, explicabo repellendus quas autem ab quam expedita quasi minima obcaecati numquam provident aspernatur nobis, eligendi, et corrupti voluptatum cupiditate.</p>
        <Link to='/HealthIns1'><Button className='btn2'>next→</Button></Link>
        </Col>
        <Col sm="12" md="5" lg="3"><div className='motar-ins1-content1'></div></Col>
         </Row>
    </Container>
    
    </>
  )
}

export default HealthIns1
