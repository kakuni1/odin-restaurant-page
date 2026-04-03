import { imageBackground, imageCafe } from "./background.js";

// text for logo card
const logo = document.getElementById("logo-name");
const text = logo.textContent.toUpperCase();

// image container, also contains cards
const container = document.createElement("div");
container.id = "image-container";
container.appendChild(imageBackground);

// logo card, text pulled from DOM
const cardLogo = document.createElement("div");
cardLogo.id = "card-logo";
cardLogo.textContent = text;
container.appendChild(cardLogo);

// cafe card
const cardCafe = document.createElement("div");
cardCafe.id = "card-cafe";
cardCafe.appendChild(imageCafe);
container.appendChild(cardCafe);

export { container };
