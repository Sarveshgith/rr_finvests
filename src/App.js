// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import FirmPage from './components/FirmPage';
import HealthInsurance from './components/HealthInsurance'; 
import CarInsurance from './components/CarInsurance';
import Insurance from './components/Insurance';
import AboutPage from './components/AboutPage'; 


function App() {
  return (
    <div className="App">
      <AboutPage />
      <FirmPage />
      
      <HealthInsurance />
      <CarInsurance />
      <Insurance />

      
    
    </div>
  );
}

export default App;
