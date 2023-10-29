import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";
import {
  HomeIcon,
  BriefcaseIcon,
  ArchiveBoxIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Menubar = () => {
  const [open, setOpen] = useState(false);
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
            <Bars3Icon className="menuicon"></Bars3Icon>
          )}
        </span>
      </div>
      <div className="menubar">
        <Link to="/">
          {" "}
          <HomeIcon className="menuicon "></HomeIcon>Home
        </Link>
        <Link to="/offer">
          <BriefcaseIcon className="menuicon"></BriefcaseIcon> Offer
        </Link>
        <Link to="/products">
          <ArchiveBoxIcon className="menuicon"></ArchiveBoxIcon> Products
        </Link>
      </div>
      {/* side menu */}
      <div className={`mainsidemenu ${open ? "toggle1" : "toggle2"} `}>
        <div className="sidemenu">
          <div className="shortmenu">
            <p>Menu</p>
            <hr />
            <Link to="/">
              <HomeIcon className="menuicon "></HomeIcon>Home
            </Link>

            <Link to="/offer">
              <BriefcaseIcon className="menuicon"></BriefcaseIcon>Offer
            </Link>
            <Link to="">
              <ArchiveBoxIcon className="menuicon"></ArchiveBoxIcon>Products
            </Link>
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

export default Menubar;
