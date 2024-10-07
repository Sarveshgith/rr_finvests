import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
const Header = () => {
  return (
    <>
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#">ABOUT</Nav.Link>
            <Nav.Link href="#">TOOLS</Nav.Link>
          </Nav>
        <Navbar.Brand href="#">RR FINVESTS</Navbar.Brand>
        <Nav className="ms-auto">
            <Nav.Link href="#">NEWS & INSIGHTS</Nav.Link>
            <Nav.Link href="#">WHAT WE DO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div>
        <h2 className='text-center header-content1'>MAKE INTELLIGENT INVESTMENTS</h2>
        <h2 className='text-center'>WITH US</h2>
    </div>
    <div className='text-center'>
        <h6 className=' header-content1' >JOIN US TODAY AND LET YOUR MONEY WORK HARD AS YOU DO</h6>
        <Button variant="light" className='btn'>Button</Button>
    </div>
</>
  )
}

export default Header
