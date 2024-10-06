
import React from 'react';
import InsuranceCard from './components/InsuranceCard'; // Import the InsuranceCard component
import CarInsuranceQuote from './components/CarInsuranceQuote';
import MotorInsuranceCard from './components/MotorInsuranceCard'; 
function App() {
  return (
    <div>
      <InsuranceCard />  {/* Render the InsuranceCard component */}
      <CarInsuranceQuote />
      <MotorInsuranceCard/>
    </div>
  );
}

export default App;
