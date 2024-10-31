import React from 'react';
import './Insurance.css';
import { Link } from 'react-router-dom';
const HealthInsurance = () => {
	return (
		<div className='insurance-container'>
			<h1 className='title'> INSURANCES</h1>
			<div className='insurance-content'>
				{/* Card 1 */}
				<div className='insurance-card'>
					<Link to='/Corp_ins'> <img
						src='corporateinsurance.png'
						alt='Stock Image 1'
						className='insurance-image1'
					/></Link>
					<div className='insurance-details'>
						<p>Corporate Insurances</p>
					</div>
				</div>
				{/* Card 2 */}
				<div className='insurance-card'>
					<Link to='/Insurance'><img
						src='retailin.png'
						alt='Stock Image 2'
						className='insurance-image2'
					/></Link>
					<div className='insurance-details'>
						<p>Retail Insurances</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HealthInsurance;
