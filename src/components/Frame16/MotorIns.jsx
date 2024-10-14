import React from 'react';
import './MotorIns.css';
import { Link } from 'react-router-dom';
const MotorInsuranceCard = () => {
	return (
		<div className='insurance-container5'>
			<h1>Motor Insurances</h1>
			<div className='insurance-cards5'>
				<div className='card5'>
					<img
						src='https://source.unsplash.com/300x200/?health,insurance'
						alt=''
						className='image-placeholder5'
					/>
					<div className='text-placeholder5'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p>Vestibulum vel sapien et lacus.</p>
						<p>Mauris a ante id ligula vehicula.</p>
					</div>
					<Link to='/vite-project/CarIns'><button className='next-button5'>Next →</button></Link>
				</div>

				<div className='card5'>
					<img
						src='https://source.unsplash.com/300x200/?life,insurance'
						alt=''
						className='image-placeholder5'
					/>
					<div className='text-placeholder5'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p>Vestibulum vel sapien et lacus.</p>
						<p>Mauris a ante id ligula vehicula.</p>
					</div>
					<button className='next-button5'>Next →</button>
				</div>

				<div className='card5'>
					<img
						src='https://source.unsplash.com/300x200/?car,insurance'
						alt=''
						className='image-placeholder5'
					/>
					<div className='text-placeholder5'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p>Vestibulum vel sapien et lacus.</p>
						<p>Mauris a ante id ligula vehicula.</p>
					</div>
					<button className='next-button5'>Next →</button>
				</div>

				<div className='card5'>
					<img
						src='https://source.unsplash.com/300x200/?travel,insurance'
						alt=''
						className='image-placeholder5'
					/>
					<div className='text-placeholder5'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p>Vestibulum vel sapien et lacus.</p>
						<p>Mauris a ante id ligula vehicula.</p>
					</div>
					<button className='next-button5'>Next →</button>
				</div>
			</div>
		</div>
	);
};

export default MotorInsuranceCard;
