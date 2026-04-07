import { setupBackground } from "./load/background.js";
import { createCardCafe } from "./load/tab-home.js";
import { createCardMenu } from "./load/tab-menu.js";
import { createCardAbout } from "./load/tab-about.js";
import "./styles.css";

(function mouseEvent() {
    let container = setupBackground();
    const { cardLogo, cardCafe } = createCardCafe();
    container.appendChild(cardLogo);
    container.appendChild(cardCafe);

    const home = document.getElementById("tab-home");
    const menu = document.getElementById("tab-menu");
    const about = document.getElementById("tab-about");

    home.addEventListener("click", () => {
        document.getElementById("image-container").remove();
        container = setupBackground();
        const { cardLogo, cardCafe } = createCardCafe();
        container.appendChild(cardLogo);
        container.appendChild(cardCafe);
    });

    menu.addEventListener("click", () => {
        document.getElementById("image-container").remove();
        container = setupBackground();
        const cardMenu = createCardMenu();
        container.appendChild(cardLogo);
        container.appendChild(cardMenu);
    });

    about.addEventListener("click", () => {
        document.getElementById("image-container").remove();
        container = setupBackground();
        const cardAbout = createCardAbout();
        container.appendChild(cardLogo);
        container.appendChild(cardAbout);
    });
})();
