import React, { useState } from 'react'
import './Login.css';
import Userlogin from '../../pages/Portfolio_display/Userlogin';
const Mf = () => {
    const [showlogin,setShowlogin] =useState(false)
    return (
    <>
        {showlogin?<Userlogin setShowlogin={setShowlogin} />:<></>}
        <div className="container2">

            <div className="details">
                <div className="content">
                    <div className='mf-top'>
                    <h2>MUTUAL FUNDS <br />
                    </h2>
                    <button className="btn" onClick={()=>setShowlogin(true)} >Login</button>
                    </div>
                    <img src="mf.png" className='mf-image' alt="" />
                    <p className=''>Mutual funds are ideal for investors who either lack large sums for investment, or for those who neither have the inclination nor the time to research the market, yet want to grow their wealth. The money collected in mutual funds is invested by professional fund managers in line with the scheme’s stated objective. In return, the fund house charges a small fee which is deducted from the investment. The fees charged by mutual funds are regulated and are subject to certain limits specified by the Securities and Exchange Board of India (SEBI). </p>
                    <p className=''>India has one of the highest savings rate globally. This penchant for wealth creation makes it necessary for Indian investors to look beyond the traditionally favoured bank FDs and gold towards mutual funds. However, lack of awareness has made mutual funds a less preferred investment avenue.
                    </p>
                    <p className=''>Mutual funds offer multiple product choices for investment across the financial spectrum. As investment goals vary – post-retirement expenses, money for children’s education or marriage, house purchase, etc. – the products required to achieve these goals vary too. The Indian mutual fund industry offers a plethora of schemes and caters to all types of investor needs.
                    </p>
                    <p className=''>Mutual funds offer an excellent avenue for retail investors to participate and benefit from the uptrends in capital markets. While investing in mutual funds can be beneficial, selecting the right fund can be challenging. Hence, investors should do proper due diligence of the fund and take into consideration the risk-return trade-off and time horizon or consult a professional investment adviser. Further, in order to reap maximum benefit from mutual fund investments, it is important for investors to diversify across different categories of funds such as equity, debt and gold.</p>
                </div>
            </div>
            
        </div>
   </> )
};



export default Mf
