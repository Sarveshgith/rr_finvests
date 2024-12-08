import React from 'react';
import './Insurance.css';
import { Link } from 'react-router-dom';
import { motion } from "motion/react"
const HealthInsurance = () => {
	return (
		<div className='insurance-container'>
			<h1 className='title'> INSURANCES</h1>
			<div className='insurance-content'>
				{/* Card 1 */}
				<motion.div className='insurance-card' initial={{opacity:0, x:-200}} transition={{duration:1}} whileInView={{opacity:1, x:0}} viewport={{once: true}}>
					<Link to='/Corp_ins'> <img
						src='corporateinsurance.png'
						alt='Stock Image 1'
						className='insurance-image1'
					/></Link>
					<div className='insurance-details'>
						<p>Corporate Insurances</p>
					</div>
				</motion.div>
				{/* Card 2 */}
				<motion.div className='insurance-card' initial={{opacity:0, x:200}} transition={{duration:1}} whileInView={{opacity:1, x:0}} viewport={{once: true}}>
					<Link to='/Insurance'><img
						src='retailin.png'
						alt='Stock Image 2'
						className='insurance-image2'
					/></Link>
					<div className='insurance-details'>
						<p>Retail Insurances</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default HealthInsurance;
