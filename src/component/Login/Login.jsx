import React from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LockClosedIcon,
  UserIcon,
  EnvelopeIcon,
  EyeSlashIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import { useContext } from "react";
import { AuthContex } from "../provider/AuthProver";
import { useState } from "react";
const Login = () => {
  const { signin, user, googleSingIn, githubSignIn } = useContext(AuthContex);
  console.log(user);
  const [show, setShow] = useState(false);
  const nativate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const haldleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signin(email, password)
      .then((result) => {
        const loggUser = result.user;
        form.reset();
        nativate(from, { replace: true });
        console.log(loggUser);
      })
      .catch((error) => {
        alert(error.message);
        setError(error.message);
      });
  };
  // const handleGoogleSingIn = () => {
  //   googleSingIn()
  //     .then((result) => {
  //       const loggUser = result.user;
  //       console.log(loggUser);
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //       setError(error.message);
  //     });
  // };

  const handleGoogleSingIn = () => {
    googleSingIn()
      .then((result) => {
        const loggUser = result.user;
        // start

        const saverUser = {
          name: loggUser.displayName,
          email: loggUser.email,
          photoURL: loggUser.photoURL,
        };
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(saverUser),
        })
          .then((res) => res.json())
          .then(() => {
            // if (data.insertedId) {
            nativate(from, { replace: true });
            // }
          });

        // end
        console.log(loggUser);
      })
      .catch((error) => {
        alert(error.message);
        setError(error.message);
      });
  };
  const handleGithubSIngIn = () => {
    githubSignIn()
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
    <div className="main-login-form">
      <img class="wave" src="img/wave.png" />
      <div class="login-container">
        <div class="img">
          <img src="img/bg.svg" />
        </div>
        <div class="login-content">
          <form onSubmit={haldleLogin}>
            <img src="img/avatar.svg" />
            <h2 class="title">Welcome</h2>
            <div className="socialLoginLogo">
              <button onClick={handleGithubSIngIn}>
                <img src="img/github.png" alt="" />
              </button>
              <button onClick={handleGoogleSingIn}>
                <img src="img/google.jpg" alt="" />
              </button>
            </div>

            <div class="input-div one">
              <div class="i">
                <EnvelopeIcon></EnvelopeIcon>
              </div>
              <div class="div">
                <h5></h5>
                <input
                  type="email"
                  class="input"
                  name="email"
                  required
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="input-div pass">
              <div class="i">
                <LockClosedIcon></LockClosedIcon>
              </div>
              <div class="div">
                <h5></h5>
                <input
                  type={show ? "text" : "password"}
                  class="input"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <Link to="" className="forget-btn">
              Forgot Password?
            </Link>
            <p className="passowordShow" onClick={() => setShow(!show)}>
              {show ? (
                <span>
                  <EyeSlashIcon></EyeSlashIcon>
                </span>
              ) : (
                <span>
                  <EyeIcon></EyeIcon>
                </span>
              )}
            </p>

            <input type="submit" className="login-btn" value="Login" />
            <p className="link-reginster">
              New User? <span> </span>
              <Link to="/signup" className="link-login">
                Create Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
