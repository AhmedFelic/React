import "./app.css"
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<SignIn/>} />
          
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
