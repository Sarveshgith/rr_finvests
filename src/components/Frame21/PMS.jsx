import React from 'react'
import './PMS.css'
import { motion } from "motion/react"
const PMS = () => {
  return (
    <div className='frame21-content3' >
      <motion.div className="frame21-content1" initial={{opacity:0, y:200}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once: true}}>
        <h1 className='text-center'>PORTFOLIO MANAGEMENT SERVICE</h1>
        <img src="pms.jpg" alt="" className='frame21-img1' />
        <p className='text-center frame21-content2'>Portfolio Management Service (PMS) is a professional financial service where skilled portfolio managers and stock market professionals manage your equity portfolio with the assistance of a research team. Many investors have equity portfolios in their Demat Account but managing them can be a challenge. PMS is a systematic approach to maximise returns while minimising the risk factor on your investments. It enables you to make sound decisions that are supported by extensive research and factual data without lifting a finger. Additionally, it better prepares you to deal with market adversity.</p>
      </motion.div>
    </div>
  )
}

export default PMS
