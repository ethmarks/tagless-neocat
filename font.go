package main

// Tile name constants — stored WITHOUT colons.
// Colons are added at output time.
const (
	b    = "actually-nothing"
	down = "neocat_stretch_down"              // top-left corner ╭ / head pointing down
	ul   = "neocat_stretch_ul"                // top-right corner ╮
	dr   = "neocat_stretch_dr"                // bottom-left corner ╰
	dl   = "neocat_stretch_dl"                // bottom-right corner ╯
	up   = "neocat_stretch_up"                // bottom endpoint (feet pointing up)
	ur   = "neocat_stretch_ur"                // curves up-right
	rt   = "neocat_stretch_right"             // head going right
	lt   = "neocat_stretch_left"              // head going left
	sv   = "neocat_stretch_v"                 // vertical │
	sh   = "neocat_stretch_h"                 // horizontal ─
	t3t  = "neocat_stretch_3way_top_fixed"    // ┴ face
	t3b  = "neocat_stretch_3way_bottom_fixed" // ┬ face
	t3l  = "neocat_stretch_3way_left_fixed"   // ┤ face
	t3r  = "neocat_stretch_3way_right_fixed"  // ├ face
	x4   = "neocat_stretch_4way"              // ┼
	face = "neocat"                           // full cat face
)

// Each character: 5 rows, each row is a slice of tile names.
// Width varies per character.
type glyph [5][]string

var font = map[rune]glyph{
	// ── lowercase letters ──

	// a: 3 wide
	'a': {
		{b, b, b},
		{down, sh, ul},
		{t3r, sh, t3l},
		{up, b, up},
		{b, b, b},
	},

	// b: 3 wide
	'b': {
		{down, b, b},
		{sv, b, b},
		{t3r, sh, ul},
		{sv, b, sv},
		{dr, sh, dl},
	},

	// c: 3 wide
	'c': {
		{b, b, b},
		{down, sh, lt},
		{sv, b, b},
		{dr, sh, lt},
		{b, b, b},
	},

	// d: 3 wide
	'd': {
		{b, b, down},
		{b, b, sv},
		{down, sh, t3l},
		{sv, b, sv},
		{dr, sh, dl},
	},

	// e: 3 wide
	'e': {
		{b, b, b},
		{down, sh, ul},
		{t3r, sh, dl},
		{dr, sh, lt},
		{b, b, b},
	},

	// f: 3 wide
	'f': {
		{b, down, lt},
		{rt, x4, lt},
		{b, sv, b},
		{b, up, b},
		{b, b, b},
	},

	// g: 3 wide
	'g': {
		{b, b, b},
		{down, sh, ul},
		{sv, b, sv},
		{dr, sh, t3l},
		{rt, sh, dl},
	},

	// h: 3 wide
	'h': {
		{down, b, b},
		{sv, b, b},
		{t3r, sh, ul},
		{sv, b, sv},
		{up, b, up},
	},

	// i: 1 wide
	'i': {
		{face},
		{b},
		{down},
		{sv},
		{up},
	},

	// j: 2 wide
	'j': {
		{b, face},
		{b, b},
		{b, down},
		{down, sv},
		{dr, dl},
	},

	// k: 3 wide
	'k': {
		{down, b, b},
		{sv, b, down},
		{t3r, t3b, dl},
		{sv, dr, ul},
		{up, b, up},
	},

	// l: 1 wide
	'l': {
		{down},
		{sv},
		{sv},
		{sv},
		{up},
	},

	// m: 5 wide
	'm': {
		{b, b, b, b, b},
		{down, sh, t3b, sh, ul},
		{sv, b, sv, b, sv},
		{sv, b, sv, b, sv},
		{up, b, up, b, up},
	},

	// n: 3 wide
	'n': {
		{b, b, b},
		{down, sh, ul},
		{sv, b, sv},
		{sv, b, sv},
		{up, b, up},
	},

	// o: 3 wide
	'o': {
		{b, b, b},
		{down, sh, ul},
		{sv, b, sv},
		{dr, sh, dl},
		{b, b, b},
	},

	// p: 3 wide
	'p': {
		{b, b, b},
		{down, sh, ul},
		{sv, b, sv},
		{t3r, sh, dl},
		{up, b, b},
	},

	// q: 3 wide
	'q': {
		{b, b, b},
		{down, sh, ul},
		{sv, b, sv},
		{dr, sh, t3l},
		{b, b, up},
	},

	// r: 3 wide
	'r': {
		{b, b, b},
		{down, sh, lt},
		{sv, b, b},
		{up, b, b},
		{b, b, b},
	},

	// s: 3 wide
	's': {
		{b, b, b},
		{down, sh, lt},
		{dr, sh, ul},
		{rt, sh, dl},
		{b, b, b},
	},

	// t: 3 wide
	't': {
		{down, b, b},
		{t3r, sh, lt},
		{sv, b, b},
		{dr, sh, lt},
		{b, b, b},
	},

	// u: 3 wide
	'u': {
		{b, b, b},
		{down, b, down},
		{sv, b, sv},
		{dr, sh, dl},
		{b, b, b},
	},

	// v: 3 wide
	'v': {
		{b, b, b},
		{down, b, down},
		{sv, b, sv},
		{dr, ul, sv},
		{b, dr, dl},
	},

	// w: 5 wide
	'w': {
		{b, b, b, b, b},
		{down, b, b, b, down},
		{sv, b, down, b, sv},
		{sv, b, sv, b, sv},
		{dr, sh, t3t, sh, dl},
	},

	// x: 3 wide
	'x': {
		{b, b, b},
		{down, b, down},
		{dr, t3b, dl},
		{ur, t3t, ul},
		{up, b, up},
	},

	// y: 3 wide
	'y': {
		{b, b, b},
		{down, b, down},
		{sv, b, sv},
		{dr, sh, t3l},
		{rt, sh, dl},
	},

	// z: 3 wide
	'z': {
		{b, b, b},
		{rt, sh, ul},
		{down, sh, dl},
		{dr, sh, lt},
		{b, b, b},
	},

	// ── digits ──

	// 0: 3 wide
	'0': {
		{down, sh, ul},
		{sv, b, sv},
		{sv, b, sv},
		{sv, b, sv},
		{dr, sh, dl},
	},

	// 1: 2 wide
	'1': {
		{rt, ul},
		{b, sv},
		{b, sv},
		{b, sv},
		{b, up},
	},

	// 2: 3 wide
	'2': {
		{rt, sh, ul},
		{down, sh, dl},
		{sv, b, b},
		{dr, sh, lt},
		{b, b, b},
	},

	// 3: 3 wide
	'3': {
		{rt, sh, ul},
		{b, b, sv},
		{rt, sh, t3l},
		{b, b, sv},
		{rt, sh, dl},
	},

	// 4: 3 wide
	'4': {
		{down, b, down},
		{sv, b, sv},
		{dr, sh, t3l},
		{b, b, sv},
		{b, b, up},
	},

	// 5: 3 wide
	'5': {
		{down, sh, lt},
		{t3r, sh, ul},
		{b, b, sv},
		{rt, sh, dl},
		{b, b, b},
	},

	// 6: 3 wide
	'6': {
		{down, sh, lt},
		{t3r, sh, ul},
		{sv, b, sv},
		{dr, sh, dl},
		{b, b, b},
	},

	// 7: 3 wide
	'7': {
		{rt, sh, ul},
		{b, b, sv},
		{b, b, sv},
		{b, b, sv},
		{b, b, up},
	},

	// 8: 3 wide
	'8': {
		{down, sh, ul},
		{t3r, sh, t3l},
		{sv, b, sv},
		{dr, sh, dl},
		{b, b, b},
	},

	// 9: 3 wide
	'9': {
		{down, sh, ul},
		{sv, b, sv},
		{dr, sh, t3l},
		{rt, sh, dl},
		{b, b, b},
	},

	// ── punctuation ──

	// !: 1 wide
	'!': {
		{down},
		{sv},
		{up},
		{b},
		{face},
	},

	// ?: 3 wide
	'?': {
		{rt, sh, ul},
		{down, sh, dl},
		{up, b, b},
		{b, b, b},
		{face, b, b},
	},

	// .: 1 wide
	'.': {
		{b},
		{b},
		{b},
		{b},
		{face},
	},

	// ,: 1 wide
	',': {
		{b},
		{b},
		{b},
		{down},
		{up},
	},

	// :: 1 wide
	':': {
		{b},
		{face},
		{b},
		{face},
		{b},
	},

	// ;: 1 wide
	';': {
		{b},
		{face},
		{b},
		{down},
		{up},
	},

	// -: 3 wide
	'-': {
		{b, b, b},
		{b, b, b},
		{rt, sh, lt},
		{b, b, b},
		{b, b, b},
	},

	// ': 1 wide
	'\'': {
		{down},
		{up},
		{b},
		{b},
		{b},
	},

	// space: 2 wide
	' ': {
		{b, b},
		{b, b},
		{b, b},
		{b, b},
		{b, b},
	},
}
