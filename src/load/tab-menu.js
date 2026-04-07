import { menu } from "../data/menu.js";

export function createCardMenu() {
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

    return cardMenu;
}
