import React from "react";
import Carousel, { CarouselItem } from "../components/Carousel";
import ScrollToTop from "../components/ScrollToTop";
import { DevelopmentTools } from "../components/DevelopmentTools";

export default function index() {
  return (
    <main
      id="#top"
      className="bg-[#f4f2f2] dark:bg-[#323232] text-[#252525] relative"
    >
      <section>
        <div class="custom-shape-divider-top-1685229460">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>

        <section className="mx-auto grid grid-cols-2 max-w-7xl items-center relative">
          <div className="dark:text-[#e4e4e4] dark:bg-[#323232] col-span-2 lg:col-span-1 p-6 sm:p-8">
            <section>
              <div className="mb-5 sm:pt-8">
                <h1 className="w-fit text-5xl font-poppinsFont font-bold">
                  Hello
                  <hr className="border-4 w-full border-[#c37a8e] mb-5" />
                </h1>
                <h2 className="pt-5 text-5xl font-poppinsFont dark:text-[#e4e4e4] font-extrabold inline">
                  I'm Isaiah Sylvester
                </h2>
              </div>
              <p className="max-w-lg">
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
              <div className="inline-flex gap-2 mt-2 text-sm lg:w-96 flex-wrap mb-8">
                {[
                  "Linguistic Studies",
                  "Fitness",
                  "Photography",
                  "Music",
                  "Creative Art",
                  "Hiking",
                  "Gaming",
                  "World News",
                ].map((interest, index) => (
                  <div
                    key={index}
                    className="border border-gray-400 rounded-md p-1"
                  >
                    {interest}
                  </div>
                ))}
              </div>

              <DevelopmentTools />
            </section>
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center m-4 p-12">
            <img
              sizes="(min-width: 25em) 25em, 100vw"
              srcSet="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-256/portrait-sq.png?updatedAt=1683062031884 256w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/portrait-sq.png?updatedAt=1683062031884 512w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-768/portrait-sq.png?updatedAt=1683062031884 768w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1024/portrait-sq.png?updatedAt=1683062031884 1024w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1280/portrait-sq.png?updatedAt=1683062031884 1280w"
              src="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/portrait-sq.png?updatedAt=1683062031884"
              alt="Profile portrait"
              className="object-cover mt-16 sm:mt-12"
              style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
            />
            <div className="flex flex-col gap-5 mt-16 sm:mt-20 dark:text-[#e4e4e4]">
              <h2 className="text-[#252525] dark:text-[#e4e4e4] text-2xl font-bold">
                Software Developer
              </h2>
              {/* <!-- Personal Info --> */}
              <div className="flex items-center">
                <i
                  className="pl-1 pr-7 fa fa-map-marker fa-2x scale-90 text-[#252525] dark:text-[#e4e4e4]"
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
      </section>
      <section className="w-full mx-auto max-w-5xl text-[#252525] dark:text-[#e4e4e4] p-4">
        <h1 className="text-5xl font-poppinsFont font-extrabold dark:text-[#e4e4e4] mt-14 mb-12 pl-6 md:p-0">
          Projects
        </h1>
        <div className="grid sm:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <div className="max-w-5xl md:max-w-xl lg:max-w-2xl">
              <Carousel>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      sizes="(min-width: 50em) 50em, 100vw"
                      srcSet="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-256/petsnpals_figma.png?updatedAt=1683028442056 256w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/petsnpals_figma.png?updatedAt=1683028442056 512w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-768/petsnpals_figma.png?updatedAt=1683028442056 768w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1024/petsnpals_figma.png?updatedAt=1683028442056 1024w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1280/petsnpals_figma.png?updatedAt=1683028442056 1280w"
                      src="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/petsnpals_figma.png?updatedAt=1683028442056"
                      className="rounded-lg shadow-md flex"
                      alt="News section and mobile cart screen"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      sizes="(min-width: 50em) 50em, 100vw"
                      srcSet="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-256/petsnpals_figma_2.png?updatedAt=1683029238191 256w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/petsnpals_figma_2.png?updatedAt=1683029238191 512w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-768/petsnpals_figma_2.png?updatedAt=1683029238191 768w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1024/petsnpals_figma_2.png?updatedAt=1683029238191 1024w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1280/petsnpals_figma_2.png?updatedAt=1683029238191 1280w"
                      src="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/petsnpals_figma_2.png?updatedAt=1683029238191"
                      className="rounded-lg shadow-md flex"
                      alt="Products page and product detail screen"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      sizes="(min-width: 50em) 50em, 100vw"
                      srcSet="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-256/petsnpals_figma_3.png?updatedAt=1683031217105 256w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/petsnpals_figma_3.png?updatedAt=1683031217105 512w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-768/petsnpals_figma_3.png?updatedAt=1683031217105 768w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1024/petsnpals_figma_3.png?updatedAt=1683031217105 1024w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1280/petsnpals_figma_3.png?updatedAt=1683031217105 1280w"
                      src="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/petsnpals_figma_3.png?updatedAt=1683031217105"
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
                      sizes="(min-width: 50em) 50em, 100vw"
                      srcSet="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-256/figma_1.png?updatedAt=1683031736586 256w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/figma_1.png?updatedAt=1683031736586 512w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-768/figma_1.png?updatedAt=1683031736586 768w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1024/figma_1.png?updatedAt=1683031736586 1024w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1280/figma_1.png?updatedAt=1683031736586 1280w"
                      src="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/figma_1.png?updatedAt=1683031736586"
                      className="rounded-lg shadow-md flex"
                      alt="Landing page and movie detail page"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      sizes="(min-width: 50em) 50em, 100vw"
                      srcSet="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-256/figma_2.png?updatedAt=1683031810966 256w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/figma_2.png?updatedAt=1683031810966 512w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-768/figma_2.png?updatedAt=1683031810966 768w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1024/figma_2.png?updatedAt=1683031810966 1024w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1280/figma_2.png?updatedAt=1683031810966 1280w"
                      src="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/figma_2.png?updatedAt=1683031810966"
                      className="rounded-lg shadow-md flex"
                      alt="Movie list page"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      sizes="(min-width: 50em) 50em, 100vw"
                      srcSet="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-256/figma_3.png?updatedAt=1683031860728 256w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/figma_3.png?updatedAt=1683031860728 512w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-768/figma_3.png?updatedAt=1683031860728 768w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1024/figma_3.png?updatedAt=1683031860728 1024w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1280/figma_3.png?updatedAt=1683031860728 1280w"
                      src="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/figma_3.png?updatedAt=1683031860728"
                      className="rounded-lg shadow-md flex"
                      alt="Feature film secion and profile screen"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="uppercase font-bold text-white cursor-pointer">
                    <img
                      sizes="(min-width: 50em) 50em, 100vw"
                      srcSet="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-256/figma_4.png?updatedAt=1683031965710 256w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/figma_4.png?updatedAt=1683031965710 512w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-768/figma_4.png?updatedAt=1683031965710 768w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1024/figma_4.png?updatedAt=1683031965710 1024w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1280/figma_4.png?updatedAt=1683031965710 1280w"
                      src="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/figma_4.png?updatedAt=1683031965710"
                      className="rounded-lg shadow-md flex"
                      alt="User login screen"
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
                    sizes="(min-width: 50em) 50em, 100vw"
                    srcSet="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-256/atmosphere_1.jpg?updatedAt=1683033041284 256w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/atmosphere_1.jpg?updatedAt=1683033041284 512w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-768/atmosphere_1.jpg?updatedAt=1683033041284 768w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1024/atmosphere_1.jpg?updatedAt=1683033041284 1024w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1280/atmosphere_1.jpg?updatedAt=1683033041284 1280w"
                    src="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/atmosphere_1.jpg?updatedAt=1683033041284"
                    className="rounded-lg shadow-md flex"
                    alt="Atmosphere layers page"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="uppercase font-bold text-white cursor-pointer">
                  <img
                    sizes="(min-width: 50em) 50em, 100vw"
                    srcSet="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-256/atmosphere_2.png?updatedAt=1683033129859 256w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/atmosphere_2.png?updatedAt=1683033129859 512w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-768/atmosphere_2.png?updatedAt=1683033129859 768w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1024/atmosphere_2.png?updatedAt=1683033129859 1024w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1280/atmosphere_2.png?updatedAt=1683033129859 1280w"
                    src="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/atmosphere_2.png?updatedAt=1683033129859"
                    className="rounded-lg shadow-md flex"
                    alt="Media and sources page"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="uppercase font-bold text-white cursor-pointer">
                  <img
                    sizes="(min-width: 50em) 50em, 100vw"
                    srcSet="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-256/atmosphere_3.png?updatedAt=1683033185007 256w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/atmosphere_3.png?updatedAt=1683033185007 512w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-768/atmosphere_3.png?updatedAt=1683033185007 768w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1024/atmosphere_3.png?updatedAt=1683033185007 1024w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1280/atmosphere_3.png?updatedAt=1683033185007 1280w"
                    src="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/atmosphere_3.png?updatedAt=1683033185007"
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
                    sizes="(min-width: 50em) 50em, 100vw"
                    srcSet="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-256/product_manager_1.png?updatedAt=1683061523238 256w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/product_manager_1.png?updatedAt=1683061523238 512w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-768/product_manager_1.png?updatedAt=1683061523238 768w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1024/product_manager_1.png?updatedAt=1683061523238 1024w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1280/product_manager_1.png?updatedAt=1683061523238 1280w"
                    src="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/product_manager_1.png?updatedAt=1683061523238"
                    className="rounded-lg shadow-md flex"
                    alt="Product Inquiry and product detail screens"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="uppercase font-bold text-white cursor-pointer">
                  <img
                    sizes="(min-width: 50em) 50em, 100vw"
                    srcSet="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-256/product_manager_2.png?updatedAt=1683061792511 256w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/product_manager_2.png?updatedAt=1683061792511 512w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-768/product_manager_2.png?updatedAt=1683061792511 768w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1024/product_manager_2.png?updatedAt=1683061792511 1024w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1280/product_manager_2.png?updatedAt=1683061792511 1280w"
                    src="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/product_manager_2.png?updatedAt=1683061792511"
                    className="rounded-lg shadow-md flex"
                    alt="Application hamburger menu and quick route selections screens"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="uppercase font-bold text-white cursor-pointer">
                  <img
                    sizes="(min-width: 50em) 50em, 100vw"
                    srcSet="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-256/product_manager_3.png?updatedAt=1683061926477 256w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/product_manager_3.png?updatedAt=1683061926477 512w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-768/product_manager_3.png?updatedAt=1683061926477 768w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1024/product_manager_3.png?updatedAt=1683061926477 1024w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1280/product_manager_3.png?updatedAt=1683061926477 1280w"
                    src="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/product_manager_3.png?updatedAt=1683061926477"
                    className="rounded-lg shadow-md flex"
                    alt="Maintain location and add product to location screens"
                  />
                </div>
              </CarouselItem>
            </Carousel>
            <div className="p-3">
              <h2 className="text-2xl font-poppinsFont font-semibold inline">
                Product Management Clone
              </h2>
              <div className="w-max p-1 text-center text-xs text-white uppercase rounded-md bg-[#fa8d33]">
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
