import "./styles.css";
import { container } from "./load/card.js";

(function loadPage() {
    const content = document.getElementById("content");
    content.appendChild(container);
})();

(function mouseEvent() {
    const content = document.getElementById("content");
    const home = document.getElementById("tab-home");
    const menu = document.getElementById("tab-menu");
    const about = document.getElementById("tab-about");

    home.addEventListener("click", () => {
        if (content.hasChildNodes()) content.removeChild(container);
        content.appendChild(container);
    });

    menu.addEventListener("click", () => {
        if (content.hasChildNodes()) content.removeChild(container);
    });

    about.addEventListener("click", () => {
        if (content.hasChildNodes()) content.removeChild(container);
    });
})();
