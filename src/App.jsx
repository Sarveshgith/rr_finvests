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
				<Route path='/vite-project/' element={<Main />} />
				<Route path='/vite-project/Whatwedo' element={<WhatWeDo />} />
				<Route path='/vite-project/Mutualfunds' element={<Mutualfunds />} />
				<Route path='/vite-project/Main_ins1' element={<Main_ins1 />} />
				<Route path='/vite-project/Insurance' element={<Insurances />} />
				<Route path='/vite-project/MotorIns' element={<MotorInsurance />} />
				<Route path='/vite-project/MotorIns1' element={<MotorIns1 />} />
				<Route path='/vite-project/CarIns' element={<CarIns />} />
				<Route path='/vite-project/CarIns1' element={<CarIns1 />} />
				<Route path='/vite-project/HealthIns' element={<HealthIns />} />
				<Route path='/vite-project/HealthIns1' element={<HealthIns1 />} />
				<Route path='/vite-project/Ins1' element={<Insurance1 />} />
				<Route path='/vite-project/Ins2' element={<Insurance2 />} />
				<Route path='/vite-project/PMS' element={<Pms />} />
				<Route path='/vite-project/AIF' element={<Aif />} />
				<Route path='/vite-project/Moneyexc' element={<Money_exch />} />
				<Route path='/vite-project/Loans' element={<Loan_s />} />
            </Routes>
		</div>
	);
};
  

export default App;
