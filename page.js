import styleSheet from "./style.css" with { type: "css" };
import sakuraSheet from "https://unpkg.com/sakura.css/css/sakura-vader.css" with { type: "css" };

import { neocatToEl, textToNeocat } from "./neocat.js";

// reusing utilities from previous projects goes brrrrr
import { mdToEl } from "https://cdn.jsdelivr.net/gh/ethmarks/tagless-md/md.js";
/** @type {(markdown: string) => HTMLElement} */
const md = mdToEl;

document.adoptedStyleSheets = [sakuraSheet, styleSheet];

const main = document.createElement("main");
document.body.appendChild(main);

// constructing the header
const header = document.createElement("header");
main.appendChild(header);
const titleText = "Tagless Neocat";
const titleEmoji = textToNeocat(titleText.replace(" ", "\n"));
// for accessibility :)
const semanticTitle = document.createElement("h1");
header.appendChild(semanticTitle);
semanticTitle.textContent = titleText;
semanticTitle.classList.add("hide");
// for coolness
const displayTitle = neocatToEl(titleEmoji);
header.appendChild(displayTitle);
displayTitle.ariaHidden = "true";
// for convenience
const titleCopy = document.createElement("button");
header.appendChild(titleCopy);
titleCopy.textContent = "Copy";
titleCopy.classList.add("copy");
titleCopy.addEventListener("click", () => {
	titleCopy.textContent = "Copied!";
	navigator.clipboard.writeText(titleEmoji);
	setTimeout(() => (titleCopy.textContent = "Copy"), 1000);
});

const desc = md(`
> Convert text to Neocat stretch emojis for the Hack Club Slack

This is a tool that converts normal text into \`:neocat-stretch:\` emojis that you can copy-paste into Slack!
	`);
main.appendChild(desc);
