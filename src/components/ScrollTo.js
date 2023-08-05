
function ScrollTo(element) {
  let e = document.getElementById(element);
  return e.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
}

export default ScrollTo;