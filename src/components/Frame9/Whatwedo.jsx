import React from 'react';
import './Whatwedo.css';
import { Link } from 'react-router-dom';
import { motion } from "motion/react"

const Whatwedo = () => {
  return (
    <motion.div className='whole' id='Whatwedo' initial={{opacity:0, y:200}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once: true}}>
      <div className='center text-center'>
      </div>
      
      <Link to='/Main_ins1'>
        <div className='top-left'>
          <img
            src='wwd6.png'
            alt='insurance'
            className='image-placeholder4'
          />
          <div className="hover-text">Insurance</div> 
        </div>
      </Link>

      <Link to='/Mutualfunds'>
        <div className='top-middle'>
          <img
            src='wwd1.png'
            alt='mutualfunds'
          />
          <div className="hover-text">Mutual Funds</div> 
        </div>
      </Link>

      <Link to='/PMS'>
        <div className='top-right'>
          <img
            src='wwd2.png'
            alt='portfolio'
            className='image-placeholder4'
          />
          <div className="hover-text">Portfolio Management</div> 
        </div>
      </Link>

      <Link to='/AIF'>
        <div className='bottom-left'>
          <img
            src='wwd4.png'
            alt='alternatefunds'
            className='image-placeholder4'
          />
          <div className="hover-text">AIF</div> 
        </div>
      </Link>

      <Link to='/Moneyexc'>
        <div className='bottom-middle'>
          <img
            src='wwd3.png'
            alt='moneyexchange'
            className='image-placeholder4'
          />
          <div className="hover-text">Money Exchange</div> 
        </div>
      </Link>

      <Link to='/Loans'>
        <div className='bottom-right'>
          <img
            src='wwd5.png'
            alt=''
            className='image-placeholder4'
          />
          <div className="hover-text">Loans</div> 
        </div>
      </Link>
    </motion.div>
  );
}

export default Whatwedo;
