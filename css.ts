export const css = `
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
     ========================================================================== */

/**
   * Remove the margin in all browsers.
   */

body {
    margin: 0;
}

/**
   * Render the 'main' element consistently in IE.
   */

main {
    display: block;
}

/**
   * Correct the font size and margin on 'h1' elements within 'section' and
   * 'article' contexts in Chrome, Firefox, and Safari.
   */

h1 {
    font-size: 2em;
    margin: 0.67em 0;
}

/* Grouping content
     ========================================================================== */

/**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */

hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
}

/**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd 'em' font sizing in all browsers.
   */

pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
}

/* Text-level semantics
     ========================================================================== */

/**
   * Remove the gray background on active links in IE 10.
   */

a {
    background-color: transparent;
}

/**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */

abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
}

/**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */

b,
strong {
    font-weight: bolder;
}

/**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd 'em' font sizing in all browsers.
   */

code,
kbd,
samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
}

/**
   * Add the correct font size in all browsers.
   */

small {
    font-size: 80%;
}

/**
   * Prevent 'sub' and 'sup' elements from affecting the line height in
   * all browsers.
   */

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

sub {
    bottom: -0.25em;
}

sup {
    top: -0.5em;
}

/* Embedded content
     ========================================================================== */

/**
   * Remove the border on images inside links in IE 10.
   */

img {
    border-style: none;
}

/* Forms
     ========================================================================== */

/**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */

button,
input,
optgroup,
select,
textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
}

/**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */

button,
input {
    /* 1 */
    overflow: visible;
}

/**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */

button,
select {
    /* 1 */
    text-transform: none;
}

/**
   * Correct the inability to style clickable types in iOS and Safari.
   */

button,
[type="button"],
[type="reset"],
[type="submit"] {
    -webkit-appearance: button;
}

/**
   * Remove the inner border and padding in Firefox.
   */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
}

/**
   * Restore the focus styles unset by the previous rule.
   */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
}

/**
   * Correct the padding in Firefox.
   */

fieldset {
    padding: 0.35em 0.75em 0.625em;
}

/**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from 'fieldset' elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    'fieldset' elements in all browsers.
   */

legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
}

/**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */

progress {
    vertical-align: baseline;
}

/**
   * Remove the default vertical scrollbar in IE 10+.
   */

textarea {
    overflow: auto;
}

/**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */

[type="checkbox"],
[type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
}

/**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
    height: auto;
}

/**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */

[type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
}

/**
   * Remove the inner padding in Chrome and Safari on macOS.
   */

[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

/**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to 'inherit' in Safari.
   */

::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
}

/* Interactive
     ========================================================================== */

/*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */

details {
    display: block;
}

/*
   * Add the correct display in all browsers.
   */

summary {
    display: list-item;
}

/* Misc
     ========================================================================== */

/**
   * Add the correct display in IE 10+.
   */

template {
    display: none;
}

/**
   * Add the correct display in IE 10.
   */

[hidden] {
    display: none;
}

/* Sakura.css v1.3.1
 * ================
 * Minimal css theme.
 * Project: https://github.com/oxalorg/sakura/
 */
/* Body */
html {
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, "Noto Sans", sans-serif;
}

body {
    font-size: 1.8rem;
    line-height: 1.618;
    max-width: 38em;
    margin: auto;
    color: #4a4a4a;
    background-color: #f9f9f9;
    padding: 13px;
}

@media (max-width: 684px) {
    body {
        font-size: 1.53rem;
    }
}

@media (max-width: 382px) {
    body {
        font-size: 1.35rem;
    }
}

footer {
    text-align: center;

    padding: 2rem;

    border-top: 1px solid grey;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    line-height: 1.1;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, "Noto Sans", sans-serif;
    font-weight: 700;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    overflow-wrap: break-word;
    word-wrap: break-word;
    -ms-word-break: break-all;
    word-break: break-word;
}

h1 {
    font-size: 2.35em;
}

h2 {
    font-size: 2em;
}

h3 {
    font-size: 1.75em;
}

h4 {
    font-size: 1.5em;
}

h5 {
    font-size: 1.25em;
}

h6 {
    font-size: 1em;
}

p {
    margin-top: 0px;
    margin-bottom: 2.5rem;
}

small,
sub,
sup {
    font-size: 75%;
}

hr {
    border-color: #1d7484;
}

a {
    text-decoration: none;
    color: #1d7484;
}
a:hover {
    color: #982c61;
    border-bottom: 2px solid #4a4a4a;
}
a:visited {
    color: #144f5a;
}

ul {
    padding-left: 1.4em;
    margin-top: 0px;
    margin-bottom: 2.5rem;
}

li {
    margin-bottom: 0.4em;
}

blockquote {
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1em;
    padding-top: 0.8em;
    padding-bottom: 0.8em;
    padding-right: 0.8em;
    border-left: 5px solid #1d7484;
    margin-bottom: 2.5rem;
    background-color: #f1f1f1;
}

blockquote p {
    margin-bottom: 0;
}

img,
video {
    height: auto;
    max-width: 100%;
    margin-top: 0px;
    margin-bottom: 2.5rem;
}

/* Pre and Code */
pre {
    background-color: #f1f1f1;
    display: block;
    padding: 1em;
    overflow-x: auto;
    margin-top: 0px;
    margin-bottom: 2.5rem;
}

code {
    font-size: 0.9em;
    padding: 0 0.5em;
    background-color: #f1f1f1;
    white-space: pre-wrap;
}

pre > code {
    padding: 0;
    background-color: transparent;
    white-space: pre;
}

/* Tables */
table {
    text-align: justify;
    width: 100%;
    border-collapse: collapse;
}

td,
th {
    padding: 0.5em;
    border-bottom: 1px solid #f1f1f1;
}

/* Buttons, forms and input */
input,
textarea {
    border: 1px solid #4a4a4a;
}
input:focus,
textarea:focus {
    border: 1px solid #1d7484;
}

textarea {
    width: 100%;
}

.button,
button,
input[type="submit"],
input[type="reset"],
input[type="button"] {
    display: inline-block;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    background-color: #1d7484;
    color: #f9f9f9;
    border-radius: 1px;
    border: 1px solid #1d7484;
    cursor: pointer;
    box-sizing: border-box;
}
.button[disabled],
button[disabled],
input[type="submit"][disabled],
input[type="reset"][disabled],
input[type="button"][disabled] {
    cursor: default;
    opacity: 0.5;
}
.button:focus:enabled,
.button:hover:enabled,
button:focus:enabled,
button:hover:enabled,
input[type="submit"]:focus:enabled,
input[type="submit"]:hover:enabled,
input[type="reset"]:focus:enabled,
input[type="reset"]:hover:enabled,
input[type="button"]:focus:enabled,
input[type="button"]:hover:enabled {
    background-color: #982c61;
    border-color: #982c61;
    color: #f9f9f9;
    outline: 0;
}

textarea,
select,
input {
    color: #4a4a4a;
    padding: 6px 10px;
    /* The 6px vertically centers text on FF, ignored by Webkit */
    margin-bottom: 10px;
    background-color: #f1f1f1;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    box-shadow: none;
    box-sizing: border-box;
}
textarea:focus,
select:focus,
input:focus {
    border: 1px solid #1d7484;
    outline: 0;
}

input[type="checkbox"]:focus {
    outline: 1px dotted #1d7484;
}

label,
legend,
fieldset {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

`
