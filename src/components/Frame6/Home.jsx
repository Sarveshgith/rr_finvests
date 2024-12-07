import React from 'react'
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from "motion/react"
import gsap from 'https://cdn.skypack.dev/gsap@3.12.0';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger';
const Home = () => {

  return (
    <div className='founder'>
    <motion.div initial={{opacity:0, x:200}} transition={{duration:1.5}} whileInView={{opacity:1, x:0}} viewport={{once: true}} className='home'>      <Container fluid="md">
      <Row>
        <Col lg={6} >
        <div className='home-img'> <img src="founder.jpg" className='home-img1' alt="" /></div>
        
        </Col>
        <Col lg={6} >
        <div className="home-content1">
  <p style={{ 
      fontWeight: 'bold', 
      color: '#fdfdfd', 
      padding: '1rem', 
      borderLeft: '5px solid #cfa601', 
      position: 'relative',
      fontSize: '1.1rem', 
      lineHeight: '1.6' 
    }}
  >
    <span style={{ 
        fontSize: '2rem', 
        verticalAlign: 'top', 
        color: '#cfa601' 
      }}
    >“<br/></span>
    When RR Finvests was established, my vision was to create something different—a place where financial solutions are genuinely tailored, offering clients not only choices but also real value. I believe that financial management should empower you, making complex decisions simpler and your goals more achievable. Our commitment is to be more than just advisors; we're here to be partners in your journey, anticipating your needs and providing solutions that make a real difference. Thank you for letting us be a part of your story.<br/> Together, we'll make your financial aspirations a reality.
    <span style={{ 
        fontSize: '2rem', 
        verticalAlign: 'bottom', 
        color: '#cfa601' 
      }}
    ><br/>”</span>
  </p>
  <div className="home-content2">
    <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>Warm Regards,</p>
    <p style={{ fontWeight: 'bold' }}>Rakesh Jayaprakash</p>
    <p style={{ fontWeight: 'bold' }}>Founder & CEO</p>
  </div>
</div>

        </Col>
      </Row>
    </Container>
    </motion.div>
    </div>
  )
}

export default Home
