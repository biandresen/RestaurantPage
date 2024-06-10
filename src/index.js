import restaurant from "./assets/images/Restaurant.jpg";
import "./style.css";

const restaurantImg = document.createElement("img");
restaurantImg.src = restaurant;
restaurantImg.classList.add("home-img");

const content = document.getElementById("content");
content.appendChild(restaurantImg);
document.body.appendChild(content);

const heroHeader = document.createElement("h1");
heroHeader.textContent = "Viva Restaurant";
heroHeader.classList.add("header");
content.appendChild(heroHeader);

const homePageText = document.createElement("p");
homePageText.textContent =
  "Enjoy the fantastic atmosphere in our cozy restaurant while dining exquisite food from the best ingredients!";
homePageText.classList.add("home-page-text");
content.appendChild(homePageText);
