import React from 'react';
import Header from './components/Navbar/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/Frame2/About';
import Firm from './components/Frame5/FirmPage';
import Home from './components/Frame6/Home';
import Home1 from './components/Frame7/Home1';
import Mf from './components/Frame10/Mf';
import News from './components/Frame8/News';
import MotarIns1 from './components/Frame11/MotarIns1';
import HealthIns1 from './components/Frame12/HealthIns1';
import Ins1 from './components/Frame13/Ins1';
import Ins2 from './components/Frame14/Ins2';
import Whatwedo from './components/Frame9/Whatwedo';
import Insurance from './components/Frame15/Insurance';
import MotorInsuranceCard from './components/Frame16/MotorIns';
import HealthInsurance from './components/Frame17/HealthIns';
import InsuranceCard from './components/Frame18/InsurancsCard';
import CarInsurance from './components/Frame19/CarIns';
import CarInsuranceQuote from './components/Frame20/CarInsQuote';

const App = () => {
	return (
		<div className='app'>
			<Header />
			<About />
			<Firm />
			<Home />
			<Home1 />
			<News />
			<Mf />
			<MotarIns1 />
			<HealthIns1 />
			<Ins1 />
			<Ins2 />
			<Whatwedo />
			<Insurance />
			<MotorInsuranceCard />
			<HealthInsurance />
			<InsuranceCard />
			<CarInsurance />
			<CarInsuranceQuote />
		</div>
	);
};

export default App;
