import React from 'react'
import './Corp_6.css'
const Corp_6 = () => {
  return (
      <div className='insurance-container'>
			<h1 className='title2'>HEALTH INSURANCE</h1>
			<div className='insurance-content'>
				{/* Card 1 */}
				<div className='insurance-card'>
					<img
						src='healthinsurance.jpg'
						alt=''
						className='insurance-image'
					/>
					<div className='insurance-details'>
						<h4>Health Insurance</h4>
						<p>Health insurance is a type of coverage that pays for medical expenses incurred by the insured including services such as hospitalization,prescription medications</p>
					</div>
					{/*<button className='next-button'>Next →</button>*/}
				</div>
				{/* Card 2 */}
				<div className='insurance-card'>
					<img
						src='lifeinsurance.jpg'
						alt=''
						className='insurance-image'
					/>
					<div className='insurance-details'>
						<h4 >Life and Term Insurance</h4>
						<p>Life insurance provides financial protection to beneficiaries upon the policyholder's death, ensuring their financial stability. 
.</p>
					</div>
					{/*<button className='next-button'>Next →</button>*/}
					</div>
			</div>
		</div>
  )
}

export default Corp_6
