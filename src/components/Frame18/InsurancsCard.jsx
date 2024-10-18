import React from 'react';
import './InsuranceCard.css';
import { Link } from 'react-router-dom';
const InsuranceCard = () => {
	return (
		<div className='insurance-container4'>
			<h1 className='heading2'>INSURANCES</h1>
			<div className='insurance-cards4'>
				<div className='card4'>
					<img
						src='https://source.unsplash.com/300x200/?health,insurance'
						alt=''
						className='image-placeholder4'
					/>
					<div className='text-placeholder4'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<Link to='/MotorIns'><button className='next-button4'>Next →</button></Link>
				</div>

				<div className='card4'>
					<img
						src='https://source.unsplash.com/300x200/?life,insurance'
						alt=''
						className='image-placeholder4'
					/>
					<div className='text-placeholder4'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<Link to='/HealthIns'><button className='next-button4'>Next →</button></Link>
				</div>

				<div className='card4'>
					<img
						src='https://source.unsplash.com/300x200/?car,insurance'
						alt=''
						className='image-placeholder4'
					/>
					<div className='text-placeholder4'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<Link to='/Ins1'><button className='next-button4'>Next →</button></Link>
				</div>

				<div className='card4'>
					<img
						src='https://source.unsplash.com/300x200/?travel,insurance'
						alt=''
						className='image-placeholder4'
					/>
					<div className='text-placeholder4'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<Link to='/Ins2'><button className='next-button4'>Next →</button></Link>
				</div>
			</div>
		</div>
	);
};

export default InsuranceCard;
