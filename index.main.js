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
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nbody {\n\n    font-family: 'Courgette', cursive;\n    font-size: 28px;\n    background-color: #F5F5F5;\n}\n\n#content {\n\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    min-height: 100vh;\n    background-size: cover;\n}\n\n#storyLogoWrap {\n\n    grid-column: 2;\n    grid-row: 2;\n    justify-self: center;\n    align-self: center;\n\n}\n\n\n#storyLogoWrap img {\n\n    width: 400px;\n    height: auto;\n}\n\n#header {\n    position: fixed;\n\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 1fr 1fr;\n    color: white;\n    font-family: 'Raleway', sans-serif;\n    font-size: 0.8em;\n    transition: all 0.5s ease-in-out;\n}\n\n#header,\n#storyLogoWrap {\n\n    transition: all 0.5s ease-in-out;\n}\n\n#main {\n\n    grid-row: 1;\n    display: grid;\n    border-style: solid white 2px;\n    transition: all 0.5s ease-in-out;\n    grid-column: 2;\n    justify-self: center;\n    align-self: center;\n    grid-template-columns: 1fr;\n    color: #FFFFFF;\n    font-size: 24px;\n    line-height: 1.6;\n    font-family: 'Raleway', sans-serif;\n}\n\n#tabs {\n\n    grid-column: 1;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 6px;\n    margin: 6px;\n}\n\n.innerTab {\n\n\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    justify-self: center;\n    width: 100%;\n    text-decoration: underline;\n    padding: 20px;\n\n}\n\n.innerTab:hover {\n\n    scale: 1.1;\n    cursor: pointer;\n\n}\n\n.mainAbout {\n\n    grid-template-columns: 1fr 1fr;\n}\n\n.opacity {\n\n    opacity: 0 !important;\n}\n\n#aboutPageWrapper {\n\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: minmax(65vh, 1fr) minmax(70vh, 1fr) auto;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-row: 3;\n    grid-column: 1/-1;\n    background-color: #EEEEEE;\n\n}\n\n#aboutPageWrapper p {\n\n    font-family: 'Raleway', sans-serif;\n}\n\n\n\n#aboutPageStory {\n\n    display: grid;\n    grid-row: 1;\n    border-width: 2px;\n    grid-column: 1/-1;\n    align-self: center;\n    align-content: center;\n    font-size: 18px;\n    line-height: 26px;\n    justify-content: center;\n    height: 100%;\n    margin: 40px;\n    margin-top: 0px;\n    grid-gap: 30px;\n}\n\n#aboutPageMenu {\n    grid-column: 1/-1;\n    display: grid;\n    align-self: center;\n    align-content: center;\n    background-color: #0E1111;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-content: center;\n    height: 100%;\n}\n\nh2 {\n\n    justify-self: center;\n    align-self: center;\n    font-size: 24px;\n}\n\n#mealItemTitle {\n\n    grid-row: 1;\n    grid-column: 1/-1;\n    color: white;\n    justify-self: center;\n    align-self: start;\n\n}\n\n.mealItem {\n\n    border-bottom: solid;\n    border-top: solid;\n    border-color: white;\n    border-width: 1px;\n    justify-self: center;\n    margin: 40px;\n    color: white;\n    padding: 10px;\n    font-size: 18px;\n}\n\n\n\n#aboutContact {\n\n    grid-column: 1;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-content: center;\n    align-items: center;\n    font-size: 18px;\n}\n\n#contactWrap {\n\n    grid-row: 2;\n    justify-self: center;\n    display: grid;\n    grid-gap: 10px;\n}\n\n#aboutHours {\n\n    grid-column: 3;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-content: center;\n    align-items: center;\n    font-size: 18px;\n    justify-items: center;\n}\n\n#hourWrap {\n\n    grid-row: 2;\n}\n\n#logoWrapper {\n    grid-column: 2;\n    grid-row: 1;\n    border-width: 2px;\n    align-self: center;\n    justify-self: center;\n    margin: 10px;\n    display: grid;\n    grid-template-rows: 1fr auto;\n    justify-items: center;\n    justify-content: center;\n    grid-gap: 20px;\n\n}\n\n.socialWrap {\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 2px;\n\n}\n\n.socialWrap:hover {\n\n    cursor: pointer;\n\n}\n\n#galleryWrapper {\n\n    display: grid;\n    grid-template-columns: repeat(4, minmax(200px, 1fr));\n    grid-template-rows: repeat(4, 1fr);\n    grid-auto-rows: 1fr;\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n    grid-auto-flow: dense;\n    height: 100vh;\n\n}\n\n#galleryWrapper img {\n\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    max-height: 100vh;\n\n}\n\n.galleryDiv {\n\n    display: grid;\n    grid-column: 1/-1;\n}\n\n#image0 {\n\n    grid-column: span 2;\n}\n\n#image1 {\n\n    grid-column: span 2;\n}\n\n#image2 {\n\n    grid-column: 1;\n}\n\n#image3 {\n\n    grid-column: span 3;\n\n}\n\n#image4 {\n\n    grid-column: 1/-1;\n}\n\n#footer {\n\n    grid-column: 1/-1;\n    grid-row: -1;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr auto;\n    background-color: #EEEEEE;\n    font-family: 'Raleway', sans-serif;\n    height: 30vh; \n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nbody {\n\n    font-family: 'Courgette', cursive;\n    font-size: 28px;\n    background-color: #F5F5F5;\n}\n\n#content {\n\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    min-height: 100vh;\n    background-size: cover;\n}\n\n#storyLogoWrap {\n\n    grid-column: 2;\n    grid-row: 2;\n    justify-self: center;\n    align-self: center;\n\n}\n\n\n#storyLogoWrap img {\n\n    width: 400px;\n    height: auto;\n}\n\n#header {\n    position: fixed;\n\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 1fr 1fr;\n    color: white;\n    font-family: 'Raleway', sans-serif;\n    font-size: 0.8em;\n    transition: all 0.5s ease-in-out;\n}\n\n#header,\n#storyLogoWrap {\n\n    transition: all 0.5s ease-in-out;\n}\n\n#main {\n\n    grid-row: 1;\n    display: grid;\n    border-style: solid white 2px;\n    transition: all 0.5s ease-in-out;\n    grid-column: 2;\n    justify-self: center;\n    align-self: center;\n    grid-template-columns: 1fr;\n    color: #FFFFFF;\n    font-size: 24px;\n    line-height: 1.6;\n    font-family: 'Raleway', sans-serif;\n}\n\n#tabs {\n\n    grid-column: 1;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 6px;\n    margin: 6px;\n}\n\n.innerTab {\n\n\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    justify-self: center;\n    width: 100%;\n    text-decoration: underline;\n    padding: 20px;\n\n}\n\n.innerTab:hover {\n\n    scale: 1.1;\n    cursor: pointer;\n\n}\n\n.mainAbout {\n\n    grid-template-columns: 1fr 1fr;\n}\n\n.opacity {\n\n    opacity: 0 !important;\n}\n\n#aboutPageWrapper {\n\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: minmax(65vh, 1fr) minmax(70vh, 1fr) auto;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-row: 3;\n    grid-column: 1/-1;\n    background-color: #EEEEEE;\n\n}\n\n#aboutPageWrapper p {\n\n    font-family: 'Raleway', sans-serif;\n}\n\n\n\n#aboutPageStory {\n\n    display: grid;\n    grid-row: 1;\n    border-width: 2px;\n    grid-column: 1/-1;\n    align-self: center;\n    align-content: center;\n    font-size: 18px;\n    line-height: 26px;\n    justify-content: center;\n    height: 100%;\n    margin: 40px;\n    margin-top: 0px;\n    grid-gap: 30px;\n}\n\n#aboutPageMenu {\n    grid-column: 1/-1;\n    display: grid;\n    align-self: center;\n    align-content: center;\n    background-color: #0E1111;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-content: center;\n    height: 100%;\n}\n\nh2 {\n\n    justify-self: center;\n    align-self: center;\n    font-size: 24px;\n}\n\n#mealItemTitle {\n\n    grid-row: 1;\n    grid-column: 1/-1;\n    color: white;\n    justify-self: center;\n    align-self: start;\n\n}\n\n.mealItem {\n\n    border-bottom: solid;\n    border-top: solid;\n    border-color: white;\n    border-width: 1px;\n    justify-self: center;\n    margin: 40px;\n    color: white;\n    padding: 10px;\n    font-size: 18px;\n}\n\n\n\n#aboutContact {\n\n    grid-column: 1;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-content: center;\n    align-items: center;\n    font-size: 18px;\n}\n\n#contactWrap {\n\n    grid-row: 2;\n    justify-self: center;\n    display: grid;\n    grid-gap: 10px;\n}\n\n#aboutHours {\n\n    grid-column: 3;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-content: center;\n    align-items: center;\n    font-size: 18px;\n    justify-items: center;\n}\n\n#hourWrap {\n\n    grid-row: 2;\n}\n\n#logoWrapper {\n    grid-column: 2;\n    grid-row: 1;\n    border-width: 2px;\n    align-self: center;\n    justify-self: center;\n    margin: 10px;\n    display: grid;\n    grid-template-rows: 1fr auto;\n    justify-items: center;\n    justify-content: center;\n    grid-gap: 20px;\n\n}\n\n.socialWrap {\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 2px;\n\n}\n\n.socialWrap:hover {\n\n    cursor: pointer;\n\n}\n\n#galleryWrapper {\n\n    display: grid;\n    grid-template-columns: repeat(4, minmax(200px, 1fr));\n    grid-template-rows: repeat(4, 1fr);\n    grid-auto-rows: 1fr;\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n    grid-auto-flow: dense;\n    height: 100vh;\n\n}\n\n#galleryWrapper img {\n\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    max-height: 100vh;\n\n}\n\n.galleryDiv {\n\n    display: grid;\n    grid-column: 1/-1;\n}\n\n#image0 {\n\n    grid-column: span 2;\n}\n\n#image1 {\n\n    grid-column: span 2;\n}\n\n#image2 {\n\n    grid-column: 1;\n}\n\n#image3 {\n\n    grid-column: span 3;\n\n}\n\n#image4 {\n\n    grid-column: 1/-1;\n}\n\n#footer {\n\n    grid-column: 1/-1;\n    grid-row: -1;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr auto;\n    background-color: #EEEEEE;\n    font-family: 'Raleway', sans-serif;\n    height: 30vh; \n\n}"],"sourceRoot":""}]);
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

            if(document.querySelector("#storyLogoWrap") != null) {

            if(currentScrollPos > 0) {

                document.querySelector("#storyLogoWrap").classList.add("opacity");
            }

            else {

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

        console.log("playing football")

        return footer;

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

/***/ "./src/images/food.jpg":
/*!*****************************!*\
  !*** ./src/images/food.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26767aaf1f0dc47eb170.jpg";

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
/* harmony import */ var _images_food_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/food.jpg */ "./src/images/food.jpg");
/* harmony import */ var _images_gallery1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/gallery1.jpg */ "./src/images/gallery1.jpg");
/* harmony import */ var _images_gallery2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/gallery2.jpg */ "./src/images/gallery2.jpg");
/* harmony import */ var _images_gallery3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/gallery3.jpg */ "./src/images/gallery3.jpg");
/* harmony import */ var _images_gallery4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/gallery4.jpg */ "./src/images/gallery4.jpg");
/* harmony import */ var _images_gallery5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/gallery5.jpg */ "./src/images/gallery5.jpg");









let updateGallery = function() {

   

    let galleryWrapper = _dom__WEBPACK_IMPORTED_MODULE_0__.domManipulator.createDiv("galleryWrapper");

    console.log(galleryWrapper)

    _dom__WEBPACK_IMPORTED_MODULE_0__.domManipulator.getContent().appendChild(galleryWrapper);


    let images = [_images_gallery1_jpg__WEBPACK_IMPORTED_MODULE_2__, _images_gallery2_jpg__WEBPACK_IMPORTED_MODULE_3__, _images_gallery3_jpg__WEBPACK_IMPORTED_MODULE_4__, _images_gallery4_jpg__WEBPACK_IMPORTED_MODULE_5__, _images_gallery5_jpg__WEBPACK_IMPORTED_MODULE_6__];

    for (let x = 0; x < images.length; x ++) {

        let currentImage = new Image();
        currentImage.src = images[x];
        document.querySelector("#galleryWrapper").appendChild(_dom__WEBPACK_IMPORTED_MODULE_0__.domManipulator.createDiv(`image${x}`));
        document.querySelector(`#image${x}`).classList.add("galleryDiv");
        document.querySelector(`#image${x}`).appendChild(currentImage)

    }

    let footer = _dom__WEBPACK_IMPORTED_MODULE_0__.domManipulator.getFooter();
    console.log(footer);
  document.querySelector("#galleryWrapper").appendChild(footer);

    /*

 
    document.querySelector("#galleryWrapper").appendChild(img2);

    document.querySelector("#galleryWrapper").appendChild(img3);
    document.querySelector("#galleryWrapper").appendChild(img4);

    document.querySelector("#galleryWrapper").appendChild(img5);

    */


    
    
 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS8uL3NyYy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9zcmMvdGFicy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS8uL3NyYy90YWJzL2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSx3c0JBQXdzQixnQkFBZ0IsaUJBQWlCLGdCQUFnQixzQkFBc0Isb0JBQW9CLCtCQUErQixH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QUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxjQUFjLFFBQVEsTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxjQUFjLE9BQU8sTUFBTSxZQUFZLFNBQVMsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFNBQVMsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksWUFBWSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxZ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QTs7QUFFQSxDQUFDLEUiLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cXG52Mi4wIHwgMjAxMTAxMjZcXG5MaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gICAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuYm9keSB7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmdldHRlJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG5cXG4jY29udGVudCB7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbiNzdG9yeUxvZ29XcmFwIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbn1cXG5cXG5cXG4jc3RvcnlMb2dvV3JhcCBpbWcge1xcblxcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNoZWFkZXIsXFxuI3N0b3J5TG9nb1dyYXAge1xcblxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuI21haW4ge1xcblxcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCB3aGl0ZSAycHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxufVxcblxcbiN0YWJzIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtZ2FwOiA2cHg7XFxuICAgIG1hcmdpbjogNnB4O1xcbn1cXG5cXG4uaW5uZXJUYWIge1xcblxcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbn1cXG5cXG4uaW5uZXJUYWI6aG92ZXIge1xcblxcbiAgICBzY2FsZTogMS4xO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxufVxcblxcbi5tYWluQWJvdXQge1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5vcGFjaXR5IHtcXG5cXG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4jYWJvdXRQYWdlV3JhcHBlciB7XFxuXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCg2NXZoLCAxZnIpIG1pbm1heCg3MHZoLCAxZnIpIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtcm93OiAzO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcXG5cXG59XFxuXFxuI2Fib3V0UGFnZVdyYXBwZXIgcCB7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcblxcbiNhYm91dFBhZ2VTdG9yeSB7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDQwcHg7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgZ3JpZC1nYXA6IDMwcHg7XFxufVxcblxcbiNhYm91dFBhZ2VNZW51IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEUxMTExO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oMiB7XFxuXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuI21lYWxJdGVtVGl0bGUge1xcblxcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcblxcbn1cXG5cXG4ubWVhbEl0ZW0ge1xcblxcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcXG4gICAgYm9yZGVyLXRvcDogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiA0MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuXFxuXFxuI2Fib3V0Q29udGFjdCB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuI2NvbnRhY3RXcmFwIHtcXG5cXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWdhcDogMTBweDtcXG59XFxuXFxuI2Fib3V0SG91cnMge1xcblxcbiAgICBncmlkLWNvbHVtbjogMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hvdXJXcmFwIHtcXG5cXG4gICAgZ3JpZC1yb3c6IDI7XFxufVxcblxcbiNsb2dvV3JhcHBlciB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1nYXA6IDIwcHg7XFxuXFxufVxcblxcbi5zb2NpYWxXcmFwIHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLWdhcDogMnB4O1xcblxcbn1cXG5cXG4uc29jaWFsV3JhcDpob3ZlciB7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59XFxuXFxuI2dhbGxlcnlXcmFwcGVyIHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGdyaWQtcm93OiAxLy0xO1xcbiAgICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxufVxcblxcbiNnYWxsZXJ5V3JhcHBlciBpbWcge1xcblxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxuXFxufVxcblxcbi5nYWxsZXJ5RGl2IHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcblxcbiNpbWFnZTAge1xcblxcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG4jaW1hZ2UxIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuXFxuI2ltYWdlMiB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbn1cXG5cXG4jaW1hZ2UzIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcXG5cXG59XFxuXFxuI2ltYWdlNCB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGdyaWQtcm93OiAtMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OiAzMHZoOyBcXG5cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUZJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOztBQUVBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7SUFXSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7OztJQUlJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGtCQUFrQjs7QUFFdEI7OztBQUdBOztJQUVJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTs7SUFFZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixnQ0FBZ0M7QUFDcEM7O0FBRUE7OztJQUdJLGdDQUFnQztBQUNwQzs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtDQUFrQztBQUN0Qzs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBOzs7SUFHSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixhQUFhOztBQUVqQjs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsZUFBZTs7QUFFbkI7O0FBRUE7O0lBRUksOEJBQThCO0FBQ2xDOztBQUVBOztJQUVJLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxrQ0FBa0M7SUFDbEMsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix5QkFBeUI7O0FBRTdCOztBQUVBOztJQUVJLGtDQUFrQztBQUN0Qzs7OztBQUlBOztJQUVJLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlCQUFpQjs7QUFFckI7O0FBRUE7O0lBRUksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0FBQ25COzs7O0FBSUE7O0lBRUksY0FBYztJQUNkLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBOztJQUVJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksY0FBYztJQUNkLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixjQUFjOztBQUVsQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGFBQWE7O0FBRWpCOztBQUVBOztJQUVJLGVBQWU7O0FBRW5COztBQUVBOztJQUVJLGFBQWE7SUFDYixvREFBb0Q7SUFDcEQsa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixhQUFhOztBQUVqQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7O0FBRXJCOztBQUVBOztJQUVJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLG1CQUFtQjs7QUFFdkI7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxZQUFZOztBQUVoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xcbnYyLjAgfCAyMDExMDEyNlxcbkxpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyZ2V0dGUnLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcblxcbiNjb250ZW50IHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuI3N0b3J5TG9nb1dyYXAge1xcblxcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxufVxcblxcblxcbiNzdG9yeUxvZ29XcmFwIGltZyB7XFxuXFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuI2hlYWRlcixcXG4jc3RvcnlMb2dvV3JhcCB7XFxuXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jbWFpbiB7XFxuXFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkIHdoaXRlIDJweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI3RhYnMge1xcblxcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC1nYXA6IDZweDtcXG4gICAgbWFyZ2luOiA2cHg7XFxufVxcblxcbi5pbm5lclRhYiB7XFxuXFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxufVxcblxcbi5pbm5lclRhYjpob3ZlciB7XFxuXFxuICAgIHNjYWxlOiAxLjE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59XFxuXFxuLm1haW5BYm91dCB7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuLm9wYWNpdHkge1xcblxcbiAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbiNhYm91dFBhZ2VXcmFwcGVyIHtcXG5cXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDY1dmgsIDFmcikgbWlubWF4KDcwdmgsIDFmcikgYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC1yb3c6IDM7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcblxcbn1cXG5cXG4jYWJvdXRQYWdlV3JhcHBlciBwIHtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuXFxuI2Fib3V0UGFnZVN0b3J5IHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBncmlkLWdhcDogMzBweDtcXG59XFxuXFxuI2Fib3V0UGFnZU1lbnUge1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTExMTE7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmgyIHtcXG5cXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4jbWVhbEl0ZW1UaXRsZSB7XFxuXFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuXFxufVxcblxcbi5tZWFsSXRlbSB7XFxuXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkO1xcbiAgICBib3JkZXItdG9wOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IDQwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5cXG5cXG4jYWJvdXRDb250YWN0IHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4jY29udGFjdFdyYXAge1xcblxcbiAgICBncmlkLXJvdzogMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAxMHB4O1xcbn1cXG5cXG4jYWJvdXRIb3VycyB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaG91cldyYXAge1xcblxcbiAgICBncmlkLXJvdzogMjtcXG59XFxuXFxuI2xvZ29XcmFwcGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLWdhcDogMjBweDtcXG5cXG59XFxuXFxuLnNvY2lhbFdyYXAge1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtZ2FwOiAycHg7XFxuXFxufVxcblxcbi5zb2NpYWxXcmFwOmhvdmVyIHtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG4jZ2FsbGVyeVdyYXBwZXIge1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICAgIGdyaWQtYXV0by1mbG93OiBkZW5zZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG5cXG59XFxuXFxuI2dhbGxlcnlXcmFwcGVyIGltZyB7XFxuXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG5cXG59XFxuXFxuLmdhbGxlcnlEaXYge1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuXFxuI2ltYWdlMCB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbiNpbWFnZTEge1xcblxcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG4jaW1hZ2UyIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxufVxcblxcbiNpbWFnZTMge1xcblxcbiAgICBncmlkLWNvbHVtbjogc3BhbiAzO1xcblxcbn1cXG5cXG4jaW1hZ2U0IHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcblxcbiNmb290ZXIge1xcblxcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZ3JpZC1yb3c6IC0xO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6IDMwdmg7IFxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHR3aXR0ZXIgZnJvbSBcIi4vaW1hZ2VzL3R3aXR0ZXIucG5nXCJcbmltcG9ydCBpbnN0YSBmcm9tIFwiLi9pbWFnZXMvaW5zdGEucG5nXCJcbmltcG9ydCBsb2dvIGZyb20gXCIuL2ltYWdlcy9sb2dvKDEpLnBuZ1wiXG5cblxubGV0IGRvbU1hbmlwdWxhdG9yID0gZnVuY3Rpb24gKCkge1xuXG4gICAgbGV0IGN1cnJlbnRUYWIgPSBcImhvbWVcIjtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xuICAgIGxldCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YWJzLmlkID0gXCJ0YWJzXCI7XG4gICAgY29udGVudC5hcHBlbmQoaGVhZGVyKTtcbiAgICBoZWFkZXIuYXBwZW5kKHRhYnMpO1xuXG4gICAgbGV0IHNldEJhY2tncm91bmQgPSBmdW5jdGlvbiAoaWQsIGltYWdlKSB7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlfSlgO1xuICAgIH0gXG5cbiAgICBsZXQgZ2V0VGFicyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gdGFicztcbiAgICB9XG5cbiAgICBsZXQgc2V0Q3VycmVudFRhYiA9IGZ1bmN0aW9uICh0YWIpIHtcblxuICAgICAgICBjdXJyZW50VGFiID0gdGFiO1xuICAgIH1cblxuICAgIGxldCBnZXRDdXJyZW50VGFiID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50VGFiO1xuICAgIH1cblxuICAgIGxldCBnZXRDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cbiAgXG5cbiAgICBsZXQgY3JlYXRlRGl2ID0gZnVuY3Rpb24gKGlkKSB7XG5cbiAgICAgICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ICAgICAgXG4gICAgICAgIG5ld0Rpdi5pZCA9IGlkOyAgICBcbiAgICAgICAgcmV0dXJuIG5ld0RpdjtcbiAgICB9XG5cbiAgICBsZXQgY3JlYXRlRGl2V2l0aENsYXNzID0gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuXG4gICAgICAgIGxldCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAgICAgICBcbiAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3RGl2O1xuICAgIH1cblxuICAgIGxldCBhcHBlbmRWaWFRdWVyeSA9IGZ1bmN0aW9uIChlbGVtZW50MSwgZWxlbWVudDIpIHtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQxKS5hcHBlbmQoZWxlbWVudDIpO1xuICAgIH1cblxuICAgIGxldCByZW1vdmVBbGxOb2RlcyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBsZXQgbm9kZXMgPSBnZXRDb250ZW50KCkuY2hpbGROb2RlcztcblxuICAgICAgICBjb25zb2xlLmxvZyhub2Rlcyk7XG5cbiAgICAgICAgbm9kZXMuZm9yRWFjaCgobm9kZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlLmlkKTtcbiAgICAgICAgICAgIGlmIChub2RlLmlkICE9IFwiaGVhZGVyXCIpIHtcblxuICAgICAgICAgICAgICAgIGdldENvbnRlbnQoKS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpICAgICAgICBcblxuICAgICAgICBsZXQgbm9kZXMyID0gZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzO1xuXG4gICAgICAgIG5vZGVzMi5mb3JFYWNoKChub2RlID0+IHtcblxuICAgICAgICAgICAgaWYgKG5vZGUuaWQgPT0gXCJhYm91dFBhZ2VXcmFwcGVyXCIpIHtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZXJlXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIGxldCB3aW5kb3dTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IHByZXZTY3JvbGxwb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50U2Nyb2xsUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFNjcm9sbFBvcylcblxuICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdG9yeUxvZ29XcmFwXCIpICE9IG51bGwpIHtcblxuICAgICAgICAgICAgaWYoY3VycmVudFNjcm9sbFBvcyA+IDApIHtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RvcnlMb2dvV3JhcFwiKS5jbGFzc0xpc3QuYWRkKFwib3BhY2l0eVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0b3J5TG9nb1dyYXBcIikuY2xhc3NMaXN0LnJlbW92ZShcIm9wYWNpdHlcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJldlNjcm9sbHBvcyA+IGN1cnJlbnRTY3JvbGxQb3MpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwib3BhY2l0eVwiKTtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIikuY2xhc3NMaXN0LmFkZChcIm9wYWNpdHlcIik7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXZTY3JvbGxwb3MgPSBjdXJyZW50U2Nyb2xsUG9zO1xuICAgICAgICB9XG5cblxuICAgICAgICBcblxuICAgIH1cblxuXG4gICAgbGV0IGNyZWF0ZUltYWdlID0gZnVuY3Rpb24gKGltZ1NyYykge1xuXG4gICAgICAgIGxldCBuZXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBuZXdJbWFnZS5zcmMgPSBpbWdTcmM7XG4gICAgICAgIHJldHVybiBuZXdJbWFnZTtcbiAgICB9XG5cbiAgICBsZXQgZ2V0Rm9vdGVyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBjb250YWN0SW5mbyA9IFtcIkVtYWlsOiBsZXJlc3RhdXJhbnRAZ21haWwuY29tXCIsIFwiVGVsZXBob25lOiAwODIzNDY2NlwiLCBcIkFkZHJlc3M6IDEgUG9zaCBTdHJlZXQsIFBvc2ggVG93blwiXVxuXG4gICAgICAgIGxldCBob3VycyA9IFtcIk1vbiAtIFRodXJzOiAxMSAtIDlcIiwgXCJGcmkgLSBTYXQ6IDkgLSAxMVwiLCBcIlN1bjogMTIgLSA4XCJdXG4gICAgIFxuICAgICAgICBsZXQgbWFpbkxvZ28gPSBjcmVhdGVJbWFnZShsb2dvKTtcbiAgICAgICAgbGV0IHR3aXR0ZXJMb2dvID0gY3JlYXRlSW1hZ2UodHdpdHRlcik7XG4gICAgICAgIGxldCBpbnN0YUxvZ28gPSBjcmVhdGVJbWFnZShpbnN0YSk7XG5cbiAgICAgICAgbGV0IGZvb3RlciA9IGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdihcImZvb3RlclwiKTtcblxuICAgICAgICBsZXQgZm9vdGVyQ29udGVudCA9IFtcImFib3V0Q29udGFjdFwiLCBcImFib3V0SG91cnNcIiwgXCJsb2dvV3JhcHBlclwiXTtcblxuICAgICAgICBmb290ZXJDb250ZW50LmZvckVhY2goKGlkKSA9PiB7XG5cbiAgICAgICAgICAgIGZvb3Rlci5hcHBlbmQoZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2KGlkKSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGZvb3RlckNoaWxkcmVuID0gZm9vdGVyLmNoaWxkTm9kZXM7XG5cbiAgICAgICAgbGV0IGNvbnRhY3REaXYgPSBmb290ZXJDaGlsZHJlblswXTtcbiAgICAgICAgbGV0IGhvdXJEaXYgPSBmb290ZXJDaGlsZHJlblsxXTtcbiAgICAgICAgbGV0IGxvZ29EaXYgPSBmb290ZXJDaGlsZHJlblsyXTtcblxuICAgICAgICBsZXQgY29udGFjdElubmVyID0gZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2KFwiY29udGFjdFdyYXBcIik7XG4gICAgICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdElubmVyKTtcblxuICAgICAgICBsZXQgaG91cldyYXAgPSBkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoXCJob3VyV3JhcFwiKTtcbiAgICAgICAgaG91ckRpdi5hcHBlbmRDaGlsZChob3VyV3JhcCk7XG5cbiAgICAgICAgbG9nb0Rpdi5hcHBlbmRDaGlsZChtYWluTG9nbyk7XG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoXCJpY29uc1wiKSk7XG5cbiAgICAgICAgbGV0IHNvY2lhbFdyYXAgPSBkb21NYW5pcHVsYXRvci5jcmVhdGVEaXZXaXRoQ2xhc3MoXCJzb2NpYWxXcmFwXCIpO1xuICAgICAgICBsb2dvRGl2LmFwcGVuZENoaWxkKHNvY2lhbFdyYXApO1xuXG4gICAgICAgIGxldCBtZWRpYUljb25zID0gW3R3aXR0ZXJMb2dvLCBpbnN0YUxvZ29dO1xuXG4gICAgICAgIG1lZGlhSWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuXG4gICAgICAgICAgICBzb2NpYWxXcmFwLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb250YWN0SW5mby5mb3JFYWNoKChpdGVtKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBjdXJyZW50Q29udGFjdCA9IGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdldpdGhDbGFzcyhcImNvbnRhY3RJdGVtXCIpO1xuICAgICAgICAgICAgY3VycmVudENvbnRhY3QuaW5uZXJUZXh0ID0gaXRlbTtcbiAgICAgICAgICAgIGNvbnRhY3RJbm5lci5hcHBlbmRDaGlsZChjdXJyZW50Q29udGFjdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGhvdXJzLmZvckVhY2goKGl0ZW0pID0+IHtcblxuICAgICAgICAgICAgbGV0IGN1cnJlbnRJdGVtID0gZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2V2l0aENsYXNzKFwiaG91ckl0ZW1cIik7XG4gICAgICAgICAgICBjdXJyZW50SXRlbS5pbm5lclRleHQgPSBpdGVtO1xuICAgICAgICAgICAgaG91cldyYXAuYXBwZW5kQ2hpbGQoY3VycmVudEl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInBsYXlpbmcgZm9vdGJhbGxcIilcblxuICAgICAgICByZXR1cm4gZm9vdGVyO1xuXG4gICAgfVxuXG4gICAgd2luZG93U2Nyb2xsKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVEaXYsICAgICAgICBcbiAgICAgICAgc2V0Q3VycmVudFRhYixcbiAgICAgICAgZ2V0Q3VycmVudFRhYixcbiAgICAgICAgZ2V0Q29udGVudCwgICAgICAgXG4gICAgICAgIGdldFRhYnMsXG4gICAgICAgIHJlbW92ZUFsbE5vZGVzLFxuICAgICAgICBzZXRCYWNrZ3JvdW5kLFxuICAgICAgICBjcmVhdGVEaXZXaXRoQ2xhc3MsXG4gICAgICAgIGFwcGVuZFZpYVF1ZXJ5LFxuICAgICAgICBnZXRGb290ZXIsXG4gICAgICAgIGNyZWF0ZUltYWdlXG4gICAgfVxuXG59KClcblxuZXhwb3J0IHtcbiAgICBcbiAgICBkb21NYW5pcHVsYXRvclxufSIsImltcG9ydCBiYWNrZ3JvdW5kIGZyb20gXCIuL2ltYWdlcy9idXJnZXIuanBnXCJcbmltcG9ydCB7XG4gICAgZG9tTWFuaXB1bGF0b3Jcbn0gZnJvbSBcIi4vZG9tXCJcblxubGV0IHVwZGF0ZUhvbWUgPSBmdW5jdGlvbiAoKSB7IFxuXG4gICAgbGV0IHNldEhvbWVDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBtYWluID0gZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2KFwibWFpblwiKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoXCJtYWluQ29udGVudFwiKSk7XG4gICAgICAgIGRvbU1hbmlwdWxhdG9yLmdldENvbnRlbnQoKS5hcHBlbmQobWFpbik7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwib3BhY2l0eVwiKTtcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBtYWluLmlubmVyVGV4dCA9IFwiTGlmZSdzIHRvbyBzaG9ydCBmb3IgYm9yaW5nIGZvb2RcIiArIFwiXFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICBcIkNvbWUgYW5kIHNlZSB3aGF0IHlvdSBoYXZlIGJlZW4gbWlzc2luZy4uLlwiXG4gICAgICAgICAgICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwib3BhY2l0eVwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDApO1xuXG4gICAgICAgIGRvbU1hbmlwdWxhdG9yLnNldEJhY2tncm91bmQoXCJjb250ZW50XCIsIGJhY2tncm91bmQpOyAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgXG4gICAgICAgIHNldEhvbWVDb250ZW50XG4gICAgfTtcblxufSgpXG5cbmV4cG9ydCB7XG4gICAgdXBkYXRlSG9tZVxufTsiLCJcbmltcG9ydCB7XG4gICAgdXBkYXRlSG9tZVxufSBmcm9tIFwiLi9ob21lXCI7XG5cbmNvbnN0IHBhZ2VMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICBcbiAgICB1cGRhdGVIb21lLnNldEhvbWVDb250ZW50KCk7XG5cbn0oKVxuXG4iLCJpbXBvcnQgYmFja2dyb3VuZCBmcm9tIFwiLi4vaW1hZ2VzL2NoZWYuanBnXCJcbmltcG9ydCB7XG4gICAgZG9tTWFuaXB1bGF0b3Jcbn0gZnJvbSBcIi4uL2RvbVwiXG5pbXBvcnQgc3RvcnkgZnJvbSBcIi4uL2ltYWdlcy9zdG9yeS5wbmdcIlxuXG5sZXQgdXBkYXRlQWJvdXQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBkb21NYW5pcHVsYXRvci5zZXRCYWNrZ3JvdW5kKFwiY29udGVudFwiLCBiYWNrZ3JvdW5kKTtcblxuICAgIGxldCBjdXJyZW50TWVudUl0ZW1zID0gYWJvdXRIZWxwZXJzLmdldE1lbnUoKTtcbiAgICBsZXQgc3RvcnlDb250ZW50ID0gYWJvdXRIZWxwZXJzLmdldElwc3VtKCk7XG4gICAgbGV0IHN0b3J5TG9nbyA9IGRvbU1hbmlwdWxhdG9yLmNyZWF0ZUltYWdlKHN0b3J5KTtcblxuICAgIGxldCBzdG9yeUxvZ29XcmFwID0gZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2KFwic3RvcnlMb2dvV3JhcFwiKTtcbiAgICBzdG9yeUxvZ29XcmFwLmFwcGVuZENoaWxkKHN0b3J5TG9nbyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQoc3RvcnlMb2dvV3JhcCk7XG5cbiAgICBsZXQgYWJvdXRQYWdlV3JhcHBlciA9IGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdihcImFib3V0UGFnZVdyYXBwZXJcIik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhYm91dFBhZ2VXcmFwcGVyKTtcbiAgICBhYm91dFBhZ2VXcmFwcGVyLmFwcGVuZENoaWxkKGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdihcImFib3V0UGFnZVN0b3J5XCIpKTtcblxuICAgIGxldCBhYm91dFBhZ2VTdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWJvdXRQYWdlU3RvcnlcIik7XG4gICAgbGV0IGFib3V0U3RvcnlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgYWJvdXRTdG9yeUhlYWRlci5pbm5lclRleHQgPSBcIkRpZ25pc3NpbS4uLlwiO1xuXG4gICAgbGV0IGFib3V0U3RvcnlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYWJvdXRTdG9yeVRleHQuaW5uZXJUZXh0ID0gc3RvcnlDb250ZW50O1xuICAgIGFib3V0UGFnZVN0b3J5LmFwcGVuZChhYm91dFN0b3J5SGVhZGVyKTtcbiAgICBhYm91dFBhZ2VTdG9yeS5hcHBlbmQoYWJvdXRTdG9yeVRleHQpO1xuXG4gICAgbGV0IGFib3V0UGFnZU1lbnUgPSBkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoXCJhYm91dFBhZ2VNZW51XCIpO1xuICAgIGFib3V0UGFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQoYWJvdXRQYWdlTWVudSk7XG5cbiAgICBhYm91dFBhZ2VNZW51LmFwcGVuZENoaWxkKGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdihcIm1lYWxJdGVtVGl0bGVcIikpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVhbEl0ZW1UaXRsZVwiKS5pbm5lclRleHQgPSBcIlNvbWUgZmF2b3JpdGVzLi4uXCI7XG5cbiAgICBjdXJyZW50TWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcblxuICAgICAgICBsZXQgY3VycmVudE1lbnVJdGVtID0gZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2V2l0aENsYXNzKFwibWVhbEl0ZW1cIik7XG4gICAgICAgIGFib3V0UGFnZU1lbnUuYXBwZW5kQ2hpbGQoY3VycmVudE1lbnVJdGVtKTtcbiAgICAgICAgY3VycmVudE1lbnVJdGVtLmlubmVyVGV4dCA9IGl0ZW07XG4gICAgfSlcbiAgIFxuICAgIGFib3V0UGFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZG9tTWFuaXB1bGF0b3IuZ2V0Rm9vdGVyKCkpO1xufVxuXG5sZXQgYWJvdXRIZWxwZXJzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgbGV0IGlwc3VtID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhXG4gICAgIFF1aXNxdWUgaWQgZGlhbSB2ZWwgcXVhbSBlbGVtZW50dW0gcHVsdmluYXIgZXRpYW0gbm9uIHF1YW0uIEluIHBlbGxlbnRlc3F1ZSBtYXNzYSBwbGFjZXJhdCBkdWlzIHVsdHJpY2llcyBsYWN1cyBzZWQuXG4gICAgICBGZXVnaWF0IG5pc2wgcHJldGl1bSBmdXNjZSBpZCB2ZWxpdCB1dC4gVml2ZXJyYSBzdXNwZW5kaXNzZSBwb3RlbnRpIG51bGxhbSBhYyB0b3J0b3Igdml0YWUgcHVydXMuXG4gICAgIEFudGUgaW4gbmliaCBtYXVyaXMgY3Vyc3VzIG1hdHRpcyBtb2xlc3RpZS4gUXVhbSBwZWxsZW50ZXNxdWUgbmVjIG5hbSBhbGlxdWFtLiBcbiAgICAgVml2ZXJyYSB2aXRhZSBjb25ndWUgZXUgY29uc2VxdWF0IGFjLiBFbmltIG51bmMgZmF1Y2lidXMgYSBwZWxsZW50ZXNxdWUgc2l0IGFtZXQgcG9ydHRpdG9yLiBcbiAgICAgVml0YWUgY29uZ3VlIGV1IGNvbnNlcXVhdCBhYyBmZWxpcyBkb25lYyBldCBvZGlvIHBlbGxlbnRlc3F1ZS5cbiAgICAgXG4gICAgSXBzdW0gbnVuYyBhbGlxdWV0IGJpYmVuZHVtIGVuaW0gZmFjaWxpc2lzLiBFdSBzZW0gaW50ZWdlciB2aXRhZSBqdXN0byBlZ2V0IG1hZ25hIGZlcm1lbnR1bSBpYWN1bGlzIGV1LlxuICAgICBUcmlzdGlxdWUgbWFnbmEgc2l0IGFtZXQgcHVydXMgZ3JhdmlkYSBxdWlzIGJsYW5kaXQuIFNjZWxlcmlzcXVlIHZhcml1cyBtb3JiaSBlbmltIG51bmMgZmF1Y2lidXMuIFxuICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cbiAgICAgIEFsaXF1YW0gdmVzdGlidWx1bSBtb3JiaSBibGFuZGl0IGN1cnN1cyByaXN1cy4gVmVsaXQgZGlnbmlzc2ltIHNvZGFsZXMgdXQgZXUgc2VtIGludGVnZXIgdml0YWUganVzdG8gZWdldC4gXG4gICAgICBWaXZhbXVzIGFyY3UgZmVsaXMgYmliZW5kdW0gdXQgdHJpc3RpcXVlIGV0IGVnZXN0YXMuIFByYWVzZW50IHRyaXN0aXF1ZSBtYWduYSBzaXQgYW1ldCBwdXJ1cyBncmF2aWRhIHF1aXMgYmxhbmRpdC4gXG4gICAgICBTZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMgc2VkLiBFbmltIHV0IHNlbSB2aXZlcnJhIGFsaXF1ZXQgZWdldCBzaXQgYW1ldCB0ZWxsdXMgY3Jhcy5cbiAgICAgIENvbW1vZG8gb2RpbyBhZW5lYW4gc2VkIGFkaXBpc2NpbmcgZGlhbSBkb25lYy4gRXUgbWkgYmliZW5kdW0gbmVxdWUgZWdlc3Rhcy4gU2NlbGVyaXNxdWUgZXUgdWx0cmljZXMgdml0YWUgYXVjdG9yLlxuICAgICBgXG5cbiAgICBsZXQgY3VycmVudE1lbnVJdGVtcyA9IFtcIkNvbGQgVG9tYXRvIFNvdXAsIE1lbG9uICYgQ3VjdW1iZXJcIixcbiAgICAgICAgXCJCb3Jsb3R0aSBCZWFucywgQ291cmdldHRlcyAmIE5hc3R1cnRpdW0gXCIsXG4gICAgICAgIFwiUmF3IFNjYWxsb3AsIFN1bmdvbGQgVG9tYXRvICYgRmVubmVsIEJsb3Nzb21cIixcbiAgICAgICAgXCJTdWNrbGluZyBLaWQgU2F1c2FnZSwgUGVhcyAmIEFydGljaG9rZXNcIixcbiAgICAgICAgXCJTbW9rZWQgRWVsLCBCZWV0cm9vdHMgJiBFbGRlcmJlcnJpZXNcIixcbiAgICAgICAgXCJCbGFjayBQdWRkaW5nLCBXaGl0ZSBQZWFjaCAmIEJvYmJ5IEJlYW5zXCIsXG4gICAgICAgIFwiRHVjayBMZWcsIFR1cm5pcCAmIFBpY2tsZWQgTW9yZWxsbyBDaGVycmllc1wiLFxuICAgICAgICBcIk1hbmdhbGl0c2EgQ29sbGFyLCBIaXNwaSBDYWJiYWdlICYgTGFyZG9cIixcbiAgICAgICAgXCJEb3JzZXQgQmx1ZSBMb2JzdGVyLCBTYW1waGlyZSAmIExvYnN0ZXIgQnV0dGVyXCJcbiAgICBdXG5cbiAgICBsZXQgZ2V0SXBzdW0gPSAoKSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIGlwc3VtO1xuICAgIH1cblxuICAgIGxldCBnZXRNZW51ID0gKCkgPT4ge1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50TWVudUl0ZW1zO1xuICAgIH1cblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgZ2V0SXBzdW0sXG4gICAgICAgIGdldE1lbnUsXG5cbiAgICB9XG5cbn0oKVxuXG5cbmV4cG9ydCB7XG4gICAgdXBkYXRlQWJvdXRcbn07IiwiaW1wb3J0IHsgZG9tTWFuaXB1bGF0b3IgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tIFwiLi4vaW1hZ2VzL2Zvb2QuanBnXCI7XG5pbXBvcnQgZmlyc3RJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2dhbGxlcnkxLmpwZ1wiXG5pbXBvcnQgc2Vjb25kSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9nYWxsZXJ5Mi5qcGdcIlxuaW1wb3J0IHRoaXJkSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9nYWxsZXJ5My5qcGdcIlxuaW1wb3J0IGZvdXJ0aEltYWdlIGZyb20gXCIuLi9pbWFnZXMvZ2FsbGVyeTQuanBnXCJcbmltcG9ydCBmaWZ0aEltYWdlIGZyb20gXCIuLi9pbWFnZXMvZ2FsbGVyeTUuanBnXCJcblxuXG5sZXQgdXBkYXRlR2FsbGVyeSA9IGZ1bmN0aW9uKCkge1xuXG4gICBcblxuICAgIGxldCBnYWxsZXJ5V3JhcHBlciA9IGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdihcImdhbGxlcnlXcmFwcGVyXCIpO1xuXG4gICAgY29uc29sZS5sb2coZ2FsbGVyeVdyYXBwZXIpXG5cbiAgICBkb21NYW5pcHVsYXRvci5nZXRDb250ZW50KCkuYXBwZW5kQ2hpbGQoZ2FsbGVyeVdyYXBwZXIpO1xuXG5cbiAgICBsZXQgaW1hZ2VzID0gW2ZpcnN0SW1hZ2UsIHNlY29uZEltYWdlLCB0aGlyZEltYWdlLCBmb3VydGhJbWFnZSwgZmlmdGhJbWFnZV07XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGltYWdlcy5sZW5ndGg7IHggKyspIHtcblxuICAgICAgICBsZXQgY3VycmVudEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGN1cnJlbnRJbWFnZS5zcmMgPSBpbWFnZXNbeF07XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FsbGVyeVdyYXBwZXJcIikuYXBwZW5kQ2hpbGQoZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2KGBpbWFnZSR7eH1gKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpbWFnZSR7eH1gKS5jbGFzc0xpc3QuYWRkKFwiZ2FsbGVyeURpdlwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2ltYWdlJHt4fWApLmFwcGVuZENoaWxkKGN1cnJlbnRJbWFnZSlcblxuICAgIH1cblxuICAgIGxldCBmb290ZXIgPSBkb21NYW5pcHVsYXRvci5nZXRGb290ZXIoKTtcbiAgICBjb25zb2xlLmxvZyhmb290ZXIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dhbGxlcnlXcmFwcGVyXCIpLmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICAvKlxuXG4gXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYWxsZXJ5V3JhcHBlclwiKS5hcHBlbmRDaGlsZChpbWcyKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FsbGVyeVdyYXBwZXJcIikuYXBwZW5kQ2hpbGQoaW1nMyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYWxsZXJ5V3JhcHBlclwiKS5hcHBlbmRDaGlsZChpbWc0KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FsbGVyeVdyYXBwZXJcIikuYXBwZW5kQ2hpbGQoaW1nNSk7XG5cbiAgICAqL1xuXG5cbiAgICBcbiAgICBcbiBcbn1cblxuZXhwb3J0IHt1cGRhdGVHYWxsZXJ5fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQge1xuICAgIHBhZ2VMb2FkZXJcbn0gZnJvbSBcIi4vbG9hZGVyXCJcbmltcG9ydCB7XG4gICAgdXBkYXRlSG9tZVxufSBmcm9tIFwiLi9ob21lXCJcbmltcG9ydCB7XG4gICAgdXBkYXRlR2FsbGVyeVxufSBmcm9tIFwiLi90YWJzL2dhbGxlcnlcIlxuaW1wb3J0IHtcbiAgICB1cGRhdGVBYm91dFxufSBmcm9tIFwiLi90YWJzL2Fib3V0XCJcbmltcG9ydCB7XG4gICAgZG9tTWFuaXB1bGF0b3Jcbn0gZnJvbSBcIi4vZG9tXCJcblxuY29uc3QgdGFiTG9naWMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBsZXQgdGFiRnVuY3Rpb25zID0ge1xuXG4gICAgICAgIFwiaG9tZVwiOiB1cGRhdGVIb21lLnNldEhvbWVDb250ZW50LFxuICAgICAgICBcImdhbGxlcnlcIjogdXBkYXRlR2FsbGVyeSxcbiAgICAgICAgXCJhYm91dFwiOiB1cGRhdGVBYm91dCxcbiAgICB9XG5cbiAgICBsZXQgdGFiVGl0bGVzID0gW1wiSG9tZVwiLCBcIkdhbGxlcnlcIiwgXCJBYm91dFwiXTtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMzsgeCsrKSB7XG5cbiAgICAgICAgbGV0IGlubmVyVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5uZXJUYWIuY2xhc3NMaXN0LmFkZChcImlubmVyVGFiXCIpO1xuICAgICAgICBpbm5lclRhYi5pbm5lclRleHQgPSB0YWJUaXRsZXNbeF07XG4gICAgICAgIGlubmVyVGFiLmlkID0gdGFiVGl0bGVzW3hdO1xuICAgICAgICBkb21NYW5pcHVsYXRvci5nZXRUYWJzKCkuYXBwZW5kKGlubmVyVGFiKTtcbiAgICAgICAgaW5uZXJUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhYkNoYW5nZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0YWJDaGFuZ2UoZSkge1xuXG4gICAgICAgIC8vc3RvcHMgZnJvbSB0cmlnZ2VyaW5nIHRhYiBzd2l0Y2ggb24gdGhlIHNhbWUgdGFiIG92ZXIgYW5kIG92ZXJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlubmVyVGV4dCAhPSBkb21NYW5pcHVsYXRvci5nZXRDdXJyZW50VGFiKCkpIHtcblxuICAgICAgICAgICAgZG9tTWFuaXB1bGF0b3IucmVtb3ZlQWxsTm9kZXMoKTtcbiAgICAgICAgICAgIGRvbU1hbmlwdWxhdG9yLnNldEN1cnJlbnRUYWIoZS50YXJnZXQuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlubmVyVGV4dCk7XG4gICAgICAgICAgICBsZXQgZnVuYyA9IHRhYkZ1bmN0aW9uc1tlLnRhcmdldC5pbm5lclRleHQudG9Mb3dlckNhc2UoKV07XG5cbiAgICAgICAgICAgIGZ1bmMoKTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn0oKSJdLCJzb3VyY2VSb290IjoiIn0=