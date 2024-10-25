import React from 'react'
import './Corp_6.css'
const Corp_6 = () => {
  return (
      <div className='insurance-container'>
			<h1 className='title'>MARINE INSURANCE</h1>
			<div className='insurance-content'>
				{/* Card 1 */}
				<div className='insurance-card'>
					<img
						src='https://via.placeholder.com/300x200'
						alt=''
						className='insurance-image'
					/>
					<div className='insurance-details'>
						<p>Health Insurance</p>
						<p>Curabitur et semper nibh. Aenean at risus vel.</p>
						<p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
					</div>
					<button className='next-button'>Next →</button>
				</div>
				{/* Card 2 */}
				<div className='insurance-card'>
					<img
						src='https://via.placeholder.com/300x200'
						alt=''
						className='insurance-image'
					/>
					<div className='insurance-details'>
						<p>Life and Term Insurance</p>
						<p>Curabitur et semper nibh. Aenean at risus vel.</p>
						<p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
					</div>
					<button className='next-button'>Next →</button>
				</div>
			</div>
		</div>
  )
}

export default Corp_6
