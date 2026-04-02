import "./styles.css";
import { container } from "./load.js";

(function loadPage() {
    const content = document.getElementById("content");
    content.appendChild(container);
})();

