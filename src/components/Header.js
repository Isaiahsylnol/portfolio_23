import React from "react";
import { Link } from "react-router-dom";
import Switcher from "./toggleDarkMode";
import pdf from "../Pages/isaiah_sylvester.pdf";

// Small screen x Mobile menu
function menuToggle() {
  document.getElementById("nav-content").classList.toggle("hidden");
}

const Header = () => {
  function scrollFunction(id) {
    let e = document?.getElementById(id);
    e?.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  }

  return (
    <nav className="flex flex-wrap justify-between w-full items-center dark:bg-[#323232] bg-white text-black h-20 z-10 top-0 sticky">
      <button
        onClick={() => scrollFunction("/")}
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
        className="w-full md:mr-3 lg:mr-8 md:flex md:items-center bg-white/10 md:dark:bg-[#323232] md:bg-white z-10 backdrop-filter backdrop-blur-lg mt-3 sm:mt-0 lg:h-full md:w-auto hidden"
        id="nav-content"
      >
        <ul className="md:flex text-black font-poppinsFont md:text-black dark:text-white justify-end items-center text-xl md:space-x-8">
          <li
            onClick={() => scrollFunction("contact")}
            className="hover:text-gray-400 transition duration-300 p-2"
          >
            <Link to="/#contact">Contact</Link>
          </li>
          <li className="hover:text-gray-400 transition duration-300 p-2">
            <a href={pdf} target="_blank">
              Resume
            </a>
          </li>
          <li className="p-3">
            <Switcher />
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
