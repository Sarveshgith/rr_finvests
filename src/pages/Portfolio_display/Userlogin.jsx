import React, { useState } from "react";
import "./Userlogin.css"; // Add styles here or inline them
import Portfolio from "./Portfolio";


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
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  // Handle login
  const handleLogin = () => {
    const authenticatedUser = mockUserData.find(
      (u) => u.mobile === mobile && u.panCard === panCard
    );

    if (authenticatedUser) {
      setUser(authenticatedUser);
      setError("");
    } else {
      setError("Invalid mobile number or PAN card number.");
    }
  };

  // Dashboard view for user
  const UserDashboard = () => (
    <div className="container">
      <div className="weather-side">
        <div className="weather-gradient"></div>
        <div className="date-welcome">
          <h4 className="welcome">Welcome,</h4>
          <h2 className="username"> {user.username}</h2>
          </div>
          <div className="information">
          <h2 className="mobilenumber">
            <p>Mobile Number</p>
            <p>{user.mobile}</p>
          </h2>
          <h2 className="pan">
          <p>PAN Card </p>
          <p>{user.panCard}</p>          
          </h2>
          <h2 className="pan">
          <p>PAN Card </p>
          <p>{user.panCard}</p>          
          </h2>
          <h2 className="pan">
          <p>PAN Card </p>
          <p>{user.panCard}</p>          
          </h2>
        </div>
      </div>
      <div className="info-side">
        <div className="today-info-container">
          <div className="today-info1 card">
            <div className="current">
            <p className="value">₹{user.portfolio.toLocaleString()}</p>
            <h2 className="title">Current Portfolio Value</h2>
             
            </div>
          </div>
          <div className="today-info2 card">
            <div className="initial">
            <p className="value">₹{user.initialInvestment.toLocaleString()}</p>
              <h2 className="title">Initial Investment</h2>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Admin view
  const AdminDashboard = () => (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user.username}</p>
      <Portfolio />
    </div>
  );

  // Render based on user role
  if (user) {
    return user.role === "admin" ? <AdminDashboard /> : <UserDashboard />;
  }

  // Login view
  return (
    
    <div className="login-page">
        <div class="section">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
			          	<input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Log In</h4>
											<div class="form-group">
												<input type="text" name="mobilenumber" class="form-style" placeholder="Mobile number"value={mobile}
                                             onChange={(e) => setMobile(e.target.value)} id="logemail" autocomplete="off"/>
												<i class="input-icon uil uil-at"></i>
											</div>	
											<div class="form-group mt-2">
												<input type="text" name="pannumber" class="form-style" placeholder="PAN Number"  value={panCard}
                                             onChange={(e) => setPanCard(e.target.value)} id="pan" autocomplete="off"/>
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
                                            <button className="btn" onClick={handleLogin}>Login</button>
                                            {error && <p className="error">{error}</p>}                            				
				      					</div>
			      					</div>
			      				</div>
								<div class="card-back">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Sign Up</h4>
											<div class="form-group">
												<input type="text" name="logname" class="form-style" placeholder="Your Full Name" id="logname" autocomplete="off"/>
												<i class="input-icon uil uil-user"></i>
											</div>	
											<div class="form-group mt-2">
												<input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
												<i class="input-icon uil uil-at"></i>
											</div>	
											<div class="form-group mt-2">
												<input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<a href="#" class="btn mt-4">submit</a>
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