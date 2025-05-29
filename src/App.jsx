import { BrowserRouter, Route, Routes } from "react-router-dom";
import BagItems from "./pages/ProductsPage";
import NavBar from "../src/navBar";
import React from "react";



function App() {
  return (
    <>
 
      <BrowserRouter>
        <Routes>
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/bag" element={<BagItems />} />
        </Routes>
      </BrowserRouter>
     
  </>
  );
}

export default App;
