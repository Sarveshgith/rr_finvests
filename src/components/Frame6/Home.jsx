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
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum amet ea voluptate ratione blanditiis cupiditate, deleniti dignissimos doloremque fugiat, veniam repellat eveniet nam tenetur. Quisquam, libero iure illo odit temporibus impedit repellendus. Debitis nisi modi laboriosam quae, assumenda tempora, amet adipisci perspiciatis odio placeat esse molestiae! Suscipit pariatur aut aliquam sint beatae. Cumque beatae aliquam laborum. Veritatis iusto doloribus nam voluptate beatae, aut eos voluptatibus voluptates veniam dicta omnis. Tempore!,aut eos voluptatibus voluptates veniam dicta omnis. Tempore!</p>
        <div className='home-content2' >
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
