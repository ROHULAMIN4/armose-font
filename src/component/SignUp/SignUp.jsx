import React, { useContext } from "react";
import {
  LockClosedIcon,
  UserIcon,
  EnvelopeIcon,
  PhotoIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SignUp.css";
import Swal from "sweetalert2";
import AuthProver, { AuthContex } from "../provider/AuthProver";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { createUser, googleSingIn, githubSignIn } = useContext(AuthContex);
  const handleSingUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const confirm = form.Confirm.value;
    const phone = form.phone.value;

    const userinfo = {
      name: name,
      email: email,
      photoURL: photoURL,
      password: password,
      phone: phone,
    };
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

        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userinfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Armose SignUp successfully",
                showConfirmButton: false,
                timer: 1000,
              });
              navigate("/");
            }
          });
      })
      .catch((error) => {
        alert(error.message);
        setError(error.message);
      });
  };

  // google sign in method
  const handleGoogleSingIn = () => {
    googleSingIn()
      .then((result) => {
        const loggUser = result.user;
        // start

        const saverUser = {
          name: loggUser.displayName,
          email: loggUser.email,
        };
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(saverUser),
        })
          .then((res) => res.json())
          .then(() => {
            // if (data.insertedId) {
            navigate("/");
            // }
          });

        // end
        console.log(saverUser);
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
              <div className="socialLoginLogo">
                <button onClick={handleGithubSIngIn}>
                  <img src="img/github.png" alt="" />
                </button>
                <button onClick={handleGoogleSingIn}>
                  <img src="img/google.jpg" alt="" />
                </button>
              </div>

              <div className="input-div one">
                <div className="i">
                  <UserIcon></UserIcon>
                </div>
                <div className="div">
                  <h5></h5>
                  <input
                    type="text"
                    className="input"
                    name="name"
                    required
                    placeholder="Name"
                  />
                </div>
              </div>
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
              <div className="input-div one">
                <div className="i">
                  <PhoneIcon></PhoneIcon>
                </div>
                <div className="div">
                  <h5></h5>
                  <input
                    type="text"
                    className="input"
                    name="phone"
                    required
                    placeholder="contact Number"
                  />
                </div>
              </div>
              <div className="input-div one">
                <div className="i">
                  <PhotoIcon></PhotoIcon>
                </div>
                <div className="div">
                  <h5></h5>
                  <input
                    type="text"
                    className="input"
                    name="photoURL"
                    placeholder="PhotoURL"
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
