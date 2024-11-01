import React from 'react'
import './Mf.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Mf = () => {
  return (
    <div className='over'>
    <h1 className='text-center Mf-content3 '>MUTUAL FUNDS</h1>
    <div className="mfimg">
    <img src="mf.png"className='mfimg'></img>
    </div>
    {/*
    <div className='Mf-content'>
        <div className='Mf-content1' >
            <h1 className='text-center heading3'>CUSTOMER LOGIN</h1>
        <Row className='justify-content-md-center'>
        <Col lg="3" sm="12" md="4"><Form.Control type="text" placeholder="PAN (required)" className='input1' /></Col>
        <Col lg="3" sm="12" md="4"><Form.Control type="text" placeholder="Mobile Number (required)" className='input1' /></Col>
        </Row>
            <Button variant="dark" className='btn1'> Login</Button>
        </div>
    </div>
    */}
    <div className='Mf-content2'>
      <Row className='justify-content-md-center'>
<Col lg="12"><p text-center>Mutual funds are ideal for investors who either lack large sums for investment, or for those who neither have the inclination nor the time to research the market, yet want to grow their wealth. The money collected in mutual funds is invested by professional fund managers in line with the scheme’s stated objective. In return, the fund house charges a small fee which is deduc </p>
        <p>Mutual funds are ideal for investors who either lack large sums for investment, or for those who neither have the inclination nor the time to research the market, yet want to grow their wealth. The money collected in mutual funds is invested by professional fund managers in line with the scheme’s stated objective. In return, the fund house charges a small fee which is deducted from the investment. The fees charged by mutual funds are regulated and are subject to certain limits specified by the Securities and Exchange Board of India (SEBI).
        </p>
        <p>India has one of the highest savings rate globally. This penchant for wealth creation makes it necessary for Indian investors to look beyond the traditionally favoured bank FDs and gold towards mutual funds. However, lack of awareness has made mutual funds a less preferred investment avenue.
        </p>
        <p>Mutual funds offer multiple product choices for investment across the financial spectrum. As investment goals vary – post-retirement expenses, money for children’s education or marriage, house purchase, etc. – the products required to achieve these goals vary too. The Indian mutual fund industry offers a plethora of schemes and caters to all types of investor needs.
        </p>
        <p>Mutual funds offer an excellent avenue for retail investors to participate and benefit from the uptrends in capital markets. While investing in mutual funds can be beneficial, selecting the right fund can be challenging. Hence, investors should do proper due diligence of the fund and take into consideration the risk-return trade-off and time horizon or consult a professional investment adviser. Further, in order to reap maximum benefit from mutual fund investments, it is important for investors to diversify across different categories of funds such as equity, debt and gold.</p></Col>
      </Row>
    </div>
    </div>
  )
}

export default Mf
