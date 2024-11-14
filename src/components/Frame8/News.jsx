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
            <img src="newsimage1.jpg" alt="" className='news-img1' />
            <p className='news-content1 text-center'>India needs to improve return on time invested (ROTI) to transform into future, says Uday Kotak</p>
        </div>
        </Col>
        <Col lg="4" sm="12">
        <div className='news-img'><img src="newsimage2.jpeg" alt="" className='news-img1' />
        <p className='news-content1 text-center'>Trump’s proposed heavy tariffs on China to benefit India and the rest of the world</p>
        </div></Col>
        <Col lg="4" sm="12">
        <div className='news-img'><img src="newsimage3.png" alt="" className='news-img1' />
        <p className='news-content1 text-center'>Wholesale inflation scales 4-month high of 2.4% in Oct on simmering food prices</p>
        </div></Col>
      </Row>
    </div>
    </div>
    </>
  )
}

export default News
