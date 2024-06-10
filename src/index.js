import restaurant from "./assets/images/Restaurant.jpg";
import "./style.css"

const restaurantImg = document.createElement("img");
restaurantImg.src = restaurant;
restaurantImg.classList.add("centerImg");

const content = document.getElementById("content");
content.appendChild(restaurantImg);
document.body.appendChild(content);

const heroHeader = document.createElement("h1");
heroHeader.textContent = "Viva Restaurant";
heroHeader.classList.add("header");
content.appendChild(heroHeader);

console.log("Hello, Webpack!");
