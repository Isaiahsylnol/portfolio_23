import React, { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/c8c08aa244.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
    return () => {
      // clean up the script when the component in unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer
      id="contact"
      className="text-center text-[#707070] bg-[#f4f2f2] dark:bg-[#201c1c] w-full mt-3"
    >
      <a
        className="fa fa-linkedin fa-2x p-3 hover:text-neutral-600"
        href="https://www.linkedin.com/in/isaiah-sylvester-5184785b/"
      ></a>
      <a
        className="fa fa-github fa-2x p-3 hover:text-neutral-600"
        href="https://github.com/Isaiahsylnol"
      ></a>
      <a
        className="fa fa-codepen fa-2x p-3 hover:text-neutral-600"
        href="https://codepen.io/isaiahsylnol"
      ></a>
      <a
        className="fa fa-instagram fa-2x p-3 hover:text-neutral-600"
        href="https://www.instagram.com/capmatic/"
      ></a>
      {/* <!-- Copyright --> */}
      <div className="-mt-3 p-3">© 2025 Isaiah Sylvester</div>
    </footer>
  );
}
