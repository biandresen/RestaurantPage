import menu from "./assets/images/menu.jpg";
import {removeContent} from "./removeContent.js";

export function menuTab() {
    removeContent();
    const menuImg = document.createElement("img");
    menuImg.src = menu;
    menuImg.classList.add("menu-img");
  
    const content = document.getElementById("content");
    content.appendChild(menuImg);
    document.body.appendChild(content);
  
    const paragraphText = document.createElement("p");
    paragraphText.textContent =
      "Pizza - 10$ | Burger - 12$ | Falafel - 8$";
    paragraphText.classList.add("home-page-text");
    content.appendChild(paragraphText);
  }
  