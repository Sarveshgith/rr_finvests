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

			{/* Lorem Ipsum text */}
			<div className='firm-description'>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<p>
					Vestibulum lacinia arcu eget nulla facilisis, in venenatis risus
					auctor.
				</p>
				<p>Fusce nec massa sit amet enim tempor venenatis.</p>
			</div>

			{/* Stats section */}
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
