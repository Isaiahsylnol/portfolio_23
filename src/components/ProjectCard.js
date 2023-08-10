import React from "react";

export default function ProjectCard({ name, description, tools, demo, github, status }) {
  return (
    <div className="p-2">
      <div className="items-center">
      {status && (
          <>
           <div className="w-max p-1 mb-2 text-center text-xs text-white uppercase rounded-md bg-[#fa8d33]">
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
  );
}
