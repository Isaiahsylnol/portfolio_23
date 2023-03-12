import React from "react";

import Carousel, { CarouselItem } from "../components/Carousel/Carousel";
import pic from "../assets/next_js_logo.svg";
import graphqlIcon from "../assets/GraphQL-Logo.svg";
import mongoDBIcon from "../assets/mongodb-logo.svg";
import tailwindIcon from "../assets/Tailwind_CSS_Logo.svg";
import cssIcon from "../assets/CSS3_logo.svg";

export default function index() {
  return (
    <main className="pt-20 sm:pt-8 dark:bg-[#444546]">
      <section className="sm:flex dark:text-white lg:flex-row w-fit mx-auto sm:mt-8 lg:space-x-12 md:p-4">
        <div className="w-full p-4">
          <img
            src={require("../assets/portrait-sq.png")}
            alt="Profile portrait"
            className="object-contain mx-auto"
            style={{ borderRadius: "100%" }}
          />
          <h1 className="text-3xl text-black dark:text-white font-bold pb-4 pt-8">
            About Me
          </h1>
          <p className="max-w-2xl">
            I hold a passion for creativity, design and understanding which I
            leverage through my development to ensure the end user's experience
            feels intuitive & responsive. I value creating the time for day to
            day practice & mental stimulation exploring side projects and
            curiosities in pursuit to expand my abilities.
          </p>
        </div>
        <div className="text-base w-full flex flex-col p-4 sm:p-0">
          <div>
            <ul className="mb-10 mt-4">
              <li className="font-bold">Software Developer</li>
              <li>
                <strong className="pr-2">Location:</strong>Toronto, Canada
              </li>
              <li>
                <strong className="pr-2">Email:</strong>
                contact@isaiahsylvester.com
              </li>
              <li>
                <strong className="pr-2">Phone:</strong>647-237-2620
              </li>
              <li>
                <strong className="pr-2">Credential:</strong>Ontario College
                Advanced Diploma
              </li>
            </ul>
          </div>
          <div>
            <h2 className="sm:text-start text-black dark:text-white font-bold pb-4">
              Development Tools
            </h2>
            {/* <!-- Development tools section --> */}
            <div className="flex">
              <ul className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <li className="border-2 border-gray-300 rounded-lg p-1 hover:border-gray-400">
                  <a href="https://reactjs.org/" target="_blank">
                    <img
                      src={require("../assets/react_logo.png")}
                      className="inline h-8 w-8 mr-2"
                      alt="React logo"
                    />
                    React
                  </a>
                </li>
                <li className="border-2 border-gray-300 rounded-lg p-1 hover:border-gray-400">
                  <a href="https://nodejs.org/" target="_blank">
                    <img
                      src={require("../assets/nodejs_logo.png")}
                      className="inline h-8 w-8 mr-2"
                      alt="Node.js logo"
                    />
                    Node.js
                  </a>
                </li>
                <li className="border-2 border-gray-300 rounded-lg p-1 hover:border-gray-400">
                  <a href="https://nextjs.org/" target="_blank">
                    <img
                      src={pic}
                      className="inline h-8 w-8 mr-2"
                      alt="Node.js logo"
                    />
                    Next.js
                  </a>
                </li>
                <li className="border-2 border-gray-300 rounded-lg p-1 hover:border-gray-400">
                  <a href="https://www.cypress.io/" target="_blank">
                    <img
                      src={require("../assets/cypress-logo.png")}
                      className="inline h-8 w-8 mr-2"
                      alt="Cypress logo"
                    />
                    Cypress
                  </a>
                </li>
                <li className="border-2 border-gray-300 rounded-lg p-1 hover:border-gray-400">
                  <a href="https://www.mongodb.com/" target="_blank">
                    <img
                      src={mongoDBIcon}
                      className="inline h-8 w-8 mr-2"
                      alt="MongoDB logo"
                    />
                    MongoDB
                  </a>
                </li>
                <li className="border-2 border-gray-300 rounded-lg p-1 hover:border-gray-400">
                  <a href="https://graphql.org/" target="_blank">
                    <img
                      src={graphqlIcon}
                      className="inline h-8 w-8 mr-2"
                      alt="GraphQL logo"
                    />
                    GraphQL
                  </a>
                </li>
                <li className="border-2 border-gray-300 rounded-lg p-1 hover:border-gray-400">
                  <a href="https://www.javascript.com/" target="_blank">
                    <img
                      src={require("../assets/javaScript_logo2.png")}
                      className="inline h-8 w-8 mr-2"
                      alt="Javascript logo"
                    />
                    Javascript
                  </a>
                </li>
                <li className="border-2 border-gray-300 rounded-lg p-1 hover:border-gray-400">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                    target="_blank"
                  >
                    <img
                      src={require("../assets/html_logo.png")}
                      className="inline h-8 w-8 mr-2"
                      alt="HTML5 logo"
                    />
                    HTML5
                  </a>
                </li>
                <li className="border-2 border-gray-300 rounded-lg p-1 hover:border-gray-400">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    target="_blank"
                  >
                    <img
                      src={cssIcon}
                      className="inline h-8 w-8 mr-2"
                      alt="GraphQL logo"
                    />
                    CSS3
                  </a>
                </li>
                <li className="border-2 border-gray-300 rounded-lg p-1 hover:border-gray-400">
                  <a href="https://git-scm.com/" target="_blank">
                    <img
                      src={require("../assets/git_logo.png")}
                      className="inline h-8 w-8 mr-2"
                      alt="Git logo"
                    />
                    Git
                  </a>
                </li>
                <li className="border-2 border-gray-300 rounded-lg w-36 p-1 hover:border-gray-400">
                  <a href="https://tailwindcss.com/" target="_blank">
                    <img
                      src={tailwindIcon}
                      className="inline h-8 w-8 mr-2"
                      alt="Tailwind CSS logo"
                    />
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Project section (Row layout) --> */}
      <section className="items-center bg-[#d9d2cc] dark:bg-[#323232] dark:text-white flex flex-col">
        <h1 className="text-3xl uppercase text-black dark:text-white font-bold m-16 sm:pb-8">
          Projects
        </h1>
        <div className="space-y-52 w-full lg:w-11/12 max-w-5xl sm:p-4">
          <div className="md:flex pb-14">
            <div className="p-8 -mt-3 sm:pl-14 w-full items-start">
              <h2 className="text-2xl font-semibold inline">Pets N Pals</h2>
              <div className="grid grid-cols-2 max-w-xs">
                <ul>
                  <li className="font-semibold pt-5 pb-2">Technologies:</li>
                  <li>Next.js</li>
                  <li>MongoDB</li>
                  <li>Cypress</li>
                  <li>Stripe</li>
                </ul>
                <ul>
                  <li className="font-semibold pt-5 pb-2">Capabilities:</li>
                  <li>Database Storage</li>
                  <li>User Authorization</li>
                  <li>Payment integration</li>
                  <li>CRUD</li>
                </ul>
              </div>
              <a
                className="fa fa-github fa-2x pt-5 pr-3 hover:text-blue-600"
                href="https://github.com/Isaiahsylnol/Atmosphere-site"
              ></a>
              <a
                className="fa fa-globe fa-2x hover:text-blue-600 pt-3 xl:pt-0"
                href="https://isaiahsylnol.github.io/Atmosphere-site/"
              ></a>
            </div>
            <div className="max-w-xl md:max-w-md lg:max-w-lg mx-auto">
              <Carousel>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/petsnpals/petsnpals_figma.png")}
                      className="sm:rounded-lg shadow-md flex"
                      alt="Pets N Pals web application"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/petsnpals/petsnpals_figma_2.png")}
                      className="sm:rounded-lg shadow-md flex"
                      alt="Pets N Pals web application"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/petsnpals/petsnpals_figma_3.png")}
                      className="sm:rounded-lg shadow-md flex"
                      alt="Pets N Pals web application"
                    />
                  </div>
                </CarouselItem>
              </Carousel>
            </div>
          </div>
          <div className="md:flex pb-14">
            <div className="p-8 -mt-3 sm:pl-14 w-full items-start">
              <h2 className="text-2xl font-semibold inline">Rental Web App</h2>
              <div className="grid grid-cols-2 max-w-xs">
                <ul>
                  <li className="font-semibold pt-5 pb-2">Technologies:</li>
                  <li>React</li>
                  <li>Node.JS</li>
                  <li>GraphQL</li>
                  <li>MongoDB</li>
                  <li>Tailwind CSS</li>
                </ul>
                <ul>
                  <li className="font-semibold pt-6 pb-2">Capabilities:</li>
                  <li>Database Storage</li>
                  <li>User Registration</li>
                  <li>Screen Navigation</li>
                  <li>Cypress Testing</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <a
                className="fa fa-github fa-2x pt-5 pr-3 hover:text-blue-600"
                href="https://github.com/Isaiahsylnol/Atmosphere-site"
              ></a>
              <a
                className="fa fa-globe fa-2x hover:text-blue-600 pt-3 xl:pt-0"
                href="https://isaiahsylnol.github.io/Atmosphere-site/"
              ></a>
            </div>
            <div className="max-w-xl md:max-w-md lg:max-w-lg mx-auto">
              <Carousel>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/rental_shop_app/figma_design.png")}
                      className="sm:rounded-lg shadow-md flex"
                      alt="Pets N Pals web application"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/rental_shop_app/figma_design_2.png")}
                      className="sm:rounded-lg shadow-md flex"
                      alt="Pets N Pals web application"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/rental_shop_app/figma_design_4.png")}
                      className="sm:rounded-lg shadow-md flex"
                      alt="Pets N Pals web application"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/rental_shop_app/figma_design_3.png")}
                      className="sm:rounded-lg shadow-md flex"
                      alt="Pets N Pals web application"
                    />
                  </div>
                </CarouselItem>
              </Carousel>
            </div>
          </div>
          <div className="md:flex pb-14">
            <div className="p-8 -mt-3 sm:pl-14 w-full items-start">
              <h2 className="text-2xl font-semibold inline">
                Atmosphere Static Site
              </h2>
              <div className="grid grid-cols-2 max-w-xs">
                <ul>
                  <li className="font-bold pt-5 pb-2">Technologies:</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                </ul>
              </div>
              <a
                className="fa fa-github fa-2x pt-5 pr-3 hover:text-blue-600"
                href="https://github.com/Isaiahsylnol/Atmosphere-site"
              ></a>
              <a
                className="fa fa-globe fa-2x hover:text-blue-600 pt-3 xl:pt-0"
                href="https://isaiahsylnol.github.io/Atmosphere-site/"
              ></a>
            </div>
            <div className="max-w-xl md:max-w-md lg:max-w-lg mx-auto">
              <Carousel>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/atmosphere_site/atmosphere_figma.jpg")}
                      className="sm:rounded-lg shadow-md flex"
                      alt="Pets N Pals web application"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/atmosphere_site/atmosphere_figma_2.png")}
                      className="sm:rounded-lg shadow-md flex"
                      alt="Pets N Pals web application"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/atmosphere_site/atmosphere_figma_3.png")}
                      className="sm:rounded-lg shadow-md flex"
                      alt="Pets N Pals web application"
                    />
                  </div>
                </CarouselItem>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact form --> */}
      <section className="pb-8">
        <h2 className="text-3xl text-center dark:text-white uppercase font-extrabold p-16">
          Get In Touch
        </h2>
        {/* <!-- Container --> */}
        <div className="md:flex sm:flex-row justify-center -mt-20 md:mt-6 sm:p-6">
          {/* <!-- Left column --> */}
          <div className="sm:p-4 lg:p-15 sm:space-y-4 mt-12 sm:mt-0 dark:text-white">
            <div className="p-6 rounded-lg flex mx-auto">
              <i
                className="fa fa-phone fa-2x text-stone-700 dark:text-white"
                aria-hidden="true"
              ></i>
              <h2 className="inline pl-4">647-237-2620</h2>
            </div>
            <div className="p-6 rounded-lg flex mx-auto">
              <i
                className="fa fa-map-marker fa-2x text-stone-700 dark:text-white"
                aria-hidden="true"
              ></i>
              <h2 className="inline pl-4">Toronto, ON</h2>
            </div>
            <div className="p-6 rounded-lg flex mx-auto">
              <i
                className="fa fa-envelope-o fa-2x text-stone-700 dark:text-white"
                aria-hidden="true"
              ></i>
              <h2 className="inline pl-4">contact@isaiahsylvester.com</h2>
            </div>
          </div>
          {/* <!-- Right column --> */}
          <div className="bg-gray-300 dark:bg-[#353935] p-12">
            <form
              className="w-full max-w-lg"
              action="https://formspree.io/f/mbjwplbn"
              method="POST"
            >
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                <div className="w-full px-3 mt-10">
                  <textarea
                    className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="message"
                    rows="12"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <button
                id="contact"
                type="submit"
                className="bg-blue-500 w-full text-center p-3 rounded-md mx-auto hover:bg-blue-600 text-white"
              >
                Send Message
              </button>
              <div></div>
              <div className="flex flex-wrap -mx-3 mb-2"></div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
