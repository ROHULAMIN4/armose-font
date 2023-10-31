import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Menubar from "../Menubar/Menubar";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Menubar></Menubar>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
