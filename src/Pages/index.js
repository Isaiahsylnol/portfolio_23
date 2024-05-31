import React, { useState, useEffect } from "react";
import scrollToTop from "../components/ScrollTo";
import { DevelopmentTools } from "../components/DevelopmentTools";
import Art from "../components/Art";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projectData";
import { slides } from "../data/slideData";

export default function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setFade(true);
      }, 1000);
    }, 12000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-[#f4f2f2] dark:bg-[#201c1c] text-[#252525]">
      <section className="md:space-x-9 max-w-6xl mx-auto md:grid md:grid-cols-2 items-center text-[#252525] dark:text-zinc-100 p-8">
        <div>
          <div>
            <h1 className="w-fit text-3xl font-poppinsFont font-bold">
              Hello
              <hr className="border-4 w-full border-[#c37a8e] mb-5" />
            </h1>
          </div>
          <p className="max-w-2xl text-4xl font-bold items-start justify-start mb-7">
            I'm Isaiah Sylvester, a software developer from Toronto, ON, on a
            mission to create intuitive and responsive user experiences by
            fostering creativity and design.
          </p>
        </div>
        <div className="flex items-center justify-center h-3/4 rounded-3xl bg-amber-400 dark:bg-[#363a4b]">
          <Art />
        </div>
      </section>
      <section className="mx-auto p-5 sm:p-12 max-w-6xl">
        <DevelopmentTools />
      </section>
      <section className="mx-auto max-w-6xl text-[#252525] dark:text-zinc-100 p-5 sm:p-14">
        <h1
          id="#projects"
          className="text-4xl font-poppinsFont font-extrabold dark:text-zinc-100 mb-12 md:p-0"
        >
          Projects
        </h1>
        <div className="grid md:grid-cols-2 gap-16 lg:gap-32">
          {Object.entries(projects).map(([key, project]) => (
            <ProjectCard
              key={key}
              name={project.name}
              tools={project.tools}
              description={project.description}
              github={project.github}
              demo={project.demo}
              images={project.images}
              status={project.status}
            />
          ))}
        </div>
      </section>
      {/* About me section container */}
      <section className="pb-16 bg-[#ebebeb] dark:bg-[#282828]">
        <div
          id="#about"
          className="mx-auto pt-12 justify-center items-center grid md:grid-cols-2 lg:space-x-14 max-w-4xl"
        >
          <div style={{ opacity: fade ? 1 : 0, transition: "opacity 1s" }}>
            {slides[currentIndex]}
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
      {/* <!-- Contact form section --> */}
      <section
        id="#contact"
        className="pb-12 justify-center mx-auto pt-14 bg-[#f4f2f2] dark:bg-[#201c1c] text-[#252525] dark:text-zinc-100 sm:rounded-2xl"
      >
        <h2 className="text-4xl text-center font-poppinsFont font-extrabold">
          Let's Connect
        </h2>
        <p className="max-w-xl justify-center mx-auto p-10 lg:p-0 lg:mt-8 mb-16">
          I welcome new opportunities and am eager to connect. Feel free to
          reach out for questions, collaborations, feedback, or just to say
          hello. My inbox is always open, and I look forward to hearing from
          you!
        </p>
        {/* <!-- Grid Container --> */}
        <div className="md:grid grid-cols-2 max-w-5xl mx-auto items-center">
          {/* <!-- Left column --> */}
          <div className="flex justify-center text-xl">
            <div className="space-y-12">
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
          </div>
          {/* <!-- Right column --> */}
          <div className="p-8 mt-12 md:mt-0">
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
      {showScrollToTop && (
        <button
          onClick={() => scrollToTop("top")}
          className="fixed bottom-4 right-4 bg-blue-500 text-xs text-white px-3 py-2 rounded"
        >
          Scroll to Top
        </button>
      )}
    </main>
  );
}
