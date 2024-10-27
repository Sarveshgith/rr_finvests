import React from 'react'
import './News.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EconomicNews from '../Frame35/EconomicNews';
const News = () => {
  return (
    <>
    <h1 className='text-center mt-5 mb-5 heading2' id='news'>NEWS</h1>
    <EconomicNews />
    </>
  )
}

export default News
