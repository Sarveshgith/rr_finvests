import React from 'react';
import './MotorIns.css';

const MotorInsuranceCard = () => {
	return (
		<div className='insurance-container5'>
			<h1>Motor Insurances</h1>
			<div className='insurance-cards5'>
				{[...Array(4)].map((_, index) => (
					<div key={index} className='card5'>
						{/* Image placeholder */}
						<div className='image-placeholder5'></div>

						{/* Placeholder Text (Lorem Ipsum) */}
						<div className='text-placeholder5'>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<p>Vestibulum vel sapien et lacus.</p>
							<p>Mauris a ante id ligula vehicula.</p>
						</div>

						{/* Next button */}
						<button className='next-button5'>Next →</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default MotorInsuranceCard;
