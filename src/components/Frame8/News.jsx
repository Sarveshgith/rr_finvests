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
            <p className='news-content1 text-center'>Jet fuel, or ATF, price on Friday was hiked by 3.3 per cent and rate of commercial LPG used in hotels and restaurants increased by Rs 62 per 19-kg cylinder in the monthly revision done in line with international oil price trends.</p>
        </div>
        </Col>
        <Col lg="4" sm="12">
        <div className='news-img'><img src="diwa.png" alt="" className='news-img1' />
        <p className='news-content1 text-center'>Muhurat Trading, the special Diwali trading session on Indian stock exchanges NSE and BSE, is a unique blend of financial, cultural, and spiritual traditions.</p>
        </div></Col>
        <Col lg="4" sm="12">
        <div className='news-img'><img src="us1.png" alt="" className='news-img1' />
        <p className='news-content1 text-center'>US Election 2024 Live: Two-thirds of Americans are anxious about November 5 election, new survey shows</p>
        </div></Col>
      </Row>
    </div>
    </div>
    </>
  )
}

export default News
