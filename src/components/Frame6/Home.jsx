import React from 'react'
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <div className='home'>
      <Container fluid="md">
      <Row>
        <Col lg={6} >
        <div className='home-img'> <img src="pic1.jpg" className='home-img1' alt="" /></div>
        
        </Col>
        <Col lg={6} >
        <div className='home-content1'>
        <p >When RR Finvests was established, my vision was to create something different—a place where financial solutions are genuinely tailored, offering clients not only choices but also real value. I believe that financial management should empower you, making complex decisions simpler and your goals more achievable. Our commitment is to be more than just advisors; we're here to be partners in your journey, anticipating your needs and providing solutions that make a real difference. Thank you for letting us be a part of your story. Together, we'll make your financial aspirations a reality.</p>
        <div className='home-content2' >
            <p>Warm Regards,</p>
            <p>Rakesh Jayaprakash</p>
            <p>Founder & CEO</p>
        </div>
        </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Home
