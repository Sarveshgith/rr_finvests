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

const App = () => {
	return (
		<div className='app'>
			<Routes >
				<Route path='/vite-project/' element={<Main />} />
				<Route path='/vite-project/Insurance' element={<Insurances />} />
				<Route path='/vite-project/MotorIns' element={<MotorInsurance />} />
				<Route path='/vite-project/MotorIns1' element={<MotorIns1 />} />
				<Route path='/vite-project/CarIns' element={<CarIns />} />
				<Route path='/vite-project/CarIns1' element={<CarIns1 />} />
				<Route path='/vite-project/HealthIns' element={<HealthIns />} />
				<Route path='/vite-project/HealthIns1' element={<HealthIns1 />} />
				<Route path='/vite-project/Ins1' element={<Insurance1 />} />
				<Route path='/vite-project/Ins2' element={<Insurance2 />} />
            </Routes>
		</div>
	);
};
  

export default App;
