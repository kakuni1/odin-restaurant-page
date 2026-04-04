import { container } from "./background.js";

const cardAbout = document.createElement("div");
const text = document.createElement("p");
cardAbout.id = "card-menu";
text.textContent = "about";
cardAbout.appendChild(text);
container.appendChild(cardAbout);

export { cardAbout };
