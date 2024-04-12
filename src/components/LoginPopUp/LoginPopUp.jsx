import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <form className="login-pop-up-container">
        <div className="login-pop-up-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          ></img>
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Enter Your Name" required></input>
          )}

          <input type="email" placeholder="Enter Your Email" required></input>
          <input
            type="password"
            placeholder="Enter Your Password"
            required
          ></input>
        </div>
        <button>{currState === "Sign up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required></input>
          <p>
            By continuing , I agree the terms and condition and privacy policy
          </p>
        </div>

        {currState === "Login" ? (
          <p>
            Create a new account?<span onClick={()=> setCurrState("Sign up")}>Sign Up Now</span>
          </p>
        ) : (
          <p>
            Already have an account ? <span onClick={()=> setCurrState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
