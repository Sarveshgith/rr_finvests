
import React, { useEffect, useState } from 'react';


import './Portfolio.css';
import * as XLSX from 'xlsx';
import axios from 'axios';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState([]);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post('http://34.100.131.9:5000/api/users/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const token = localStorage.getItem('token');
  const fetchUsersData = async () => {
    const response = await axios.get('http://34.100.131.9:5000/api/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUserData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchUsersData();
  });
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1-second delay
  });

  if (isLoading) {
    return <div className='loading'>Loading...</div>;
  }

  if (error) {
    return <div className='error'>Error: {error}</div>;
  }

  return (
    <div className='portfolio-container'>
      <h1 className='portfolio-heading'>USER PORTFOLIO</h1>
      <div className='file-upload-container'>
        <h2>Upload User Data</h2>
        <input type='file' onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>      </div>
        <div className='card-container'>
        {userData.map((user, index) => (
            <div className='user-card' key={index}>

            <h2 className='user-name'>{user.name}</h2>
            <p>
              <strong>Mobile:</strong> {user.mobile_no}
            </p>
            <p>
              <strong>PAN Card:</strong> {user.pan_no}
            </p>
            <p>
              <strong>Current Portfolio:</strong> ₹{user.current_value}
            </p>
            <p>
              <strong>Initial Investment:</strong> ₹{user.initial_deposit}
            </p>
          </div>
        ))}
             </div>
    </div>
  );
};

export default Portfolio;
