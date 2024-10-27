import React from 'react'

const Corp_4 = () => {
  return (
    <div className='quote-container'>
    <h1 className='heading2'>FIRE INSURANCE - GET QUOTE</h1>
    <div className='quote-form'>
        <form>
            <div className='input-container'>
                <label htmlFor='carNumber'>
                    <i className='fa fa-search'></i>
                </label>
                <input type='text' id='carNumber' placeholder='Enter Car Number' />
            </div>
            <div className='input-container'>
                <label htmlFor='email'></label>
                <input type='email' id='email' placeholder='Enter mail id' />
            </div>
            <button type='submit' className='quote-btn'>
                Get Quote
            </button>
        </form>
    </div>
    <div className='info-box'></div>
</div>
  )
}

export default Corp_4
