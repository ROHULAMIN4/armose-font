import { useState } from "react";

import "./App.css";

import Header from "./component/Header/Header";
import Menubar from "./component/Menubar/Menubar";

import Shop from "./component/Shop/Shop";

function App() {
  return (
    <div>
      <Header></Header>
      <Menubar></Menubar>
      <Shop></Shop>
    </div>
  );
}

export default App;
