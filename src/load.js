import mainBackgroundImage from "./images/tsuyoshi-kozu-Mgw-4b1YizY-unsplash_web.jpg";

const logo = document.getElementById("logo-name");
const text = logo.textContent.toUpperCase();

const image = document.createElement("img");
image.src = mainBackgroundImage;
image.alt = "blurred white and pink city lights in a diagonal pattern";
image.id = "main-image";

const container = document.createElement("div");
container.id = "image-container";
container.appendChild(image);

const card = document.createElement("div");
card.id = "main-card";
card.textContent = text;
container.appendChild(card);

export { container };
