import React, { useEffect, useState } from "react";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="inline-flex justify-center" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 6000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  function updateIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  }

  const prevSlide = () => {
    setActiveIndex((activeIndex + children.length - 1) % children.length);
  };

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % children.length);
  };

  return (
    <div className="relative">
      <div
        className="overflow-hidden flex justify-center items-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="transition duration-300 ease-in-out whitespace-nowrap"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
        <div className="absolute text-xl z-10 flex flex-row w-full h-5/6">
          <div className="items-center hover:text-white float-left opacity-0 hover:opacity-100 transition duration-300 hidden sm:flex">
            <button
              className="w-24 h-14 uppercase bg-slate-600 bg-opacity-60"
              onClick={prevSlide}
            >
              {"prev"}
            </button>
          </div>
          <div className="w-full flex justify-center items-end space-x-2">
            {React.Children.map(children, (child, index) => {
              return (
                <button
                  onClick={() => {
                    updateIndex(index);
                  }}
                  className={`rounded-2xl h-3 w-3 ${
                    index === activeIndex
                      ? "bg-gray-600"
                      : "bg-gray-400 hover:bg-gray-500"
                  }`}
                ></button>
              );
            })}
          </div>
          <div className="items-center hover:text-white float-right opacity-0 hover:opacity-100 transition duration-300 hidden sm:flex">
            <button
              className="w-24 h-14 uppercase bg-slate-600 bg-opacity-60"
              onClick={nextSlide}
            >
              {"next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
