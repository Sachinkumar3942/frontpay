import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineLogin } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import Logout from "./Logout"
const Sidebar = () => {
  const authUser = 1;
  return (
    <aside className=" flex flex-col items-center w-12 sm:w-16 sticky top-0 right-0 h-screen py-8 overflow-y-auto border-r   bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-none">
      <nav className="h-full flex flex-col justify-between gap-3">
        <div>
        <Link
          to="/"
          className="flex justify-center text-white text-3xl mt-4 hover:bg-gray-700 rounded-full p-2"
        >
          <img className="h-8 " src="/github.svg" alt="Github logo" />
        </Link>

        <Link
          to="/"
          className="flex justify-center text-white text-3xl mt-4 hover:bg-gray-700 rounded-full p-2"
        >
          <FaHome />
        </Link>
        {!authUser && (
          <Link
            to="/login"
            className="flex justify-center text-white text-3xl mt-4 hover:bg-gray-700 rounded-full p-2"
          >
            <MdOutlineLogin />
          </Link>
        )}
         {!authUser && (
          <Link
            to="/signup"
            className="flex justify-center text-white text-3xl mt-4 hover:bg-gray-700 rounded-full p-2"
          >
            <SiGnuprivacyguard />
          </Link>
        )}
        {authUser && (
          <Link
            to="/likes"
            className="flex justify-center text-white text-3xl mt-4 hover:bg-gray-700 rounded-full p-2"
          >
            <FaHeart />
          </Link>
        )}
        {authUser && (
          <Link
            to="/explore"
            className="flex justify-center text-white text-3xl mt-4 hover:bg-gray-700 rounded-full p-2"
          >
            <MdExplore />
          </Link>
        )}
        </div>
        <div className=" bottom-0">
            
        {
            authUser && (
                <div><Logout/></div>
            )
        }
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
