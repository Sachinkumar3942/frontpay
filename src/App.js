import React from "react"
import {Routes,Route} from "react-router-dom"
import {Toaster} from "react-hot-toast";
import Home from "./components/Home";
import Likes from "./components/Likes";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Explore from "./components/Explore";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className=" flex">
      <Sidebar/>
      <div className=" flex flex-col justify-center items-center w-full">
      <div className="max-w-5xl my-5 text-white mx-auto w-full transition-all duration-300 flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/likes" element={<Likes/>} />
        </Routes>
        <Toaster position="top-center"
  reverseOrder={false}/>
      </div>
      {/* <footer className=" text-pink-500">Footer</footer> */}
      </div>
    </div>
  );
}

export default App;
