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
					<Link to='/Insurance'> <img
						src='https://via.placeholder.com/300x200'
						alt='Stock Image 1'
						className='insurance-image'
					/></Link>
					<div className='insurance-details'>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero repudiandae architecto eaque? Excepturi, quia! Facilis sapiente necessitatibus quam ipsa unde placeat, eos, molestiae repellendus quo aut perferendis fugit commodi similique.</p>
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
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium modi velit in, nemo laudantium et. Veniam minima similique illum, enim fugiat nulla, numquam nostrum unde, ipsum esse blanditiis! Beatae, quod.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HealthInsurance;
