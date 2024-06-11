import restaurant from "./assets/images/Restaurant.jpg";
import { removeContent } from "./removeContent.js";

export function homepageTab() {
  removeContent();
  const restaurantImg = document.createElement("img");
  restaurantImg.src = restaurant;
  restaurantImg.classList.add("home-img");

  const content = document.getElementById("content");
  content.appendChild(restaurantImg);
  document.body.appendChild(content);

  const headerText = document.createElement("h1");
  headerText.textContent = "Viva Restaurant";
  headerText.classList.add("header");
  content.appendChild(headerText);

  const paragraphText = document.createElement("p");
  paragraphText.textContent =
    "Enjoy the fantastic atmosphere in our cozy restaurant while dining exquisite food from the best ingredients!";
  paragraphText.classList.add("home-page-text");
  content.appendChild(paragraphText);
}
