import React from 'react';
import './Insurance.css';
import { Link } from 'react-router-dom';
const HealthInsurance = () => {
	return (
		<div className='insurance-container'>
			<h1 className='title'> Insurance</h1>
			<div className='insurance-content'>
				{/* Card 1 */}
				<div className='insurance-card'>
					<Link to='/vite-project/Insurance'> <img
						src='https://via.placeholder.com/300x200'
						alt='Stock Image 1'
						className='insurance-image'
					/></Link>
					<div className='insurance-details'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p>Curabitur et semper nibh. Aenean at risus vel.</p>
						<p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
					</div>
				</div>
				{/* Card 2 */}
				<div className='insurance-card'>
					<img
						src='https://via.placeholder.com/300x200'
						alt='Stock Image 2'
						className='insurance-image'
					/>
					<div className='insurance-details'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p>Curabitur et semper nibh. Aenean at risus vel.</p>
						<p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HealthInsurance;
