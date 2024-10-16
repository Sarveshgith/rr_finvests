import React from 'react'
import './Mf.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Mf = () => {
  return (
    <>
    <h1 className='text-center Mf-content3 '>Mutual Funds</h1>
    <div className='Mf-content'>
        <div className='Mf-content1' >
            <h1 className='text-center heading3'>Customer login</h1>
        <Row className='justify-content-md-center'>
        <Col lg="3" sm="12" md="4"><Form.Control type="text" placeholder="PAN (required)" className='input1' /></Col>
        <Col lg="3" sm="12" md="4"><Form.Control type="text" placeholder="Mobile Number (required)" className='input1' /></Col>
        </Row>
            <Button variant="dark" className='btn1'> Login</Button>
        </div>
    </div>
    <div className='Mf-content2'>
      <Row className='justify-content-md-center'>
        <Col lg="5" md="6"><p>A Mutual Fund is a company that pools money from many investors and invests the money in securities such as stocks, bonds, and short-term debt. The combined holdings of the mutual fund are known as its portfolio. Investors buy shares in mutual funds. Each share represents an investor's part ownership in the fund and the income it generates.</p></Col>
        <Col lg="5" md="6"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit repellat nemo molestias rerum quam nulla, hic est fugit sapiente quibusdam ipsum, aliquam iure id, alias accusamus. Cupiditate, est sed officiis vel nisi voluptatum, sapiente sit non quos nesciunt distinctio enim accusantium blanditiis sunt. Recusandae explicabo placeat quis facilis voluptatum.</p></Col>
      </Row>
    </div>
    </>
  )
}

export default Mf
