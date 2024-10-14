import React from 'react';
import './InsuranceCard.css';
import { Link } from 'react-router-dom';
const InsuranceCard = () => {
	return (
		<div className='insurance-container4'>
			<h1>Insurances</h1>
			<div className='insurance-cards4'>
				<div className='card4'>
					<img
						src='https://source.unsplash.com/300x200/?health,insurance'
						alt=' Insurance'
						className='image-placeholder4'
					/>
					<div className='text-placeholder4'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p>Vestibulum vel sapien et lacus.</p>
						<p>Mauris a ante id ligula vehicula.</p>
					</div>
					<Link to='/vite-project/MotorIns'><button className='next-button4'>Next →</button></Link>
				</div>

				<div className='card4'>
					<img
						src='https://source.unsplash.com/300x200/?life,insurance'
						alt=' Insurance'
						className='image-placeholder4'
					/>
					<div className='text-placeholder4'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p>Vestibulum vel sapien et lacus.</p>
						<p>Mauris a ante id ligula vehicula.</p>
					</div>
					<Link to='/vite-project/HealthIns'><button className='next-button4'>Next →</button></Link>
				</div>

				<div className='card4'>
					<img
						src='https://source.unsplash.com/300x200/?car,insurance'
						alt=' Insurance'
						className='image-placeholder4'
					/>
					<div className='text-placeholder4'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p>Vestibulum vel sapien et lacus.</p>
						<p>Mauris a ante id ligula vehicula.</p>
					</div>
					<Link to='/vite-project/Ins1'><button className='next-button4'>Next →</button></Link>
				</div>

				<div className='card4'>
					<img
						src='https://source.unsplash.com/300x200/?travel,insurance'
						alt='Insurance'
						className='image-placeholder4'
					/>
					<div className='text-placeholder4'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p>Vestibulum vel sapien et lacus.</p>
						<p>Mauris a ante id ligula vehicula.</p>
					</div>
					<Link to='/vite-project/Ins2'><button className='next-button4'>Next →</button></Link>
				</div>
			</div>
		</div>
	);
};

export default InsuranceCard;
