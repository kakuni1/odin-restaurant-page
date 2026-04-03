import { container } from "./background.js";
import fileCafe from "../images/pexels-joao-mira-2150881975-31413759_web.webp";

// text for logo
const logo = document.getElementById("logo-name");
const text = logo.textContent.toUpperCase();

// logo card, text pulled from DOM
const cardLogo = document.createElement("div");
cardLogo.id = "card-logo";
cardLogo.textContent = text;
container.appendChild(cardLogo);

// cafe card, image attached
const imageCafe = document.createElement("img");
const cardCafe = document.createElement("div");
imageCafe.src = fileCafe;
imageCafe.alt = "cafe in tokyo overlooking street";
imageCafe.id = "image-cafe";
cardCafe.id = "card-cafe";
cardCafe.appendChild(imageCafe);
container.appendChild(cardCafe);

export { container, cardCafe };
