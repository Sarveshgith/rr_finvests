import React, { useEffect, useState } from 'react';
import './Portfolio.css'; // Separate CSS file for styling
import * as XLSX from 'xlsx';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const fakeData = [
    {
      username: 'John Doe',
      mobileNumber: '9876543210',
      panCardNumber: 'ABCDE1234F',
      currentPortfolio: 150000,
      initialInvestment: 100000,
    },
    {
      username: 'Jane Smith',
      mobileNumber: '8765432109',
      panCardNumber: 'XYZAB9876D',
      currentPortfolio: 250000,
      initialInvestment: 200000,
    },
    {
      username: 'Robert Brown',
      mobileNumber: '7654321098',
      panCardNumber: 'LMNOP5432K',
      currentPortfolio: 500000,
      initialInvestment: 400000,
    },
    {
      username: 'Alice Johnson',
      mobileNumber: '6543210987',
      panCardNumber: 'QRSTU6543L',
      currentPortfolio: 120000,
      initialInvestment: 80000,
    },
  ];

  const [userData, setUserData] = useState(null);

  // Simulate data fetching
  useEffect(() => {
    // Simulate a delay to mimic a backend fetch
    setTimeout(() => {
      setUserData(fakeData);
      setIsLoading(false);
    }, 1000); // 1-second delay
  }, []);
{/* const fetchData = async () => {
    try {
      const response = await fetch('https://your-backend-url.com/api/user-portfolio');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setUserData(data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  */} 
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        setUserData(json);
      };
      reader.readAsArrayBuffer(file);
    }
  };
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-heading">User Portfolio</h1>
      <div className="file-upload-container">
        <h2>Upload User Data</h2>
        <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      </div>
      <div className="card-container">
        {userData.map((user, index) => (
          <div className="user-card" key={index}>
            <h2 className="user-name">{user.username}</h2>
            <p><strong>Mobile:</strong> {user.mobileNumber}</p>
            <p><strong>PAN Card:</strong> {user.panCardNumber}</p>
            <p><strong>Current Portfolio:</strong> ₹{user.currentPortfolio.toLocaleString()}</p>
            <p><strong>Initial Investment:</strong> ₹{user.initialInvestment.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
