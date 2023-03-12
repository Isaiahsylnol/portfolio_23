import React from "react";
import { Link } from "react-router-dom";
import Switcher from "./toggleDarkMode";

// Small screen x Mobile menu
function menuToggle() {
  document.getElementById("nav-content").classList.toggle("hidden");
}

const Header = () => {
  function scrollFunction() {
    let e = document.getElementById("contact");
    e.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  }

  return (
    <nav className="flex justify-between flex-wrap bg-[#467255] text-white fixed w-full z-10 top-0 h-16 shadow-md">
      <Link
        href="/isaiah_s_23_portfolio"
        className="text-4xl font-semibold w-auto mt-2 ml-4"
      >
        Isaiah Sylvester
      </Link>
      <div className="block md:hidden">
        <button
          id="nav-toggle"
          onClick={menuToggle}
          className="flex items-center px-3 py-2 mt-4 border rounded mr-4 text-gray-200 border-gray-200 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className="w-full md:mr-3 lg:mr-8 md:flex md:items-center p-4 bg-zinc-600 sm:bg-[#467255] mt-4 sm:mt-0 sm:h-full md:w-auto hidden"
        id="nav-content"
      >
        <ul className="md:flex justify-end items-center text-lg md:space-x-8 lg:space-x-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li onClick={scrollFunction}>
            <Link to="/#contact">Contact</Link>
          </li>
          <li className="sm:px-2 sm:border-4 sm:p-1 hover:text-gray-400 transition duration-300">
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Switcher />
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
