import sheet from "./style.css" with { type: "css" };

document.adoptedStyleSheets = [sheet];

const main = document.createElement("main");

const title = document.createElement("h1");
title.appendChild(document.createTextNode("Tagless Neocat"));
main.appendChild(title);

document.body.appendChild(main);
