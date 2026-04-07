import fileCafe from "../images/pexels-joao-mira-2150881975-31413759_web.webp";

export function createCardCafe() {
    // text for logo
    const logo = document.getElementById("logo-name");
    const text = logo.textContent.toUpperCase();

    // logo card, text pulled from DOM
    const cardLogo = document.createElement("div");
    cardLogo.id = "card-logo";
    cardLogo.textContent = text;

    // cafe card, image attached
    const imageCafe = document.createElement("img");
    imageCafe.src = fileCafe;
    imageCafe.alt = "cafe in tokyo overlooking street";
    imageCafe.id = "image-cafe";

    const cardCafe = document.createElement("div");
    cardCafe.id = "card-cafe";
    cardCafe.appendChild(imageCafe);

    return { cardLogo, cardCafe };
}
