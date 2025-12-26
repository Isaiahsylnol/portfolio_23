import React, { useState, useEffect } from "react";
import scrollToTop from "../components/ScrollTo";
import { DevelopmentTools } from "../components/DevelopmentTools";
import Art from "../components/Art";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projectData";
import { slides } from "../data/slideData";
import Header from "../components/Header";
import { IKImage, IKContext } from "imagekitio-react";

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
      }, 700);
    }, 16000);

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

  const images = [
  "/portraits/_DSC5668_xzQfhjwV2.jpg?updatedAt=1722159750123",
  "/portraits/_DSC5548_fEuZY7ybU.jpg",
  "/portraits/_DSC5552_hOcVQpOvh.jpg",
  "/portraits/_DSC7495_fkorC_PVC.jpg?updatedAt=1722159757168",
  "/portraits/_DSC8685_6uwT9yJmk.jpg",
  "/portraits/wedding_DSC3871__hAHGhY6k.jpg?updatedAt=1722159750829",
  "/portraits/stranger-1_uIRGA6OJz.jpg?updatedAt=1722159732412",
  "/portraits/stranger-1_uIRGA6OJz.jpg?updatedAt=1722159732412",
  "/portraits/Tyjae%20_1_8228245642_AM2ivtiWR.jpg?updatedAt=1722159744741",
  "/portraits/tre_mtwdo6jSq.jpg?updatedAt=1722159742042",
  "/portraits/Stephen-2017-02_lBgEF8QzT.jpg?updatedAt=1722159729192",
  "/portraits/20130_sHxVVrGE9.jpg?updatedAt=1722159669819",
  "/portraits/David-2017-08_R9Nj_FV-h.jpg?updatedAt=1722159668969",
  "/portraits/Canadian-Tire-PitStop_8nIjK55CH.JPG?updatedAt=1722159711773",
];

  return (
    <main
      id="top"
      className="bg-[#f4f2f2] dark:bg-[#201c1c] text-[#252525] pt-16 sm:pt-8"
    >
       <IKContext urlEndpoint="https://ik.imagekit.io/bbwxfzjdl2zg">
      <Header />
      <section className="md:space-x-9 max-w-6xl mx-auto md:grid md:grid-cols-2 items-center text-[#252525] dark:text-zinc-100 p-8 mt-3">
        <div className="mb-6 md:mb-0 flex items-center justify-center"> 
              <IKImage
              path={images[2]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />
        </div>
         <div className="mb-6 md:mb-0 flex items-center justify-center"> 
              <IKImage
              path={images[8]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />
        </div>
 <div className="mb-6 md:mb-0 flex items-center justify-center"> 
              <IKImage
              path={images[10]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />
        </div>
      </section>
      </IKContext>
      {/* About me section container */}

      {/* <!-- Contact form section --> */}
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
