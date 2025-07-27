const navItem = document.querySelector(".nav-item");

document.querySelector("#menu").onclick = () => {
  navItem.classList.toggle("active");
};

const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navItem.contains(e.target)) {
    navItem.classList.remove("active");
  }
});

const slider = document.querySelector(".slider");
const list = document.querySelector(".list");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", () => {
  initSlider("next");
});
prev.addEventListener("click", () => {
  initSlider("prev");
});
const initSlider = (type) => {
  const sliderItems = list.querySelectorAll(".item");

  if (type === "next") {
    list.appendChild(sliderItems[0]);
    slider.classList.add("next");
  } else {
    const lastItem = sliderItems.length - 1;
    list.prepend(sliderItems[lastItem]);
    slider.classList.add("prev");
  }
  setTimeout(() => {
    slider.classList.remove("next");
    slider.classList.remove("prev");
  }, 1500);
  clearTimeout(autoPlay);
  autoPlay = setTimeout(() => {
    next.click();
  }, 8000);
};

let autoPlay = setTimeout(() => {
  next.click();
}, 8000);
