import "./style.css";
import { homepageTab } from "./homepage.js";
import { menuTab } from "./menu.js";
import { aboutTab } from "./about.js";

const homepageBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");
homepageTab();

homepageBtn.addEventListener("click", homepageTab);
menuBtn.addEventListener("click", menuTab);
aboutBtn.addEventListener("click", aboutTab);
