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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.595393297874!2d80.25872747463835!3d13.061406687262295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526707ca7b3ea3%3A0xed7f3109bee70e4f!2sSpencer%20Plaza!5e0!3m2!1sen!2sin!4v1730231249818!5m2!1sen!2sin" width="650" height="640"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
