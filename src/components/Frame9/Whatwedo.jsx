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
   <Link to='/Main_ins1'>  <div className='top-left'></div></Link>
    <Link to='/Mutualfunds'><div className='top-middle'></div></Link>
    <Link to='/PMS'><div className='top-right'></div></Link>
    <Link to='/AIF'><div className='bottom-left'></div></Link>
    <Link to='/Moneyexc'>  <div className='bottom-middle'></div></Link>
    <Link to='/Loans'><div className='bottom-right'></div></Link>
    </div>
    </>
  )
}

export default Whatwedo
