import "./style.css";
import { homepageTab } from "./homepage.js";
import { menuTab } from "./menu.js";
import { aboutTab } from "./about.js";

const homepageBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");
homepageTab();
homepageBtn.classList.add("focused-btn");

homepageBtn.addEventListener("click", (e) => {
  homepageTab();
  removeFocusedBtn();
  e.target.classList.add("focused-btn");
});

menuBtn.addEventListener("click", (e) => {
  menuTab();
  removeFocusedBtn();
  e.target.classList.add("focused-btn");
});

aboutBtn.addEventListener("click", (e) => {
  aboutTab();
  removeFocusedBtn();
  e.target.classList.add("focused-btn");
});

function removeFocusedBtn() {
  homepageBtn.classList.remove("focused-btn");
  menuBtn.classList.remove("focused-btn");
  aboutBtn.classList.remove("focused-btn");
}
