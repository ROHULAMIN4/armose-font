import { useState } from "react";

import "./App.css";
import Header from "./component/Header/Header";
import Menubar from "./component/Header/Menubar/Menubar";

function App() {
  return (
    <div>
      <Header></Header>
      <Menubar></Menubar>
    </div>
  );
}

export default App;
