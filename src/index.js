import { container, cardCafe } from "./load/tab-home.js";
import "./styles.css";

(function mouseEvent() {
    const content = document.getElementById("content");
    const home = document.getElementById("tab-home");
    const menu = document.getElementById("tab-menu");
    const about = document.getElementById("tab-about");

    home.addEventListener("click", () => {
        if (cardCafe.parentNode === container) container.removeChild(cardCafe);
        container.appendChild(cardCafe);
    });

    menu.addEventListener("click", () => {
        if (cardCafe.parentNode === container) container.removeChild(cardCafe);
    });

    about.addEventListener("click", () => {
        if (cardCafe.parentNode === container) container.removeChild(cardCafe);
    });
})();
