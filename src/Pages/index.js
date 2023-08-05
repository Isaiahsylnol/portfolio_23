import React from "react";
import Carousel, { CarouselItem } from "../components/Carousel";
import scrollToTop from "../components/ScrollTo";
import { DevelopmentTools } from "../components/DevelopmentTools";
import Art from "../components/Art";

export default function index() {

  return (
    <main    
      className="bg-[#f4f2f2] dark:bg-[#201c1c] text-[#252525]">
      <section className="md:space-x-9 max-w-6xl mx-auto md:grid md:grid-cols-2 items-center text-[#252525] dark:text-zinc-100 p-8">
        <div>
          <div>
            <h1 className="w-fit text-3xl font-poppinsFont font-bold">
              Hello
              <hr className="border-4 w-full border-[#c37a8e] mb-5" />
            </h1>
          </div>
          <p className="max-w-2xl text-4xl font-bold items-start justify-start mb-7">
          I'm Isaiah Sylvester, a software developer from Toronto, ON, on a mission to create intuitive and responsive user experiences by fostering creativity and design.
          </p>
        </div>
        <div className="flex items-center mx-auto justify-center h-3/4 rounded-3xl bg-amber-400 dark:bg-[#363a4b]">
          <Art />
        </div>
      </section>
      <section>
        <div className="w-full mx-auto flex flex-col p-5 sm:p-12 max-w-6xl items-center">
          <DevelopmentTools />
        </div>
      </section>
       <section className="w-full mx-auto max-w-7xl text-[#252525] dark:text-zinc-100 p-14">
        <h1 id="#projects" className="text-4xl font-poppinsFont font-extrabold dark:text-zinc-100 mb-12 md:p-0">
          Projects
        </h1>
        <div className="grid md:grid-cols-2 gap-16 lg:gap-32">
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
                      className="rounded-lg shadow-md"
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
                      className="rounded-lg shadow-md"
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
                      className="rounded-lg shadow-md"
                      alt="Subscription and profile screen"
                    />
                  </div>
                </CarouselItem>
              </Carousel>
            </div>
            <div className="flex items-center pt-2">
              <h2 className="text-2xl font-poppinsFont font-semibold inline">
                Pets N Pals
              </h2>
              <a
                className="fa fa-github fa-xl p-4 hover:text-blue-600"
                href="https://github.com/Isaiahsylnol/pets_n_pals"
              ></a>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              minus debitis similique magni! Praesentium tempore impedit dicta
              minima ipsam.
            </p>
            <a className="block mt-5" href="/rental-movie-app">
              Read More
            </a>
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
                      className="rounded-lg shadow-md"
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
                      className="rounded-lg shadow-md"
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
                      className="rounded-lg shadow-md"
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
                      className="rounded-lg shadow-md"
                      alt="User login screen"
                    />
                  </div>
                </CarouselItem>
              </Carousel>
            </div>
            <div className="flex items-center pt-2">
              <h2 className="text-2xl font-poppinsFont font-semibold inline pr-3">
                Rental Web App
              </h2>
              <a
                className="fa fa-arrow-up-right-from-square fa-xl p-1 hover:text-blue-600"
                href="https://movie-app-2-13fb90b27d3b.herokuapp.com/"
              ></a>
              <a
                className="fa fa-github fa-xl p-1 hover:text-blue-600"
                href="https://github.com/Isaiahsylnol/pets_n_pals"
              ></a>
            </div>
            <p className="pb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              minus debitis similique magni! Praesentium tempore impedit dicta
              minima ipsam.
            </p>
            <div className="inline-flex gap-2 text-sm flex-wrap mb-8">
              {["React", "GraphQL", "MongoDB", "Tailwind CSS"].map(
                (interest, index) => (
                  <div
                    key={index}
                    className="border border-gray-400 rounded-md p-1"
                  >
                    {interest}
                  </div>
                )
              )}
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
                    className="rounded-lg shadow-md"
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
                    className="rounded-lg shadow-md"
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
                    className="rounded-lg shadow-md"
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
                className="fa fa-github fa-xl p-4 hover:text-blue-600"
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
                    className="rounded-lg shadow-md"
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
                    className="rounded-lg shadow-md"
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
                    className="rounded-lg shadow-md"
                    alt="Maintain location and add product to location screens"
                  />
                </div>
              </CarouselItem>
            </Carousel>
            <div className="p-3">
              <div className="w-max p-1 text-center text-xs text-white uppercase rounded-md bg-[#fa8d33]">
                In progress
              </div>
              <div className="flex items-center pt-2">
                <h2 className="text-2xl font-poppinsFont font-semibold inline pr-3">
                  Product Management Clone
                </h2>
                <a
                  className="fa fa-github fa-xl p-1 hover:text-blue-600"
                  href="https://github.com/Isaiahsylnol/pets_n_pals"
                ></a>
              </div>
              <p className="pb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                minus debitis similique magni! Praesentium tempore impedit dicta
                minima ipsam.
              </p>
              <div className="inline-flex gap-2 text-sm flex-wrap mb-8">
                {["Ionic", "Angular", "MySQL", "TypeScript"].map(
                  (interest, index) => (
                    <div
                      key={index}
                      className="border border-gray-400 rounded-md p-1"
                    >
                      {interest}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section> 
      {/* About me section container */}
      <section className="pb-16 bg-[#ebebeb] dark:bg-[#282828]">
        <div id="#about" className="mx-auto pt-12 justify-center items-center grid md:grid-cols-2 lg:space-x-14 max-w-4xl">
          <div className="">
            <img
              sizes="(min-width: 25em) 25em, 100vw"
              srcSet="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-256/portrait-sq.png?updatedAt=1683062031884 256w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/portrait-sq.png?updatedAt=1683062031884 512w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-768/portrait-sq.png?updatedAt=1683062031884 768w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1024/portrait-sq.png?updatedAt=1683062031884 1024w,
                      https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1280/portrait-sq.png?updatedAt=1683062031884 1280w"
              src="https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/portrait-sq.png?updatedAt=1683062031884"
              alt="Profile portrait"
              className="object-cover justify-center mx-auto p-8"
              style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
            />
          </div>
          <div className="max-w-3xl space-y-5 dark:text-zinc-100 p-8 lg:p-0">
            <h2 className="text-[#252525] dark:text-zinc-100 text-2xl font-bold">
              About Me
            </h2>
            <p>
              I am passionate about fostering creativity, design, and
              understanding in my work, which I leverage to create intuitive and
              responsive user experiences. I prioritize making time for daily
              practice and mental stimulation, which I achieve by exploring side
              projects and pursuing new curiosities, in order to continually
              expand my abilities.
            </p>
            {/* <!-- Personal Info --> */}
            <h2>In addition to technology, I have a strong passion for:</h2>
            <div className="inline-flex gap-2 flex-wrap">
              {[
                "Linguistic Studies",
                "Fitness",
                "Photography",
                "Music",
                "Creative Art",
                "Hiking",
                "Gaming",
                "World News",
                "Running",
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
        </div>
        <div className="grid grid-cols-2 max-w-6xl mt-20 mx-auto justify-center text-center dark:text-zinc-100 p-5">
          <div className="pt-6 text-center">
            <i
              className="pr-4 fa fa-graduation-cap fa-2x scale-90 text-[#252525] dark:text-zinc-100"
              aria-hidden="true"
            ></i>
            <h1 className="text-[#252525] dark:text-zinc-100 text-xl font-bold">
              Education
            </h1>
            <div className="inline-flex">
              <div className="space-y-3 mt-3">
              <div>
                <h4>George Brown College</h4>
                <h5 className="text-sm text-neutral-500 dark:text-neutral-400">
                  Advanced Diploma in Computer Technology
                </h5>
              </div>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <i
              className="pr-4 fa fa-award fa-2x scale-90 text-[#252525] dark:text-zinc-100"
              aria-hidden="true"
            ></i>
            <h1 className="text-[#252525] dark:text-zinc-100 text-xl font-bold">
              Certificates
            </h1>
            <div className="space-y-3 mt-3">
              <div>
                <h4>AWS Cloud Technical Essentials</h4>
                <h5 className="text-sm text-neutral-500 dark:text-neutral-400">
                  Coursera
                </h5>
              </div>
              <div>
                <h4>JavaScript: The Advanced Concepts (2023 Update)</h4>
                <h5 className="text-sm text-neutral-500 dark:text-neutral-400">
                  Udemy
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact form --> */}
      <section id="#contact" className="pb-12 justify-center mx-auto pt-14 bg-[#f4f2f2] dark:bg-[#201c1c] text-[#252525] dark:text-zinc-100 sm:rounded-2xl">
        <h2 className="text-4xl text-center font-poppinsFont font-extrabold p-8">
          Let's Connect
        </h2>
        <p className="max-w-xl justify-center mx-auto p-10 sm:p-0 mb-10">
          I welcome new opportunities and am eager to connect. Feel free to
          reach out for questions, collaborations, feedback, or just to say
          hello. My inbox is always open, and I look forward to hearing from
          you!
        </p>
        {/* <!-- Container --> */}
        <div className="flex flex-col lg:flex-row justify-center">
          {/* <!-- Left column --> */}
          <div className="m-12 text-xl space-y-12 mx-auto lg:mx-12">
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
        onClick={() => scrollToTop("#top")}
        className="float-right pr-10 pt-3 sm:pr-8 font-semibold font-poppinsFont dark:text-[#707070] uppercase text-sm"
      >
        Back to the top ^
      </button>
    </main>
  );
}
