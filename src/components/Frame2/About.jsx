import React from 'react';
import './About.css';
import {Link}from 'react-router-dom';

import { motion } from "motion/react"

function App() {
	return (
		<div className="container11">
		<motion.div initial={{opacity:0, x:200}} transition={{duration:1}} whileInView={{opacity:1, x:0}} viewport={{once: true}} className='container1'>			
		<div class="blob-c">
    <div class="shape-blob"></div>
    <div class="shape-blob one"></div>
    <div class="shape-blob two"></div>
    <div class="shape-blob five"></div>
    <div class="shape-blob six"></div>
  </div>	

		<div className='content1'>
 		 <div className='left-section'>
  			  <h1 className='heading1'>HOW INVESTMENTS ARE INTELLIGENT WITH US</h1>
 		 </div>
  		<div className='right-section'>
   		 	<div className='text1'>
      			<p className='text-center'>
       			 With RR Finvests, Intelligence in investing goes beyond strategy—it’s about insight, precision, and vision. Designed to go beyond returns, each portfolio is a sophisticated fusion of opportunity and stability with access to unique investment avenues reserved for those who seek true distinction. Here, wealth isn’t merely preserved—it’s positioned to flourish intelligently across every market shift. Every financial move is a deliberate step toward fulfilling your vision, reflecting both insight and ambition. This is investing, elevated.
      			</p>
      		<div className="explore">
       			 <Link to='/Whatwedo'>
          	<button className="explorebutton1 text-center ">Explore →</button>
        	</Link>
      </div>
    </div>
  </div>
</div>




			
			
			</motion.div>
			</div>

	);
}

export default App;
