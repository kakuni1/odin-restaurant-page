import { container, cardCafe } from "./load/tab-home.js";
import { cardMenu } from "./load/tab-menu.js";
import { cardAbout } from "./load/tab-about.js";

import "./styles.css";

(function mouseEvent() {
    const home = document.getElementById("tab-home");
    const menu = document.getElementById("tab-menu");
    const about = document.getElementById("tab-about");

    home.addEventListener("click", () => {
        if (cardCafe.parentNode === container) container.removeChild(cardCafe);
        if (cardMenu.parentNode === container) container.removeChild(cardMenu);
        if (cardAbout.parentNode === container) container.removeChild(cardAbout);
        container.appendChild(cardCafe);
    });

    menu.addEventListener("click", () => {
        if (cardCafe.parentNode === container) container.removeChild(cardCafe);
        if (cardMenu.parentNode === container) container.removeChild(cardMenu);
        if (cardAbout.parentNode === container) container.removeChild(cardAbout);
        container.appendChild(cardMenu);
    });

    about.addEventListener("click", () => {
        if (cardCafe.parentNode === container) container.removeChild(cardCafe);
        if (cardMenu.parentNode === container) container.removeChild(cardMenu);
        if (cardAbout.parentNode === container) container.removeChild(cardAbout);
        container.appendChild(cardAbout);
    });
})();
