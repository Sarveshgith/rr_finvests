import React, { useState } from 'react';
import './Whatwedo.css';
import { Link } from 'react-router-dom';
import { motion } from "motion/react";
import ReactPlayer from 'react-player';

const Whatwedo = () => {
  const [hoveredVideo, setHoveredVideo] = useState(null);

  return (
    <motion.div className='whole' id='Whatwedo' initial={{opacity: 0, y: 200}} transition={{duration: 1}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}>
      <div className='center text-center'><span className='center-text'>RR FINVESTS</span></div>
      
      <Link to='/Main_ins1'>
        <div
          className='top-left text-center'
          onMouseEnter={() => setHoveredVideo('insurance')}
          onMouseLeave={() => setHoveredVideo(null)}
        >
          <ReactPlayer
            url={'wwedo8.mp4'}
            playing={hoveredVideo === 'insurance'}
            loop={true}
            width='150px'
            height='120px'
          />
          <div className="hover-text">Insurance</div>
          <p>Insurance</p>
        </div>
      </Link>

      <Link to='/Mutualfunds'>
        <div
          className='top-middle text-center'
          onMouseEnter={() => setHoveredVideo('mutualfunds')}
          onMouseLeave={() => setHoveredVideo(null)}
        >
          <ReactPlayer
            url={'agreement.mp4'}
            playing={hoveredVideo === 'mutualfunds'}
            loop={true}
            width='150px'
            height='120px'
          />
          <div className="hover-text">Mutual Funds</div>
          <p>Mutual Funds</p>
        </div>
      </Link>

      <Link to='/PMS'>
        <div
          className='top-right text-center'
          onMouseEnter={() => setHoveredVideo('portfolio')}
          onMouseLeave={() => setHoveredVideo(null)}
        >
          <ReactPlayer
            url={'wwedo9.mp4'}
            playing={hoveredVideo === 'portfolio'}
            loop={true}
            width='150px'
            height='120px'
          />
          <div className="hover-text">Portfolio Management</div>
          <p>Portfolio Management</p>
        </div>
      </Link>

      <Link to='/AIF'>
        <div
          className='bottom-left text-center'
          onMouseEnter={() => setHoveredVideo('aif')}
          onMouseLeave={() => setHoveredVideo(null)}
        >
          <ReactPlayer
            url={'wwedo4.mp4'}
            playing={hoveredVideo === 'aif'}
            loop={true}
            width='150px'
            height='120px'
          />
          <div className="hover-text">AIF</div>
          <p>AIF</p>
        </div>
      </Link>

      <Link to='/Moneyexc'>
        <div
          className='bottom-middle text-center'
          onMouseEnter={() => setHoveredVideo('moneyexchange')}
          onMouseLeave={() => setHoveredVideo(null)}
        >
          <ReactPlayer
            url={'wwedo7.mp4'}
            playing={hoveredVideo === 'moneyexchange'}
            loop={true}
            width='150px'
            height='120px'
          />
          <div className="hover-text">Money Exchange</div>
          <p>Money Exchange</p>
        </div>
      </Link>

      <Link to='/Loans'>
        <div
          className='bottom-right text-center'
          onMouseEnter={() => setHoveredVideo('loans')}
          onMouseLeave={() => setHoveredVideo(null)}
        >
          <ReactPlayer
            url={'wwedo5.mp4'}
            playing={hoveredVideo === 'loans'}
            loop={true}
            width='150px'
            height='120px'
          />
          <div className="hover-text">Loans</div>
          <p>Loan</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default Whatwedo;
