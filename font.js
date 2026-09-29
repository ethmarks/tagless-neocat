import FONT_DATA from "./font.json" with { type: "json" };

/** @type {Record<string, string>} */
const MAPPING = FONT_DATA.mapping;

/** @type {[string, string, string, string, string]} */
const ONE_COL_BLANK = "b".repeat(5).map(expandTileShorthand);

/**
 * @param {string} tileShorthand
 * @returns {string | undefined}
 */
function expandTileShorthand(tileShorthand) {
	const tile = MAPPING[tileShorthand];

	if (tile === undefined) return undefined;

	return `:${tile}:`;
}

/**
 * @param {[string, string, string, string, string]} glyphShorthand
 * @returns {[string, string, string, string, string]}
 */
function expandGlyphShorthand(glyphShorthand) {
	for (const row of glyphShorthand) {
		for (const tileShorthand of row) {
			const tileName = expandTileShorthand(tileShorthand);
		}
	}
}

/**
 * the expanded font
 */
const FONT = Object.fromEntries(
	Object.entries(FONT_DATA.font).map(([key, glyphShorthand]) => [
		key,
		expandGlyphShorthand(glyphShorthand),
	]),
);

/**
 *
 * based on {@link https://github.com/maxwofford/neocat/blob/main/main.go#L57-L82|buildGrid()} in the source
 *
 * @param {string} text
 * @returns {string}
 */
function text_to_emoji(text) {
	for (const idx = 0; idx < text.length; idx++) {
		const char = text.toLowerCase()[idx];
	}
}
