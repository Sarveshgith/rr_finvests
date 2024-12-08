import React from 'react'
import './Loans.css'
import { motion } from "motion/react"
const Loans = () => {
  return (
    <div className='frame21-content3'>
      <motion.div className="frame21-content1" initial={{opacity:0, y:200}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once: true}}>
        <h1>LOANS</h1>
        <img src="loans.jpg" alt="" className='frame21-img1' />
        <p className='text-center frame21-content2'>The term loan refers to a type of credit vehicle in which a sum of money is lent to another party in exchange for future repayment of the value or principal amount. In many cases, the lender also adds interest or finance charges to the principal value, which the borrower must repay in addition to the principal balance.
        Loans may be for a specific, one-time amount, or they may be available as an open-ended line of credit up to a specified limit. Loans come in many different forms including secured, unsecured, commercial, and personal loans.</p>
      </motion.div>
    </div>
  )
}

export default Loans
