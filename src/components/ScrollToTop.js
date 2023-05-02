import React from "react";

function ScrollToTop() {
  let e = document.getElementById("#top");
  return e.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
}

export default ScrollToTop;
