
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import AboutPage from './components/Frame-1/AboutPage'; 
import FirmPage from './components/Frame-2/FirmPage';
import HealthInsurance from './components/Frame-3/HealthInsurance'; 
import CarInsurance from './components/Frame-4/CarInsurance';
import Insurance from './components/Frame-5/Insurance';
import CarInsuranceQuote from './components/Frame-6/CarInsuranceQuote';
import InsuranceCard from './components/Frame-7/InsuranceCard';
import MotorInsuranceCard from './components/Frame-8/MotorInsuranceCard';

function App() {
  return (
    <div className="App">
      <AboutPage />
      <FirmPage />
      <HealthInsurance />
      <CarInsurance />
      <Insurance />
      <CarInsuranceQuote/>
      <InsuranceCard/>
      <MotorInsuranceCard/>
      
    </div>
  );
}

export default App;
