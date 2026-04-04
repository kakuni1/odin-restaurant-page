import { container } from "./background.js";
import { menu } from "../data/menu.js";

const cardMenu = document.createElement("div");
const ul = document.createElement("ul");

menu.forEach((item) => {
    const product = document.createElement("li");
    product.textContent = item;
    ul.appendChild(product);
});

cardMenu.id = "card-menu";
ul.id = "menu";

cardMenu.appendChild(ul);
container.appendChild(cardMenu);

export { cardMenu };
