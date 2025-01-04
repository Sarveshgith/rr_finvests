import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Userlogin.css'; // Add styles here or inline them
import axios from 'axios';
const mockUserData = [
  {
    id: 1,
    username: 'John Doe',
    mobile: '1234567890',
    panCard: 'ABCDE1234F',
    portfolio: 50000,
    initialInvestment: 40000,
    role: 'user',
  },
  {
    id: 2,
    username: 'Jane Smith',
    mobile: '9876543210',
    panCard: 'XYZ12345H',
    portfolio: 70000,
    initialInvestment: 60000,
    role: 'admin',
  },
];

const Userlogin = ({setShowlogin}) => {
  const [mobile, setMobile] = useState('');
  const [panCard, setPanCard] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');

  const [error, setError] = useState('');

  const randNum = Math.floor(1000 + Math.random() * 9000);
  const loginUser = async (mobile, panCard) => {
    try {
      const response = await axios.post('https://rrfinvests.sarveswaran.tech/api/users/login', {
        mobile: mobile,
        pan: panCard,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      return token;
    } catch (error) {
      window.alert('Invalid Credentials.Please Check again!');
      console.error('Login error:', error);
      throw error;
    }
  };
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Token is missing');

      const response = await axios.get('https://rrfinvests.sarveswaran.tech/api/users/user', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Fetched user data:', response.data);
      if (!response.data) throw new Error('Invalid user data');

      console.log('User data:', response.data);
      setUser(response.data);
      if (response.data.role == 'USER') {
        sendOTP();
      } else {
        navigate(`/dashboard/${response.data.role}/${response.data.name}`, { state: { user: response.data } });
      }
    } catch (error) {
      console.error('Fetching user data failed:', error);
    }
  };

  const handleOTP = async () => {
    try {
      if (otp == randNum) {
        navigate(`/dashboard/${user.role}/${user.name}`, { state: { user } });
      } else {
        setError('Invalid OTP');
      }
    } catch (error) {
      console.error('OTP verification failed:', error);
    }
  };

  const sendOTP = async () => {
    try {
      const response = await axios.post('https://rrfinvests.sarveswaran.tech/send_msg', {
        number: user.mobile_no.toString(),
        msg: randNum.toString(),
      });
    } catch (error) {
      console.error('OTP sending failed:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const token = await loginUser(mobile, panCard);
      if (token) {
        localStorage.setItem('token', token);
        console.log("Logged in successfully")
        fetchUserData();
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className='login-page'>
      <div className='sectionl'>
        <div className='containerl'>
          <div className='row full-height justify-content-center'>
            <div className='col-12 text-center align-self-center py-5'>
              <label htmlFor='reg-log'></label>
              <div className='card-3d-wrap mx-auto'>
                <div className='card-front'>
                  <h2>LOG-IN</h2>
                  <div className='center-wrap'>
                    <div className='section text-center'>
                      <div className='form-group'>
                        <input
                          type='text'
                          name='mobilenumber'
                          className='form-style'
                          placeholder='Mobile number'
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          id='logemail'
                          autoComplete='off'
                        />
                        <i className='input-icon uil uil-at'></i>
                      </div>
                      <div className='form-group mt-2'>
                        <input
                          type='text'
                          name='pannumber'
                          className='form-style'
                          placeholder='PAN Number'
                          value={panCard}
                          onChange={(e) => setPanCard(e.target.value)}
                          id='pan'
                          autoComplete='off'
                        />
                        <i className='input-icon uil uil-lock-alt'></i>
                      </div>
                      {user && user.role == 'USER' && (
                        <div className='form-group mt-2'>
                          <input
                            type='text'
                            name='otp'
                            className='form-style'
                            placeholder='Enter OTP'
                            id='otp'
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            autoComplete='off'
                          />
                          <i className='input-icon uil uil-lock-alt'></i>
                        </div>
                      )}
                      <div className='flex flex-col'>
                        <button className='btn' onClick={user ? handleOTP : handleLogin}>
                          {user ? 'Verify OTP' : 'Login'}
                        </button>
                        {user && 'OTP is sent to your registered mobile number'}
                      </div>
                      {error && <p className='error'>{error}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Userlogin;
