import React from "react";
import Switcher from "./toggleDarkMode";
import pdf from "../Pages/Isaiah_Sylvester_Resume.pdf";
import scrollTo from "./ScrollTo";

// Small screen x Mobile menu
function menuToggle() {
  document.getElementById("nav-content").classList.toggle("hidden");
}

const Header = () => {
  return (
    <nav id="top" className="flex pt-4 flex-wrap justify-between w-full items-center dark:bg-[#201c1c] bg-[#f4f2f2] text-black">
        <div className="text-4xl dark:text-white text-black font-poppinsFont font-semibold w-auto ml-4 cursor-default">
          IS
        </div>
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
        className="w-full md:mr-3 pt-8 sm:pt-0 lg:mr-8 text-center md:flex md:items-center bg-white/10 dark:bg-[#201c1c] md:bg-[#f4f2f2] md:w-auto hidden"
        id="nav-content"
      >
        <ul className="md:flex font-poppinsFont text-black dark:text-[#e4e4e4] items-center text-xl gap-10 space-y-5 md:space-y-0 ml-6">
        <li className="hover:text-[#a66879] transition duration-300 cursor-pointer" onClick={() => scrollTo("#projects")}>
            <button
              title="View my projects"
            >
              Projects
            </button>
          </li>
          <li className="hover:text-[#a66879] transition duration-300 cursor-pointer" onClick={() => scrollTo("#about")}>
            <button
              title="Read about me"
            >
              About
            </button>
          </li>
          <li className="hover:text-[#a66879] transition duration-300 cursor-pointer" onClick={() => scrollTo("#contact")}>
            <button
              title="Contact me"
            >
              Contact
            </button>
          </li>
          <li className="hover:text-[#a66879] transition duration-300">
            <a
              href={pdf}
              target="_blank"
              rel="noopener"
              title="View my resume"
            >
              Resume
            </a>
          </li>
          <li className="hover:text-amber-500 transition duration-300 flex flex-col items-center" title="Toggle dark/light mode">
            <Switcher />
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
