import { useState, useEffect } from 'react';
import './Userlogin.css'; // Add styles here or inline them
import Portfolio from './Portfolio';
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

const Userlogin = () => {
  const [mobile, setMobile] = useState('');
  const [panCard, setPanCard] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const loginUser = async (mobile, panCard) => {
    try {
      const response = await axios.post('http://34.100.131.9:5000/api/users/login', {
        mobile: mobile,
        pan: panCard,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      return token;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await axios.get('http://34.100.131.9:5000/api/users/user', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('User data:', response.data);
      setUser(response.data);
    } catch (error) {
      console.error('Fetching user data failed:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const token = await loginUser(mobile, panCard);
      if (token) {
        localStorage.setItem('token', token);
        fetchUserData();
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const UserDashboard = () => (
    <div className='container'>
      <div className='weather-side'>
        <div className='weather-gradient'></div>
        <div className='date-welcome'>
          <h4 className='welcome'>Welcome,</h4>
          <h2 className='username'> {user.name}</h2>
        </div>
        <div className='information'>
          <h2 className='mobilenumber'>
            <p>Mobile Number</p>
            <p>{user.mobile_no}</p>
          </h2>
          <h2 className='pan'>
            <p>PAN Card </p>
            <p>{user.pan_no}</p>
          </h2>
        </div>
      </div>
      <div className='info-side'>
        <div className='today-info-container'>
          <div className='today-info1 card'>
            <div className='current'>
              <p className='value'>₹{user.current_value.toLocaleString()}</p>
              <h2 className='title'>Current Portfolio Value</h2>
            </div>
          </div>
          <div className='today-info2 card'>
            <div className='initial'>
              <p className='value'>₹{user.initial_deposit.toLocaleString()}</p>
              <h2 className='title'>Initial Investment</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Admin view
  const AdminDashboard = () => (
    <div className='admin-container'>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user.name}</p>
      <Portfolio />
    </div>
  );

  if (user) {
    return user.role === 'ADMIN' ? <AdminDashboard /> : <UserDashboard />;
  }

  // Login view
  return (
    <div className='login-page'>
      <div className='section'>
        <div className='container'>
          <div className='row full-height justify-content-center'>
            <div className='col-12 text-center align-self-center py-5'>
              <div className='section pb-5 pt-5 pt-sm-2 text-center'>
                <h6 className='mb-0 pb-3'>
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input className='checkbox' type='checkbox' id='reg-log' name='reg-log' />
                <label for='reg-log'></label>
                <div className='card-3d-wrap mx-auto'>
                  <div className='card-3d-wrapper'>
                    <div className='card-front'>
                      <div className='center-wrap'>
                        <div className='section text-center'>
                          <h4 className='mb-4 pb-3'>Log In</h4>
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
                          <button className='btn' onClick={handleLogin}>
                            Login
                          </button>
                          {error && <p className='error'>{error}</p>}
                        </div>
                      </div>
                    </div>
                    <div className='card-back'>
                      <div className='center-wrap'>
                        <div className='section text-center'>
                          <h4 className='mb-4 pb-3'>Sign Up</h4>
                          <div className='form-group'>
                            <input
                              type='text'
                              name='logname'
                              className='form-style'
                              placeholder='Your Full Name'
                              id='logname'
                              autoComplete='off'
                            />
                            <i className='input-icon uil uil-user'></i>
                          </div>
                          <div className='form-group mt-2'>
                            <input
                              type='email'
                              name='logemail'
                              className='form-style'
                              placeholder='Your Email'
                              id='logemail'
                              autoComplete='off'
                            />
                            <i className='input-icon uil uil-at'></i>
                          </div>
                          <div className='form-group mt-2'>
                            <input
                              type='password'
                              name='logpass'
                              className='form-style'
                              placeholder='Your Password'
                              id='logpass'
                              autoComplete='off'
                            />
                            <i className='input-icon uil uil-lock-alt'></i>
                          </div>
                          <a href='#' className='btn mt-4'>
                            submit
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userlogin;
