import fileBackground from "../images/tsuyoshi-kozu-Mgw-4b1YizY-unsplash_web.webp";

export function setupBackground() {
    const imageBackground = document.createElement("img");
    const container = document.createElement("div");
    imageBackground.src = fileBackground;
    imageBackground.alt = "blurred white and pink city lights in a diagonal pattern";
    imageBackground.id = "image-background";
    container.id = "image-container";
    container.appendChild(imageBackground);
    document.body.appendChild(container);

    return container;
}
