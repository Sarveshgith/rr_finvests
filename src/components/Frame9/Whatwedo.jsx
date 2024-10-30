import React from 'react'
import './Whatwedo.css'
import { Link } from 'react-router-dom'
const Whatwedo = () => {
  return (
    <>
    <div className='whole' id='Whatwedo'>
      
    <div className='center text-center'>
      <h2 >RR</h2>
      <h2>FINVESTS</h2>
    </div>
    <Link to='/Main_ins1'>  <div className='top-left'><img
						src='insurance.jpg'
						alt=''
						className='image-placeholder4'
					/></div></Link>
    <Link to='/Mutualfunds'><div className='top-middle'><img
						src='mutualfunds.png'
						alt=''
						className='image-placeholder4'
					/></div></Link>
    <Link to='/PMS'><div className='top-right'><img
						src='portfolio.png'
						alt=''
						className='image-placeholder4'
					/></div></Link>
    <Link to='/AIF'><div className='bottom-left'><img
						src='alternatein.jpg'
						alt=''
						className='image-placeholder4'
					/></div></Link>
    <Link to='/Moneyexc'>  <div className='bottom-middle'><img
						src='moneyexh.png'
						alt=''
						className='image-placeholder4'
					/></div></Link>
    <Link to='/Loans'><div className='bottom-right'><img
						src='loan.png'
						alt=''
						className='image-placeholder4'
					/></div></Link>
    </div>
    </>
  )
}

export default Whatwedo
