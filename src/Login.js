import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import google from './google.png';
import { useNavigate } from "react-router-dom";
import './SignIn.css'

function Login() {
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  }

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('email') !== null;

    if (isLoggedIn) {
      // User is logged in, redirect to the Dash route
      navigate('/Dash');
    } else {
      setValue(null);
    }
  }, [navigate]);

return (
    <div>
         <div className="home">
      <div className="name">
        <h1 className="welcome">Welcome</h1>
      </div>
      <div className="authenticate">
        <div className="content">
          <h2>Sign in</h2>
          <div className="form" style={{width:'35vw', marginLeft:'7vw'}}>
            <form>
              <div>
                <label htmlFor="">Email address</label>
                <input type="email" placeholder="Username" />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Password" />
              </div>
              <a href="/" className="forget-pass">
                Forgot password?
              </a>
              <button className="sign-in-btn">Sign in</button>
            </form>
              {value?navigate('Dash'):
                    <button className="googlesignin" onClick={handleClick}><img src={google} alt="google" />
                    <span>Sign in with Google</span></button>
              }
          </div>
          <p className="register-link">
            Dont't have an account? <a href="/">Register here</a>
          </p>
        </div>
      </div>
    </div>
    </div>
);
}
export default Login;