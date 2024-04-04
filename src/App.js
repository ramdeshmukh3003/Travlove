import { Route, Router, Routes } from "react-router-dom";

import './App.css'
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Packages from "./routes/Packages";
import SignUp from "./routes/SignUp";


function App() {
  return (
   <>
   
   <div className="App">

    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/packages" element={<Packages/>}/>
    <Route path="/contact" element={<Contact/>}/>
     <Route path="/signup" element={<SignUp/>}/>
    </Routes>



    </div>
  </>
  );
}

export default App;
