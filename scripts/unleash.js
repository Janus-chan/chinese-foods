const ham = document.querySelector(".ham");
const orders = document.querySelector(".lists button");
const list = document.querySelector(".lists");
const main_img = document.querySelector("#head--img");
let lines_1 = document.querySelector(".line-1");
let lines_2 = document.querySelector(".line-2");
let lines_3 = document.querySelector(".line-3");
let selectors = document.querySelectorAll(".menu--toggles");
let foods = document.querySelectorAll(".menu-body > div");
let hr = document.querySelector(".horizontal-scroll");

ham.addEventListener("click", () => {
  list.classList.toggle("active");
  lines_1.classList.toggle("active");
  lines_2.classList.toggle("active");
  lines_3.classList.toggle("active");
});

selectors.forEach((selector, index) => {
  selector.addEventListener("click", function () {
    for (let selection of selectors) {
      selection.classList.remove("show");
    }
    selector.classList.add("show");
    foods.forEach((food) => {
      for (let food of foods) {
        food.classList.remove("show");
      }
      foods[index].classList.add("show");
      hr.style.left = `calc(calc(100%/4)*${index}`;
    });
  });
});
const mains = document.querySelector("body");

orders.addEventListener("click", function () {
  document.querySelector(".popup").classList.add("show");

  if (document.querySelector(".popup").classList.contains("show")) {
    mains.style.overflow = "hidden";
  }
});

document.querySelector(".popup .x").addEventListener("click", function () {
  document.querySelector(".popup").classList.remove("show");
  if (!document.querySelector(".popup").classList.contains("show")) {
    mains.style.overflow = "auto";
  }
});

document.querySelector("form").addEventListener("submit" , function (e) {
  e.preventDefault();
})
