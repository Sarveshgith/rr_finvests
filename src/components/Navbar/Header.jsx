import React from 'react'
import './Header.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
const Header = () => {
  return (
    <div className='Header'>
    <div >
      <Navbar expand="lg" className="bg-body-tertiary">
        <Nav>
        <Navbar.Brand className='hide1'>   RR FINVESTS</Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/vite-project/">HOME</Nav.Link>
            <Nav.Link href="/vite-project/about">ABOUT</Nav.Link>
            <Nav.Link href="/vite-project/tools">TOOLS</Nav.Link>
          </Nav>
          <Navbar.Brand href="#" className='hide2'>   RR FINVESTS</Navbar.Brand>
        <Nav className="ms-auto">
            <Nav.Link href="/vite-project/news">NEWS & INSIGHTS</Nav.Link>
            <Nav.Link href="/vite-project/Whatwedo">WHAT WE DO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
    <div>
        <h2 className='text-center header-content1'>MAKE INTELLIGENT INVESTMENTS</h2>
        <h2 className='text-center header-content2'>WITH US</h2>
    </div>
    <div className='text-center'>
        <h6 className=' header-content3' >JOIN US TODAY AND LET YOUR MONEY WORK HARD AS YOU DO</h6>
        <Button variant="light" className='btn'>Connect with Us</Button>
    </div>
</div>
  )
}

export default Header
