import React from "react";
import Carousel, { CarouselItem } from "../components/Carousel";
import profileImage from "../assets/portrait-sq.png";
import ScrollToTop from "../components/ScrollToTop";
import { DevelopmentTools } from "../components/DevelopmentTools";
import petsNPalsFigma from "../assets/petsnpals/petsnpals_figma.png";
import petsNPalsFigma_2 from "../assets/petsnpals/petsnpals_figma_2.png";
import petsNPalsFigma_3 from "../assets/petsnpals/petsnpals_figma_3.png";
import rentalFigma from "../assets/rental_shop_app/figma_design.png";
import rentalFigma_2 from "../assets/rental_shop_app/figma_design_2.png";
import rentalFigma_3 from "../assets/rental_shop_app/figma_design_3.png";
import rentalFigma_4 from "../assets/rental_shop_app/figma_design_4.png";
import atmosphere_1 from "../assets/atmosphere_site/atmosphere_figma.jpg";
import atmosphere_2 from "../assets/atmosphere_site/atmosphere_figma_2.png";
import atmosphere_3 from "../assets/atmosphere_site/atmosphere_figma_3.png";
import product_management_1 from "../assets/product_manager/product_manager_figma.png";
import product_management_2 from "../assets/product_manager/product_manager_figma_2.png";
import product_management_3 from "../assets/product_manager/product_manager_figma_3.png";

export default function index() {
  return (
    <main id="#top" className="bg-[#f4f2f2] dark:bg-[#323232] text-[#252525]">
      <section className="mx-auto grid max-w-7xl grid-cols-2">
        <div className="md:flex dark:text-[#e4e4e4] dark:bg-[#323232] lg:flex-row items-center justify-center lg:space-x-28 p-8 rounded-2xl col-span-2 sm:col-span-1">
          <section className="space-y-12">
            <div>
              <div className="flex flex-row mb-5 sm:pt-8">
                <div className="w-fit md:max-w-lg lg:max-w-none">
                  <h1 className="w-fit text-5xl font-poppinsFont font-bold">
                    Hello
                    <hr className="border-4 w-full border-[#c37a8e] mb-5" />
                  </h1>
                  <h1 className="pt-5 text-5xl font-poppinsFont dark:text-[#e4e4e4] font-extrabold inline">
                    I'm Isaiah Sylvester
                  </h1>
                </div>
              </div>
              <p className="max-w-md">
                I am passionate about fostering creativity, design, and
                understanding in my work, which I leverage to create intuitive
                and responsive user experiences. I prioritize making time for
                daily practice and mental stimulation, which I achieve by
                exploring side projects and pursuing new curiosities, in order
                to continually expand my abilities.
              </p>
              <h2 className="mt-5">
                In addition to technology, I have a strong passion for:
              </h2>
              <div className="inline-flex gap-2 mt-2 text-sm lg:w-96 flex-wrap">
                {[
                  "Linguistic Studies",
                  "Marathons",
                  "Fitness",
                  "Music",
                  "Hiking",
                  "Gaming",
                  "Creative Art",
                  "World News",
                  "Photography",
                ].map((interest, index) => (
                  <div
                    key={index}
                    className="border border-gray-400 rounded-md p-1"
                  >
                    {interest}
                  </div>
                ))}
              </div>
            </div>
            <DevelopmentTools />
          </section>
        </div>
        <div className="col-span-2 sm:col-span-1 mx-auto">
          <img
            src={profileImage}
            alt="Profile portrait"
            className="object-cover mx-auto mt-16 sm:mt-28"
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
          />
          <div className="flex flex-col justify-start items-start gap-5 mt-16 sm:mt-20 dark:text-[#e4e4e4]">
            <h2 className="text-[#252525] dark:text-[#e4e4e4] text-2xl font-bold">
              Software Developer
            </h2>
            {/* <!-- Personal Info --> */}
            <div className="flex items-center justify-center">
              <i
                className="pr-8 fa fa-map-marker fa-2x scale-90 text-[#252525] dark:text-[#e4e4e4]"
                aria-hidden="true"
              ></i>
              Toronto, ON, Canada
            </div>
            <div>
              <i
                className="pr-4 fa fa-graduation-cap fa-2x scale-90 text-[#252525] dark:text-[#e4e4e4]"
                aria-hidden="true"
              ></i>
              <div className="inline-flex absolute">
                <div>
                  <h4>George Brown College</h4>
                  <h5 className="text-sm text-neutral-500 dark:text-neutral-400">
                    Advanced Diploma
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <i
                className="pr-6 fa fa-envelope-o fa-2x scale-90 text-[#252525] dark:text-[#e4e4e4]"
                aria-hidden="true"
              ></i>
              contact@isaiahsylvester.com
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mx-auto max-w-5xl text-[#252525] dark:text-[#e4e4e4] p-4">
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
                      src={petsNPalsFigma}
                      className="rounded-lg shadow-md flex"
                      alt="News section and mobile cart screen"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={petsNPalsFigma_2}
                      className="rounded-lg shadow-md flex"
                      alt="Products page and product detail screen"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={petsNPalsFigma_3}
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
                      src={rentalFigma}
                      className="rounded-lg shadow-md flex"
                      alt="Landing page and movie detail page"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={rentalFigma_2}
                      className="rounded-lg shadow-md flex"
                      alt="Movie list page"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={rentalFigma_4}
                      className="rounded-lg shadow-md flex"
                      alt="Feature film secion and profile screen"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      src={rentalFigma_3}
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
                    src={atmosphere_1}
                    className="rounded-lg shadow-md flex"
                    alt="Atmosphere layers page"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="uppercase font-bold text-white cursor-pointer">
                  <img
                    src={atmosphere_2}
                    className="rounded-lg shadow-md flex"
                    alt="Media and sources page"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="uppercase font-bold text-white cursor-pointer">
                  <img
                    src={atmosphere_3}
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
          <div>
            <Carousel>
              <CarouselItem>
                <div className="uppercase font-bold text-white cursor-pointer">
                  <img
                    src={product_management_1}
                    className="rounded-lg shadow-md flex"
                    alt="Product Inquiry and product detail screens"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="uppercase font-bold text-white cursor-pointer">
                  <img
                    src={product_management_2}
                    className="rounded-lg shadow-md flex"
                    alt="Application hamburger menu and quick route selections screens"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="uppercase font-bold text-white cursor-pointer">
                  <img
                    src={product_management_3}
                    className="rounded-lg shadow-md flex"
                    alt="Maintain location and add product to location screens"
                  />
                </div>
              </CarouselItem>
            </Carousel>
            <div className="p-3">
              <h2 className="text-2xl font-poppinsFont font-semibold inline">
                Product Management System
              </h2>
              <div className="w-24 p-1 text-center text-sm uppercase rounded-md bg-[#fa8d33] text-white">
                In progress
              </div>
              <a
                className="fa fa-github fa-2x p-4 hover:text-blue-600"
                href="https://github.com/Isaiahsylnol/product-manager-clone"
              ></a>
              <div className="grid grid-cols-2 max-w-xs">
                <ul>
                  <li className="font-semibold pt-3 pb-2">Technologies:</li>
                  <li>Ionic</li>
                  <li>Angular</li>
                  <li>Supabase</li>
                  <li>Tailwind CSS</li>
                </ul>
                <ul>
                  <li className="font-semibold pt-3 pb-2">Capabilities:</li>
                  <li className="uppercase">crud</li>
                  <li>Database Storage</li>
                  <li>Screen Navigation</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact form --> */}
      <section className="pb-12 pt-14 bg-[#f4f2f2] dark:bg-[#202120] text-[#252525] dark:text-[#e4e4e4] sm:rounded-2xl">
        <h2 className="text-4xl text-center font-poppinsFont font-extrabold p-8">
          Let's Connect
        </h2>
        {/* <!-- Container --> */}
        <div className="flex flex-col lg:flex-row justify-center">
          {/* <!-- Left column --> */}
          <div className="m-12 font-semibold text-xl space-y-12 mx-auto lg:mx-12">
            <div>
              <i
                className="fa fa-map-marker fa-1x scale-150"
                aria-hidden="true"
              ></i>
              <h2 className="inline pl-10">Toronto, ON</h2>
            </div>
            <div>
              <i
                className="fa fa-envelope-o fa-1x scale-150"
                aria-hidden="true"
              ></i>
              <h2 className="inline pl-10">contact@isaiahsylvester.com</h2>
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
            </form>
          </div>
        </div>
      </section>
      <button
        onClick={ScrollToTop}
        className="float-right pr-10 sm:pr-8 font-semibold font-poppinsFont uppercase text-sm"
      >
        Back to the top ^
      </button>
    </main>
  );
}
