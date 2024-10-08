import React from 'react';
import './HealthInsurance.css';

const HealthInsurance = () => {
  return (
    <div className="insurance-container">
      <h1 className="title">Health Insurance</h1>
      <div className="insurance-content">
        {/* Card 1 */}
        <div className="insurance-card">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Stock Image 1"
            className="insurance-image"
          />
          <div className="insurance-details">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Curabitur et semper nibh. Aenean at risus vel.</p>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
          </div>
          <button className="next-button">Next →</button>
        </div>
        {/* Card 2 */}
        <div className="insurance-card">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Stock Image 2"
            className="insurance-image"
          />
          <div className="insurance-details">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Curabitur et semper nibh. Aenean at risus vel.</p>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
          </div>
          <button className="next-button">Next →</button>
        </div>
      </div>
    </div>
  );
};

export default HealthInsurance;
