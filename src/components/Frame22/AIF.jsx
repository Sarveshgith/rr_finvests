import React from 'react'
import './AIF.css'
import { motion } from "motion/react"

const AIF = () => {
  return (
    <div className='frame21-content3' >
      <motion.div className="frame22-content1 " initial={{opacity:0, y:200}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once: true}}>
        <h1 className='text-center'>ALTERNATIVE INVESTMENT FUND</h1>
        <img src="aif.jpg" alt="" className='frame21-img1' />
        <p className='text-center frame22-content2'>Alternative Investment Fund is a special investment category that differs from conventional investment instruments. It is a privately pooled fund. Generally, institutions and HNIs invest in AIFs as substantial investments are required. 
        These investment vehicles adhere to the SEBI (Alternative Investment Funds) Regulations, 2012. AIFs can be formed as a company, Limited Liability Partnership (LLP), trust, etc</p>
      
      </motion.div>
      

    </div>
  )
}

export default AIF
