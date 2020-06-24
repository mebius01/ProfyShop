/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/reset.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./animation.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/animation.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Mr+De+Haviland&family=Rubik:wght@300;400;500;700;900&display=swap);\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap);\"]);\n// Module\nexports.push([module.i, \".stretch, .main .article__content:hover {\\n  animation-name: stretch;\\n  transition: 1s;\\n}\\n@keyframes stretch {\\n  0% {\\n    transform: scaleY(1, 1);\\n  }\\n  50% {\\n    transform: scaleY(1.5, 1.5);\\n  }\\n}\\n\\n.pulse, .social__link img:hover {\\n  animation-name: pulse;\\n  animation-duration: 0.5s;\\n  animation-fill-mode: both;\\n}\\n@keyframes pulse {\\n  0% {\\n    transform: scale3d(1, 1, 1);\\n  }\\n  50% {\\n    transform: scale3d(1.5, 1.5, 1.5);\\n  }\\n}\\n\\n.shake, .header .strip:hover {\\n  animation-name: shake;\\n  animation-duration: 1s;\\n  animation-fill-mode: both;\\n}\\n@keyframes shake {\\n  0%, 100% {\\n    transform: translate3d(0, 0, 0);\\n  }\\n  10%, 30%, 50%, 70%, 90% {\\n    transform: translate3d(-10px, 0, 0);\\n  }\\n  20%, 40%, 60%, 80% {\\n    -webkit-transform: translate3d(10px, 0, 0);\\n    transform: translate3d(10px, 0, 0);\\n  }\\n}\\n\\nhtml,\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  font-family: \\\"Rubik\\\", sans-serif;\\n}\\n\\n.h2 {\\n  padding-bottom: 10px;\\n  color: #373f48;\\n  font-size: 32px;\\n  line-height: 38px;\\n  font-weight: 500;\\n  text-transform: uppercase;\\n}\\n\\n.focus, .footer .brand__link:focus, .footer .contact__link:focus, .social__link:focus {\\n  outline: none;\\n  border: rgba(255, 55, 55, 0.5) solid 4px;\\n  padding: 5px;\\n}\\n\\n.flex-col-centr {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.header {\\n  position: relative;\\n  height: 200px;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n}\\n.header .strip {\\n  padding: 20px 0;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-between;\\n  width: 100vh;\\n  color: white;\\n}\\n.header .strip span {\\n  display: block;\\n}\\n.header .strip .strict-letter {\\n  font-family: \\\"Rubik\\\", sans-serif;\\n  font-size: 70px;\\n  font-weight: 400;\\n  margin-bottom: 20px;\\n  border-bottom: 4px white solid;\\n}\\n.header .strip .soft-letter {\\n  font-family: \\\"Kaushan Script\\\", cursive;\\n  font-size: 60px;\\n  color: black;\\n}\\n.header .red {\\n  background-color: red;\\n}\\n.header .orange {\\n  background-color: orange;\\n}\\n.header .yellow {\\n  background-color: #FF00FF;\\n}\\n.header .green {\\n  background-color: green;\\n}\\n.header .blue {\\n  background-color: blue;\\n}\\n\\n.main {\\n  min-height: 100vh;\\n  width: 80%;\\n  margin: 40px auto;\\n}\\n.main .article {\\n  height: 400px;\\n  display: flex;\\n  justify-content: center;\\n  position: relative;\\n  margin-bottom: 40px;\\n}\\n.main .article__img {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n}\\n.main .article__img img {\\n  width: auto;\\n  height: 400px;\\n}\\n.main .article__content {\\n  width: 40em;\\n  position: absolute;\\n  top: auto;\\n  left: 20%;\\n  background-color: rgba(255, 255, 255, 0.877);\\n  padding: 30px 0;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: flex-start;\\n}\\n.main .article__content .article__link {\\n  text-decoration: none;\\n}\\n.main .article__content .article__title {\\n  border-bottom: rgba(255, 55, 55, 0.5) solid 4px;\\n  margin-bottom: 20px;\\n}\\n.main .article__content .article__text {\\n  color: #4e5053;\\n}\\n.main .article__content:hover {\\n  top: 0;\\n  height: 85%;\\n  padding: 30px;\\n}\\n\\n.social {\\n  list-style: none;\\n  position: fixed;\\n  top: 200px;\\n  right: 0px;\\n}\\n.social__item {\\n  margin: 5px auto;\\n}\\n.social__link {\\n  display: block;\\n  text-align: center;\\n  background-color: white;\\n  padding: 5px;\\n}\\n.social__link:focus {\\n  height: 85%;\\n}\\n.social__link img {\\n  width: 32px;\\n  height: 32px;\\n}\\n.footer {\\n  background-color: #373f48;\\n}\\n.footer__line {\\n  height: 1px;\\n  width: 95%;\\n  background-color: rgba(255, 55, 55, 0.5);\\n  margin: 0 auto;\\n}\\n.footer .contact, .footer .copyright, .footer .q .sociall, .footer .q, .footer .brand {\\n  list-style: none;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 10px 40px;\\n  color: white;\\n}\\n.footer .contact__link {\\n  color: white;\\n  text-decoration: none;\\n}\\n.footer .contact__icon {\\n  margin-right: 5px;\\n  width: 32px;\\n  height: 32px;\\n}\\n.footer .brand {\\n  padding: 10px 40px;\\n}\\n.footer .brand__link {\\n  display: block;\\n}\\n.footer .brand__icon {\\n  width: 180px;\\n  height: auto;\\n}\\n.footer .q {\\n  background-color: white;\\n}\\n.footer .q__img {\\n  height: 80px;\\n  width: auto;\\n}\\n.footer .q .sociall {\\n  background-color: white;\\n  width: auto;\\n}\\n.footer .q .sociall__icon {\\n  margin-right: 10px;\\n  width: 32px;\\n  height: 32px;\\n}\\n.footer .copyright {\\n  padding: 10px 40px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/animation.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/animation.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".rotateIn {\\n  -webkit-animation-name: rotateIn;\\n  animation-name: rotateIn;\\n  -webkit-animation-duration: 1s;\\n  animation-duration: 1s;\\n  -webkit-animation-fill-mode: both;\\n  animation-fill-mode: both;\\n}\\n\\n@-webkit-keyframes rotateIn {\\n  0% {\\n    -webkit-transform-origin: center;\\n    transform-origin: center;\\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\\n    transform: rotate3d(0, 0, 1, -200deg);\\n    opacity: 0;\\n  }\\n\\n  100% {\\n    -webkit-transform-origin: center;\\n    transform-origin: center;\\n    -webkit-transform: none;\\n    transform: none;\\n    opacity: 1;\\n  }\\n}\\n\\n@keyframes rotateIn {\\n  0% {\\n    -webkit-transform-origin: center;\\n    transform-origin: center;\\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\\n    transform: rotate3d(0, 0, 1, -200deg);\\n    opacity: 0;\\n  }\\n\\n  100% {\\n    -webkit-transform-origin: center;\\n    transform-origin: center;\\n    -webkit-transform: none;\\n    transform: none;\\n    opacity: 1;\\n  }\\n}\\n\\n.slideInLeft {\\n  -webkit-animation-name: slideInLeft;\\n  animation-name: slideInLeft;\\n  -webkit-animation-duration: 1s;\\n  animation-duration: 1s;\\n  -webkit-animation-fill-mode: both;\\n  animation-fill-mode: both;\\n}\\n\\n@-webkit-keyframes slideInLeft {\\n  0% {\\n    -webkit-transform: translateX(-100%);\\n    transform: translateX(-100%);\\n    visibility: visible;\\n  }\\n\\n  100% {\\n    -webkit-transform: translateX(0);\\n    transform: translateX(0);\\n  }\\n}\\n\\n@keyframes slideInLeft {\\n  0% {\\n    -webkit-transform: translateX(-100%);\\n    transform: translateX(-100%);\\n    visibility: visible;\\n  }\\n\\n  100% {\\n    -webkit-transform: translateX(0);\\n    transform: translateX(0);\\n  }\\n}\\n\\n.pulse {\\n  -webkit-animation-name: pulse;\\n  animation-name: pulse;\\n  -webkit-animation-duration: 0.5s;\\n  animation-duration: 0.5s;\\n  -webkit-animation-fill-mode: both;\\n  animation-fill-mode: both;\\n\\n  @-webkit-keyframes pulse {\\n    0% {\\n      -webkit-transform: scale3d(1, 1, 1);\\n      transform: scale3d(1, 1, 1);\\n    }\\n\\n    50% {\\n      -webkit-transform: scale3d(1.5, 1.5, 1.5);\\n      transform: scale3d(1.5, 1.5, 1.5);\\n    }\\n\\n    100% {\\n      -webkit-transform: scale3d(1, 1, 1);\\n      transform: scale3d(1, 1, 1);\\n    }\\n  }\\n\\n  @keyframes pulse {\\n    0% {\\n      -webkit-transform: scale3d(1, 1, 1);\\n      transform: scale3d(1, 1, 1);\\n    }\\n\\n    50% {\\n      -webkit-transform: scale3d(1.5, 1.5, 1.5);\\n      transform: scale3d(1.5, 1.5, 1.5);\\n    }\\n  }\\n}\\n\\n.slideInRight {\\n  -webkit-animation-name: slideInRight;\\n  animation-name: slideInRight;\\n  -webkit-animation-duration: 1s;\\n  animation-duration: 1s;\\n  -webkit-animation-fill-mode: both;\\n  animation-fill-mode: both;\\n\\n  @-webkit-keyframes slideInRight {\\n    0% {\\n      -webkit-transform: translateX(100%);\\n      transform: translateX(100%);\\n      visibility: visible;\\n    }\\n\\n    100% {\\n      -webkit-transform: translateX(0);\\n      transform: translateX(0);\\n    }\\n  }\\n\\n  @keyframes slideInRight {\\n    0% {\\n      -webkit-transform: translateX(100%);\\n      transform: translateX(100%);\\n      visibility: visible;\\n    }\\n\\n    100% {\\n      -webkit-transform: translateX(0);\\n      transform: translateX(0);\\n    }\\n  }\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style/animation.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/reset.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/reset.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v2.0-modified | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n\\tpadding: 0;\\n\\tborder: 0;\\n\\tfont-size: 100%;\\n\\tfont: inherit;\\n\\tvertical-align: baseline;\\n}\\n\\n/* make sure to set some focus styles for accessibility */\\n:focus {\\n    outline: 0;\\n}\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n\\tdisplay: block;\\n}\\n\\nbody {\\n\\tline-height: 1;\\n}\\n\\nol, ul {\\n\\tlist-style: none;\\n}\\n\\nblockquote, q {\\n\\tquotes: none;\\n}\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n\\tcontent: '';\\n\\tcontent: none;\\n}\\n\\ntable {\\n\\tborder-collapse: collapse;\\n\\tborder-spacing: 0;\\n}\\n\\ninput[type=search]::-webkit-search-cancel-button,\\ninput[type=search]::-webkit-search-decoration,\\ninput[type=search]::-webkit-search-results-button,\\ninput[type=search]::-webkit-search-results-decoration {\\n    -webkit-appearance: none;\\n    -moz-appearance: none;\\n}\\n\\ninput[type=search] {\\n    -webkit-appearance: none;\\n    -moz-appearance: none;\\n    -webkit-box-sizing: content-box;\\n    -moz-box-sizing: content-box;\\n    box-sizing: content-box;\\n}\\n\\ntextarea {\\n    overflow: auto;\\n    vertical-align: top;\\n    resize: vertical;\\n}\\n\\n/**\\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\\n */\\n\\naudio,\\ncanvas,\\nvideo {\\n    display: inline-block;\\n    *display: inline;\\n    *zoom: 1;\\n    max-width: 100%;\\n}\\n\\n/**\\n * Prevent modern browsers from displaying `audio` without controls.\\n * Remove excess height in iOS 5 devices.\\n */\\n\\naudio:not([controls]) {\\n    display: none;\\n    height: 0;\\n}\\n\\n/**\\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\\n * Known issue: no IE 6 support.\\n */\\n\\n[hidden] {\\n    display: none;\\n}\\n\\n/**\\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\\n *    `em` units.\\n * 2. Prevent iOS text size adjust after orientation change, without disabling\\n *    user zoom.\\n */\\n\\nhtml {\\n    font-size: 100%; /* 1 */\\n    -webkit-text-size-adjust: 100%; /* 2 */\\n    -ms-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/**\\n * Address `outline` inconsistency between Chrome and other browsers.\\n */\\n\\na:focus {\\n    outline: thin dotted;\\n}\\n\\n/**\\n * Improve readability when focused and also mouse hovered in all browsers.\\n */\\n\\na:active,\\na:hover {\\n    outline: 0;\\n}\\n\\n/**\\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\\n * 2. Improve image quality when scaled in IE 7.\\n */\\n\\nimg {\\n    border: 0; /* 1 */\\n    -ms-interpolation-mode: bicubic; /* 2 */\\n}\\n\\n/**\\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\\n */\\n\\nfigure {\\n    margin: 0;\\n}\\n\\n/**\\n * Correct margin displayed oddly in IE 6/7.\\n */\\n\\nform {\\n    margin: 0;\\n}\\n\\n/**\\n * Define consistent border, margin, and padding.\\n */\\n\\nfieldset {\\n    border: 1px solid #c0c0c0;\\n    margin: 0 2px;\\n    padding: 0.35em 0.625em 0.75em;\\n}\\n\\n/**\\n * 1. Correct color not being inherited in IE 6/7/8/9.\\n * 2. Correct text not wrapping in Firefox 3.\\n * 3. Correct alignment displayed oddly in IE 6/7.\\n */\\n\\nlegend {\\n    border: 0; /* 1 */\\n    padding: 0;\\n    white-space: normal; /* 2 */\\n    *margin-left: -7px; /* 3 */\\n}\\n\\n/**\\n * 1. Correct font size not being inherited in all browsers.\\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\\n *    and Chrome.\\n * 3. Improve appearance and consistency in all browsers.\\n */\\n\\nbutton,\\ninput,\\nselect,\\ntextarea {\\n    font-size: 100%; /* 1 */\\n    margin: 0; /* 2 */\\n    vertical-align: baseline; /* 3 */\\n    *vertical-align: middle; /* 3 */\\n}\\n\\n/**\\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\\n * the UA stylesheet.\\n */\\n\\nbutton,\\ninput {\\n    line-height: normal;\\n}\\n\\n/**\\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\\n * All other form control elements do not inherit `text-transform` values.\\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\\n * Correct `select` style inheritance in Firefox 4+ and Opera.\\n */\\n\\nbutton,\\nselect {\\n    text-transform: none;\\n}\\n\\n/**\\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\\n *    and `video` controls.\\n * 2. Correct inability to style clickable `input` types in iOS.\\n * 3. Improve usability and consistency of cursor style between image-type\\n *    `input` and others.\\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\\n *    Known issue: inner spacing remains in IE 6.\\n */\\n\\nbutton,\\nhtml input[type=\\\"button\\\"], /* 1 */\\ninput[type=\\\"reset\\\"],\\ninput[type=\\\"submit\\\"] {\\n    -webkit-appearance: button; /* 2 */\\n    cursor: pointer; /* 3 */\\n    *overflow: visible;  /* 4 */\\n}\\n\\n/**\\n * Re-set default cursor for disabled elements.\\n */\\n\\nbutton[disabled],\\nhtml input[disabled] {\\n    cursor: default;\\n}\\n\\n/**\\n * 1. Address box sizing set to content-box in IE 8/9.\\n * 2. Remove excess padding in IE 8/9.\\n * 3. Remove excess padding in IE 7.\\n *    Known issue: excess padding remains in IE 6.\\n */\\n\\ninput[type=\\\"checkbox\\\"],\\ninput[type=\\\"radio\\\"] {\\n    box-sizing: border-box; /* 1 */\\n    padding: 0; /* 2 */\\n    *height: 13px; /* 3 */\\n    *width: 13px; /* 3 */\\n}\\n\\n/**\\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\\n *    (include `-moz` to future-proof).\\n */\\n\\ninput[type=\\\"search\\\"] {\\n    -webkit-appearance: textfield; /* 1 */\\n    -moz-box-sizing: content-box;\\n    -webkit-box-sizing: content-box; /* 2 */\\n    box-sizing: content-box;\\n}\\n\\n/**\\n * Remove inner padding and search cancel button in Safari 5 and Chrome\\n * on OS X.\\n */\\n\\ninput[type=\\\"search\\\"]::-webkit-search-cancel-button,\\ninput[type=\\\"search\\\"]::-webkit-search-decoration {\\n    -webkit-appearance: none;\\n}\\n\\n/**\\n * Remove inner padding and border in Firefox 3+.\\n */\\n\\nbutton::-moz-focus-inner,\\ninput::-moz-focus-inner {\\n    border: 0;\\n    padding: 0;\\n}\\n\\n/**\\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\\n * 2. Improve readability and alignment in all browsers.\\n */\\n\\ntextarea {\\n    overflow: auto; /* 1 */\\n    vertical-align: top; /* 2 */\\n}\\n\\n/**\\n * Remove most spacing between table cells.\\n */\\n\\ntable {\\n    border-collapse: collapse;\\n    border-spacing: 0;\\n}\\n\\nhtml,\\nbutton,\\ninput,\\nselect,\\ntextarea {\\n    color: #222;\\n}\\n\\n\\n::-moz-selection {\\n    background: #b3d4fc;\\n    text-shadow: none;\\n}\\n\\n::selection {\\n    background: #b3d4fc;\\n    text-shadow: none;\\n}\\n\\nimg {\\n    vertical-align: middle;\\n}\\n\\nfieldset {\\n    border: 0;\\n    margin: 0;\\n    padding: 0;\\n}\\n\\ntextarea {\\n    resize: vertical;\\n}\\n\\n.chromeframe {\\n    margin: 0.2em 0;\\n    background: #ccc;\\n    color: #000;\\n    padding: 0.2em 0;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/img/address.svg":
/*!*****************************!*\
  !*** ./src/img/address.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/address.svg\");\n\n//# sourceURL=webpack:///./src/img/address.svg?");

/***/ }),

/***/ "./src/img/facebook.svg":
/*!******************************!*\
  !*** ./src/img/facebook.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/facebook.svg\");\n\n//# sourceURL=webpack:///./src/img/facebook.svg?");

/***/ }),

/***/ "./src/img/favicon.png":
/*!*****************************!*\
  !*** ./src/img/favicon.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/favicon.png\");\n\n//# sourceURL=webpack:///./src/img/favicon.png?");

/***/ }),

/***/ "./src/img/google-maps.svg":
/*!*********************************!*\
  !*** ./src/img/google-maps.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/google-maps.svg\");\n\n//# sourceURL=webpack:///./src/img/google-maps.svg?");

/***/ }),

/***/ "./src/img/instagram.svg":
/*!*******************************!*\
  !*** ./src/img/instagram.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/instagram.svg\");\n\n//# sourceURL=webpack:///./src/img/instagram.svg?");

/***/ }),

/***/ "./src/img/laRossa_logo.png":
/*!**********************************!*\
  !*** ./src/img/laRossa_logo.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/laRossa_logo.png\");\n\n//# sourceURL=webpack:///./src/img/laRossa_logo.png?");

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/logo.png\");\n\n//# sourceURL=webpack:///./src/img/logo.png?");

/***/ }),

/***/ "./src/img/mail.svg":
/*!**************************!*\
  !*** ./src/img/mail.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/mail.svg\");\n\n//# sourceURL=webpack:///./src/img/mail.svg?");

/***/ }),

/***/ "./src/img/misfill_logo.png":
/*!**********************************!*\
  !*** ./src/img/misfill_logo.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/misfill_logo.png\");\n\n//# sourceURL=webpack:///./src/img/misfill_logo.png?");

/***/ }),

/***/ "./src/img/nanoestetic_logo.png":
/*!**************************************!*\
  !*** ./src/img/nanoestetic_logo.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/nanoestetic_logo.png\");\n\n//# sourceURL=webpack:///./src/img/nanoestetic_logo.png?");

/***/ }),

/***/ "./src/img/open-menu-1.png":
/*!*********************************!*\
  !*** ./src/img/open-menu-1.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/open-menu-1.png\");\n\n//# sourceURL=webpack:///./src/img/open-menu-1.png?");

/***/ }),

/***/ "./src/img/open-menu-1.svg":
/*!*********************************!*\
  !*** ./src/img/open-menu-1.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/open-menu-1.svg\");\n\n//# sourceURL=webpack:///./src/img/open-menu-1.svg?");

/***/ }),

/***/ "./src/img/pannochka_logo.png":
/*!************************************!*\
  !*** ./src/img/pannochka_logo.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/pannochka_logo.png\");\n\n//# sourceURL=webpack:///./src/img/pannochka_logo.png?");

/***/ }),

/***/ "./src/img/phone.svg":
/*!***************************!*\
  !*** ./src/img/phone.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/phone.svg\");\n\n//# sourceURL=webpack:///./src/img/phone.svg?");

/***/ }),

/***/ "./src/img/productivity.svg":
/*!**********************************!*\
  !*** ./src/img/productivity.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/productivity.svg\");\n\n//# sourceURL=webpack:///./src/img/productivity.svg?");

/***/ }),

/***/ "./src/img/satara_logo.png":
/*!*********************************!*\
  !*** ./src/img/satara_logo.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/satara_logo.png\");\n\n//# sourceURL=webpack:///./src/img/satara_logo.png?");

/***/ }),

/***/ "./src/img/telephone.svg":
/*!*******************************!*\
  !*** ./src/img/telephone.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/telephone.svg\");\n\n//# sourceURL=webpack:///./src/img/telephone.svg?");

/***/ }),

/***/ "./src/img/time-and-date.svg":
/*!***********************************!*\
  !*** ./src/img/time-and-date.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/time-and-date.svg\");\n\n//# sourceURL=webpack:///./src/img/time-and-date.svg?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_favicon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/favicon.png */ \"./src/img/favicon.png\");\n/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/logo.png */ \"./src/img/logo.png\");\n/* harmony import */ var _img_facebook_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/facebook.svg */ \"./src/img/facebook.svg\");\n/* harmony import */ var _img_instagram_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/instagram.svg */ \"./src/img/instagram.svg\");\n/* harmony import */ var _img_google_maps_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/google-maps.svg */ \"./src/img/google-maps.svg\");\n/* harmony import */ var _img_telephone_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/telephone.svg */ \"./src/img/telephone.svg\");\n/* harmony import */ var _img_open_menu_1_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/open-menu-1.svg */ \"./src/img/open-menu-1.svg\");\n/* harmony import */ var _img_open_menu_1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/open-menu-1.png */ \"./src/img/open-menu-1.png\");\n/* harmony import */ var _img_address_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/address.svg */ \"./src/img/address.svg\");\n/* harmony import */ var _img_productivity_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/productivity.svg */ \"./src/img/productivity.svg\");\n/* harmony import */ var _img_mail_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/mail.svg */ \"./src/img/mail.svg\");\n/* harmony import */ var _img_phone_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/phone.svg */ \"./src/img/phone.svg\");\n/* harmony import */ var _img_time_and_date_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/time-and-date.svg */ \"./src/img/time-and-date.svg\");\n/* harmony import */ var _img_satara_logo_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/satara_logo.png */ \"./src/img/satara_logo.png\");\n/* harmony import */ var _img_laRossa_logo_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/laRossa_logo.png */ \"./src/img/laRossa_logo.png\");\n/* harmony import */ var _img_pannochka_logo_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/pannochka_logo.png */ \"./src/img/pannochka_logo.png\");\n/* harmony import */ var _img_nanoestetic_logo_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/nanoestetic_logo.png */ \"./src/img/nanoestetic_logo.png\");\n/* harmony import */ var _img_misfill_logo_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../img/misfill_logo.png */ \"./src/img/misfill_logo.png\");\n// import 'normalize-scss'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style/index.scss?");

/***/ })

/******/ });