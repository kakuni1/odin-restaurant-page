import fileBackground from "../images/tsuyoshi-kozu-Mgw-4b1YizY-unsplash_web.webp";
import fileCafe from "../images/pexels-joao-mira-2150881975-31413759_web.webp";

const imageBackground = document.createElement("img");
imageBackground.src = fileBackground;
imageBackground.alt = "blurred white and pink city lights in a diagonal pattern";
imageBackground.id = "image-background";

const imageCafe = document.createElement("img");
imageCafe.src = fileCafe;
imageCafe.alt = "cafe in tokyo overlooking street";
imageCafe.id = "image-cafe";

export { imageBackground, imageCafe };
