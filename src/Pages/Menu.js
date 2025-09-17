import code from "../assets/code-symbol.png";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Menu() {
  return (
    <main
      id="top"
      className="mx-auto h-screen grid sm:grid-cols-2 dark:bg-[#201c1c] text-[#252525]"
    >
      {/* Left */}
      <section
        className="relative bg-heroPatternWhite bg-cover bg-center h-screen w-full
               shadow-lg sm:border-r sm:border-black/20 sm:dark:border-white/20"
      >
        <a
          href="/development"
          className="absolute inset-0 flex flex-col justify-center p-8 sm:p-10 group outline-none
                 focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Explore Software Development Solutions"
        >
          <img src={code} alt="" className="w-14 sm:w-16 mb-4 opacity-90" />
          <h2
            className="text-4xl sm:text-5xl font-poppinsFont font-bold tracking-wide
                     transition-colors duration-200 group-hover:text-blue-600"
          >
            Software Development Solutions
          </h2>
          <p
            className="mt-2 text-sm sm:text-base opacity-90
                    transition-colors duration-200 group-hover:text-blue-500"
          >
            Specializing in Full-Stack Web and Mobile Applications
          </p>
          <ChevronRightIcon
            className="w-11 h-11 text-blue-600 opacity-0 translate-x-2
             transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 mt-4"
          />
          <span
            className="pointer-events-none absolute inset-0 bg-black/5 opacity-0
                        group-hover:opacity-100 transition-opacity"
          ></span>
        </a>
      </section>

      {/* Right */}
      <section className="relative bg-heroPattern2 bg-cover bg-center h-screen w-full shadow-lg">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40
                    bg-gradient-to-t from-black/35 to-transparent"
        ></div>
        <a
          href="/photography/portraits"
          className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10 group text-right outline-none
                 focus-visible:ring-2 focus-visible:ring-orange-500"
          aria-label="Explore Digital Imaging Services"
        >
          <h2
            className="text-4xl sm:text-5xl font-poppinsFont font-bold tracking-wide
                     text-orange-400 transition-colors duration-200 group-hover:text-orange-500"
          >
            Digital Imaging Services
          </h2>
          <p
            className="mt-2 text-sm sm:text-base text-orange-300
                    transition-colors duration-200 group-hover:text-orange-200"
          >
            Specializing in Portraits, Events, and Commercial Photography
          </p>
          <ChevronRightIcon
            className="w-11 h-11 text-orange-400 opacity-0 translate-x-2
                 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 ml-auto mt-4"
          />
          <span
            className="pointer-events-none absolute inset-0 bg-black/5 opacity-0
                 group-hover:opacity-100 transition-opacity"
          ></span>
        </a>
      </section>
    </main>
  );
}
