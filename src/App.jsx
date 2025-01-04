import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/Main/Main';
import About from './components/Frame2/About';
import News from './components/Frame8/News';
import Insurances from './pages/Insurances/Insurances';
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
import Corp_ins from './pages/Corp_ins/Corp_ins';
import Corp_ins1 from './pages/Corp_ins1/Corp_ins1';
import Corp_ins2 from './pages/Corp_ins2/Corp_ins2';
import Corp_ins3 from './pages/Corp_ins3/Corp_ins3';
import Corp_ins4 from './pages/Corp_ins4/Corp_ins4';
import Corp_ins5 from './pages/Corp_ins5/Corp_ins5';
import Corp_ins6 from './pages/Corp_ins6/Corp_ins6';
import Corp_ins7 from './pages/Corp_ins7/Corp_ins7';
import Corp_ins8 from './pages/Corp_ins8/Corp_ins8';
import Tools from './pages/Tools/Tools';
import Portfolio from './pages/Portfolio_display/Portfolio';
import Userlogin from './pages/Portfolio_display/Userlogin';
import Dashboard from './pages/Portfolio_display/Dashboard';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<News />} />
        <Route path='/Whatwedo' element={<WhatWeDo />} />
        <Route path='/Mutualfunds' element={<Mutualfunds />} />
        <Route path='/Main_ins1' element={<Main_ins1 />} />
        <Route path='/Insurance' element={<Insurances />} />
        <Route path='/MotorIns' element={<MotorInsurance />} />
        <Route path='/MotorIns1' element={<MotorIns1 />} />
        <Route path='/CarIns' element={<CarIns />} />
        <Route path='/CarIns1' element={<CarIns1 />} />
        <Route path='/HealthIns' element={<HealthIns />} />
        <Route path='/HealthIns1' element={<Corp_ins6 />} />
        <Route path='/Ins1' element={<Insurance1 />} />
        <Route path='/Ins2' element={<Insurance2 />} />
        <Route path='/PMS' element={<Pms />} />
        <Route path='/AIF' element={<Aif />} />
        <Route path='/Moneyexc' element={<Money_exch />} />
        <Route path='/Loans' element={<Loan_s />} />
        <Route path='/Corp_ins' element={<Corp_ins />} />
        <Route path='/Fire_ins1' element={<Corp_ins1 />} />
        <Route path='/Fire_ins2' element={<Corp_ins2 />} />
        <Route path='/Fire_ins3' element={<Corp_ins3 />} />
        <Route path='/Fire_ins4' element={<Corp_ins4 />} />
        <Route path='/Marine_ins1' element={<Corp_ins5 />} />
        <Route path='/Marine_ins2' element={<Corp_ins6 />} />
        <Route path='/GMC_ins1' element={<Corp_ins7 />} />
        <Route path='/Engineering_ins1' element={<Corp_ins8 />} />
        <Route path='/tools' element={<Tools />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/dashboard/:role/:username' element={<Dashboard />} />
        <Route path='/userlogin' element={<Userlogin />} />
      </Routes>
    </div>
  );
};

export default App;
