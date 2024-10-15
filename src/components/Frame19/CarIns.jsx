import React from 'react';
import './CarIns.css';
import { Link } from 'react-router-dom';
const CarInsurance = () => {
	return (
		<div className='container'>
			<h1 className='text-center heading2'>CAR INSURANCE</h1>
			<div className='large-card'>
				<div className='image-placeholder'></div>
				<p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eligendi eveniet, neque similique commodi cumque deleniti quos natus veritatis quod illum corrupti inventore, laudantium recusandae quam quasi aperiam ea magni perferendis </p>
				<Link to='/vite-project/CarIns1'><button>Next ➜</button></Link>
			</div>
		</div>
	);
};

export default CarInsurance;
