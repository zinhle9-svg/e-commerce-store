import { BrowserRouter, Route, Routes } from "react-router-dom";
import BagItems from "../components/bagItems";
import Home from "../components/Home";
import React from "react";
import Navbar from "../components/navBar";


function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/bag" element={<BagItems />} />
        </Routes>
      </BrowserRouter>
      <BagItems />
    </>
  );
}

export default App;
