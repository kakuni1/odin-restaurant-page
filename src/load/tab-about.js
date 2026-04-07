export function createCardAbout() {
    const cardAbout = document.createElement("div");
    const text = document.createElement("p");

    cardAbout.id = "card-about";
    text.textContent = "about";
    cardAbout.appendChild(text);

    return cardAbout;
}
