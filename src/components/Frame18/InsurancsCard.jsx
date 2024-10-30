import React from 'react';
import './InsuranceCard.css';
import '../Frame25/Corp_Insurance.css';
import { Link } from 'react-router-dom';
const InsuranceCard = () => {
	return (
		<div className='insurance-container4'>
			<h1 className='title1'>RETAIL INSURANCES</h1>
			<div className='insurance-cards4'>
				<div className='card4'>
					<img
						src='motorins.png'
						alt=''
						className='image-placeholder4'
					/>
					<div className='text-placeholder4'>
						<p>Motor Insurance</p>
					</div>
					<Link to='/MotorIns'><button className='next-button4'>Next →</button></Link>
				</div>

				<div className='card4'>
					<img
						src='healthin.jpg'
						alt=''
						className='image-placeholder4'
					/>
					<div className='text-placeholder4'>
						<p>Health Insurance</p>
					</div>
					<Link to='/HealthIns'><button className='next-button4'>Next →</button></Link>
				</div>

				<div className='card4'>
					<img
						src='life.png'
						alt=''
						className='image-placeholder4'
					/>
					<div className='text-placeholder4'>
						<p>Life Insurance</p>
					</div>
					<Link to='/Ins1'><button className='next-button4'>Next →</button></Link>
				</div>

				<div className='card4'>
					<img
						src='liability.jpg'
						alt=''
						className='image-placeholder4'
					/>
					<div className='text-placeholder4'>
						<p>General Liability </p>
					</div>
					<Link to='/Ins2'><button className='next-button4'>Next →</button></Link>
				</div>
			</div>
		</div>
	);
};

export default InsuranceCard;
