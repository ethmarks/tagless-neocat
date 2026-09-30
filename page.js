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

const desc = document.createElement("section");
main.appendChild(desc);
desc.id = "desc";
desc.appendChild(
	md(`
> Convert text to Neocat stretch emojis for the Hack Club Slack

This is a tool that converts normal text into \`:neocat_stretch:\` emojis that you can paste into Slack!
`),
);

// tool section
const tool = document.createElement("section");
main.appendChild(tool);
tool.id = "tool";
// input
const inputLabel = document.createElement("label");
tool.appendChild(inputLabel);
inputLabel.textContent = "Input";
const textarea = document.createElement("textarea");
tool.appendChild(textarea);
textarea.textContent = "hiya";
textarea.rows = 3;
// rendered output
const renderedLabel = document.createElement("label");
tool.appendChild(renderedLabel);
renderedLabel.textContent = "Rendered";
const renderedOut = document.createElement("article");
tool.appendChild(renderedOut);
// raw output
const rawLabel = document.createElement("label");
tool.appendChild(rawLabel);
rawLabel.textContent = "Emojis";
const rawOut = document.createElement("pre");
tool.appendChild(rawOut);
const rawOutInner = document.createElement("code");
rawOut.appendChild(rawOutInner);
let emojiRaw = "";
// once again, for convenience
const outCopy = document.createElement("button");
tool.appendChild(outCopy);
outCopy.textContent = "Copy";
outCopy.classList.add("copy");
outCopy.addEventListener("click", () => {
	outCopy.textContent = "Copied!";
	navigator.clipboard.writeText(emojiRaw);
	setTimeout(() => (outCopy.textContent = "Copy"), 1000);
});

const misc = document.createElement("section");
main.appendChild(misc);
misc.id = "misc";
// glyph map
const glyphMapLabel = document.createElement("label");
misc.appendChild(glyphMapLabel);
glyphMapLabel.textContent = "Glyph Map";
const glyphMap = document.createElement("details");
misc.appendChild(glyphMap);
const glyphMapSummary = document.createElement("summary");
glyphMap.appendChild(glyphMapSummary);
glyphMapSummary.textContent = "Click to open";
const allGlyphs = `
abcdef
ghijklm
nopqrst
uvwxyz
12345
67890
!?.,:;-'
`.trim();
const glyphMapEmojis = textToNeocat(allGlyphs);
glyphMap.appendChild(neocatToEl(glyphMapEmojis));
const glyphMapCopy = document.createElement("button");
glyphMap.appendChild(glyphMapCopy);
glyphMapCopy.textContent = "Copy";
glyphMapCopy.classList.add("copy");
glyphMapCopy.addEventListener("click", () => {
	glyphMapCopy.textContent = "Copied!";
	navigator.clipboard.writeText(glyphMapEmojis);
	setTimeout(() => (glyphMapCopy.textContent = "Copy"), 1000);
});

const closing = document.createElement("section");
main.appendChild(closing);
closing.id = "closing";
closing.appendChild(
	md(`
Check out my repo here: [ethmarks/tagless-neocat](https://github.com/ethmarks/tagless-neocat)

_Note: I sourced the emojis and font from [maxwofford/neocat](https://github.com/maxwofford/neocat), but I think the emojis originate from <https://volpeon.ink/emojis/neocat/>_
`),
);

// footer
const footer = document.createElement("footer");
footer.classList.add("text-center");
footer.appendChild(md("By [Ethan Marks](https://github.com/ethmarks)"));
main.appendChild(footer);

// actual functionality part
function update() {
	emojiRaw = textToNeocat(textarea.value);
	rawOut.textContent = emojiRaw;

	const el = neocatToEl(emojiRaw);
	renderedOut.replaceChildren(el);
}
textarea.addEventListener("input", update);
update();
