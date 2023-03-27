import React from "react";

import Carousel, { CarouselItem } from "../components/Carousel/Carousel";
import pic from "../assets/next_js_logo.svg";
import graphqlIcon from "../assets/GraphQL-Logo.svg";
import mongoDBIcon from "../assets/mongodb-logo.svg";
import tailwindIcon from "../assets/Tailwind_CSS_Logo.svg";
import cssIcon from "../assets/CSS3_logo.svg";

export default function index() {
  function scrollFunction(id) {
    let e = document?.getElementById(id);
    e?.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  }

  return (
    <main
      id="/"
      className="dark:bg-[#232423] text-[#252525] pt-16 -mt-14 md:pt-16"
    >
      <section className="bg-[#f4f2f2] dark:bg-[#323232]">
        <section className="md:flex dark:text-[#e4e4e4] dark:bg-[#323232] lg:flex-row items-center justify-center lg:space-x-28 p-8 rounded-2xl">
          <div>
            <div className="flex flex-row mb-5 sm:pt-8">
              <div className="w-fit max-w-none md:max-w-lg lg:max-w-none">
                <h1 className="w-fit text-5xl font-poppinsFont font-bold">
                  Hello
                  <hr class="border-4 w-full border-[#c37a8e] mb-5" />
                </h1>
                <h1 className="pt-5 text-5xl font-poppinsFont dark:text-[#e4e4e4] font-extrabold inline">
                  I'm Isaiah Sylvester
                </h1>
              </div>
            </div>
            <p className="max-w-md">
              I hold a passion for creativity, design and understanding which I
              leverage through my development to ensure the end user's
              experience feels intuitive & responsive. I value creating the time
              for day to day practice & mental stimulation exploring side
              projects and curiosities in pursuit to expand my abilities.
            </p>
            <h2 className="mt-5">
              Aside from tech I hold keen interests for:{" "}
            </h2>
            <ul className="inline-flex gap-2 mt-2 text-sm w-96 flex-wrap">
              <li className="border border-gray-400 rounded-md p-1">
                Linguistic Studies
              </li>
              <li className="border border-gray-400 rounded-md p-1">
                Marathons
              </li>
              <li className="border border-gray-400 rounded-md p-1">Fitness</li>
              <li className="border border-gray-400 rounded-md p-1">Music</li>
              <li className="border border-gray-400 rounded-md p-1">Hiking</li>
              <li className="border border-gray-400 rounded-md p-1">Gaming</li>
              <li className="border border-gray-400 rounded-md p-1">
                Creative Art
              </li>
              <li className="border border-gray-400 rounded-md p-1">
                World News
              </li>
              <li className="border border-gray-400 rounded-md p-1">
                Photography
              </li>
            </ul>
          </div>
          <img
            src={require("../assets/portrait-sq.png")}
            alt="Profile portrait"
            className="object-cover mx-auto pt-10"
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
          />
        </section>
        <section className="sm:flex rounded-2xl">
          <div className="text-base mx-auto sm:mb-12">
            <div className="sm:grid sm:grid-cols-1 md:grid-cols-2 p-8 sm:space-x-20 lg:space-x-48 items-center">
              <div className="mb-16 md:m-0">
                <h2 className="text-[#252525] dark:text-[#e4e4e4] text-2xl font-bold pb-4">
                  Development Tools
                </h2>
                {/* <!-- Development tools section --> */}
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 dark:text-[#e4e4e4] w-full text-base font-semibold select-none">
                  <li className="bg-[#dedede] dark:bg-[#282828] flex items-center rounded-lg p-2">
                    <img
                      src={require("../assets/react_logo.png")}
                      className="inline h-8 w-8 mr-2"
                      alt="React logo"
                    />
                    ReactJS
                  </li>
                  <li className="bg-[#dedede] dark:bg-[#282828] flex items-center rounded-lg p-2">
                    <img
                      src={require("../assets/nodejs_logo.png")}
                      className="inline h-8 w-8 mr-2"
                      alt="Node.js logo"
                    />
                    Node.js
                  </li>
                  <li className="bg-[#dedede] dark:bg-[#282828] flex items-center rounded-lg p-2">
                    <img
                      src={pic}
                      className="inline h-8 w-8 mr-2"
                      alt="Node.js logo"
                    />
                    Next.js
                  </li>
                  <li className="bg-[#dedede] dark:bg-[#282828] flex items-center rounded-lg p-2">
                    <img
                      src={require("../assets/cypress-logo.png")}
                      className="inline h-8 w-8 mr-2"
                      alt="Cypress logo"
                    />
                    Cypress
                  </li>
                  <li className="bg-[#dedede] dark:bg-[#282828] flex items-center rounded-lg p-2">
                    <img
                      src={mongoDBIcon}
                      className="inline h-8 w-8 mr-2"
                      alt="MongoDB logo"
                    />
                    MongoDB
                  </li>
                  <li className="bg-[#dedede] dark:bg-[#282828] flex items-center rounded-lg p-2">
                    <img
                      src={graphqlIcon}
                      className="inline h-8 w-8 mr-2"
                      alt="GraphQL logo"
                    />
                    GraphQL
                  </li>
                  <li className="bg-[#dedede] dark:bg-[#282828] flex items-center rounded-lg p-2">
                    <img
                      src={require("../assets/javaScript_logo2.png")}
                      className="inline h-8 w-8 mr-2"
                      alt="Javascript logo"
                    />
                    Javascript ES6
                  </li>
                  <li className="bg-[#dedede] dark:bg-[#282828] flex items-center rounded-lg p-2">
                    <img
                      src={require("../assets/html_logo.png")}
                      className="inline h-8 w-8 mr-2"
                      alt="HTML5 logo"
                    />
                    HTML5
                  </li>
                  <li className="bg-[#dedede] dark:bg-[#282828] flex items-center rounded-lg p-2">
                    <img
                      src={cssIcon}
                      className="inline h-8 w-8 mr-2"
                      alt="GraphQL logo"
                    />
                    CSS3
                  </li>
                  <li className="bg-[#dedede] dark:bg-[#282828] flex items-center rounded-lg p-2">
                    <img
                      src={require("../assets/git_logo.png")}
                      className="inline h-8 w-8 mr-2"
                      alt="Git logo"
                    />
                    Git & Github
                  </li>
                  <li className="bg-[#dedede] dark:bg-[#282828] flex items-center rounded-lg p-2">
                    <img
                      src={tailwindIcon}
                      className="inline h-8 w-8 mr-2"
                      alt="Tailwind CSS logo"
                    />
                    Tailwind CSS
                  </li>
                </ul>
              </div>
              <div className="  ">
                {/* <!-- Personal Info --> */}
                <ul className="text-base dark:text-[#e4e4e4]">
                  <li className="font-bold text-2xl mb-3">
                    FullStack Developer
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
                      className="fa-solid fa-graduation-cap fa-2x scale-90 pr-3 inline text-[#252525] dark:text-[#e4e4e4]"
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
                  <li className="flex pt-1">
                    <button
                      onClick={() => scrollFunction("contact")}
                      className="bg-[#7a82c3] transform transition duration-500 hover:scale-110 text-white p-3 mt-4 w-full rounded-md"
                    >
                      Contact Me
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* <!-- Project section (Row layout) --> */}
      <section className="w-full mx-auto max-w-5xl">
        <section className="text-[#252525] dark:text-[#e4e4e4] p-4">
          <h1 className="text-5xl font-poppinsFont font-extrabold dark:text-[#e4e4e4] mt-20 mb-12 pl-6 md:p-0">
            Projects
          </h1>
          <div className="grid sm:grid-cols-2 gap-16 lg:gap-32">
            <div>
              <div className="max-w-5xl md:max-w-xl lg:max-w-2xl">
                <Carousel>
                  <CarouselItem>
                    <div className="uppercase font-bold text-white cursor-pointer">
                      <img
                        src={require("../assets/petsnpals/petsnpals_figma.png")}
                        className="rounded-lg shadow-md flex"
                        alt="News section and mobile cart screen"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="uppercase font-bold text-white cursor-pointer">
                      <img
                        src={require("../assets/petsnpals/petsnpals_figma_2.png")}
                        className="rounded-lg shadow-md flex"
                        alt="Products page and product detail screen"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="uppercase font-bold text-white cursor-pointer">
                      <img
                        src={require("../assets/petsnpals/petsnpals_figma_3.png")}
                        className="rounded-lg shadow-md flex"
                        alt="Subscription and profile screen"
                      />
                    </div>
                  </CarouselItem>
                </Carousel>
              </div>
              <div className="p-3">
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
            </div>
            <div>
              <div className="max-w-5xl md:max-w-xl lg:max-w-2xl mx-auto">
                <Carousel>
                  <CarouselItem>
                    <div className="uppercase font-bold text-white cursor-pointer">
                      <img
                        src={require("../assets/rental_shop_app/figma_design.png")}
                        className="rounded-lg shadow-md flex"
                        alt="Landing page and movie detail page"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="uppercase font-bold text-white cursor-pointer">
                      <img
                        src={require("../assets/rental_shop_app/figma_design_2.png")}
                        className="rounded-lg shadow-md flex"
                        alt="Movie list page"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="uppercase font-bold text-white cursor-pointer">
                      <img
                        src={require("../assets/rental_shop_app/figma_design_4.png")}
                        className="rounded-lg shadow-md flex"
                        alt="Feature film secion and profile screen"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="uppercase font-bold text-white cursor-pointer">
                      <img
                        src={require("../assets/rental_shop_app/figma_design_3.png")}
                        className="rounded-lg shadow-md flex"
                        alt="Mobile login screen"
                      />
                    </div>
                  </CarouselItem>
                </Carousel>
              </div>
              <div className="p-3">
                <h2 className="text-2xl font-poppinsFont font-semibold inline">
                  Rental Web App
                </h2>
                <a
                  className="fa fa-github fa-2x p-4 hover:text-blue-600"
                  href="https://github.com/Isaiahsylnol/pets_n_pals"
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
            </div>
            <div>
              <Carousel>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/atmosphere_site/atmosphere_figma.jpg")}
                      className="rounded-lg shadow-md flex"
                      alt="Atmosphere layers page"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/atmosphere_site/atmosphere_figma_2.png")}
                      className="rounded-lg shadow-md flex"
                      alt="Media and sources page"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={require("../assets/atmosphere_site/atmosphere_figma_3.png")}
                      className="rounded-lg shadow-md flex"
                      alt="Landing page"
                    />
                  </div>
                </CarouselItem>
              </Carousel>
              <div className="p-3">
                <h2 className="text-2xl font-poppinsFont font-semibold inline">
                  Atmosphere Static Site
                </h2>
                <a
                  className="fa fa-github fa-2x p-4 hover:text-blue-600"
                  href="https://github.com/Isaiahsylnol/pets_n_pals"
                ></a>
                <div className="grid grid-cols-2 max-w-xs">
                  <ul>
                    <li className="font-semibold pt-3 pb-2">Technologies:</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* <!-- Contact form --> */}
      <section className="pb-4 bg-[#f4f2f2] dark:bg-[#202120] text-[#252525] dark:text-[#e4e4e4] sm:rounded-2xl">
        <h2 className="text-4xl text-center font-poppinsFont font-extrabold pt-16">
          Let's Connect
        </h2>
        {/* <!-- Container --> */}
        <div className="flex flex-col lg:flex-row justify-center mx-auto md:mt-6 sm:p-6">
          {/* <!-- Left column --> */}
          <div className="sm:pb-8 sm:p-4 lg:p-15 mt-12 sm:mt-0 font-semibold text-xl">
            <div className="p-6 rounded-lg flex mx-auto items-center">
              <i
                className="fa fa-map-marker fa-1x scale-150"
                aria-hidden="true"
              ></i>
              <h2 className="inline pl-7 sm:pl-16">Toronto, ON</h2>
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
                className="bg-[#c37a8e] w-full text-center p-3 rounded-md mx-auto hover:bg-[#a66879] text-white"
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
