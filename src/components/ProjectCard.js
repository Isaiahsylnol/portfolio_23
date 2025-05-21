import React from "react";
import Carousel, { CarouselItem } from "./Carousel";

export default function ProjectCard({
  name,
  description,
  tools,
  demo,
  github,
  status,
  images,
}) {
  return (
    <div>
      <Carousel>
        {/* Dynamically loop over the images array to render items */}
        {images.map((image, index) => {
          let setData = `https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-256/${image.src} 256w,
          https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-512/${image.src} 512w,
          https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-768/${image.src} 768w,
          https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1024/${image.src} 1024w,
          https://ik.imagekit.io/bbwxfzjdl2zg/tr:w-1280/${image.src} 1280w`;

          return (
            <CarouselItem key={index}>
              <div className="uppercase font-bold text-white cursor-pointer">
                <img
                  sizes="(min-width: 50em) 50em, 100vw"
                  srcSet={setData}
                  className="rounded-lg shadow-md"
                  alt={image.alt}
                />
              </div>
            </CarouselItem>
          );
        })}
      </Carousel>
      <div className="p-2">
        <div className="items-center">
          {status && (
            <>
             <div className="w-max px-2 py-1 mb-2 text-center text-xs font-semibold text-white uppercase rounded-md bg-[#b02a00] shadow-sm">
  In progress
</div>
            </>
          )}
          <h2 className="text-lg font-poppinsFont font-semibold inline pr-2">
            {name}
          </h2>
          {demo && (
            <>
              <a
                className="fa fa-arrow-up-right-from-square fa-lg p-1 hover:text-blue-600"
                href={demo}
              ></a>
            </>
          )}
          <a
            className="fa fa-github fa-lg p-1 hover:text-blue-600"
            href={github}
          ></a>
        </div>
        <p className="pb-2 pt-2">{description}</p>
        <div className="inline-flex text-sm flex-wrap">
          {tools.map((interest, index) => (
            <div
              key={index}
              className=" text-neutral-400 hover:text-emerald-500 transition duration-300 cursor-pointer rounded-md m-1"
            >
              #{interest}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
