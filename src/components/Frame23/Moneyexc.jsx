import React from 'react'
import './Moneyexc.css';
import '../Frame22/AIF.css';
import { motion } from "motion/react"
const Moneyexc = () => {
  return (
    <div className='frame21-content3'>
      <motion.div className="frame22-content1" initial={{opacity:0, y:200}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once: true}}>
        <h1>FOREX AND MONEY EXCHANGE</h1>
        <img src="moneyexch.jpg" alt="" className='frame21-img1' />
        <p className='text-center frame22-content2'>Forex, or foreign exchange, refers to the global marketplace for trading national currencies against one another. It operates as a decentralized market, where currencies are bought and sold, facilitating international trade and investment. The forex market is the largest financial market in the world, with daily trading volumes exceeding $6 trillion. </p>
      </motion.div>
    </div>
  )
}

export default Moneyexc
