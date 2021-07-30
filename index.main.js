/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nbody {\n\n    font-family: 'Courgette', cursive;\n    font-size: 28px;\n    background-color: #F5F5F5;\n   \n}\n\n  \n\n\n#content {\n\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    min-height: 100vh;\n    background-size: cover;    \n  \n}\n\n\n\n#storyLogoWrap {\n\n    grid-column: 2;\n    grid-row: 2;\n    justify-self: center;\n    align-self: center;\n\n}\n\n\n#storyLogoWrap img {\n\n    width: 400px;\n    height: auto;\n}\n\n#header {\n    position: fixed;\n\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 1fr 1fr;\n    color: white;\n    font-family: 'Raleway', sans-serif;\n    font-size: 0.8em;\n    transition: all 0.5s ease-in-out;\n}\n\n#header,\n#storyLogoWrap {\n\n    transition: all 0.5s ease-in-out;\n}\n\n#main {\n\n    grid-row: 1;\n    display: grid;\n    border-style: solid white 2px;\n    transition: all 0.5s ease-in-out;\n    grid-column: 2;\n    justify-self: center;\n    align-self: center;\n    grid-template-columns: 1fr;\n    color: #FFFFFF;\n    font-size: 24px;\n    line-height: 1.6;\n    font-family: 'Raleway', sans-serif;\n}\n\n#tabs {\n\n    grid-column: 1;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 6px;\n    margin: 6px;\n}\n\n.innerTab {\n\n\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    justify-self: center;\n    width: 100%;\n    text-decoration: underline;\n    padding: 20px;\n\n}\n\n.innerTab:hover {\n\n    scale: 1.1;\n    cursor: pointer;  \n\n}\n\n.mainAbout {\n\n    grid-template-columns: 1fr 1fr;\n}\n\n.opacity {\n\n    opacity: 0 !important;\n    \n}\n\n#aboutPageWrapper {\n\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: minmax(65vh, 1fr) minmax(70vh, 1fr) auto;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-row: 3;\n    grid-column: 1/-1;\n    background-color: #EEEEEE;\n\n}\n\n#aboutPageWrapper p {\n\n    font-family: 'Raleway', sans-serif;\n}\n\n\n\n#aboutPageStory {\n\n    display: grid;\n    grid-row: 1;\n    border-width: 2px;\n    grid-column: 1/-1;\n    align-self: center;\n    align-content: center;\n    font-size: 18px;\n    line-height: 26px;\n    justify-content: center;\n    height: 100%;\n    margin: 40px;\n    margin-top: 0px;\n    grid-gap: 30px;\n}\n\n#aboutPageMenu {\n    grid-column: 1/-1;\n    display: grid;\n    align-self: center;\n    align-content: center;\n    background-color: #0E1111;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-content: center;\n    height: 100%;\n}\n\nh2 {\n\n    justify-self: center;\n    align-self: center;\n    font-size: 24px;\n}\n\n#mealItemTitle {\n\n    grid-row: 1;\n    grid-column: 1/-1;\n    color: white;\n    justify-self: center;\n    align-self: start;\n\n}\n\n.mealItem {\n\n    border-bottom: solid;\n    border-top: solid;\n    border-color: white;\n    border-width: 1px;\n    justify-self: center;\n    margin: 40px;\n    color: white;\n    padding: 10px;\n    font-size: 18px;\n}\n\n\n\n#aboutContact {\n\n    grid-column: 1;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-content: center;\n    align-items: center;\n    font-size: 18px;\n}\n\n#contactWrap {\n\n    grid-row: 2;\n    justify-self: center;\n    display: grid;\n    grid-gap: 10px;\n}\n\n#aboutHours {\n\n    grid-column: 3;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-content: center;\n    align-items: center;\n    font-size: 18px;\n    justify-items: center;\n}\n\n#hourWrap {\n\n    grid-row: 2;\n}\n\n#logoWrapper {\n    grid-column: 2;\n    grid-row: 1;\n    border-width: 2px;\n    align-self: center;\n    justify-self: center;\n    margin: 10px;\n    display: grid;\n    grid-template-rows: 1fr auto;\n    justify-items: center;\n    justify-content: center;\n    grid-gap: 20px;\n\n}\n\n.socialWrap {\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 2px;\n\n}\n\n.socialWrap:hover {\n\n    cursor: pointer;\n\n}\n\n#galleryWrapper {\n\n    display: grid;\n    grid-template-columns: repeat(4, minmax(200px, 1fr));\n    grid-template-rows: repeat(4, 1fr);\n    grid-auto-rows: 1fr;\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n    grid-auto-flow: dense;\n    height: 100vh;\n\n}\n\n#galleryWrapper img {\n\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    max-height: 100vh;\n\n}\n\n.galleryDiv {\n\n    display: grid;\n    grid-column: 1/-1;\n}\n\n#image0 {\n\n    grid-column: span 2;\n}\n\n#image1 {\n\n    grid-column: span 2;\n}\n\n#image2 {\n\n    grid-column: span 2;\n}\n\n#image3 {\n\n    grid-column: span 2;\n\n}\n\n#image4 {\n\n    grid-column: 1/-1;\n}\n\n#footer {\n\n    grid-column: 1/-1;\n    grid-row: -1;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr auto;\n    background-color: #EEEEEE;\n    font-family: 'Raleway', sans-serif;\n    height: 30vh; \n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nbody {\n\n    font-family: 'Courgette', cursive;\n    font-size: 28px;\n    background-color: #F5F5F5;\n   \n}\n\n  \n\n\n#content {\n\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    min-height: 100vh;\n    background-size: cover;    \n  \n}\n\n\n\n#storyLogoWrap {\n\n    grid-column: 2;\n    grid-row: 2;\n    justify-self: center;\n    align-self: center;\n\n}\n\n\n#storyLogoWrap img {\n\n    width: 400px;\n    height: auto;\n}\n\n#header {\n    position: fixed;\n\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 1fr 1fr;\n    color: white;\n    font-family: 'Raleway', sans-serif;\n    font-size: 0.8em;\n    transition: all 0.5s ease-in-out;\n}\n\n#header,\n#storyLogoWrap {\n\n    transition: all 0.5s ease-in-out;\n}\n\n#main {\n\n    grid-row: 1;\n    display: grid;\n    border-style: solid white 2px;\n    transition: all 0.5s ease-in-out;\n    grid-column: 2;\n    justify-self: center;\n    align-self: center;\n    grid-template-columns: 1fr;\n    color: #FFFFFF;\n    font-size: 24px;\n    line-height: 1.6;\n    font-family: 'Raleway', sans-serif;\n}\n\n#tabs {\n\n    grid-column: 1;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 6px;\n    margin: 6px;\n}\n\n.innerTab {\n\n\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    justify-self: center;\n    width: 100%;\n    text-decoration: underline;\n    padding: 20px;\n\n}\n\n.innerTab:hover {\n\n    scale: 1.1;\n    cursor: pointer;  \n\n}\n\n.mainAbout {\n\n    grid-template-columns: 1fr 1fr;\n}\n\n.opacity {\n\n    opacity: 0 !important;\n    \n}\n\n#aboutPageWrapper {\n\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: minmax(65vh, 1fr) minmax(70vh, 1fr) auto;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-row: 3;\n    grid-column: 1/-1;\n    background-color: #EEEEEE;\n\n}\n\n#aboutPageWrapper p {\n\n    font-family: 'Raleway', sans-serif;\n}\n\n\n\n#aboutPageStory {\n\n    display: grid;\n    grid-row: 1;\n    border-width: 2px;\n    grid-column: 1/-1;\n    align-self: center;\n    align-content: center;\n    font-size: 18px;\n    line-height: 26px;\n    justify-content: center;\n    height: 100%;\n    margin: 40px;\n    margin-top: 0px;\n    grid-gap: 30px;\n}\n\n#aboutPageMenu {\n    grid-column: 1/-1;\n    display: grid;\n    align-self: center;\n    align-content: center;\n    background-color: #0E1111;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-content: center;\n    height: 100%;\n}\n\nh2 {\n\n    justify-self: center;\n    align-self: center;\n    font-size: 24px;\n}\n\n#mealItemTitle {\n\n    grid-row: 1;\n    grid-column: 1/-1;\n    color: white;\n    justify-self: center;\n    align-self: start;\n\n}\n\n.mealItem {\n\n    border-bottom: solid;\n    border-top: solid;\n    border-color: white;\n    border-width: 1px;\n    justify-self: center;\n    margin: 40px;\n    color: white;\n    padding: 10px;\n    font-size: 18px;\n}\n\n\n\n#aboutContact {\n\n    grid-column: 1;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-content: center;\n    align-items: center;\n    font-size: 18px;\n}\n\n#contactWrap {\n\n    grid-row: 2;\n    justify-self: center;\n    display: grid;\n    grid-gap: 10px;\n}\n\n#aboutHours {\n\n    grid-column: 3;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-content: center;\n    align-items: center;\n    font-size: 18px;\n    justify-items: center;\n}\n\n#hourWrap {\n\n    grid-row: 2;\n}\n\n#logoWrapper {\n    grid-column: 2;\n    grid-row: 1;\n    border-width: 2px;\n    align-self: center;\n    justify-self: center;\n    margin: 10px;\n    display: grid;\n    grid-template-rows: 1fr auto;\n    justify-items: center;\n    justify-content: center;\n    grid-gap: 20px;\n\n}\n\n.socialWrap {\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 2px;\n\n}\n\n.socialWrap:hover {\n\n    cursor: pointer;\n\n}\n\n#galleryWrapper {\n\n    display: grid;\n    grid-template-columns: repeat(4, minmax(200px, 1fr));\n    grid-template-rows: repeat(4, 1fr);\n    grid-auto-rows: 1fr;\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n    grid-auto-flow: dense;\n    height: 100vh;\n\n}\n\n#galleryWrapper img {\n\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    max-height: 100vh;\n\n}\n\n.galleryDiv {\n\n    display: grid;\n    grid-column: 1/-1;\n}\n\n#image0 {\n\n    grid-column: span 2;\n}\n\n#image1 {\n\n    grid-column: span 2;\n}\n\n#image2 {\n\n    grid-column: span 2;\n}\n\n#image3 {\n\n    grid-column: span 2;\n\n}\n\n#image4 {\n\n    grid-column: 1/-1;\n}\n\n#footer {\n\n    grid-column: 1/-1;\n    grid-row: -1;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr auto;\n    background-color: #EEEEEE;\n    font-family: 'Raleway', sans-serif;\n    height: 30vh; \n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domManipulator": () => (/* binding */ domManipulator)
/* harmony export */ });
/* harmony import */ var _images_twitter_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/twitter.png */ "./src/images/twitter.png");
/* harmony import */ var _images_insta_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/insta.png */ "./src/images/insta.png");
/* harmony import */ var _images_logo_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/logo(1).png */ "./src/images/logo(1).png");




let domManipulator = function () {

    let currentTab = "home";
    let content = document.querySelector("#content");
    let header = document.createElement("div");
    header.id = "header";
    let tabs = document.createElement("div");
    tabs.id = "tabs";
    content.append(header);
    header.append(tabs);
    header.addEventListener("mouseenter", showHeader);



let setBackground = function (id, image) {

    document.querySelector(`#${id}`).style.backgroundImage = `url(${image})`;
}

let getTabs = function () {

    return tabs;
}

let setCurrentTab = function (tab) {

    currentTab = tab;
}

let getCurrentTab = function () {

    return currentTab;
}

let getContent = function () {

    return content;
}


let createDiv = function (id) {

    let newDiv = document.createElement("div");
    newDiv.id = id;
    return newDiv;
}

let createDivWithClass = function (className) {

    let newDiv = document.createElement("div");
    newDiv.classList.add(className);
    return newDiv;
}

let appendViaQuery = function (element1, element2) {

    document.querySelector(element1).append(element2);
}

let removeAllNodes = function () {

    let nodes = getContent().childNodes;
    getContent().style.backgroundImg = "white";

    console.log(nodes);

    nodes.forEach((node => {
        console.log(node.id);
        if (node.id != "header") {

            getContent().removeChild(node);
        }
    }))

    let nodes2 = document.body.childNodes;

    nodes2.forEach((node => {

        if (node.id == "aboutPageWrapper") {

            document.body.removeChild(node);
            console.log("here")
        }
    }))
}

let windowScroll = function () {

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        console.log(currentScrollPos)

        if (document.querySelector("#storyLogoWrap") != null) {

            if (currentScrollPos > 0) {

                document.querySelector("#storyLogoWrap").classList.add("opacity");
            } else {

                document.querySelector("#storyLogoWrap").classList.remove("opacity");
            }

        }

        if (prevScrollpos > currentScrollPos) {
            document.querySelector("#header").classList.remove("opacity");

            console.log(document.querySelector("#header"))
        } else {
            document.querySelector("#header").classList.add("opacity");

        }
        prevScrollpos = currentScrollPos;
    }
}

let createImage = function (imgSrc) {

    let newImage = new Image();
    newImage.src = imgSrc;
    return newImage;
}

let getFooter = function () {

    let contactInfo = ["Email: lerestaurant@gmail.com", "Telephone: 08234666", "Address: 1 Posh Street, Posh Town"]

    let hours = ["Mon - Thurs: 11 - 9", "Fri - Sat: 9 - 11", "Sun: 12 - 8"]

    let mainLogo = createImage(_images_logo_1_png__WEBPACK_IMPORTED_MODULE_2__);
    let twitterLogo = createImage(_images_twitter_png__WEBPACK_IMPORTED_MODULE_0__);
    let instaLogo = createImage(_images_insta_png__WEBPACK_IMPORTED_MODULE_1__);

    let footer = domManipulator.createDiv("footer");

    let footerContent = ["aboutContact", "aboutHours", "logoWrapper"];

    footerContent.forEach((id) => {

        footer.append(domManipulator.createDiv(id))
    });

    let footerChildren = footer.childNodes;

    let contactDiv = footerChildren[0];
    let hourDiv = footerChildren[1];
    let logoDiv = footerChildren[2];

    let contactInner = domManipulator.createDiv("contactWrap");
    contactDiv.appendChild(contactInner);

    let hourWrap = domManipulator.createDiv("hourWrap");
    hourDiv.appendChild(hourWrap);

    logoDiv.appendChild(mainLogo);
    footer.appendChild(domManipulator.createDiv("icons"));

    let socialWrap = domManipulator.createDivWithClass("socialWrap");
    logoDiv.appendChild(socialWrap);

    let mediaIcons = [twitterLogo, instaLogo];

    mediaIcons.forEach((icon) => {

        socialWrap.appendChild(icon);
    });

    contactInfo.forEach((item) => {

        let currentContact = domManipulator.createDivWithClass("contactItem");
        currentContact.innerText = item;
        contactInner.appendChild(currentContact);
    });

    hours.forEach((item) => {

        let currentItem = domManipulator.createDivWithClass("hourItem");
        currentItem.innerText = item;
        hourWrap.appendChild(currentItem);
    });

     

    return footer;

}

function showHeader() {

    if (header.classList.contains("opacity")) {

        header.classList.remove("opacity");

        header.addEventListener("mouseleave", function () {               

            if (!header.classList.contains("opacity") && window.pageYOffset > 0) {

                header.classList.add("opacity");
            }
        })
    }
}

windowScroll();

return {
    createDiv,
    setCurrentTab,
    getCurrentTab,
    getContent,
    getTabs,
    removeAllNodes,
    setBackground,
    createDivWithClass,
    appendViaQuery,
    getFooter,
    createImage
}

}()



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateHome": () => (/* binding */ updateHome)
/* harmony export */ });
/* harmony import */ var _images_burger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/burger.jpg */ "./src/images/burger.jpg");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



let updateHome = function () { 

    let setHomeContent = function () {

        let main = _dom__WEBPACK_IMPORTED_MODULE_1__.domManipulator.createDiv("main");
        main.appendChild(_dom__WEBPACK_IMPORTED_MODULE_1__.domManipulator.createDiv("mainContent"));
        _dom__WEBPACK_IMPORTED_MODULE_1__.domManipulator.getContent().append(main);
        setTimeout(function () {
            main.classList.add("opacity");
        }, 0);

        setTimeout(function () {
            main.addEventListener("transitionend", () => {
                main.innerText = "Life's too short for boring food" + "\n" +
                    "Come and see what you have been missing..."
                main.classList.remove("opacity");
            })
        }, 0);

        _dom__WEBPACK_IMPORTED_MODULE_1__.domManipulator.setBackground("content", _images_burger_jpg__WEBPACK_IMPORTED_MODULE_0__);      
    }

    return {
       
        setHomeContent
    };

}()



/***/ }),

/***/ "./src/images/burger.jpg":
/*!*******************************!*\
  !*** ./src/images/burger.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad73cd861ff2ddc66a10.jpg";

/***/ }),

/***/ "./src/images/chef.jpg":
/*!*****************************!*\
  !*** ./src/images/chef.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0cefa993534eae46bfb4.jpg";

/***/ }),

/***/ "./src/images/gallery1.jpg":
/*!*********************************!*\
  !*** ./src/images/gallery1.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6478c18f4b636e8c6021.jpg";

/***/ }),

/***/ "./src/images/gallery2.jpg":
/*!*********************************!*\
  !*** ./src/images/gallery2.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42e75edd09e3d34fbf12.jpg";

/***/ }),

/***/ "./src/images/gallery3.jpg":
/*!*********************************!*\
  !*** ./src/images/gallery3.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf8795446c83e05d88bc.jpg";

/***/ }),

/***/ "./src/images/gallery4.jpg":
/*!*********************************!*\
  !*** ./src/images/gallery4.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85b2efade95b0e04145e.jpg";

/***/ }),

/***/ "./src/images/gallery5.jpg":
/*!*********************************!*\
  !*** ./src/images/gallery5.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e5b95723dee2a6191f5.jpg";

/***/ }),

/***/ "./src/images/insta.png":
/*!******************************!*\
  !*** ./src/images/insta.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "239da8678fff17fc7907.png";

/***/ }),

/***/ "./src/images/logo(1).png":
/*!********************************!*\
  !*** ./src/images/logo(1).png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0de6b954dbd1161df6be.png";

/***/ }),

/***/ "./src/images/story.png":
/*!******************************!*\
  !*** ./src/images/story.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29a25449cea9385f5ee6.png";

/***/ }),

/***/ "./src/images/twitter.png":
/*!********************************!*\
  !*** ./src/images/twitter.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa1356ec0f8a9c369ff1.png";

/***/ }),

/***/ "./src/loader.js":
/*!***********************!*\
  !*** ./src/loader.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");



const pageLoader = function () {
   
    _home__WEBPACK_IMPORTED_MODULE_0__.updateHome.setHomeContent();

}()



/***/ }),

/***/ "./src/tabs/about.js":
/*!***************************!*\
  !*** ./src/tabs/about.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateAbout": () => (/* binding */ updateAbout)
/* harmony export */ });
/* harmony import */ var _images_chef_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/chef.jpg */ "./src/images/chef.jpg");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom */ "./src/dom.js");
/* harmony import */ var _images_story_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/story.png */ "./src/images/story.png");






let updateAbout = function () { 

    _dom__WEBPACK_IMPORTED_MODULE_1__.domManipulator.setBackground("content", _images_chef_jpg__WEBPACK_IMPORTED_MODULE_0__);
    let currentMenuItems = aboutHelpers.getMenu();
    let storyContent = aboutHelpers.getIpsum();
    let storyLogo = _dom__WEBPACK_IMPORTED_MODULE_1__.domManipulator.createImage(_images_story_png__WEBPACK_IMPORTED_MODULE_2__);

    let storyLogoWrap = _dom__WEBPACK_IMPORTED_MODULE_1__.domManipulator.createDiv("storyLogoWrap");
    storyLogoWrap.appendChild(storyLogo);

    document.querySelector("#content").appendChild(storyLogoWrap);

    let aboutPageWrapper = _dom__WEBPACK_IMPORTED_MODULE_1__.domManipulator.createDiv("aboutPageWrapper");
    document.body.appendChild(aboutPageWrapper);
  
    aboutPageWrapper.appendChild(_dom__WEBPACK_IMPORTED_MODULE_1__.domManipulator.createDiv("aboutPageStory"));

    let aboutPageStory = document.querySelector("#aboutPageStory");
    let aboutStoryHeader = document.createElement("h2");
    aboutStoryHeader.innerText = "Dignissim...";

    let aboutStoryText = document.createElement("p");
    aboutStoryText.innerText = storyContent;
    aboutPageStory.append(aboutStoryHeader);
    aboutPageStory.append(aboutStoryText);

    let aboutPageMenu = _dom__WEBPACK_IMPORTED_MODULE_1__.domManipulator.createDiv("aboutPageMenu");
    aboutPageWrapper.appendChild(aboutPageMenu);

    aboutPageMenu.appendChild(_dom__WEBPACK_IMPORTED_MODULE_1__.domManipulator.createDiv("mealItemTitle"));
    document.querySelector("#mealItemTitle").innerText = "Some favorites...";

    currentMenuItems.forEach((item) => {

        let currentMenuItem = _dom__WEBPACK_IMPORTED_MODULE_1__.domManipulator.createDivWithClass("mealItem");
        aboutPageMenu.appendChild(currentMenuItem);
        currentMenuItem.innerText = item;
    })
   
    aboutPageWrapper.appendChild(_dom__WEBPACK_IMPORTED_MODULE_1__.domManipulator.getFooter());    

}

let aboutHelpers = function () {

    let ipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
     Quisque id diam vel quam elementum pulvinar etiam non quam. In pellentesque massa placerat duis ultricies lacus sed.
      Feugiat nisl pretium fusce id velit ut. Viverra suspendisse potenti nullam ac tortor vitae purus.
     Ante in nibh mauris cursus mattis molestie. Quam pellentesque nec nam aliquam. 
     Viverra vitae congue eu consequat ac. Enim nunc faucibus a pellentesque sit amet porttitor. 
     Vitae congue eu consequat ac felis donec et odio pellentesque.
     
    Ipsum nunc aliquet bibendum enim facilisis. Eu sem integer vitae justo eget magna fermentum iaculis eu.
     Tristique magna sit amet purus gravida quis blandit. Scelerisque varius morbi enim nunc faucibus. 
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Aliquam vestibulum morbi blandit cursus risus. Velit dignissim sodales ut eu sem integer vitae justo eget. 
      Vivamus arcu felis bibendum ut tristique et egestas. Praesent tristique magna sit amet purus gravida quis blandit. 
      Senectus et netus et malesuada fames ac turpis egestas sed. Enim ut sem viverra aliquet eget sit amet tellus cras.
      Commodo odio aenean sed adipiscing diam donec. Eu mi bibendum neque egestas. Scelerisque eu ultrices vitae auctor.
     `

    let currentMenuItems = ["Cold Tomato Soup, Melon & Cucumber",
        "Borlotti Beans, Courgettes & Nasturtium ",
        "Raw Scallop, Sungold Tomato & Fennel Blossom",
        "Suckling Kid Sausage, Peas & Artichokes",
        "Smoked Eel, Beetroots & Elderberries",
        "Black Pudding, White Peach & Bobby Beans",
        "Duck Leg, Turnip & Pickled Morello Cherries",
        "Mangalitsa Collar, Hispi Cabbage & Lardo",
        "Dorset Blue Lobster, Samphire & Lobster Butter"
    ]

    let getIpsum = () => {

        return ipsum;
    }

    let getMenu = () => {

        return currentMenuItems;
    }

    return {

        getIpsum,
        getMenu,

    }

}()




/***/ }),

/***/ "./src/tabs/gallery.js":
/*!*****************************!*\
  !*** ./src/tabs/gallery.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateGallery": () => (/* binding */ updateGallery)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "./src/dom.js");
/* harmony import */ var _images_gallery1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/gallery1.jpg */ "./src/images/gallery1.jpg");
/* harmony import */ var _images_gallery2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/gallery2.jpg */ "./src/images/gallery2.jpg");
/* harmony import */ var _images_gallery3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/gallery3.jpg */ "./src/images/gallery3.jpg");
/* harmony import */ var _images_gallery4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/gallery4.jpg */ "./src/images/gallery4.jpg");
/* harmony import */ var _images_gallery5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/gallery5.jpg */ "./src/images/gallery5.jpg");







let updateGallery = function () {

    let galleryWrapper = _dom__WEBPACK_IMPORTED_MODULE_0__.domManipulator.createDiv("galleryWrapper");

    console.log(galleryWrapper)

    _dom__WEBPACK_IMPORTED_MODULE_0__.domManipulator.getContent().appendChild(galleryWrapper);

    let images = [_images_gallery1_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_gallery2_jpg__WEBPACK_IMPORTED_MODULE_2__, _images_gallery3_jpg__WEBPACK_IMPORTED_MODULE_3__, _images_gallery4_jpg__WEBPACK_IMPORTED_MODULE_4__, _images_gallery5_jpg__WEBPACK_IMPORTED_MODULE_5__];

    for (let x = 0; x < images.length; x++) {

        let currentImage = new Image();
        currentImage.src = images[x];
        document.querySelector("#galleryWrapper").appendChild(_dom__WEBPACK_IMPORTED_MODULE_0__.domManipulator.createDiv(`image${x}`));
        document.querySelector(`#image${x}`).classList.add("galleryDiv");
        document.querySelector(`#image${x}`).appendChild(currentImage)

    }

    let footer = _dom__WEBPACK_IMPORTED_MODULE_0__.domManipulator.getFooter();
    console.log(footer);
    document.querySelector("#galleryWrapper").appendChild(footer);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ "./src/loader.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _tabs_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/gallery */ "./src/tabs/gallery.js");
/* harmony import */ var _tabs_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/about */ "./src/tabs/about.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom */ "./src/dom.js");









const tabLogic = function () {

    let tabFunctions = {

        "home": _home__WEBPACK_IMPORTED_MODULE_2__.updateHome.setHomeContent,
        "gallery": _tabs_gallery__WEBPACK_IMPORTED_MODULE_3__.updateGallery,
        "about": _tabs_about__WEBPACK_IMPORTED_MODULE_4__.updateAbout,
    }

    let tabTitles = ["Home", "Gallery", "About"];

    for (let x = 0; x < 3; x++) {

        let innerTab = document.createElement("div");
        innerTab.classList.add("innerTab");
        innerTab.innerText = tabTitles[x];
        innerTab.id = tabTitles[x];
        _dom__WEBPACK_IMPORTED_MODULE_5__.domManipulator.getTabs().append(innerTab);
        innerTab.addEventListener("click", tabChange)
    }

    function tabChange(e) {

        //stops from triggering tab switch on the same tab over and over
        if (e.target.innerText != _dom__WEBPACK_IMPORTED_MODULE_5__.domManipulator.getCurrentTab()) {          

            _dom__WEBPACK_IMPORTED_MODULE_5__.domManipulator.removeAllNodes();
            _dom__WEBPACK_IMPORTED_MODULE_5__.domManipulator.setCurrentTab(e.target.innerText);
            console.log(e.target.innerText);
            let func = tabFunctions[e.target.innerText.toLowerCase()];      
            func();     
            
          

        } else {

            return;
        }


    }

}()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS8uL3NyYy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9zcmMvdGFicy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS8uL3NyYy90YWJzL2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSx3c0JBQXdzQixnQkFBZ0IsaUJBQWlCLGdCQUFnQixzQkFBc0Isb0JBQW9CLCtCQUErQixH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LFVBQVUsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsU0FBUyxNQUFNLFVBQVUsVUFBVSxZQUFZLGNBQWMsUUFBUSxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsT0FBTyxNQUFNLFlBQVksU0FBUyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsU0FBUyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxZQUFZLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFV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QUFFVDtBQUNBOzs7QUFHQTs7QUFFQSxDQUFDLEUiLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cXG52Mi4wIHwgMjAxMTAxMjZcXG5MaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gICAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuYm9keSB7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmdldHRlJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbiAgIFxcbn1cXG5cXG4gIFxcblxcblxcbiNjb250ZW50IHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgICAgXFxuICBcXG59XFxuXFxuXFxuXFxuI3N0b3J5TG9nb1dyYXAge1xcblxcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxufVxcblxcblxcbiNzdG9yeUxvZ29XcmFwIGltZyB7XFxuXFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuI2hlYWRlcixcXG4jc3RvcnlMb2dvV3JhcCB7XFxuXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jbWFpbiB7XFxuXFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkIHdoaXRlIDJweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI3RhYnMge1xcblxcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC1nYXA6IDZweDtcXG4gICAgbWFyZ2luOiA2cHg7XFxufVxcblxcbi5pbm5lclRhYiB7XFxuXFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxufVxcblxcbi5pbm5lclRhYjpob3ZlciB7XFxuXFxuICAgIHNjYWxlOiAxLjE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgIFxcblxcbn1cXG5cXG4ubWFpbkFib3V0IHtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4ub3BhY2l0eSB7XFxuXFxuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcXG4gICAgXFxufVxcblxcbiNhYm91dFBhZ2VXcmFwcGVyIHtcXG5cXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDY1dmgsIDFmcikgbWlubWF4KDcwdmgsIDFmcikgYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC1yb3c6IDM7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcblxcbn1cXG5cXG4jYWJvdXRQYWdlV3JhcHBlciBwIHtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuXFxuI2Fib3V0UGFnZVN0b3J5IHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBncmlkLWdhcDogMzBweDtcXG59XFxuXFxuI2Fib3V0UGFnZU1lbnUge1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTExMTE7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmgyIHtcXG5cXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4jbWVhbEl0ZW1UaXRsZSB7XFxuXFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuXFxufVxcblxcbi5tZWFsSXRlbSB7XFxuXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkO1xcbiAgICBib3JkZXItdG9wOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IDQwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5cXG5cXG4jYWJvdXRDb250YWN0IHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4jY29udGFjdFdyYXAge1xcblxcbiAgICBncmlkLXJvdzogMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAxMHB4O1xcbn1cXG5cXG4jYWJvdXRIb3VycyB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaG91cldyYXAge1xcblxcbiAgICBncmlkLXJvdzogMjtcXG59XFxuXFxuI2xvZ29XcmFwcGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLWdhcDogMjBweDtcXG5cXG59XFxuXFxuLnNvY2lhbFdyYXAge1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtZ2FwOiAycHg7XFxuXFxufVxcblxcbi5zb2NpYWxXcmFwOmhvdmVyIHtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG4jZ2FsbGVyeVdyYXBwZXIge1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICAgIGdyaWQtYXV0by1mbG93OiBkZW5zZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG5cXG59XFxuXFxuI2dhbGxlcnlXcmFwcGVyIGltZyB7XFxuXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG5cXG59XFxuXFxuLmdhbGxlcnlEaXYge1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuXFxuI2ltYWdlMCB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbiNpbWFnZTEge1xcblxcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG4jaW1hZ2UyIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuXFxuI2ltYWdlMyB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuXFxufVxcblxcbiNpbWFnZTQge1xcblxcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBncmlkLXJvdzogLTE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDogMzB2aDsgXFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdD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cmVzZXQvXFxudjIuMCB8IDIwMTEwMTI2XFxuTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICAgIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcblxcbiAgICBmb250LWZhbWlseTogJ0NvdXJnZXR0ZScsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG4gICBcXG59XFxuXFxuICBcXG5cXG5cXG4jY29udGVudCB7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICAgIFxcbiAgXFxufVxcblxcblxcblxcbiNzdG9yeUxvZ29XcmFwIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbn1cXG5cXG5cXG4jc3RvcnlMb2dvV3JhcCBpbWcge1xcblxcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNoZWFkZXIsXFxuI3N0b3J5TG9nb1dyYXAge1xcblxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuI21haW4ge1xcblxcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCB3aGl0ZSAycHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxufVxcblxcbiN0YWJzIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtZ2FwOiA2cHg7XFxuICAgIG1hcmdpbjogNnB4O1xcbn1cXG5cXG4uaW5uZXJUYWIge1xcblxcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbn1cXG5cXG4uaW5uZXJUYWI6aG92ZXIge1xcblxcbiAgICBzY2FsZTogMS4xO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7ICBcXG5cXG59XFxuXFxuLm1haW5BYm91dCB7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuLm9wYWNpdHkge1xcblxcbiAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XFxuICAgIFxcbn1cXG5cXG4jYWJvdXRQYWdlV3JhcHBlciB7XFxuXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCg2NXZoLCAxZnIpIG1pbm1heCg3MHZoLCAxZnIpIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtcm93OiAzO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcXG5cXG59XFxuXFxuI2Fib3V0UGFnZVdyYXBwZXIgcCB7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcblxcbiNhYm91dFBhZ2VTdG9yeSB7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDQwcHg7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgZ3JpZC1nYXA6IDMwcHg7XFxufVxcblxcbiNhYm91dFBhZ2VNZW51IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEUxMTExO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oMiB7XFxuXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuI21lYWxJdGVtVGl0bGUge1xcblxcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcblxcbn1cXG5cXG4ubWVhbEl0ZW0ge1xcblxcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcXG4gICAgYm9yZGVyLXRvcDogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiA0MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuXFxuXFxuI2Fib3V0Q29udGFjdCB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuI2NvbnRhY3RXcmFwIHtcXG5cXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWdhcDogMTBweDtcXG59XFxuXFxuI2Fib3V0SG91cnMge1xcblxcbiAgICBncmlkLWNvbHVtbjogMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hvdXJXcmFwIHtcXG5cXG4gICAgZ3JpZC1yb3c6IDI7XFxufVxcblxcbiNsb2dvV3JhcHBlciB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1nYXA6IDIwcHg7XFxuXFxufVxcblxcbi5zb2NpYWxXcmFwIHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLWdhcDogMnB4O1xcblxcbn1cXG5cXG4uc29jaWFsV3JhcDpob3ZlciB7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59XFxuXFxuI2dhbGxlcnlXcmFwcGVyIHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGdyaWQtcm93OiAxLy0xO1xcbiAgICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxufVxcblxcbiNnYWxsZXJ5V3JhcHBlciBpbWcge1xcblxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxuXFxufVxcblxcbi5nYWxsZXJ5RGl2IHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcblxcbiNpbWFnZTAge1xcblxcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG4jaW1hZ2UxIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuXFxuI2ltYWdlMiB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbiNpbWFnZTMge1xcblxcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcblxcbn1cXG5cXG4jaW1hZ2U0IHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcblxcbiNmb290ZXIge1xcblxcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZ3JpZC1yb3c6IC0xO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6IDMwdmg7IFxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHR3aXR0ZXIgZnJvbSBcIi4vaW1hZ2VzL3R3aXR0ZXIucG5nXCJcbmltcG9ydCBpbnN0YSBmcm9tIFwiLi9pbWFnZXMvaW5zdGEucG5nXCJcbmltcG9ydCBsb2dvIGZyb20gXCIuL2ltYWdlcy9sb2dvKDEpLnBuZ1wiXG5cbmxldCBkb21NYW5pcHVsYXRvciA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGxldCBjdXJyZW50VGFiID0gXCJob21lXCI7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcbiAgICBsZXQgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFicy5pZCA9IFwidGFic1wiO1xuICAgIGNvbnRlbnQuYXBwZW5kKGhlYWRlcik7XG4gICAgaGVhZGVyLmFwcGVuZCh0YWJzKTtcbiAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0hlYWRlcik7XG5cblxuXG5sZXQgc2V0QmFja2dyb3VuZCA9IGZ1bmN0aW9uIChpZCwgaW1hZ2UpIHtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWFnZX0pYDtcbn1cblxubGV0IGdldFRhYnMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICByZXR1cm4gdGFicztcbn1cblxubGV0IHNldEN1cnJlbnRUYWIgPSBmdW5jdGlvbiAodGFiKSB7XG5cbiAgICBjdXJyZW50VGFiID0gdGFiO1xufVxuXG5sZXQgZ2V0Q3VycmVudFRhYiA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHJldHVybiBjdXJyZW50VGFiO1xufVxuXG5sZXQgZ2V0Q29udGVudCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHJldHVybiBjb250ZW50O1xufVxuXG5cbmxldCBjcmVhdGVEaXYgPSBmdW5jdGlvbiAoaWQpIHtcblxuICAgIGxldCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld0Rpdi5pZCA9IGlkO1xuICAgIHJldHVybiBuZXdEaXY7XG59XG5cbmxldCBjcmVhdGVEaXZXaXRoQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG5cbiAgICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybiBuZXdEaXY7XG59XG5cbmxldCBhcHBlbmRWaWFRdWVyeSA9IGZ1bmN0aW9uIChlbGVtZW50MSwgZWxlbWVudDIpIHtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudDEpLmFwcGVuZChlbGVtZW50Mik7XG59XG5cbmxldCByZW1vdmVBbGxOb2RlcyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGxldCBub2RlcyA9IGdldENvbnRlbnQoKS5jaGlsZE5vZGVzO1xuICAgIGdldENvbnRlbnQoKS5zdHlsZS5iYWNrZ3JvdW5kSW1nID0gXCJ3aGl0ZVwiO1xuXG4gICAgY29uc29sZS5sb2cobm9kZXMpO1xuXG4gICAgbm9kZXMuZm9yRWFjaCgobm9kZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5vZGUuaWQpO1xuICAgICAgICBpZiAobm9kZS5pZCAhPSBcImhlYWRlclwiKSB7XG5cbiAgICAgICAgICAgIGdldENvbnRlbnQoKS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgIH0pKVxuXG4gICAgbGV0IG5vZGVzMiA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2RlcztcblxuICAgIG5vZGVzMi5mb3JFYWNoKChub2RlID0+IHtcblxuICAgICAgICBpZiAobm9kZS5pZCA9PSBcImFib3V0UGFnZVdyYXBwZXJcIikge1xuXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZXJlXCIpXG4gICAgICAgIH1cbiAgICB9KSlcbn1cblxubGV0IHdpbmRvd1Njcm9sbCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGxldCBwcmV2U2Nyb2xscG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTY3JvbGxQb3MpXG5cbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RvcnlMb2dvV3JhcFwiKSAhPSBudWxsKSB7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsUG9zID4gMCkge1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdG9yeUxvZ29XcmFwXCIpLmNsYXNzTGlzdC5hZGQoXCJvcGFjaXR5XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RvcnlMb2dvV3JhcFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwib3BhY2l0eVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByZXZTY3JvbGxwb3MgPiBjdXJyZW50U2Nyb2xsUG9zKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwib3BhY2l0eVwiKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIikpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKS5jbGFzc0xpc3QuYWRkKFwib3BhY2l0eVwiKTtcblxuICAgICAgICB9XG4gICAgICAgIHByZXZTY3JvbGxwb3MgPSBjdXJyZW50U2Nyb2xsUG9zO1xuICAgIH1cbn1cblxubGV0IGNyZWF0ZUltYWdlID0gZnVuY3Rpb24gKGltZ1NyYykge1xuXG4gICAgbGV0IG5ld0ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgbmV3SW1hZ2Uuc3JjID0gaW1nU3JjO1xuICAgIHJldHVybiBuZXdJbWFnZTtcbn1cblxubGV0IGdldEZvb3RlciA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGxldCBjb250YWN0SW5mbyA9IFtcIkVtYWlsOiBsZXJlc3RhdXJhbnRAZ21haWwuY29tXCIsIFwiVGVsZXBob25lOiAwODIzNDY2NlwiLCBcIkFkZHJlc3M6IDEgUG9zaCBTdHJlZXQsIFBvc2ggVG93blwiXVxuXG4gICAgbGV0IGhvdXJzID0gW1wiTW9uIC0gVGh1cnM6IDExIC0gOVwiLCBcIkZyaSAtIFNhdDogOSAtIDExXCIsIFwiU3VuOiAxMiAtIDhcIl1cblxuICAgIGxldCBtYWluTG9nbyA9IGNyZWF0ZUltYWdlKGxvZ28pO1xuICAgIGxldCB0d2l0dGVyTG9nbyA9IGNyZWF0ZUltYWdlKHR3aXR0ZXIpO1xuICAgIGxldCBpbnN0YUxvZ28gPSBjcmVhdGVJbWFnZShpbnN0YSk7XG5cbiAgICBsZXQgZm9vdGVyID0gZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2KFwiZm9vdGVyXCIpO1xuXG4gICAgbGV0IGZvb3RlckNvbnRlbnQgPSBbXCJhYm91dENvbnRhY3RcIiwgXCJhYm91dEhvdXJzXCIsIFwibG9nb1dyYXBwZXJcIl07XG5cbiAgICBmb290ZXJDb250ZW50LmZvckVhY2goKGlkKSA9PiB7XG5cbiAgICAgICAgZm9vdGVyLmFwcGVuZChkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoaWQpKVxuICAgIH0pO1xuXG4gICAgbGV0IGZvb3RlckNoaWxkcmVuID0gZm9vdGVyLmNoaWxkTm9kZXM7XG5cbiAgICBsZXQgY29udGFjdERpdiA9IGZvb3RlckNoaWxkcmVuWzBdO1xuICAgIGxldCBob3VyRGl2ID0gZm9vdGVyQ2hpbGRyZW5bMV07XG4gICAgbGV0IGxvZ29EaXYgPSBmb290ZXJDaGlsZHJlblsyXTtcblxuICAgIGxldCBjb250YWN0SW5uZXIgPSBkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoXCJjb250YWN0V3JhcFwiKTtcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RJbm5lcik7XG5cbiAgICBsZXQgaG91cldyYXAgPSBkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoXCJob3VyV3JhcFwiKTtcbiAgICBob3VyRGl2LmFwcGVuZENoaWxkKGhvdXJXcmFwKTtcblxuICAgIGxvZ29EaXYuYXBwZW5kQ2hpbGQobWFpbkxvZ28pO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoXCJpY29uc1wiKSk7XG5cbiAgICBsZXQgc29jaWFsV3JhcCA9IGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdldpdGhDbGFzcyhcInNvY2lhbFdyYXBcIik7XG4gICAgbG9nb0Rpdi5hcHBlbmRDaGlsZChzb2NpYWxXcmFwKTtcblxuICAgIGxldCBtZWRpYUljb25zID0gW3R3aXR0ZXJMb2dvLCBpbnN0YUxvZ29dO1xuXG4gICAgbWVkaWFJY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG5cbiAgICAgICAgc29jaWFsV3JhcC5hcHBlbmRDaGlsZChpY29uKTtcbiAgICB9KTtcblxuICAgIGNvbnRhY3RJbmZvLmZvckVhY2goKGl0ZW0pID0+IHtcblxuICAgICAgICBsZXQgY3VycmVudENvbnRhY3QgPSBkb21NYW5pcHVsYXRvci5jcmVhdGVEaXZXaXRoQ2xhc3MoXCJjb250YWN0SXRlbVwiKTtcbiAgICAgICAgY3VycmVudENvbnRhY3QuaW5uZXJUZXh0ID0gaXRlbTtcbiAgICAgICAgY29udGFjdElubmVyLmFwcGVuZENoaWxkKGN1cnJlbnRDb250YWN0KTtcbiAgICB9KTtcblxuICAgIGhvdXJzLmZvckVhY2goKGl0ZW0pID0+IHtcblxuICAgICAgICBsZXQgY3VycmVudEl0ZW0gPSBkb21NYW5pcHVsYXRvci5jcmVhdGVEaXZXaXRoQ2xhc3MoXCJob3VySXRlbVwiKTtcbiAgICAgICAgY3VycmVudEl0ZW0uaW5uZXJUZXh0ID0gaXRlbTtcbiAgICAgICAgaG91cldyYXAuYXBwZW5kQ2hpbGQoY3VycmVudEl0ZW0pO1xuICAgIH0pO1xuXG4gICAgIFxuXG4gICAgcmV0dXJuIGZvb3RlcjtcblxufVxuXG5mdW5jdGlvbiBzaG93SGVhZGVyKCkge1xuXG4gICAgaWYgKGhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGFjaXR5XCIpKSB7XG5cbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGFjaXR5XCIpO1xuXG4gICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7ICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmICghaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyhcIm9wYWNpdHlcIikgJiYgd2luZG93LnBhZ2VZT2Zmc2V0ID4gMCkge1xuXG4gICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJvcGFjaXR5XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxud2luZG93U2Nyb2xsKCk7XG5cbnJldHVybiB7XG4gICAgY3JlYXRlRGl2LFxuICAgIHNldEN1cnJlbnRUYWIsXG4gICAgZ2V0Q3VycmVudFRhYixcbiAgICBnZXRDb250ZW50LFxuICAgIGdldFRhYnMsXG4gICAgcmVtb3ZlQWxsTm9kZXMsXG4gICAgc2V0QmFja2dyb3VuZCxcbiAgICBjcmVhdGVEaXZXaXRoQ2xhc3MsXG4gICAgYXBwZW5kVmlhUXVlcnksXG4gICAgZ2V0Rm9vdGVyLFxuICAgIGNyZWF0ZUltYWdlXG59XG5cbn0oKVxuXG5leHBvcnQge1xuXG4gICAgZG9tTWFuaXB1bGF0b3Jcbn0iLCJpbXBvcnQgYmFja2dyb3VuZCBmcm9tIFwiLi9pbWFnZXMvYnVyZ2VyLmpwZ1wiXG5pbXBvcnQge1xuICAgIGRvbU1hbmlwdWxhdG9yXG59IGZyb20gXCIuL2RvbVwiXG5cbmxldCB1cGRhdGVIb21lID0gZnVuY3Rpb24gKCkgeyBcblxuICAgIGxldCBzZXRIb21lQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBsZXQgbWFpbiA9IGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdihcIm1haW5cIik7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2KFwibWFpbkNvbnRlbnRcIikpO1xuICAgICAgICBkb21NYW5pcHVsYXRvci5nZXRDb250ZW50KCkuYXBwZW5kKG1haW4pO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm9wYWNpdHlcIik7XG4gICAgICAgIH0sIDApO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWFpbi5pbm5lclRleHQgPSBcIkxpZmUncyB0b28gc2hvcnQgZm9yIGJvcmluZyBmb29kXCIgKyBcIlxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgXCJDb21lIGFuZCBzZWUgd2hhdCB5b3UgaGF2ZSBiZWVuIG1pc3NpbmcuLi5cIlxuICAgICAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZShcIm9wYWNpdHlcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCAwKTtcblxuICAgICAgICBkb21NYW5pcHVsYXRvci5zZXRCYWNrZ3JvdW5kKFwiY29udGVudFwiLCBiYWNrZ3JvdW5kKTsgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgIFxuICAgICAgICBzZXRIb21lQ29udGVudFxuICAgIH07XG5cbn0oKVxuXG5leHBvcnQge1xuICAgIHVwZGF0ZUhvbWVcbn07IiwiXG5pbXBvcnQge1xuICAgIHVwZGF0ZUhvbWVcbn0gZnJvbSBcIi4vaG9tZVwiO1xuXG5jb25zdCBwYWdlTG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICAgXG4gICAgdXBkYXRlSG9tZS5zZXRIb21lQ29udGVudCgpO1xuXG59KClcblxuIiwiaW1wb3J0IGJhY2tncm91bmQgZnJvbSBcIi4uL2ltYWdlcy9jaGVmLmpwZ1wiXG5pbXBvcnQge1xuICAgIGRvbU1hbmlwdWxhdG9yXG59IGZyb20gXCIuLi9kb21cIlxuaW1wb3J0IHN0b3J5IGZyb20gXCIuLi9pbWFnZXMvc3RvcnkucG5nXCJcblxuXG5cbmxldCB1cGRhdGVBYm91dCA9IGZ1bmN0aW9uICgpIHsgXG5cbiAgICBkb21NYW5pcHVsYXRvci5zZXRCYWNrZ3JvdW5kKFwiY29udGVudFwiLCBiYWNrZ3JvdW5kKTtcbiAgICBsZXQgY3VycmVudE1lbnVJdGVtcyA9IGFib3V0SGVscGVycy5nZXRNZW51KCk7XG4gICAgbGV0IHN0b3J5Q29udGVudCA9IGFib3V0SGVscGVycy5nZXRJcHN1bSgpO1xuICAgIGxldCBzdG9yeUxvZ28gPSBkb21NYW5pcHVsYXRvci5jcmVhdGVJbWFnZShzdG9yeSk7XG5cbiAgICBsZXQgc3RvcnlMb2dvV3JhcCA9IGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdihcInN0b3J5TG9nb1dyYXBcIik7XG4gICAgc3RvcnlMb2dvV3JhcC5hcHBlbmRDaGlsZChzdG9yeUxvZ28pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZENoaWxkKHN0b3J5TG9nb1dyYXApO1xuXG4gICAgbGV0IGFib3V0UGFnZVdyYXBwZXIgPSBkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoXCJhYm91dFBhZ2VXcmFwcGVyXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWJvdXRQYWdlV3JhcHBlcik7XG4gIFxuICAgIGFib3V0UGFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2KFwiYWJvdXRQYWdlU3RvcnlcIikpO1xuXG4gICAgbGV0IGFib3V0UGFnZVN0b3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhYm91dFBhZ2VTdG9yeVwiKTtcbiAgICBsZXQgYWJvdXRTdG9yeUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBhYm91dFN0b3J5SGVhZGVyLmlubmVyVGV4dCA9IFwiRGlnbmlzc2ltLi4uXCI7XG5cbiAgICBsZXQgYWJvdXRTdG9yeVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBhYm91dFN0b3J5VGV4dC5pbm5lclRleHQgPSBzdG9yeUNvbnRlbnQ7XG4gICAgYWJvdXRQYWdlU3RvcnkuYXBwZW5kKGFib3V0U3RvcnlIZWFkZXIpO1xuICAgIGFib3V0UGFnZVN0b3J5LmFwcGVuZChhYm91dFN0b3J5VGV4dCk7XG5cbiAgICBsZXQgYWJvdXRQYWdlTWVudSA9IGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdihcImFib3V0UGFnZU1lbnVcIik7XG4gICAgYWJvdXRQYWdlV3JhcHBlci5hcHBlbmRDaGlsZChhYm91dFBhZ2VNZW51KTtcblxuICAgIGFib3V0UGFnZU1lbnUuYXBwZW5kQ2hpbGQoZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2KFwibWVhbEl0ZW1UaXRsZVwiKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZWFsSXRlbVRpdGxlXCIpLmlubmVyVGV4dCA9IFwiU29tZSBmYXZvcml0ZXMuLi5cIjtcblxuICAgIGN1cnJlbnRNZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXG4gICAgICAgIGxldCBjdXJyZW50TWVudUl0ZW0gPSBkb21NYW5pcHVsYXRvci5jcmVhdGVEaXZXaXRoQ2xhc3MoXCJtZWFsSXRlbVwiKTtcbiAgICAgICAgYWJvdXRQYWdlTWVudS5hcHBlbmRDaGlsZChjdXJyZW50TWVudUl0ZW0pO1xuICAgICAgICBjdXJyZW50TWVudUl0ZW0uaW5uZXJUZXh0ID0gaXRlbTtcbiAgICB9KVxuICAgXG4gICAgYWJvdXRQYWdlV3JhcHBlci5hcHBlbmRDaGlsZChkb21NYW5pcHVsYXRvci5nZXRGb290ZXIoKSk7ICAgIFxuXG59XG5cbmxldCBhYm91dEhlbHBlcnMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBsZXQgaXBzdW0gPSBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWFcbiAgICAgUXVpc3F1ZSBpZCBkaWFtIHZlbCBxdWFtIGVsZW1lbnR1bSBwdWx2aW5hciBldGlhbSBub24gcXVhbS4gSW4gcGVsbGVudGVzcXVlIG1hc3NhIHBsYWNlcmF0IGR1aXMgdWx0cmljaWVzIGxhY3VzIHNlZC5cbiAgICAgIEZldWdpYXQgbmlzbCBwcmV0aXVtIGZ1c2NlIGlkIHZlbGl0IHV0LiBWaXZlcnJhIHN1c3BlbmRpc3NlIHBvdGVudGkgbnVsbGFtIGFjIHRvcnRvciB2aXRhZSBwdXJ1cy5cbiAgICAgQW50ZSBpbiBuaWJoIG1hdXJpcyBjdXJzdXMgbWF0dGlzIG1vbGVzdGllLiBRdWFtIHBlbGxlbnRlc3F1ZSBuZWMgbmFtIGFsaXF1YW0uIFxuICAgICBWaXZlcnJhIHZpdGFlIGNvbmd1ZSBldSBjb25zZXF1YXQgYWMuIEVuaW0gbnVuYyBmYXVjaWJ1cyBhIHBlbGxlbnRlc3F1ZSBzaXQgYW1ldCBwb3J0dGl0b3IuIFxuICAgICBWaXRhZSBjb25ndWUgZXUgY29uc2VxdWF0IGFjIGZlbGlzIGRvbmVjIGV0IG9kaW8gcGVsbGVudGVzcXVlLlxuICAgICBcbiAgICBJcHN1bSBudW5jIGFsaXF1ZXQgYmliZW5kdW0gZW5pbSBmYWNpbGlzaXMuIEV1IHNlbSBpbnRlZ2VyIHZpdGFlIGp1c3RvIGVnZXQgbWFnbmEgZmVybWVudHVtIGlhY3VsaXMgZXUuXG4gICAgIFRyaXN0aXF1ZSBtYWduYSBzaXQgYW1ldCBwdXJ1cyBncmF2aWRhIHF1aXMgYmxhbmRpdC4gU2NlbGVyaXNxdWUgdmFyaXVzIG1vcmJpIGVuaW0gbnVuYyBmYXVjaWJ1cy4gXG4gICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlxuICAgICAgQWxpcXVhbSB2ZXN0aWJ1bHVtIG1vcmJpIGJsYW5kaXQgY3Vyc3VzIHJpc3VzLiBWZWxpdCBkaWduaXNzaW0gc29kYWxlcyB1dCBldSBzZW0gaW50ZWdlciB2aXRhZSBqdXN0byBlZ2V0LiBcbiAgICAgIFZpdmFtdXMgYXJjdSBmZWxpcyBiaWJlbmR1bSB1dCB0cmlzdGlxdWUgZXQgZWdlc3Rhcy4gUHJhZXNlbnQgdHJpc3RpcXVlIG1hZ25hIHNpdCBhbWV0IHB1cnVzIGdyYXZpZGEgcXVpcyBibGFuZGl0LiBcbiAgICAgIFNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3RhcyBzZWQuIEVuaW0gdXQgc2VtIHZpdmVycmEgYWxpcXVldCBlZ2V0IHNpdCBhbWV0IHRlbGx1cyBjcmFzLlxuICAgICAgQ29tbW9kbyBvZGlvIGFlbmVhbiBzZWQgYWRpcGlzY2luZyBkaWFtIGRvbmVjLiBFdSBtaSBiaWJlbmR1bSBuZXF1ZSBlZ2VzdGFzLiBTY2VsZXJpc3F1ZSBldSB1bHRyaWNlcyB2aXRhZSBhdWN0b3IuXG4gICAgIGBcblxuICAgIGxldCBjdXJyZW50TWVudUl0ZW1zID0gW1wiQ29sZCBUb21hdG8gU291cCwgTWVsb24gJiBDdWN1bWJlclwiLFxuICAgICAgICBcIkJvcmxvdHRpIEJlYW5zLCBDb3VyZ2V0dGVzICYgTmFzdHVydGl1bSBcIixcbiAgICAgICAgXCJSYXcgU2NhbGxvcCwgU3VuZ29sZCBUb21hdG8gJiBGZW5uZWwgQmxvc3NvbVwiLFxuICAgICAgICBcIlN1Y2tsaW5nIEtpZCBTYXVzYWdlLCBQZWFzICYgQXJ0aWNob2tlc1wiLFxuICAgICAgICBcIlNtb2tlZCBFZWwsIEJlZXRyb290cyAmIEVsZGVyYmVycmllc1wiLFxuICAgICAgICBcIkJsYWNrIFB1ZGRpbmcsIFdoaXRlIFBlYWNoICYgQm9iYnkgQmVhbnNcIixcbiAgICAgICAgXCJEdWNrIExlZywgVHVybmlwICYgUGlja2xlZCBNb3JlbGxvIENoZXJyaWVzXCIsXG4gICAgICAgIFwiTWFuZ2FsaXRzYSBDb2xsYXIsIEhpc3BpIENhYmJhZ2UgJiBMYXJkb1wiLFxuICAgICAgICBcIkRvcnNldCBCbHVlIExvYnN0ZXIsIFNhbXBoaXJlICYgTG9ic3RlciBCdXR0ZXJcIlxuICAgIF1cblxuICAgIGxldCBnZXRJcHN1bSA9ICgpID0+IHtcblxuICAgICAgICByZXR1cm4gaXBzdW07XG4gICAgfVxuXG4gICAgbGV0IGdldE1lbnUgPSAoKSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRNZW51SXRlbXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICBnZXRJcHN1bSxcbiAgICAgICAgZ2V0TWVudSxcblxuICAgIH1cblxufSgpXG5cblxuZXhwb3J0IHtcbiAgICB1cGRhdGVBYm91dFxufTsiLCJpbXBvcnQge1xuICAgIGRvbU1hbmlwdWxhdG9yXG59IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBmaXJzdEltYWdlIGZyb20gXCIuLi9pbWFnZXMvZ2FsbGVyeTEuanBnXCJcbmltcG9ydCBzZWNvbmRJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2dhbGxlcnkyLmpwZ1wiXG5pbXBvcnQgdGhpcmRJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2dhbGxlcnkzLmpwZ1wiXG5pbXBvcnQgZm91cnRoSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9nYWxsZXJ5NC5qcGdcIlxuaW1wb3J0IGZpZnRoSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9nYWxsZXJ5NS5qcGdcIlxuXG5sZXQgdXBkYXRlR2FsbGVyeSA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGxldCBnYWxsZXJ5V3JhcHBlciA9IGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdihcImdhbGxlcnlXcmFwcGVyXCIpO1xuXG4gICAgY29uc29sZS5sb2coZ2FsbGVyeVdyYXBwZXIpXG5cbiAgICBkb21NYW5pcHVsYXRvci5nZXRDb250ZW50KCkuYXBwZW5kQ2hpbGQoZ2FsbGVyeVdyYXBwZXIpO1xuXG4gICAgbGV0IGltYWdlcyA9IFtmaXJzdEltYWdlLCBzZWNvbmRJbWFnZSwgdGhpcmRJbWFnZSwgZm91cnRoSW1hZ2UsIGZpZnRoSW1hZ2VdO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBpbWFnZXMubGVuZ3RoOyB4KyspIHtcblxuICAgICAgICBsZXQgY3VycmVudEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGN1cnJlbnRJbWFnZS5zcmMgPSBpbWFnZXNbeF07XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FsbGVyeVdyYXBwZXJcIikuYXBwZW5kQ2hpbGQoZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2KGBpbWFnZSR7eH1gKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpbWFnZSR7eH1gKS5jbGFzc0xpc3QuYWRkKFwiZ2FsbGVyeURpdlwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2ltYWdlJHt4fWApLmFwcGVuZENoaWxkKGN1cnJlbnRJbWFnZSlcblxuICAgIH1cblxuICAgIGxldCBmb290ZXIgPSBkb21NYW5pcHVsYXRvci5nZXRGb290ZXIoKTtcbiAgICBjb25zb2xlLmxvZyhmb290ZXIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FsbGVyeVdyYXBwZXJcIikuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuZXhwb3J0IHtcbiAgICB1cGRhdGVHYWxsZXJ5XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7XG4gICAgcGFnZUxvYWRlclxufSBmcm9tIFwiLi9sb2FkZXJcIlxuaW1wb3J0IHtcbiAgICB1cGRhdGVIb21lXG59IGZyb20gXCIuL2hvbWVcIlxuaW1wb3J0IHtcbiAgICB1cGRhdGVHYWxsZXJ5XG59IGZyb20gXCIuL3RhYnMvZ2FsbGVyeVwiXG5pbXBvcnQge1xuICAgIHVwZGF0ZUFib3V0XG59IGZyb20gXCIuL3RhYnMvYWJvdXRcIlxuaW1wb3J0IHtcbiAgICBkb21NYW5pcHVsYXRvclxufSBmcm9tIFwiLi9kb21cIlxuXG5cblxuY29uc3QgdGFiTG9naWMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBsZXQgdGFiRnVuY3Rpb25zID0ge1xuXG4gICAgICAgIFwiaG9tZVwiOiB1cGRhdGVIb21lLnNldEhvbWVDb250ZW50LFxuICAgICAgICBcImdhbGxlcnlcIjogdXBkYXRlR2FsbGVyeSxcbiAgICAgICAgXCJhYm91dFwiOiB1cGRhdGVBYm91dCxcbiAgICB9XG5cbiAgICBsZXQgdGFiVGl0bGVzID0gW1wiSG9tZVwiLCBcIkdhbGxlcnlcIiwgXCJBYm91dFwiXTtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMzsgeCsrKSB7XG5cbiAgICAgICAgbGV0IGlubmVyVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5uZXJUYWIuY2xhc3NMaXN0LmFkZChcImlubmVyVGFiXCIpO1xuICAgICAgICBpbm5lclRhYi5pbm5lclRleHQgPSB0YWJUaXRsZXNbeF07XG4gICAgICAgIGlubmVyVGFiLmlkID0gdGFiVGl0bGVzW3hdO1xuICAgICAgICBkb21NYW5pcHVsYXRvci5nZXRUYWJzKCkuYXBwZW5kKGlubmVyVGFiKTtcbiAgICAgICAgaW5uZXJUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhYkNoYW5nZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0YWJDaGFuZ2UoZSkge1xuXG4gICAgICAgIC8vc3RvcHMgZnJvbSB0cmlnZ2VyaW5nIHRhYiBzd2l0Y2ggb24gdGhlIHNhbWUgdGFiIG92ZXIgYW5kIG92ZXJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlubmVyVGV4dCAhPSBkb21NYW5pcHVsYXRvci5nZXRDdXJyZW50VGFiKCkpIHsgICAgICAgICAgXG5cbiAgICAgICAgICAgIGRvbU1hbmlwdWxhdG9yLnJlbW92ZUFsbE5vZGVzKCk7XG4gICAgICAgICAgICBkb21NYW5pcHVsYXRvci5zZXRDdXJyZW50VGFiKGUudGFyZ2V0LmlubmVyVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pbm5lclRleHQpO1xuICAgICAgICAgICAgbGV0IGZ1bmMgPSB0YWJGdW5jdGlvbnNbZS50YXJnZXQuaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCldOyAgICAgIFxuICAgICAgICAgICAgZnVuYygpOyAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICBcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG59KCkiXSwic291cmNlUm9vdCI6IiJ9