import React from 'react'
import { Link } from 'react-router-dom';
const Corp_2 = () => {
  return (
    <div className='insurance-container5'>
    <h1 className='title2'>FIRE INSURANCE</h1>
    <div className='insurance-cards5'>
        <div className='card5'>
            <img
                src='https://source.unsplash.com/300x200/?health,insurance'
                alt=''
                className='image-placeholder5'
            />
            <div className='text-placeholder5'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <Link to='/Fire_ins3'><button className='next-button5'>Next →</button></Link>
        </div>

        <div className='card5'>
            <img
                src='https://source.unsplash.com/300x200/?life,insurance'
                alt=''
                className='image-placeholder5'
            />
            <div className='text-placeholder5'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <button className='next-button5'>Next →</button>
        </div>

        <div className='card5'>
            <img
                src='https://source.unsplash.com/300x200/?car,insurance'
                alt=''
                className='image-placeholder5'
            />
            <div className='text-placeholder5'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <button className='next-button5'>Next →</button>
        </div>

        <div className='card5'>
            <img
                src='https://source.unsplash.com/300x200/?travel,insurance'
                alt=''
                className='image-placeholder5'
            />
            <div className='text-placeholder5'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <button className='next-button5'>Next →</button>
        </div>
    </div>
</div>
  )
}

export default Corp_2
