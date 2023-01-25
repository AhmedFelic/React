import Home from "./components/Home";
import SignIn from "./components/SignIn"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path= "/" element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
