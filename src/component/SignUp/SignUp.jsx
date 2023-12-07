import React, { useContext } from "react";
import {
  LockClosedIcon,
  UserIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./SignUp.css";
import Swal from "sweetalert2";
import AuthProver, { AuthContex } from "../provider/AuthProver";
const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContex);
  const handleSingUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.Confirm.value;
    // console.log(email, password, confirm);
    setError("");
    if (password !== confirm) {
      // setError("your password didn`t match");

      Swal.fire({
        title: "Error!",
        text: "your password didn`t match",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    } else if (password.length < 6) {
      Swal.fire({
        title: "Error!",
        text: "password must be 6 charecter or longer",
        icon: "error",
        confirmButtonText: "Ok",
      });

      return;
    }
    createUser(email, password)
      .then((result) => {
        const loggUser = result.user;
        console.log(loggUser);
      })
      .catch((error) => {
        alert(error.message);
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="main-login-form">
        <img className="wave" src="img/wave.png" />
        <div className="login-container">
          <div className="img">
            <img src="img/bg.svg" />
          </div>
          <div className="login-content">
            <form onSubmit={handleSingUp}>
              <img src="img/avatar.svg" />
              <h2 className="title">Welcome</h2>

              <div className="input-div one">
                <div className="i">
                  <EnvelopeIcon></EnvelopeIcon>
                </div>
                <div className="div">
                  <h5></h5>
                  <input
                    type="email"
                    className="input"
                    name="email"
                    required
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                  <LockClosedIcon></LockClosedIcon>
                </div>
                <div className="div">
                  <h5></h5>
                  <input
                    type="password"
                    className="input"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                  <LockClosedIcon></LockClosedIcon>
                </div>
                <div className="div">
                  <h5></h5>
                  <input
                    type="password"
                    className="input"
                    name="Confirm"
                    placeholder="Confirm password"
                    required
                  />
                </div>
              </div>

              <input type="submit" className="login-btn" value="Sign up" />
              <p className="link-reginster">
                Already reginster? <span> </span>
                <Link to="/login" className="link-login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
