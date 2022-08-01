import { $content, createHtmlElement } from "./index";

function render() {

    const $main = document.createElement("main");

    const $bienvenidos = createHtmlElement("p", null, ["cursive", "golden"], "Welcome");
    const $title = createHtmlElement("h1", null, ["white"], "Kebab World");
    const $hr = document.createElement("hr");
    const $subtitle = createHtmlElement("p", null, ["text-center", "white"], "Kebab come from Heaven");
    const $button = createHtmlElement("button", null, null, "menu");
    
    $main.appendChild($bienvenidos);
    $main.appendChild($title);
    $main.appendChild($hr);
    $main.appendChild($subtitle);
    $main.appendChild($button);

    $content.appendChild($main);

}

export { render as renderHome };
