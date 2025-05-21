import React, { useEffect, useState } from "react";
import Switcher from "./toggleDarkMode";
// import pdf from "../Pages/Isaiah_Sylvester_Resume.pdf";
import scrollTo from "./ScrollTo";

// Small screen x Mobile menu
function menuToggle(setIsMenuOpen) {
  const navContent = document.getElementById("nav-content");
  navContent.classList.toggle("translate-x-full");
  navContent.classList.toggle("translate-x-0");
  setIsMenuOpen((prev) => !prev);
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (event) => {
      const navContent = document.getElementById("nav-content");
      const navToggle = document.getElementById("nav-toggle");
      if (
        navContent &&
        navContent.classList.contains("translate-x-0") &&
        !navContent.contains(event.target) &&
        !navToggle.contains(event.target)
      ) {
        menuToggle(setIsMenuOpen);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuItemClick = (callback) => {
    if (window.innerWidth < 768) {
      menuToggle(setIsMenuOpen);
    }
    callback();
  };

  return (
    <nav className="flex justify-between text-black dark:bg-[#201c1c] bg-[#f4f2f2] h-fit z-50 w-full md:p-14 sm:-mb-20 pt-8">
      <div className="text-4xl block dark:text-white font-poppinsFont font-semibold w-auto ml-4 -mt-1 cursor-default">
        IS
      </div>
      <div className="block md:hidden w-full absolute z-50">
        <button
          id="nav-toggle"
          onClick={() => menuToggle(setIsMenuOpen)}
          className="flex items-center float-right mt-2 mr-4 text-gray-700 dark:text-white">
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30" />
      )}
      <div
        className="fixed top-0 right-0 h-full dark:bg-[#201c1c] bg-[#f4f2f2] transform translate-x-full transition-transform duration-300 ease-in-out z-40 md:translate-x-0 md:relative md:w-auto md:flex md:pt-0 lg:mr-8 pt-16 pb-16 sm:p-0"
        id="nav-content">
        <div className="flex w-full justify-start -mt-7">
          <ul className="md:flex p-8 md:m-0 -mb-12 font-poppinsFont text-black dark:text-[#e4e4e4] text-4xl md:text-xl gap-10 md:space-y-0 space-y-3">
            <li
              className="hover:text-emerald-500 transition duration-300 cursor-pointer"
              onClick={() => handleMenuItemClick(() => scrollTo("#projects"))}>
              <button title="View my projects">Projects</button>
            </li>
            <li
              className="hover:text-emerald-500 transition duration-300 cursor-pointer"
              onClick={() => handleMenuItemClick(() => scrollTo("#about"))}>
              <button title="Read about me">About</button>
            </li>
            <li
              className="hover:text-emerald-500 transition duration-300 cursor-pointer"
              onClick={() => handleMenuItemClick(() => scrollTo("#contact"))}>
              <button title="Contact me">Contact</button>
            </li>
            {/* <li className="hover:text-emerald-500 transition duration-300">
              <a
                href={pdf}
                target="_blank"
                rel="noopener"
                title="View my resume"
                onClick={() => handleMenuItemClick(() => {})}>
                Resume
              </a>
            </li> */}
            <li
            className="flex hover:text-amber-500 transition duration-300 items-center w-full justify-center"
            title="Toggle dark/light mode"
            tabIndex="0" // Makes the element focusable
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault(); // Prevent scrolling when pressing Space
                document.querySelector(".Switcher").click(); // Simulate a click on the Switcher
              }
            }}>
              <Switcher className="Switcher" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
