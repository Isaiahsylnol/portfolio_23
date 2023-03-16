import React from "react";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center dark:bg-[#2c2a2e] dark:text-neutral-300">
      <h1 className="block text-9xl font-poppinsFont font-extrabold -mt-64 cursor-default">
        404
      </h1>
      <h1 className="block text-2xl uppercase font-poppinsFont font-extrabold cursor-default">
        Page not found
      </h1>
      <p className="text-neutral-500 dark:text-neutral-400 font-semibold font-poppinsFont uppercase mt-5">
        The page you were looking for doesn't exist.
      </p>
      <button className="font-medium uppercase border-4 border-gray-700 dark:border-gray-400 p-2 w-36 m-4">
        Return Home
      </button>
    </div>
  );
}
