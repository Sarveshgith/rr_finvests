import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/Main/Main';
import Insurances from './pages/Insurances/Insurances'
import CarIns from './pages/CarIns/CarIns';
import { Route, Routes } from 'react-router-dom';
import CarIns1 from './pages/CarIns1/CarIns1';
import MotorIns1 from './pages/MotorIns1/MotorIns1';
import HealthIns1 from './pages/HealthIns1/HealthIns1';
import HealthIns from './pages/HealthInsurance/HealthIns';
import Insurance1 from './pages/Insurance1/Insurance1';
import Insurance2 from './pages/Insurance2/Insurance2';
import MotorInsurance from './pages/MotorInsurance/MotorInsurance';
import Mutualfunds from './pages/Mutualfunds/Mutualfunds';
import Main_ins1 from './pages/main_insurance/Main_ins1';
import Pms from './pages/PMS/Pms';
import Aif from './pages/AIF/Aif';
import Money_exch from './pages/Moneyexchange/Money_exch';
import Loan_s from './pages/Loans/Loan_s';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';

const App = () => {
	return (
		<div className='app'>
			<Routes >
				<Route path='/' element={<Main />} />
				<Route path='/Whatwedo' element={<WhatWeDo />} />
				<Route path='/Mutualfunds' element={<Mutualfunds />} />
				<Route path='/Main_ins1' element={<Main_ins1 />} />
				<Route path='/Insurance' element={<Insurances />} />
				<Route path='/MotorIns' element={<MotorInsurance />} />
				<Route path='/MotorIns1' element={<MotorIns1 />} />
				<Route path='/CarIns' element={<CarIns />} />
				<Route path='/CarIns1' element={<CarIns1 />} />
				<Route path='/HealthIns' element={<HealthIns />} />
				<Route path='/HealthIns1' element={<HealthIns1 />} />
				<Route path='/Ins1' element={<Insurance1 />} />
				<Route path='/Ins2' element={<Insurance2 />} />
				<Route path='/PMS' element={<Pms />} />
				<Route path='/AIF' element={<Aif />} />
				<Route path='/Moneyexc' element={<Money_exch />} />
				<Route path='/Loans' element={<Loan_s />} />
            </Routes>
		</div>
	);
};
  

export default App;
