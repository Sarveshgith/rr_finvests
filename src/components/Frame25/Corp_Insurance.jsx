import React from 'react'
import './Corp_Insurance.css'
import { Link } from 'react-router-dom';
const Corp_Insurance = () => {
  return (
      <div className='insurance-container4'>
			<h1 className='title1'>CORPORATE INSURANCES</h1>
			<div className='insurance-cards4'>
				<div className='card4'>
					<img
						src='fireinsurance.png'
						alt=''
						className='image-placeholder4'
					/>
					<div className='text-placeholder4'>
						<p>Fire Insurance</p>
					</div>
					<Link to='/Fire_ins1'><button className='next-button4'>Know more →</button></Link>
				</div>

				<div className='card4'>
					<img
						src='marineins.jpg'
						alt=''
						className='image-placeholder4'
					/>
					<div className='text-placeholder4'>
						<p>Marine Insurance</p>
					</div>
					<Link to='/Marine_ins1'><button className='next-button4'>Know more →</button></Link>
				</div>

				<div className='card4'>
					<img
						src='generalins.png'
						alt=''
						className='image-placeholder4'
					/>
					<div className='text-placeholder4'>
						<p>GMC</p>
					</div>
					<Link to='/GMC_ins1'><button className='next-button4'>Know more →</button></Link>
				</div>

				<div className='card4'>
					<img
						src='engineeringins.png'
						alt=''
						className='image-placeholder4'
					/>
					<div className='text-placeholder4'>
						<p>Engineering Insurance</p>
					</div>
					<Link to='/Engineering_ins1'><button className='next-button4'>Know more →</button></Link>
				</div>
			</div>
		</div>
  )
}

export default Corp_Insurance
