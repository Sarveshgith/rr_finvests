import React from 'react';
import './InsuranceCard.css';

const InsuranceCard = () => {
	return (
		<div className='insurance-container4'>
			<h1> Insurances</h1>
			<div className='insurance-cards4'>
				{[...Array(4)].map((_, index) => (
					<div key={index} className='card4'>
						{/* Image placeholder */}
						<div className='image-placeholder4'></div>

						{/* Placeholder Text (Lorem Ipsum) */}
						<div className='text-placeholder4'>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<p>Vestibulum vel sapien et lacus.</p>
							<p>Mauris a ante id ligula vehicula.</p>
						</div>

						{/* Next button */}
						<button className='next-button4'>Next →</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default InsuranceCard;
