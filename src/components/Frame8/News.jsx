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
            <p className='news-content1 text-center'>Stocks to watch on December 3: ITC, Pricol, TVS Motor, Swiggy, Torrent Power, Nazara Tech and more</p>
        </div>
        </Col>
        <Col lg="4" sm="12">
        <div className='news-img'><img src="newsimage2.jpg" alt="" className='news-img1' />
        <p className='news-content1 text-center'>Elon Musk’s $56 billion Tesla pay package struck down again, Delaware Judge says board ‘improperly influenced…’</p>
        </div></Col>
        <Col lg="4" sm="12">
        <div className='news-img'><img src="newsimage3.png" alt="" className='news-img1' />
        <p className='news-content1 text-center'>India's growth may dip below 7% for the first time in four years, economists say</p>
        </div></Col>
      </Row>
    </div>
    </div>
    </>
  )
}

export default News
