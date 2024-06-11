import about from "./assets/images/about.jpg";
import { removeContent } from "./removeContent.js";

export function aboutTab() {
  removeContent();
  const aboutImg = document.createElement("img");
  aboutImg.src = about;
  aboutImg.classList.add("about-img");

  const content = document.getElementById("content");
  content.appendChild(aboutImg);
  document.body.appendChild(content);

  const headerText = document.createElement("h1");
  headerText.textContent = "About us: ";
  headerText.classList.add("header");
  content.appendChild(headerText);

  const paragraphText = document.createElement("p");
  paragraphText.textContent =
    "We are a small cozy restaurant placed in the peripheral of the city center with a staff of 4 waiters, 1 chef and 2 helpers. Please come in and try our delicious food. You can find us here: <Address>";
  paragraphText.classList.add("home-page-text");
  content.appendChild(paragraphText);
}
