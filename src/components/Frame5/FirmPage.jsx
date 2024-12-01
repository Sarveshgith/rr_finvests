import { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './FirmPage.css';
import { motion } from "motion/react"

const FirmPage = () => {
	const [startAnimation, setStartAnimation] = useState(false);
	const { ref: statsRef, inView } = useInView({
		triggerOnce: true,
		threshold: 0.3,
		onChange: (inView) => {
			if (inView) setStartAnimation(true);
		},
	});

	return (
		<motion.div  initial={{opacity:0, x:-200}} transition={{duration:1}} whileInView={{opacity:1, x:0}} viewport={{once: true}} className='firm-page' id='about'>
			<h1 className='heading2'>THE FIRM</h1>
	
			<div className='firm-description'>
			<p>We elevate wealth management to an art, offering discerning investors an exclusive, tailored experience. From elite investment solutions to bespoke insurance and portfolio management, we bring a level of service that matches your ambition and honors your vision.
With a full spectrum of services—from PMS and AIFs to high-end insurance and strategic loans—our approach is as precise as it is personal, designed for those who seek sophistication and results. Welcome to RR Finvests, where your financial future is managed with discretion, expertise, and a commitment to excellence.</p>
			</div>

			<div className='firm-stats' ref={statsRef}>
				<div className='firm-stat'>
					<h2>{startAnimation && <CountUp end={40} duration={2} />}Cr +</h2>
					<p>Assets Under Management</p>
				</div>

				<div className='firm-stat'>
					<h2>{startAnimation && <CountUp end={8} duration={2} />}+</h2>
					<p>Years of Experience</p>
				</div>

				<div className='firm-stat'>
					<h2>{startAnimation && <CountUp end={400} duration={2} />}+</h2>
					<p>Happy Customers</p>
				</div>

				<div className='firm-stat'>
					<h2>{startAnimation && <CountUp end={10} duration={2} />}+</h2>
					<p>Corporates being handled</p>
				</div>

				<div className='firm-stat'>
					<h2>{startAnimation && <CountUp end={25} duration={2} />}+</h2>
					<p>Industry Awards</p>
				</div>
			</div>
		</motion.div>
	);
};

export default FirmPage;
