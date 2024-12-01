import React from 'react';
import './About.css';
import { motion } from "motion/react"

function App() {
	return (
		<motion.div initial={{opacity:0, x:200}} transition={{duration:1}} whileInView={{opacity:1, x:0}} viewport={{once: true}} className='container1'>

			<h1 className='heading1'>HOW INVESTMENTS ARE INTELLIGENT WITH US</h1>
			<div className='content1'>
				<div className='text1'>
					<p className='text-center'>With RR Finvests, Intelligence in investing goes beyond strategy—it’s about insight, precision, and vision. Designed to go beyond returns, each portfolio is a sophisticated fusion of opportunity and stability  with access to unique investment avenues reserved for those who seek true distinction. Here, wealth isn’t merely preserved—it’s positioned to flourish intelligently across every market shift. Every financial move is a deliberate step toward fulfilling your vision, reflecting both insight and ambition. This is investing, elevated.
					</p>
				</div>
				<div className='image-placeholder1'>
					<img
						src='inte.png'
						alt='Investment1'
						className='image1'
					/>
				</div>
			</div>
		</motion.div>
	);
}

export default App;
