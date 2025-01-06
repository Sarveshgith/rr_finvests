import React from 'react';
import './Whatwedo.css';
import { Link } from 'react-router-dom';
import { motion } from "motion/react"
import ReactPlayer from 'react-player'

const Whatwedo = () => {
  return (
    <motion.div className='whole' id='Whatwedo' initial={{opacity:0, y:200}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once: true}}>
      <div className='center text-center'>
      </div>
      
      <Link to='/Main_ins1'>
        <div className='top-left text-center'>
          {/*<img
            src='wwedo1.png'
            alt='insurance'
            className='image-placeholder4'
          />*/}
          <ReactPlayer url={'wwedo8.mp4'} playing={true} loop={true}  width='150px' height='120px' />
          <div className="hover-text">Insurance</div>
          <p>Insurance</p> 
        </div>
      </Link>

      <Link to='/Mutualfunds'>
        <div className='top-middle text-center'>
          {/* <img
            src='agreement.png'
            alt='mutualfunds'
          /> */}
          <ReactPlayer url={'agreement.mp4'} playing={true} loop={true}  width='150px' height='120px' />
          <div className="hover-text">Mutual Funds</div> 
          <p>Mutual Funds</p> 
        </div>
      </Link>

      <Link to='/PMS'>
        <div className='top-right text-center'>
          {/* <img
            src='wwedo5.png'
            alt='portfolio'
            className='image-placeholder4'
          /> */}
          <ReactPlayer url={'wwedo9.mp4'} playing={true} loop={true}  width='150px' height='120px' />
          <div className="hover-text">Portfolio Management</div> 
          <p>Portfolio Management</p> 
        </div>
      </Link>

      <Link to='/AIF'>
        <div className='bottom-left text-center'>
          {/* <img
            src='wwd4.png'
            alt='alternatefunds'
            className='image-placeholder4'
          /> */}
          <ReactPlayer url={'wwedo4.mp4 '} playing={true} loop={true}  width='150px' height='120px' />
          <div className="hover-text">AIF</div>
          <p>AIF</p> 
        </div>
      </Link>

      <Link to='/Moneyexc'>
        <div className='bottom-middle text-center'>
          {/* <img
            src='wwedo6.png'
            alt='moneyexchange'
            className='image-placeholder4'
          /> */}
          <ReactPlayer url={'wwedo7.mp4'} playing={true} loop={true}  width='150px' height='120px' />
          <div className="hover-text">Money Exchange</div> 
          <p>Money Exchange</p> 
        </div>
      </Link>

      <Link to='/Loans'>
        <div className='bottom-right text-center'>
          {/* <img
            src='wwedo7.png'
            alt=''
            className='image-placeholder4'
          /> */}
          <ReactPlayer url={'wwedo5.mp4'} playing={true} loop={true}  width='150px' height='120px' />
          <div className="hover-text">Loans</div>
          <p >Loan</p>  
        </div>
      </Link>
    </motion.div>
  );
}

export default Whatwedo;
