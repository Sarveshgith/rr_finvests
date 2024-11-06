import React from 'react'
import './News.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const News = () => {
  return (
    <>
    <div className='news'>
    <h1 className='text-center mt-5 mb-5 heading2' id='news'>TOP ECONOMIC NEWS</h1>
    <div>
      <Row>
        <Col lg="4" sm="12">
        <div className='news-img'>
            <img src="aircraft.jpg" alt="" className='news-img1' />
            <p className='news-content1 text-center'>US elections: With 38% returns this year, US-focused Indian mutual funds offer better geographical diversification</p>
        </div>
        </Col>
        <Col lg="4" sm="12">
        <div className='news-img'><img src="diwa.png" alt="" className='news-img1' />
        <p className='news-content1 text-center'>Debt repayment tops India Inc’s use of QIP proceeds in 2024; capex second priority</p>
        </div></Col>
        <Col lg="4" sm="12">
        <div className='news-img'><img src="us.jpg" alt="" className='news-img1' />
        <p className='news-content1 text-center'>Commodities from oil and gas to metals and grains dropped on Wednesday as the dollar rallied and victory for Republican Donald Trump in the US presidential election</p>
        </div></Col>
      </Row>
    </div>
    </div>
    </>
  )
}

export default News
