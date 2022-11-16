import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Navbar from "./navbar/Navbar";
import Signup from "./signup/Signup";

function App() {
  return (
    <>
    <Navbar/>
  <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/' element={<Home/>}/>
  </Routes>

    </>
  );
}

export default App;
