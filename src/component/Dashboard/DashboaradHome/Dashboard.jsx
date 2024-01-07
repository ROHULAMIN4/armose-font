import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import {
  HomeIcon,
  BriefcaseIcon,
  ArchiveBoxIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowPathIcon,
  UserPlusIcon,
  EnvelopeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Link, Outlet } from "react-router-dom";
import { AuthContex } from "../../provider/AuthProver";

const DashboardHome = () => {
  const { user, logOut } = useContext(AuthContex);

  const [orders, setOrders] = useState([]);

  const [open, setOpen] = useState(false);
  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };

  return (
    // start

    <div>
      <div class="dashboard ps-4">
        {/* <a class="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a> */}

        <div>
          {user ? (
            <div className="mt-5">
              <img
                src={
                  user.photoURL
                    ? user.photoURL
                    : "https://i.postimg.cc/BnwKBd7L/pngtree-cartoon-color-simple-male-avatar-png-image-1934459.jpg"
                }
                className="dashbordProfile"
              />
              <p></p>
              <Link>
                <span className="profileName">{user?.name || user.email}</span>
              </Link>
              <hr />
              <p></p>
            </div>
          ) : (
            <div></div>
          )}
          <Link to="/">
            <HomeIcon className="seetingmenuicon "></HomeIcon>Home
          </Link>

          <Link to="/dashboard/contacts">
            <EnvelopeIcon className="seetingmenuicon"></EnvelopeIcon>Contacts
          </Link>
          <Link to="/dashboard/myordered">
            <ArchiveBoxIcon className="seetingmenuicon"></ArchiveBoxIcon>
            My Ordered
          </Link>
          <Link to="/dashboard/updateprofile">
            <UserIcon className="seetingmenuicon"></UserIcon>Update Profile
          </Link>
          {/* for sing up and login */}
          {user ? (
            <div>
              {/* <span className="settingEmail text-secondary">
                {user.displayName}
              </span> */}
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
                <UserPlusIcon className="seetingmenuicon"></UserPlusIcon> Login
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
      </div>

      <div class="content">
        <Outlet></Outlet>
      </div>
    </div>

    // end

    // <div className="dashboard">
    //   <div className="setting w-20">
    //     <div className="cover-setting">
    //       <p className="heding-armose text-secondary fw-bold">
    //         Welcome to ARMOSE
    //       </p>
    //       <div className="setting-menu">
    //         <Link to="/">
    //           <HomeIcon className="seetingmenuicon "></HomeIcon>Home
    //         </Link>

    //         <Link to="/offers">
    //           <BriefcaseIcon className="seetingmenuicon"></BriefcaseIcon>Offers
    //         </Link>
    //         <Link to="">
    //           <ArchiveBoxIcon className="seetingmenuicon"></ArchiveBoxIcon>
    //           Products
    //         </Link>
    //         <Link to="/orders">
    //           <ArrowPathIcon className="seetingmenuicon"></ArrowPathIcon>Orders
    //         </Link>
    //         {/* for sing up and login */}
    //         {user ? (
    //           <div>
    //             <span className="settingEmail">{user.email}</span>
    //             <p></p>
    //             <button className="signout" onClick={handleLogOut}>
    //               LogOut
    //             </button>
    //             {/* <Link to="/login">
    //             <UserPlusIcon className="seetingmenuicon"></UserPlusIcon> Login
    //           </Link> */}
    //           </div>
    //         ) : (
    //           <div>
    //             <Link to="/login">
    //               <UserPlusIcon className="seetingmenuicon"></UserPlusIcon>{" "}
    //               Login
    //             </Link>
    //           </div>
    //         )}
    //         {/*
    //       {user && (

    //           <Link to="/signup">
    //           <UserPlusIcon className="seetingmenuicon"></UserPlusIcon> SingUp
    //         </Link>
    //         <span className="seetingmenuicon">
    //           <span className="settingEmail">{user.email}</span>
    //           <button className="signout" onClick={handleLogOut}>
    //             LogOut
    //           </button>
    //         </span>
    //       )} */}
    //       </div>
    //     </div>
    //   </div>
    //   <div className="divider w-80">
    //     <h1 className="text-primary">hello khalamoni</h1>
    //   </div>
    // </div>
  );
};

export default DashboardHome;
