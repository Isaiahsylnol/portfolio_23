import React from "react";

import Carousel, { CarouselItem } from "../components/Carousel/Carousel";
import pic from "../assets/next_js_logo.svg";
import graphqlIcon from "../assets/GraphQL-Logo.svg";
import mongoDBIcon from "../assets/mongodb-logo.svg";
import tailwindIcon from "../assets/Tailwind_CSS_Logo.svg";
import cssIcon from "../assets/CSS3_logo.svg";

export default function index() {
  return (
    <main id="/" className="dark:bg-[#202120] text-[#252525]">
      <section id="profile">
        <div className="dark:bg-[#202120]">
          <section className="sm:flex dark:text-[#e4e4e4] dark:bg-[#202120] lg:flex-row w-fit mx-auto lg:space-x-28 p-4">
            <div>
              <div className="flex flex-row mb-5 pt-8">
                <div className="w-fit">
                  <h1 className="w-fit text-5xl font-poppinsFont font-bold">
                    Hello
                    <hr class="border-4 w-full border-[#c37a8e] cursor-pointer hover:border-red-500 duration-500 mb-5" />
                  </h1>
                  <h1 className="pt-5 text-5xl font-poppinsFont dark:text-[#e4e4e4] font-extrabold inline">
                    I'm Isaiah Sylvester
                  </h1>
                </div>
              </div>
              <p className="max-w-lg">
                I hold a passion for creativity, design and understanding which
                I leverage through my development to ensure the end user's
                experience feels intuitive & responsive. I value creating the
                time for day to day practice & mental stimulation exploring side
                projects and curiosities in pursuit to expand my abilities.
              </p>
            </div>
            <img
              src={require("../assets/portrait-sq.png")}
              alt="Profile portrait"
              className="object-cover mx-auto pt-10"
              style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
            />
          </section>
        </div>
        <section className="flex dark:bg-[#202120]">
          <div className="text-base w-full sm:w-auto sm:mx-auto sm:mb-12">
            <div className="sm:grid sm:grid-cols-2 p-8 sm:space-x-20 lg:space-x-48 items-center">
              <div>
                <h2 className="text-[#252525] dark:text-[#e4e4e4] text-2xl font-bold pb-4">
                  Development Tools
                </h2>
                {/* <!-- Development tools section --> */}
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 dark:text-[#e4e4e4] w-full max-w-xl text-base font-semibold select-none">
                  <li className="border-2 flex items-center border-[#a2bfa5] shadow border-opacity-50 dark:border-neutral-700 rounded-lg p-2">
                    <img
                      src={require("../assets/react_logo.png")}
                      className="inline h-8 w-8 mr-2"
                      alt="React logo"
                    />
                    ReactJS
                  </li>
                  <li className="border-2 flex items-center border-[#a2bfa5] shadow border-opacity-50 dark:border-neutral-700 rounded-lg p-2">
                    <img
                      src={require("../assets/nodejs_logo.png")}
                      className="inline h-8 w-8 mr-2"
                      alt="Node.js logo"
                    />
                    Node.js
                  </li>
                  <li className="border-2 flex items-center border-[#a2bfa5] shadow border-opacity-50 dark:border-neutral-700 rounded-lg p-2">
                    <img
                      src={pic}
                      className="inline h-8 w-8 mr-2"
                      alt="Node.js logo"
                    />
                    Next.js
                  </li>
                  <li className="border-2 flex items-center border-[#a2bfa5] shadow border-opacity-50 dark:border-neutral-700 rounded-lg p-2">
                    <img
                      src={require("../assets/cypress-logo.png")}
                      className="inline h-8 w-8 mr-2"
                      alt="Cypress logo"
                    />
                    Cypress
                  </li>
                  <li className="border-2 flex items-center border-[#a2bfa5] shadow border-opacity-50 dark:border-neutral-700 rounded-lg p-2">
                    <img
                      src={mongoDBIcon}
                      className="inline h-8 w-8 mr-2"
                      alt="MongoDB logo"
                    />
                    MongoDB
                  </li>
                  <li className="border-2 flex items-center border-[#a2bfa5] shadow border-opacity-50 dark:border-neutral-700 rounded-lg p-2">
                    <img
                      src={graphqlIcon}
                      className="inline h-8 w-8 mr-2"
                      alt="GraphQL logo"
                    />
                    GraphQL
                  </li>
                  <li className="border-2 flex items-center border-[#a2bfa5] shadow border-opacity-50 dark:border-neutral-700 rounded-lg p-2">
                    <img
                      src={require("../assets/javaScript_logo2.png")}
                      className="inline h-8 w-8 mr-2"
                      alt="Javascript logo"
                    />
                    Javascript ES6
                  </li>
                  <li className="border-2 flex items-center border-[#a2bfa5] shadow border-opacity-50 dark:border-neutral-700 rounded-lg p-2">
                    <img
                      src={require("../assets/html_logo.png")}
                      className="inline h-8 w-8 mr-2"
                      alt="HTML5 logo"
                    />
                    HTML5
                  </li>
                  <li className="border-2 flex items-center border-[#a2bfa5] shadow border-opacity-50 dark:border-neutral-700 rounded-lg p-2">
                    <img
                      src={cssIcon}
                      className="inline h-8 w-8 mr-2"
                      alt="GraphQL logo"
                    />
                    CSS3
                  </li>
                  <li className="border-2 flex items-center border-[#a2bfa5] shadow border-opacity-50 dark:border-neutral-700 rounded-lg p-2">
                    <img
                      src={require("../assets/git_logo.png")}
                      className="inline h-8 w-8 mr-2"
                      alt="Git logo"
                    />
                    Git & Github
                  </li>
                  <li className="border-2 flex items-center border-[#a2bfa5] shadow border-opacity-50 dark:border-neutral-700 rounded-lg p-2">
                    <img
                      src={tailwindIcon}
                      className="inline h-8 w-8 mr-2"
                      alt="Tailwind CSS logo"
                    />
                    Tailwind CSS
                  </li>
                </ul>
              </div>
              <div>
                {/* <!-- Personal Info --> */}
                <ul className="text-base dark:text-[#e4e4e4] space-y-2 sm:space-y-0 sm:justify-center sm:items-center pt-12 pb-6 sm:p-0">
                  <li className="font-bold text-2xl mb-3">
                    Software Developer
                  </li>
                  <li className="flex items-center">
                    <strong className="pr-6 sm:pr-2">
                      <i
                        className="fa fa-phone fa-2x scale-90 p-2 text-[#252525] dark:text-[#e4e4e4]"
                        aria-hidden="true"
                      ></i>
                    </strong>
                    647-237-2620
                  </li>
                  <li className="flex items-center">
                    <strong className="pr-6 sm:pr-2">
                      <i
                        className="fa fa-envelope-o fa-2x scale-90 p-2 text-[#252525] dark:text-[#e4e4e4]"
                        aria-hidden="true"
                      ></i>
                    </strong>
                    contact@isaiahsylvester.com
                  </li>
                  <li className="flex items-center">
                    <strong className="pr-6 sm:pr-2">
                      <i
                        className="fa fa-map-marker fa-2x scale-90 p-2 text-[#252525] dark:text-[#e4e4e4]"
                        aria-hidden="true"
                      ></i>
                    </strong>
                    Toronto, ON, Canada
                  </li>
                  <li className="flex pt-2">
                    <i
                      className="fa-solid fa-graduation-cap fa-2x scale-90 pr-6 inline text-[#252525] dark:text-[#e4e4e4]"
                      aria-hidden="true"
                    ></i>
                    <div className="inline">
                      <h4 className="p-0 m-0"> George Brown College</h4>
                      <h5 className="sm:text-sm text-sm text-neutral-500 dark:text-neutral-400">
                        {" "}
                        Advanced Diploma
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* <!-- Project section (Row layout) --> */}
      <section className="items-center bg-[#c5bddd] dark:bg-[#323232] text-[#252525] dark:text-[#e4e4e4] flex flex-col">
        <h1 className="text-4xl font-poppinsFont font-extrabold dark:text-[#e4e4e4] mt-20 mb-20">
          Featured Projects
        </h1>
        <div className="space-y-36 w-full lg:w-11/12 max-w-5xl sm:p-4">
          <div className="md:flex pb-14">
            <div className="p-8 -mt-3 sm:pl-14 w-full items-start">
              <h2 className="text-2xl font-poppinsFont font-semibold inline">
                Pets N Pals
              </h2>
              <a
                className="fa fa-github fa-2x p-4 hover:text-blue-600"
                href="https://github.com/Isaiahsylnol/pets_n_pals"
              ></a>
              <div className="grid grid-cols-2 max-w-xs">
                <ul>
                  <li className="font-semibold pt-3 pb-2">Technologies:</li>
                  <li>Next.js</li>
                  <li>MongoDB</li>
                  <li>Cypress</li>
                  <li>Stripe</li>
                </ul>
                <ul>
                  <li className="font-semibold pt-3 pb-2">Capabilities:</li>
                  <li>Database Storage</li>
                  <li>User Authorization</li>
                  <li>Payment integration</li>
                  <li>CRUD</li>
                </ul>
              </div>
            </div>
            <div className="max-w-xl md:max-w-md lg:max-w-lg mx-auto">
              <Carousel>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/petsnpals/petsnpals_figma.png")}
                      className="sm:rounded-lg shadow-md flex"
                      alt="News section and mobile cart screen"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/petsnpals/petsnpals_figma_2.png")}
                      className="sm:rounded-lg shadow-md flex"
                      alt="Products page and product detail screen"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/petsnpals/petsnpals_figma_3.png")}
                      className="sm:rounded-lg shadow-md flex"
                      alt="Subscription and profile screen"
                    />
                  </div>
                </CarouselItem>
              </Carousel>
            </div>
          </div>
          <div className="md:flex pb-14">
            <div className="p-8 -mt-3 sm:pl-14 w-full items-start">
              <h2 className="text-2xl font-poppinsFont font-semibold inline">
                Rental Web App
              </h2>
              <a
                className="fa fa-github fa-2x p-4 hover:text-blue-600"
                href="https://github.com/Isaiahsylnol/rentalStoreWebApp"
              ></a>
              <div className="grid grid-cols-2 max-w-xs">
                <ul>
                  <li className="font-semibold pt-3 pb-2">Technologies:</li>
                  <li>React</li>
                  <li>Node.JS</li>
                  <li>GraphQL</li>
                  <li>MongoDB</li>
                  <li>Tailwind CSS</li>
                </ul>
                <ul>
                  <li className="font-semibold pt-3 pb-2">Capabilities:</li>
                  <li>Database Storage</li>
                  <li>User Registration</li>
                  <li>Screen Navigation</li>
                  <li>Cypress Testing</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
            </div>
            <div className="max-w-xl md:max-w-md lg:max-w-lg mx-auto">
              <Carousel>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/rental_shop_app/figma_design.png")}
                      className="sm:rounded-lg shadow-md flex"
                      alt="Landing page and movie detail page"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/rental_shop_app/figma_design_2.png")}
                      className="sm:rounded-lg shadow-md flex"
                      alt="Movie list page"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/rental_shop_app/figma_design_4.png")}
                      className="sm:rounded-lg shadow-md flex"
                      alt="Feature film secion and profile screen"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/rental_shop_app/figma_design_3.png")}
                      className="sm:rounded-lg shadow-md flex"
                      alt="Mobile login screen"
                    />
                  </div>
                </CarouselItem>
              </Carousel>
            </div>
          </div>
          <div className="md:flex pb-14">
            <div className="p-8 -mt-3 sm:pl-14 w-full items-start">
              <h2 className="text-2xl font-poppinsFont font-semibold inline">
                Atmosphere Static Site
              </h2>
              <div className="inline text-sm">
                <a
                  className="fa fa-github fa-2x p-4 hover:text-blue-600"
                  href="https://github.com/Isaiahsylnol/Atmosphere-site"
                ></a>
                <a
                  className="fa fa-laptop fa-2x hover:text-blue-600 pt-3 xl:pt-0"
                  href="https://isaiahsylnol.github.io/Atmosphere-site/"
                ></a>
              </div>
              <div className="grid grid-cols-2 max-w-xs">
                <ul>
                  <li className="font-bold pt-3 pb-2">Technologies:</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                </ul>
              </div>
            </div>
            <div className="max-w-xl md:max-w-md lg:max-w-lg mx-auto">
              <Carousel>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/atmosphere_site/atmosphere_figma.jpg")}
                      className="sm:rounded-lg shadow-md flex"
                      alt="Atmosphere layers page"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/atmosphere_site/atmosphere_figma_2.png")}
                      className="sm:rounded-lg shadow-md flex"
                      alt="Media and sources page"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/atmosphere_site/atmosphere_figma_3.png")}
                      className="sm:rounded-lg shadow-md flex"
                      alt="Landing page"
                    />
                  </div>
                </CarouselItem>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact form --> */}
      <section className="pb-4 bg-[#e6ac9c] dark:bg-[#202120] text-[#252525] dark:text-[#e4e4e4]">
        <h2 className="text-4xl text-center font-poppinsFont font-extrabold pt-16">
          Let's Connect
        </h2>
        {/* <!-- Container --> */}
        <div className="flex flex-col lg:flex-row justify-center mx-auto md:mt-6 sm:p-6">
          {/* <!-- Left column --> */}
          <div className="sm:pb-8 sm:p-4 sm:space-y-4 lg:p-15 mt-12 sm:mt-0 font-semibold text-xl sm:text-2xl">
            <div className="p-6 rounded-lg flex mx-auto items-center">
              <i
                className="fa fa-map-marker fa-1x scale-150"
                aria-hidden="true"
              ></i>
              <h2 className="inline pl-7 sm:pl-16">Toronto, ON, Canada</h2>
            </div>
            <div className="p-6 rounded-lg flex mx-auto items-center">
              <i className="fa fa-phone fa-1x scale-150" aria-hidden="true"></i>
              <h2 className="inline pl-7 sm:pl-16">647-237-2620</h2>
            </div>
            <div className="p-6 rounded-lg flex mx-auto items-center">
              <i
                className="fa fa-envelope-o fa-1x scale-150"
                aria-hidden="true"
              ></i>
              <h2 className="inline pl-7 sm:pl-16">
                contact@isaiahsylvester.com
              </h2>
            </div>
          </div>
          {/* <!-- Right column --> */}
          <div className="p-8 -mb-8 sm:m-0">
            <form
              className="w-full max-w-lg mx-auto"
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
