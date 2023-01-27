import Home from "./components/Home";
import SignIn from "./components/SignIn"
import Question from "./components/AskQuestion"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path= "/" element={<SignIn/>}/>
        <Route path="/ask" element={<Question/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
