import React from 'react'
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <div>
      <Container fluid="md">
      <Row>
        <Col>
        <div className='home-img1'> <img src="pic1.jpg" className='home-img1' alt="" /></div>
        
        </Col>
        <Col>
        <div className='home-content1'>
        <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur modi maxime error voluptates ab praesentium quibusdam, voluptas officiis suscipit excepturi expedita libero, non officia, facere ut quidem? Sequi modi culpa architecto nesciunt corrupti autem adipisci atque, inventore, aliquam porro a incidunt optio similique, nemo expedita eveniet ea? Hic possimus tenetur placeat optio sint dignissimos numquam ipsa corporis debitis animi labore exercitationem voluptates molestiae sunt voluptatem provident in, ea cupiditate delectus. Quae minima maiores ullam hic velit reiciendis deserunt ipsum odit nostrum similique possimus molestiae quo illo expedita tempore perspiciatis veniam, laborum doloribus quibusdam tempora. Rem consequatur libero ducimus possimus ratione.</p>
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
