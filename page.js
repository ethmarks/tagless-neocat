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

This is a tool that converts normal text into \`:neocat-stretch:\` emojis that you can paste into Slack!
`);
main.appendChild(desc);

// input
const inputLabel = document.createElement("label");
main.appendChild(inputLabel);
inputLabel.textContent = "Input";
const textarea = document.createElement("textarea");
main.appendChild(textarea);
textarea.textContent = "hiya";
textarea.rows = 3;
// raw output
const rawLabel = document.createElement("label");
main.appendChild(rawLabel);
rawLabel.textContent = "Emojis";
const rawOut = document.createElement("pre");
main.appendChild(rawOut);
const rawOutInner = document.createElement("code");
rawOut.appendChild(rawOutInner);
// rendered output
const renderedLabel = document.createElement("label");
main.appendChild(renderedLabel);
renderedLabel.textContent = "Rendered";
const renderedOut = document.createElement("article");
main.appendChild(renderedOut);

const closing = md(`
Check out my repo here: [ethmarks/tagless-neocat](https://github.com/ethmarks/tagless-neocat)

_Note: I sourced the emojis and font from [maxwofford/neocat](https://github.com/maxwofford/neocat), but I think the emojis originate from <https://volpeon.ink/emojis/neocat/>_
`);
main.appendChild(closing);

// footer
const footer = document.createElement("footer");
footer.classList.add("text-center");
footer.appendChild(md("By [Ethan Marks](https://github.com/ethmarks)"));
main.appendChild(footer);

// actual functionality part
function update() {
	const raw = textToNeocat(textarea.value);
	rawOut.textContent = raw;

	const el = neocatToEl(raw);
	renderedOut.replaceChildren(el);
}
textarea.addEventListener("input", update);
update();
