import React from "react";
import { Link } from "react-router-dom";
import Switcher from "./toggleDarkMode";
import pdf from "../Pages/isaiah_sylvester.pdf";
import ScrollToTop from "./ScrollToTop";

// Small screen x Mobile menu
function menuToggle() {
  document.getElementById("nav-content").classList.toggle("hidden");
}

const Header = () => {
  return (
    <nav className="flex flex-wrap justify-between w-full items-center dark:bg-[#232423] bg-white text-black z-20 top-0 sticky border-b border-b-gray-300 dark:border-b-neutral-700 shadow">
      <button
        onClick={ScrollToTop}
        className="hover:text-gray-400 transition duration-300 p-2"
      >
        <Link
          to="/"
          className="text-4xl dark:text-white text-black font-poppinsFont font-semibold w-auto ml-4"
        >
          IS
        </Link>
      </button>
      <div className="block md:hidden">
        <button
          id="nav-toggle"
          onClick={menuToggle}
          className="flex items-center mt-2 mr-4 text-gray-700 hover:text-[#af7ac3] dark:text-white"
        >
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className="w-full md:mr-3 lg:mr-8 md:flex md:items-center bg-white/10 md:dark:bg-[#232423] md:bg-white md:w-auto hidden"
        id="nav-content"
      >
        <ul className="md:flex text-black font-poppinsFont dark:text-white justify-end items-center text-xl sm:space-x-4 space-y-6  p-3 sm:p-0 md:space-y-0">
          <li className="hover:text-gray-400 transition duration-300 sm:pl-5">
            <Switcher />
          </li>
          <li className="border-l-2 border-black dark:border-white h-7 hidden md:inline"></li>
          <li className="hover:text-gray-400 transition duration-300">
            <a
              href={pdf}
              target="_blank"
              className="bg-[#c37a8e] hover:bg-[#a66879] text-white p-2 rounded-md"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
