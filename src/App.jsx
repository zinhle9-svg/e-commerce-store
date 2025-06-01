import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products, Shipping, NavBar  } from "./pages";




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/" element={<Products />} />
          <Route path="/" element={<Shipping />} />  
        </Routes>
      </BrowserRouter>   
  </>
  );
}

export default App;
