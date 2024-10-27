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
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta dolorum assumenda ab tempora quibusdam eaque adipisci doloremque nostrum dolor, ut odit ad tenetur debitis cum. Corporis, repudiandae ad ea tempora labore perferendis explicabo porro vero. Placeat voluptate iusto suscipit illo tempora labore cupiditate itaque possimus nihil, a unde vel sapiente!</p>
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
