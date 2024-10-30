import React from 'react'
import { useState } from 'react';
import './Contact.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className='contact'>
    <div>
        <h1 className='contact-heading'>FOR FURTHER QUERIES</h1>
      <Row>
        <Col lg='6'> <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125406.10926603609!2d78.6066256534387!3d10.815833728118813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ff2aecdad%3A0x6de02c3bedbbaea6!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1729958604852!5m2!1sen!2sin" width="650" height="640" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </Col>
        <Col lg='6'> <div className="contact-form">
            
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <br />
              <h2 className='contact-heading1'>CONTACT US</h2>
              <br />
              <Form.Label>First Name</Form.Label>
              <Form.Control type="name" placeholder="First Name" className='form1' />
              <br />
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="name" placeholder="Last Name"  className='form1' />
              <br />
              <Form.Label>Email *</Form.Label>
              <Form.Control type='email' placeholder="Email"  className='form1' required />
              <Form.Control.Feedback type="invalid">
              Please provide valid Email
            </Form.Control.Feedback>
              <br />
              <Form.Label>Message *</Form.Label>
              <Form.Control as="textarea" rows={3}  placeholder='Message'  className='form1' required />
              <Form.Control.Feedback type="invalid">
              Please provide any Message
            </Form.Control.Feedback>
              <br />
              <Button className='btn4' type="submit">Submit</Button>
          </Form>
            </div>
        </Col>
      </Row>
    </div>
    </div>
  )
}

export default Contact
