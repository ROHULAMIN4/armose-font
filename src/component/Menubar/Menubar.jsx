import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";
import {
  HomeIcon,
  BriefcaseIcon,
  ArchiveBoxIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowPathIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { AuthContex } from "../provider/AuthProver";

const Menubar = () => {
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
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="togglemenuicon"
      >
        <span>
          {open ? (
            <XMarkIcon className="menuicon1"></XMarkIcon>
          ) : (
            <Bars3Icon className="menuicon-topbar"></Bars3Icon>
          )}
        </span>
      </div>

      <div className="menubar">
        <div className="parentMenu">
          <div className="linkMenu">
            <Link to="/">
              <HomeIcon className="menuicon "></HomeIcon>Home
            </Link>
            <Link to="/offers">
              <BriefcaseIcon className="menuicon"></BriefcaseIcon> Offers
            </Link>
            <Link to="/products">
              <ArchiveBoxIcon className="menuicon"></ArchiveBoxIcon> Products
            </Link>
            <Link to="/orders">
              <ArrowPathIcon className="menuicon"></ArrowPathIcon> Orders
            </Link>
          </div>
          <div className="profileMenu">
            {user ? (
              <img
                className="profile-img"
                src="https://github.com/mdo.png"
                alt=""
                width="32"
                height="32"
                class="rounded-circle me-2"
              />
            ) : (
              <Link to="/login">
                <UserPlusIcon className="menuicon"></UserPlusIcon> Login
              </Link>
            )}
          </div>
        </div>

        {/* <Link to="/setting">
          <ArrowPathIcon className="menuicon"></ArrowPathIcon> Setting
        </Link> */}

        {/* <Link to="/login">
          <UserPlusIcon className="menuicon"></UserPlusIcon> Login
        </Link>
        <Link to="/signup">
          <UserPlusIcon className="menuicon"></UserPlusIcon> Sing Up
        </Link> */}

        {/* for show email */}

        {/* {user && (
          <span>
            {user.email} <button onClick={handleLogOut}>LogOut</button>
          </span>
        )} */}
      </div>
      {/* side menu */}
    </>
  );
};

export default Menubar;

// <div className={`mainsidemenu ${open ? "toggle1" : "toggle2"} `}>
//       <div className="sidemenu">
//         <div className="shortmenu">
//           <p>Menu</p>
//           <hr />
//           <Link to="/">
//             <HomeIcon className="menuicon "></HomeIcon>Home
//           </Link>

//           <Link to="/offers">
//             <BriefcaseIcon className="menuicon"></BriefcaseIcon>Offers
//           </Link>
//           <Link to="">
//             <ArchiveBoxIcon className="menuicon"></ArchiveBoxIcon>Products
//           </Link>
//           <Link to="/orders">
//             <ArrowPathIcon className="menuicon"></ArrowPathIcon>Orders
//           </Link>
//           <Link to="/login">
//             <UserPlusIcon className="menuicon"></UserPlusIcon> Login
//           </Link>
//           <Link to="/signup">
//             <UserPlusIcon className="menuicon"></UserPlusIcon> Sing Up
//           </Link>
//           {user && (
//             <span>
//               {user.email} <button onClick={handleLogOut}>LogOut</button>
//             </span>
//           )}
//         </div>

//         {/* dropdonwn */}
//         <div className="dropdown">
//           <hr />
//           <img
//             src="https://github.com/mdo.png"
//             alt=""
//             width="32"
//             height="32"
//             class="rounded-circle me-2"
//           />
//           <strong>Rohul</strong>
//         </div>
//       </div>
//     </div>
