import React from 'react';
import './AboutPage.css'; // External CSS for styling

const App = () => {
  return (
    <div className="container1">
      {/* Left Side Content */}
      <div className="left-section1">
        <h1 className="heading1">How investments are intelligent with us</h1>
        <div className="text-placeholder1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <p>Nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="right-section1">
        <div className="image-container1">
          <img
            src="investment-placeholder.png"
            alt="Investment Illustration"
            className="beckham-image1"
          />
          <div className="image-text1"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
