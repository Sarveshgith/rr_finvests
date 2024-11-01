import React from 'react';
import './CarInsQuote.css';

const CarInsuranceQuote = () => {
	return (
		<div className='quote-container'>
			<h1 className='title1'>VEHICLE INSURANCE - GET QUOTE</h1>
			<div className='quote-form'>
				<form>
					<div className='input-container'>
						<label htmlFor='carNumber'>
							<i className='fa fa-search'></i>
						</label>
						<input type='text' id='carNumber' placeholder='Enter Vechicle Number' />
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
	);
};

export default CarInsuranceQuote;
