import { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './FirmPage.css';

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
		<div className='firm-page' id='about'>
			<h1 className='heading2'>THE FIRM</h1>
	
			<div className='firm-description'>
			<p>We elevate wealth management to an art, offering discerning investors an exclusive, tailored experience. From elite investment solutions to bespoke insurance and portfolio management, we bring a level of service that matches your ambition and honors your vision.

With a full spectrum of services—from PMS and AIFs to high-end insurance and strategic loans—our approach is as precise as it is personal, designed for those who seek sophistication and results. Welcome to RR Finvests, where your financial future is managed with discretion, expertise, and a commitment to excellence.</p>
			</div>

			<div className='firm-stats' ref={statsRef}>
				<div className='firm-stat'>
					<h2>{startAnimation && <CountUp end={34} duration={2} />}Cr +</h2>
					<p>Assets Under Management</p>
				</div>

				<div className='firm-stat'>
					<h2>{startAnimation && <CountUp end={10} duration={2} />}+</h2>
					<p>Years of Experience</p>
				</div>

				<div className='firm-stat'>
					<h2>{startAnimation && <CountUp end={280} duration={2} />}+</h2>
					<p>Employees</p>
				</div>

				<div className='firm-stat'>
					<h2>{startAnimation && <CountUp end={10} duration={2} />}+</h2>
					<p>Offices Worldwide</p>
				</div>

				<div className='firm-stat'>
					<h2>{startAnimation && <CountUp end={5} duration={2} />}+</h2>
					<p>Industry Awards</p>
				</div>
			</div>
		</div>
	);
};

export default FirmPage;
