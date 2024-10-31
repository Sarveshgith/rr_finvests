import React from 'react';
import './Whatwedo.css';
import { Link } from 'react-router-dom';

const Whatwedo = () => {
  return (
    <div className='whole' id='Whatwedo'>
      <div className='center text-center'>
        <h1>RR</h1>
        <h1>FINVESTS</h1>
      </div>
      
      {/* Card Links */}
      <Link to='/Main_ins1'>
        <div className='top-left'>
          <img
            src='insurance.jpg'
            alt=''
            className='image-placeholder4'
          />
          <div className="hover-text">Insurance</div> {/* Hover text */}
        </div>
      </Link>

      <Link to='/Mutualfunds'>
        <div className='top-middle'>
          <img
            src='mutualfunds.png'
            alt=''
            className='image-placeholder4'
          />
          <div className="hover-text">Mutual Funds</div> {/* Hover text */}
        </div>
      </Link>

      <Link to='/PMS'>
        <div className='top-right'>
          <img
            src='portfolio.png'
            alt=''
            className='image-placeholder4'
          />
          <div className="hover-text">Portfolio Management</div> {/* Hover text */}
        </div>
      </Link>

      <Link to='/AIF'>
        <div className='bottom-left'>
          <img
            src='alternatein.jpg'
            alt=''
            className='image-placeholder4'
          />
          <div className="hover-text">AIF</div> {/* Hover text */}
        </div>
      </Link>

      <Link to='/Moneyexc'>
        <div className='bottom-middle'>
          <img
            src='moneyexh.png'
            alt=''
            className='image-placeholder4'
          />
          <div className="hover-text">Money Exchange</div> {/* Hover text */}
        </div>
      </Link>

      <Link to='/Loans'>
        <div className='bottom-right'>
          <img
            src='loan.png'
            alt=''
            className='image-placeholder4'
          />
          <div className="hover-text">Loans</div> {/* Hover text */}
        </div>
      </Link>
    </div>
  );
}

export default Whatwedo;
