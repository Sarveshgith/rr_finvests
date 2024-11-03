import React from 'react';
import './Header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Link}from 'react-router-dom';

const Header = () => {
	return (
		<div className='Header'>
			<div>
				<Navbar expand='lg' className='bg-body-tertiary'>
					<Nav>
						<Navbar.Brand className='hide1'> RR FINVESTS</Navbar.Brand>
					</Nav>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
						<Nav.Link as ={Link} to="/">HOME</Nav.Link>
            			<Nav.Link href='#about'>ABOUT</Nav.Link>
           				 <Nav.Link as={Link} to='/tools'>TOOLS</Nav.Link>
          				</Nav>
							
						<Navbar.Brand href='#' className='hide2'>
							RR FINVESTS
						</Navbar.Brand>
						<Nav className='ms-auto'>
						<Nav.Link href='#news' >NEWS & INSIGHTS</Nav.Link>
						<Nav.Link as={Link}to='/Whatwedo'>WHAT WE DO</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
			<div className='header-content6'>
			<div className='header-content5'>
				<h2 className='text-center header-content1'>
					MAKE INTELLIGENT INVESTMENTS
				</h2>
				<h2 className='text-center header-content2'>WITH US</h2>
			</div>
			<div className='text-center header-content4'>
				<h6 className=' header-content3 text-center'>
					JOIN US TODAY AND LET YOUR MONEY WORK HARD AS YOU DO
				</h6>
				<Button
  					variant="light"
  					className="btn"
  					onClick={() => (window.location.href = 'tel:+91 9543873330')}
				>
  				Connect with Us
				</Button>
			</div>
		</div>
		</div>
	);
};

export default Header;
