import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Userlogin.css"; // Add styles here or inline them

const mockUserData = [
  {
    id: 1,
    username: "John Doe",
    mobile: "1234567890",
    panCard: "ABCDE1234F",
    portfolio: 50000,
    initialInvestment: 40000,
    role: "user",
  },
  {
    id: 2,
    username: "Jane Smith",
    mobile: "9876543210",
    panCard: "XYZ12345H",
    portfolio: 70000,
    initialInvestment: 60000,
    role: "admin",
  },
];

const Userlogin = () => {
  const [mobile, setMobile] = useState("");
  const [panCard, setPanCard] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle login
  const handleLogin = () => {
    const authenticatedUser = mockUserData.find(
      (u) => u.mobile === mobile && u.panCard === panCard
    );

    if (authenticatedUser) {
      setError("");
      navigate(`/dashboard/${authenticatedUser.role}/${authenticatedUser.username}`, { state: { user: authenticatedUser } });
    } else {
      setError("Invalid mobile number or PAN card number.");
    }
  };

  return (
    <div className="login-page">
      <div className="sectionl">
        <div className="containerl">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-front">
                  <h2>LOG-IN</h2>
                  <div className="center-wrap">
                    <div className="section text-center">
                      <div className="form-group">
                        <input
                          type="text"
                          name="mobilenumber"
                          className="form-style"
                          placeholder="Mobile number"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          id="logemail"
                          autoComplete="off"
                        />
                        <i className="input-icon uil uil-at"></i>
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="text"
                          name="pannumber"
                          className="form-style"
                          placeholder="PAN Number"
                          value={panCard}
                          onChange={(e) => setPanCard(e.target.value)}
                          id="pan"
                          autoComplete="off"
                        />
                        <i className="input-icon uil uil-lock-alt"></i>
                      </div>
                      <button className="btn" onClick={handleLogin}>Login</button>
                      {error && <p className="error">{error}</p>}
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