import React from 'react';
import './CarIns.css';
import { Link } from 'react-router-dom';
const CarInsurance = () => {
	return (
		<div className='container'>
			<h1>Car Insurance</h1>
			<div className='large-card'>
				<div className='image-placeholder'></div>
				<p>Lorem ipsum dolor sit amet.</p>
				<p>Consectetur adipiscing elit.</p>
				<p>Sed do eiusmod tempor.</p>
				<Link to='/vite-project/CarIns1'><button>Next ➜</button></Link>
			</div>
		</div>
	);
};

export default CarInsurance;
