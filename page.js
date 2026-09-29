import sheet from "./style.css" with { type: "css" };

import { neocatToEl, textToNeocat } from "./neocat.js";

// reusing utilities from previous projects goes brrrrr
import { mdToEl } from "https://cdn.jsdelivr.net/gh/ethmarks/tagless-md/md.js";
/** @type {(markdown: string) => HTMLElement} */
const md = mdToEl;

document.adoptedStyleSheets = [sheet];

const main = document.createElement("main");
document.body.appendChild(main);

const top = md(`
# Tagless Neocat

> Convert text to Neocat stretch emojis for the Hack Club Slack

This is a tool that converts normal text into \`:neocat-stretch:\` emojis that you can copy-paste into Slack!
	`);
main.appendChild(top);

const display = neocatToEl(textToNeocat("tagless"));
display.id = "display";
main.appendChild(display);
