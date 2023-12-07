import React, { useContext, useState } from "react";
import "./Setting.css";
import {
  HomeIcon,
  BriefcaseIcon,
  ArchiveBoxIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowPathIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { AuthContex } from "../provider/AuthProver";
const Seeing = () => {
  const { user, logOut } = useContext(AuthContex);
  console.log(user);
  const [open, setOpen] = useState(false);
  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="setting">
        <div className="cover-setting">
          <p className="heding-armose">Welcome to ARMOSE</p>
          <div className="setting-menu">
            <Link to="/">
              <HomeIcon className="seetingmenuicon "></HomeIcon>Home
            </Link>

            <Link to="/offers">
              <BriefcaseIcon className="seetingmenuicon"></BriefcaseIcon>Offers
            </Link>
            <Link to="">
              <ArchiveBoxIcon className="seetingmenuicon"></ArchiveBoxIcon>
              Products
            </Link>
            <Link to="/orders">
              <ArrowPathIcon className="seetingmenuicon"></ArrowPathIcon>Orders
            </Link>
            {/* for sing up and login */}
            {user ? (
              <div>
                <span className="settingEmail">{user.email}</span>
                <p></p>
                <button className="signout" onClick={handleLogOut}>
                  LogOut
                </button>
                {/* <Link to="/login">
                <UserPlusIcon className="seetingmenuicon"></UserPlusIcon> Login
              </Link> */}
              </div>
            ) : (
              <div>
                <Link to="/login">
                  <UserPlusIcon className="seetingmenuicon"></UserPlusIcon>{" "}
                  Login
                </Link>
              </div>
            )}
            {/* 
          {user && (

              <Link to="/signup">
              <UserPlusIcon className="seetingmenuicon"></UserPlusIcon> SingUp
            </Link>
            <span className="seetingmenuicon">
              <span className="settingEmail">{user.email}</span>
              <button className="signout" onClick={handleLogOut}>
                LogOut
              </button>
            </span>
          )} */}
          </div>

          {/* dropdonwn */}
          <div className="dropdown">
            <hr />
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              class="rounded-circle me-2"
            />
            <strong>Rohul</strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default Seeing;
