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
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nbody {\n\n    font-family: 'Courgette', cursive;\n    font-size: 28px;\n    background-color: #F5F5F5;\n}\n\n#content {\n\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    min-height: 100vh;\n    background-size: cover;\n}\n\n#storyLogoWrap{\n\n    grid-column: 2;\n    grid-row: 2;\n    justify-self: center;\n    align-self: center;\n\n}\n\n\n#storyLogoWrap img {\n\n    width:400px;\n    height:auto;\n}\n\n#header {\n    position: fixed;\n    \n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 1fr 1fr;\n    color: white;\n    font-family: 'Raleway', sans-serif;\n    font-size: 0.8em;\n    transition: all 0.5s ease-in-out;\n}\n\n#header, #storyLogoWrap {\n\n    transition: all 0.5s ease-in-out;\n}\n\n#main {\n\n    grid-row: 1;\n    display: grid;\n    border-style: solid white 2px;\n    transition: all 0.5s ease-in-out;\n    grid-column: 2;\n    justify-self: center;\n    align-self: center;\n    grid-template-columns: 1fr;\n    color: #FFFFFF;\n    font-size: 24px;\n    line-height: 1.6;\n    font-family: 'Raleway', sans-serif;\n}\n\n#tabs {\n\n    grid-column: 1;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 6px;\n    margin: 6px;\n}\n\n.innerTab {\n\n\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    justify-self: center;\n    width: 100%;\n    text-decoration: underline;\n    padding: 20px;\n\n}\n\n.innerTab:hover {\n\n    scale: 1.1;\n    cursor: pointer;\n\n}\n\n.mainAbout {\n\n    grid-template-columns: 1fr 1fr;\n}\n\n.opacity {\n\n     opacity: 0 !important;\n}\n\n#aboutPageWrapper {\n\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: minmax(65vh, 1fr) minmax(70vh, 1fr) 30vh;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-row: 3;\n    grid-column: 1/-1;\n    background-color: #EEEEEE;\n\n}\n\n#aboutPageWrapper p {\n\n    font-family: 'Raleway', sans-serif;\n}\n\n\n\n#aboutPageStory {\n\n    display: grid;\n    grid-row: 1;\n    border-width: 2px;\n    grid-column: 1/-1;\n    align-self: center;\n    align-content: center;\n    font-size: 18px;\n    line-height: 26px;\n    justify-content: center;\n    height: 100%;\n    margin:40px;\n    margin-top:0px;\n    grid-gap:30px;\n}\n\n#aboutPageMenu {\n    grid-column: 1/-1;\n    display: grid;\n    align-self: center;\n    align-content: center;\n    background-color: #0E1111;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-content: center;\n    height: 100%;\n}\n\nh2 {\n\n    justify-self: center;\n    align-self: center;\n    font-size: 24px;\n}\n\n#mealItemTitle {\n\n    grid-row: 1;\n    grid-column: 1/-1;\n    color: white;\n    justify-self: center;\n    align-self: start;\n\n}\n\n.mealItem {\n\n    border-bottom: solid;\n    border-top: solid;\n    border-color: white;\n    border-width: 1px;\n    justify-self: center;\n    margin: 40px;\n    color: white;\n    padding: 10px;\n    font-size: 18px;\n}\n\n#aboutFooter {\n\n    grid-column: 1/-1;\n    grid-row: 3;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr auto;\n    background-color: #EEEEEE;\n    font-family: 'Raleway', sans-serif;\n    height:30vh;\n\n}\n\n#aboutContact {\n\n\n    grid-column: 1;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-content: center;\n    align-items: center;\n    font-size: 18px;\n\n\n\n}\n\n#contactWrap {\n\n    grid-row: 2;\n    justify-self: center;\n    display: grid;\n    grid-gap: 10px;\n}\n\n#aboutHours {\n\n\n    grid-column: 3;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-content: center;\n    align-items: center;\n    font-size: 18px;\n    justify-items: center;\n\n\n\n}\n\n#hourWrap {\n\n    grid-row: 2;\n\n\n}\n\n#logoWrapper {\n    grid-column: 2;\n    grid-row: 1;\n    border-width: 2px;\n    align-self: center;\n    justify-self: center;\n    margin: 10px;\n    display: grid;\n    grid-template-rows: 1fr auto;\n    justify-items: center;\n    justify-content: center;\n    grid-gap: 20px;\n\n\n}\n\n.socialWrap {\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 2px;\n\n}\n\n.socialWrap:hover {\n\n    cursor: pointer;\n\n\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nbody {\n\n    font-family: 'Courgette', cursive;\n    font-size: 28px;\n    background-color: #F5F5F5;\n}\n\n#content {\n\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    min-height: 100vh;\n    background-size: cover;\n}\n\n#storyLogoWrap{\n\n    grid-column: 2;\n    grid-row: 2;\n    justify-self: center;\n    align-self: center;\n\n}\n\n\n#storyLogoWrap img {\n\n    width:400px;\n    height:auto;\n}\n\n#header {\n    position: fixed;\n    \n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 1fr 1fr;\n    color: white;\n    font-family: 'Raleway', sans-serif;\n    font-size: 0.8em;\n    transition: all 0.5s ease-in-out;\n}\n\n#header, #storyLogoWrap {\n\n    transition: all 0.5s ease-in-out;\n}\n\n#main {\n\n    grid-row: 1;\n    display: grid;\n    border-style: solid white 2px;\n    transition: all 0.5s ease-in-out;\n    grid-column: 2;\n    justify-self: center;\n    align-self: center;\n    grid-template-columns: 1fr;\n    color: #FFFFFF;\n    font-size: 24px;\n    line-height: 1.6;\n    font-family: 'Raleway', sans-serif;\n}\n\n#tabs {\n\n    grid-column: 1;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 6px;\n    margin: 6px;\n}\n\n.innerTab {\n\n\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    justify-self: center;\n    width: 100%;\n    text-decoration: underline;\n    padding: 20px;\n\n}\n\n.innerTab:hover {\n\n    scale: 1.1;\n    cursor: pointer;\n\n}\n\n.mainAbout {\n\n    grid-template-columns: 1fr 1fr;\n}\n\n.opacity {\n\n     opacity: 0 !important;\n}\n\n#aboutPageWrapper {\n\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: minmax(65vh, 1fr) minmax(70vh, 1fr) 30vh;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-row: 3;\n    grid-column: 1/-1;\n    background-color: #EEEEEE;\n\n}\n\n#aboutPageWrapper p {\n\n    font-family: 'Raleway', sans-serif;\n}\n\n\n\n#aboutPageStory {\n\n    display: grid;\n    grid-row: 1;\n    border-width: 2px;\n    grid-column: 1/-1;\n    align-self: center;\n    align-content: center;\n    font-size: 18px;\n    line-height: 26px;\n    justify-content: center;\n    height: 100%;\n    margin:40px;\n    margin-top:0px;\n    grid-gap:30px;\n}\n\n#aboutPageMenu {\n    grid-column: 1/-1;\n    display: grid;\n    align-self: center;\n    align-content: center;\n    background-color: #0E1111;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-content: center;\n    height: 100%;\n}\n\nh2 {\n\n    justify-self: center;\n    align-self: center;\n    font-size: 24px;\n}\n\n#mealItemTitle {\n\n    grid-row: 1;\n    grid-column: 1/-1;\n    color: white;\n    justify-self: center;\n    align-self: start;\n\n}\n\n.mealItem {\n\n    border-bottom: solid;\n    border-top: solid;\n    border-color: white;\n    border-width: 1px;\n    justify-self: center;\n    margin: 40px;\n    color: white;\n    padding: 10px;\n    font-size: 18px;\n}\n\n#aboutFooter {\n\n    grid-column: 1/-1;\n    grid-row: 3;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr auto;\n    background-color: #EEEEEE;\n    font-family: 'Raleway', sans-serif;\n    height:30vh;\n\n}\n\n#aboutContact {\n\n\n    grid-column: 1;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-content: center;\n    align-items: center;\n    font-size: 18px;\n\n\n\n}\n\n#contactWrap {\n\n    grid-row: 2;\n    justify-self: center;\n    display: grid;\n    grid-gap: 10px;\n}\n\n#aboutHours {\n\n\n    grid-column: 3;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-content: center;\n    align-items: center;\n    font-size: 18px;\n    justify-items: center;\n\n\n\n}\n\n#hourWrap {\n\n    grid-row: 2;\n\n\n}\n\n#logoWrapper {\n    grid-column: 2;\n    grid-row: 1;\n    border-width: 2px;\n    align-self: center;\n    justify-self: center;\n    margin: 10px;\n    display: grid;\n    grid-template-rows: 1fr auto;\n    justify-items: center;\n    justify-content: center;\n    grid-gap: 20px;\n\n\n}\n\n.socialWrap {\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 2px;\n\n}\n\n.socialWrap:hover {\n\n    cursor: pointer;\n\n\n\n}"],"sourceRoot":""}]);
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

            if(currentScrollPos > 0) {

                document.querySelector("#storyLogoWrap").classList.add("opacity");
            }

            else {

                document.querySelector("#storyLogoWrap").classList.remove("opacity");
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
        appendViaQuery
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
/* harmony import */ var _images_logo_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/logo(1).png */ "./src/images/logo(1).png");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom */ "./src/dom.js");
/* harmony import */ var _images_twitter_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/twitter.png */ "./src/images/twitter.png");
/* harmony import */ var _images_insta_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/insta.png */ "./src/images/insta.png");
/* harmony import */ var _images_story_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/story.png */ "./src/images/story.png");







let updateAbout = function () {

    _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.setBackground("content", _images_chef_jpg__WEBPACK_IMPORTED_MODULE_0__);

    let currentMenuItems = aboutHelpers.getMenu();
    let storyContent = aboutHelpers.getIpsum();
    let hours = aboutHelpers.getHours();
    let contactInfo = aboutHelpers.getContacts();
    let mainLogo = aboutHelpers.createImage(_images_logo_1_png__WEBPACK_IMPORTED_MODULE_1__);
    let twitterLogo = aboutHelpers.createImage(_images_twitter_png__WEBPACK_IMPORTED_MODULE_3__);
    let instaLogo = aboutHelpers.createImage(_images_insta_png__WEBPACK_IMPORTED_MODULE_4__);
    let storyLogo = aboutHelpers.createImage(_images_story_png__WEBPACK_IMPORTED_MODULE_5__);

    let storyLogoWrap = _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDiv("storyLogoWrap");
    storyLogoWrap.appendChild(storyLogo);

    document.querySelector("#content").appendChild(storyLogoWrap);

    let aboutPageWrapper = _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDiv("aboutPageWrapper");
    document.body.appendChild(aboutPageWrapper);
    aboutPageWrapper.appendChild(_dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDiv("aboutPageStory"));

    let aboutPageStory = document.querySelector("#aboutPageStory");
    let aboutStoryHeader = document.createElement("h2");
    aboutStoryHeader.innerText = "Dignissim...";

    let aboutStoryText = document.createElement("p");
    aboutStoryText.innerText = storyContent;
    aboutPageStory.append(aboutStoryHeader);
    aboutPageStory.append(aboutStoryText);

    let aboutPageMenu = _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDiv("aboutPageMenu");
    aboutPageWrapper.appendChild(aboutPageMenu);

    aboutPageMenu.appendChild(_dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDiv("mealItemTitle"));
    document.querySelector("#mealItemTitle").innerText = "Some favorites...";

    currentMenuItems.forEach((item) => {

        let currentMenuItem = _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDivWithClass("mealItem");
        aboutPageMenu.appendChild(currentMenuItem);
        currentMenuItem.innerText = item;
    })

    aboutPageWrapper.appendChild(_dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDiv("aboutFooter"));

    let footerContent = ["aboutContact", "aboutHours", "logoWrapper"];

    footerContent.forEach((id) => {

        _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.appendViaQuery("#aboutFooter", _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDiv(id))

    });

    _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.appendViaQuery("#logoWrapper", mainLogo);
    _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.appendViaQuery("#aboutContact", _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDiv("contactWrap"));
    _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.appendViaQuery("#aboutHours", _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDiv("hourWrap"));
    _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.appendViaQuery("#aboutFooter", _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDiv("icons"));

    let socialWrap = _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDivWithClass("socialWrap");
    document.querySelector("#logoWrapper").appendChild(socialWrap);

    let mediaIcons = [twitterLogo, instaLogo];

    mediaIcons.forEach((icon) => {

        _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.appendViaQuery(".socialWrap", icon)
    });

    contactInfo.forEach((item) => {

        let currentContact = _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDivWithClass("contactItem");
        currentContact.innerText = item;
        document.querySelector("#contactWrap").appendChild(currentContact);
    });


    hours.forEach((item) => {

        let currentItem = _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDivWithClass("hourItem");
        currentItem.innerText = item;
        document.querySelector("#hourWrap").appendChild(currentItem);
    });
}

let aboutHelpers = function () {

    let contactInfo = ["Email: lerestaurant@gmail.com", "Telephone: 08234666", "Address: 1 Posh Street, Posh Town"]

    let hours = ["Mon - Thurs: 11 - 9", "Fri - Sat: 9 - 11", "Sun: 12 - 8"]

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

    let getContacts = () => {

        return contactInfo;
    }

    let getHours = () => {

        return hours;
    }

    let createImage = function (imgSrc) {

        let newImage = new Image();
        newImage.src = imgSrc;
        return newImage;
    }

    return {
        createImage,
        getIpsum,
        getMenu,
        getContacts,
        getHours
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




let updateGallery = function() {

    _dom__WEBPACK_IMPORTED_MODULE_0__.domManipulator.setBackground("content", _images_food_jpg__WEBPACK_IMPORTED_MODULE_1__);    
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







const tabLogic = function() {

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
        if(e.target.innerText != _dom__WEBPACK_IMPORTED_MODULE_5__.domManipulator.getCurrentTab()) {      
            
            _dom__WEBPACK_IMPORTED_MODULE_5__.domManipulator.removeAllNodes();

       

       // domManipulator.removeAllNodes();
        _dom__WEBPACK_IMPORTED_MODULE_5__.domManipulator.setCurrentTab(e.target.innerText);
        console.log(e.target.innerText);
        let func = tabFunctions[e.target.innerText.toLowerCase()];

        func();}


  

    else {

        return;
    }
       
    }  

}()




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS8uL3NyYy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9zcmMvdGFicy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS8uL3NyYy90YWJzL2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSx3c0JBQXdzQixnQkFBZ0IsaUJBQWlCLGdCQUFnQixzQkFBc0Isb0JBQW9CLCtCQUErQixHQUFHLDBKQUEwSixxQkFBcUIsR0FBRyxVQUFVLHFCQUFxQixHQUFHLGFBQWEsdUJBQXVCLEdBQUcsb0JBQW9CLG1CQUFtQixHQUFHLCtEQUErRCxrQkFBa0Isb0JBQW9CLEdBQUcsV0FBVyxnQ0FBZ0Msd0JBQXdCLEdBQUcsVUFBVSwwQ0FBMEMsc0JBQXNCLGdDQUFnQyxHQUFHLGNBQWMsc0JBQXNCLHlDQUF5QyxrQ0FBa0Msd0JBQXdCLDZCQUE2QixHQUFHLG1CQUFtQix1QkFBdUIsa0JBQWtCLDJCQUEyQix5QkFBeUIsS0FBSywwQkFBMEIsb0JBQW9CLGtCQUFrQixHQUFHLGFBQWEsc0JBQXNCLDBCQUEwQiw4QkFBOEIseUNBQXlDLG1CQUFtQix5Q0FBeUMsdUJBQXVCLHVDQUF1QyxHQUFHLDZCQUE2Qix5Q0FBeUMsR0FBRyxXQUFXLG9CQUFvQixvQkFBb0Isb0NBQW9DLHVDQUF1QyxxQkFBcUIsMkJBQTJCLHlCQUF5QixpQ0FBaUMscUJBQXFCLHNCQUFzQix1QkFBdUIseUNBQXlDLEdBQUcsV0FBVyx1QkFBdUIsb0JBQW9CLHlDQUF5QyxvQkFBb0Isa0JBQWtCLEdBQUcsZUFBZSx3QkFBd0IsOEJBQThCLDRCQUE0QiwyQkFBMkIsa0JBQWtCLGlDQUFpQyxvQkFBb0IsS0FBSyxxQkFBcUIsbUJBQW1CLHNCQUFzQixLQUFLLGdCQUFnQix1Q0FBdUMsR0FBRyxjQUFjLCtCQUErQixHQUFHLHVCQUF1QiwwQkFBMEIsb0JBQW9CLG1FQUFtRSx5Q0FBeUMsa0JBQWtCLHdCQUF3QixnQ0FBZ0MsS0FBSyx5QkFBeUIsMkNBQTJDLEdBQUcseUJBQXlCLHNCQUFzQixrQkFBa0Isd0JBQXdCLHdCQUF3Qix5QkFBeUIsNEJBQTRCLHNCQUFzQix3QkFBd0IsOEJBQThCLG1CQUFtQixrQkFBa0IscUJBQXFCLG9CQUFvQixHQUFHLG9CQUFvQix3QkFBd0Isb0JBQW9CLHlCQUF5Qiw0QkFBNEIsZ0NBQWdDLHlDQUF5Qyw4QkFBOEIsbUJBQW1CLEdBQUcsUUFBUSw2QkFBNkIseUJBQXlCLHNCQUFzQixHQUFHLG9CQUFvQixvQkFBb0Isd0JBQXdCLG1CQUFtQiwyQkFBMkIsd0JBQXdCLEtBQUssZUFBZSw2QkFBNkIsd0JBQXdCLDBCQUEwQix3QkFBd0IsMkJBQTJCLG1CQUFtQixtQkFBbUIsb0JBQW9CLHNCQUFzQixHQUFHLGtCQUFrQiwwQkFBMEIsa0JBQWtCLG9CQUFvQix5Q0FBeUMsbUNBQW1DLGdDQUFnQyx5Q0FBeUMsa0JBQWtCLEtBQUssbUJBQW1CLHlCQUF5QixvQkFBb0Isc0NBQXNDLDRCQUE0QiwwQkFBMEIsc0JBQXNCLFNBQVMsa0JBQWtCLG9CQUFvQiwyQkFBMkIsb0JBQW9CLHFCQUFxQixHQUFHLGlCQUFpQix5QkFBeUIsb0JBQW9CLHNDQUFzQyw0QkFBNEIsMEJBQTBCLHNCQUFzQiw0QkFBNEIsU0FBUyxlQUFlLG9CQUFvQixPQUFPLGtCQUFrQixxQkFBcUIsa0JBQWtCLHdCQUF3Qix5QkFBeUIsMkJBQTJCLG1CQUFtQixvQkFBb0IsbUNBQW1DLDRCQUE0Qiw4QkFBOEIscUJBQXFCLE9BQU8saUJBQWlCLHNCQUFzQixxQ0FBcUMsb0JBQW9CLEtBQUssdUJBQXVCLHdCQUF3QixTQUFTLE9BQU8sa0ZBQWtGLEtBQUsscUZBQXFGLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxnQkFBZ0IsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLFFBQVEsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGNBQWMsUUFBUSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsT0FBTyxNQUFNLFlBQVksU0FBUyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxNQUFNLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLGVBQWUsT0FBTyxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFlBQVksT0FBTyxNQUFNLGFBQWEsd3JCQUF3ckIsZ0JBQWdCLGlCQUFpQixnQkFBZ0Isc0JBQXNCLG9CQUFvQiwrQkFBK0IsR0FBRywwSkFBMEoscUJBQXFCLEdBQUcsVUFBVSxxQkFBcUIsR0FBRyxhQUFhLHVCQUF1QixHQUFHLG9CQUFvQixtQkFBbUIsR0FBRywrREFBK0Qsa0JBQWtCLG9CQUFvQixHQUFHLFdBQVcsZ0NBQWdDLHdCQUF3QixHQUFHLFVBQVUsMENBQTBDLHNCQUFzQixnQ0FBZ0MsR0FBRyxjQUFjLHNCQUFzQix5Q0FBeUMsa0NBQWtDLHdCQUF3Qiw2QkFBNkIsR0FBRyxtQkFBbUIsdUJBQXVCLGtCQUFrQiwyQkFBMkIseUJBQXlCLEtBQUssMEJBQTBCLG9CQUFvQixrQkFBa0IsR0FBRyxhQUFhLHNCQUFzQiwwQkFBMEIsOEJBQThCLHlDQUF5QyxtQkFBbUIseUNBQXlDLHVCQUF1Qix1Q0FBdUMsR0FBRyw2QkFBNkIseUNBQXlDLEdBQUcsV0FBVyxvQkFBb0Isb0JBQW9CLG9DQUFvQyx1Q0FBdUMscUJBQXFCLDJCQUEyQix5QkFBeUIsaUNBQWlDLHFCQUFxQixzQkFBc0IsdUJBQXVCLHlDQUF5QyxHQUFHLFdBQVcsdUJBQXVCLG9CQUFvQix5Q0FBeUMsb0JBQW9CLGtCQUFrQixHQUFHLGVBQWUsd0JBQXdCLDhCQUE4Qiw0QkFBNEIsMkJBQTJCLGtCQUFrQixpQ0FBaUMsb0JBQW9CLEtBQUsscUJBQXFCLG1CQUFtQixzQkFBc0IsS0FBSyxnQkFBZ0IsdUNBQXVDLEdBQUcsY0FBYywrQkFBK0IsR0FBRyx1QkFBdUIsMEJBQTBCLG9CQUFvQixtRUFBbUUseUNBQXlDLGtCQUFrQix3QkFBd0IsZ0NBQWdDLEtBQUsseUJBQXlCLDJDQUEyQyxHQUFHLHlCQUF5QixzQkFBc0Isa0JBQWtCLHdCQUF3Qix3QkFBd0IseUJBQXlCLDRCQUE0QixzQkFBc0Isd0JBQXdCLDhCQUE4QixtQkFBbUIsa0JBQWtCLHFCQUFxQixvQkFBb0IsR0FBRyxvQkFBb0Isd0JBQXdCLG9CQUFvQix5QkFBeUIsNEJBQTRCLGdDQUFnQyx5Q0FBeUMsOEJBQThCLG1CQUFtQixHQUFHLFFBQVEsNkJBQTZCLHlCQUF5QixzQkFBc0IsR0FBRyxvQkFBb0Isb0JBQW9CLHdCQUF3QixtQkFBbUIsMkJBQTJCLHdCQUF3QixLQUFLLGVBQWUsNkJBQTZCLHdCQUF3QiwwQkFBMEIsd0JBQXdCLDJCQUEyQixtQkFBbUIsbUJBQW1CLG9CQUFvQixzQkFBc0IsR0FBRyxrQkFBa0IsMEJBQTBCLGtCQUFrQixvQkFBb0IseUNBQXlDLG1DQUFtQyxnQ0FBZ0MseUNBQXlDLGtCQUFrQixLQUFLLG1CQUFtQix5QkFBeUIsb0JBQW9CLHNDQUFzQyw0QkFBNEIsMEJBQTBCLHNCQUFzQixTQUFTLGtCQUFrQixvQkFBb0IsMkJBQTJCLG9CQUFvQixxQkFBcUIsR0FBRyxpQkFBaUIseUJBQXlCLG9CQUFvQixzQ0FBc0MsNEJBQTRCLDBCQUEwQixzQkFBc0IsNEJBQTRCLFNBQVMsZUFBZSxvQkFBb0IsT0FBTyxrQkFBa0IscUJBQXFCLGtCQUFrQix3QkFBd0IseUJBQXlCLDJCQUEyQixtQkFBbUIsb0JBQW9CLG1DQUFtQyw0QkFBNEIsOEJBQThCLHFCQUFxQixPQUFPLGlCQUFpQixzQkFBc0IscUNBQXFDLG9CQUFvQixLQUFLLHVCQUF1Qix3QkFBd0IsU0FBUyxtQkFBbUI7QUFDbnJhO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7O0FDakVhOztBQUViLGlDQUFpQywySEFBMkg7O0FBRTVKLDZCQUE2QixrS0FBa0s7O0FBRS9MLGlEQUFpRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNELGtIQUFrSDs7QUFFOVosc0NBQXNDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLGtCQUFrQixFQUFFLGFBQWE7O0FBRXJMLHdDQUF3QywwR0FBMEcsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxNQUFNLHdCQUF3QiwrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSxpREFBaUQsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYTs7QUFFL2YsK0JBQStCLG9DQUFvQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRzs7OztBQUluRzs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhOztBQUVwQyxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLG1GQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsbUZBQU8sSUFBSSwwRkFBYyxHQUFHLDBGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OztBQ2hHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxREFBcUQ7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0M7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCOzs7Ozs7Ozs7O0FDL0NhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUM7Ozs7Ozs7Ozs7Ozs7O0FDZkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQ0FBbUMsR0FBRyxrQ0FBa0MsTUFBTTtBQUM5RSxLOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBLG1EO0FBQ0EsdUI7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1EO0FBQ0Esd0M7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SDJDO0FBRzlCOztBQUVkLDhCOztBQUVBOztBQUVBLG1CQUFtQiwwREFBd0I7QUFDM0MseUJBQXlCLDBEQUF3QjtBQUNqRCxRQUFRLDJEQUF5QjtBQUNqQztBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQsUUFBUSw4REFBNEIsWUFBWSwrQ0FBVSxFO0FBQzFEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCZTs7QUFFaEI7O0FBRUEsSUFBSSw0REFBeUI7O0FBRTdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUMEM7QUFDSDtBQUd6QjtBQUM0QjtBQUNKO0FBQ0E7O0FBRXZDOztBQUVBLElBQUksOERBQTRCLFlBQVksNkNBQVU7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLCtDQUFJO0FBQ2hELCtDQUErQyxnREFBTztBQUN0RCw2Q0FBNkMsOENBQUs7QUFDbEQsNkNBQTZDLDhDQUFLOztBQUVsRCx3QkFBd0IsMERBQXdCO0FBQ2hEOztBQUVBOztBQUVBLDJCQUEyQiwwREFBd0I7QUFDbkQ7QUFDQSxpQ0FBaUMsMERBQXdCOztBQUV6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLDBEQUF3QjtBQUNoRDs7QUFFQSw4QkFBOEIsMERBQXdCO0FBQ3REOztBQUVBOztBQUVBLDhCQUE4QixtRUFBaUM7QUFDL0Q7QUFDQTtBQUNBLEtBQUs7O0FBRUwsaUNBQWlDLDBEQUF3Qjs7QUFFekQ7O0FBRUE7O0FBRUEsUUFBUSwrREFBNkIsaUJBQWlCLDBEQUF3Qjs7QUFFOUUsS0FBSzs7QUFFTCxJQUFJLCtEQUE2QjtBQUNqQyxJQUFJLCtEQUE2QixrQkFBa0IsMERBQXdCO0FBQzNFLElBQUksK0RBQTZCLGdCQUFnQiwwREFBd0I7QUFDekUsSUFBSSwrREFBNkIsaUJBQWlCLDBEQUF3Qjs7QUFFMUUscUJBQXFCLG1FQUFpQztBQUN0RDs7QUFFQTs7QUFFQTs7QUFFQSxRQUFRLCtEQUE2QjtBQUNyQyxLQUFLOztBQUVMOztBQUVBLDZCQUE2QixtRUFBaUM7QUFDOUQ7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBLDBCQUEwQixtRUFBaUM7QUFDM0Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsS3VDO0FBQ0k7OztBQUc1Qzs7QUFFQSxJQUFJLDhEQUE0QixZQUFZLDZDQUFVLEU7QUFDdEQ7Ozs7Ozs7O1VDUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDYztBQUNGO0FBQ1c7QUFDSjtBQUNKOztBQUVwQzs7QUFFQTs7QUFFQSxnQkFBZ0IsNERBQXlCO0FBQ3pDLG1CQUFtQix3REFBYTtBQUNoQyxpQkFBaUIsb0RBQVc7QUFDNUI7O0FBRUE7O0FBRUEsbUJBQW1CLE9BQU87O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBc0I7QUFDOUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlDQUFpQyw4REFBNEIsSzs7QUFFN0QsWUFBWSwrREFBNkI7Ozs7QUFJekM7QUFDQSxRQUFRLDhEQUE0QjtBQUNwQztBQUNBOztBQUVBOzs7OztBQUtBOztBQUVBO0FBQ0E7O0FBRUEsSzs7QUFFQSxDQUFDIiwiZmlsZSI6ImluZGV4Lm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXFxudjIuMCB8IDIwMTEwMTI2XFxuTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICAgIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcblxcbiAgICBmb250LWZhbWlseTogJ0NvdXJnZXR0ZScsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuXFxuI2NvbnRlbnQge1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4jc3RvcnlMb2dvV3JhcHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbn1cXG5cXG5cXG4jc3RvcnlMb2dvV3JhcCBpbWcge1xcblxcbiAgICB3aWR0aDo0MDBweDtcXG4gICAgaGVpZ2h0OmF1dG87XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuI2hlYWRlciwgI3N0b3J5TG9nb1dyYXAge1xcblxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuI21haW4ge1xcblxcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCB3aGl0ZSAycHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxufVxcblxcbiN0YWJzIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtZ2FwOiA2cHg7XFxuICAgIG1hcmdpbjogNnB4O1xcbn1cXG5cXG4uaW5uZXJUYWIge1xcblxcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbn1cXG5cXG4uaW5uZXJUYWI6aG92ZXIge1xcblxcbiAgICBzY2FsZTogMS4xO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxufVxcblxcbi5tYWluQWJvdXQge1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5vcGFjaXR5IHtcXG5cXG4gICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcXG59XFxuXFxuI2Fib3V0UGFnZVdyYXBwZXIge1xcblxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoNjV2aCwgMWZyKSBtaW5tYXgoNzB2aCwgMWZyKSAzMHZoO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXJvdzogMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxuXFxufVxcblxcbiNhYm91dFBhZ2VXcmFwcGVyIHAge1xcblxcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG5cXG4jYWJvdXRQYWdlU3Rvcnkge1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjZweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOjQwcHg7XFxuICAgIG1hcmdpbi10b3A6MHB4O1xcbiAgICBncmlkLWdhcDozMHB4O1xcbn1cXG5cXG4jYWJvdXRQYWdlTWVudSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBFMTExMTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaDIge1xcblxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbiNtZWFsSXRlbVRpdGxlIHtcXG5cXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG5cXG59XFxuXFxuLm1lYWxJdGVtIHtcXG5cXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbiNhYm91dEZvb3RlciB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBncmlkLXJvdzogMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OjMwdmg7XFxuXFxufVxcblxcbiNhYm91dENvbnRhY3Qge1xcblxcblxcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuXFxuXFxuXFxufVxcblxcbiNjb250YWN0V3JhcCB7XFxuXFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDEwcHg7XFxufVxcblxcbiNhYm91dEhvdXJzIHtcXG5cXG5cXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxuXFxufVxcblxcbiNob3VyV3JhcCB7XFxuXFxuICAgIGdyaWQtcm93OiAyO1xcblxcblxcbn1cXG5cXG4jbG9nb1dyYXBwZXIge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtZ2FwOiAyMHB4O1xcblxcblxcbn1cXG5cXG4uc29jaWFsV3JhcCB7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC1nYXA6IDJweDtcXG5cXG59XFxuXFxuLnNvY2lhbFdyYXA6aG92ZXIge1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuXFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlGSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHdCQUF3QjtBQUM1Qjs7QUFFQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0lBV0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7Ozs7SUFJSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGtDQUFrQztJQUNsQywyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixrQkFBa0I7O0FBRXRCOzs7QUFHQTs7SUFFSSxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTs7SUFFZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixnQ0FBZ0M7QUFDcEM7O0FBRUE7O0lBRUksZ0NBQWdDO0FBQ3BDOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0NBQWtDO0FBQ3RDOztBQUVBOztJQUVJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7OztJQUdJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLGFBQWE7O0FBRWpCOztBQUVBOztJQUVJLFVBQVU7SUFDVixlQUFlOztBQUVuQjs7QUFFQTs7SUFFSSw4QkFBOEI7QUFDbEM7O0FBRUE7O0tBRUsscUJBQXFCO0FBQzFCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsNERBQTREO0lBQzVELGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHlCQUF5Qjs7QUFFN0I7O0FBRUE7O0lBRUksa0NBQWtDO0FBQ3RDOzs7O0FBSUE7O0lBRUksYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUJBQWlCOztBQUVyQjs7QUFFQTs7SUFFSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsa0NBQWtDO0lBQ2xDLFdBQVc7O0FBRWY7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTs7OztBQUluQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixxQkFBcUI7Ozs7QUFJekI7O0FBRUE7O0lBRUksV0FBVzs7O0FBR2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsY0FBYzs7O0FBR2xCOztBQUVBOztJQUVJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsYUFBYTs7QUFFakI7O0FBRUE7O0lBRUksZUFBZTs7OztBQUluQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xcbnYyLjAgfCAyMDExMDEyNlxcbkxpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyZ2V0dGUnLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcblxcbiNjb250ZW50IHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuI3N0b3J5TG9nb1dyYXB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG59XFxuXFxuXFxuI3N0b3J5TG9nb1dyYXAgaW1nIHtcXG5cXG4gICAgd2lkdGg6NDAwcHg7XFxuICAgIGhlaWdodDphdXRvO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNoZWFkZXIsICNzdG9yeUxvZ29XcmFwIHtcXG5cXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNtYWluIHtcXG5cXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQgd2hpdGUgMnB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMS42O1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jdGFicyB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLWdhcDogNnB4O1xcbiAgICBtYXJnaW46IDZweDtcXG59XFxuXFxuLmlubmVyVGFiIHtcXG5cXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG59XFxuXFxuLmlubmVyVGFiOmhvdmVyIHtcXG5cXG4gICAgc2NhbGU6IDEuMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG4ubWFpbkFib3V0IHtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4ub3BhY2l0eSB7XFxuXFxuICAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbiNhYm91dFBhZ2VXcmFwcGVyIHtcXG5cXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDY1dmgsIDFmcikgbWlubWF4KDcwdmgsIDFmcikgMzB2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC1yb3c6IDM7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcblxcbn1cXG5cXG4jYWJvdXRQYWdlV3JhcHBlciBwIHtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuXFxuI2Fib3V0UGFnZVN0b3J5IHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjo0MHB4O1xcbiAgICBtYXJnaW4tdG9wOjBweDtcXG4gICAgZ3JpZC1nYXA6MzBweDtcXG59XFxuXFxuI2Fib3V0UGFnZU1lbnUge1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTExMTE7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmgyIHtcXG5cXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4jbWVhbEl0ZW1UaXRsZSB7XFxuXFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuXFxufVxcblxcbi5tZWFsSXRlbSB7XFxuXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkO1xcbiAgICBib3JkZXItdG9wOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IDQwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4jYWJvdXRGb290ZXIge1xcblxcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZ3JpZC1yb3c6IDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDozMHZoO1xcblxcbn1cXG5cXG4jYWJvdXRDb250YWN0IHtcXG5cXG5cXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcblxcblxcblxcbn1cXG5cXG4jY29udGFjdFdyYXAge1xcblxcbiAgICBncmlkLXJvdzogMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAxMHB4O1xcbn1cXG5cXG4jYWJvdXRIb3VycyB7XFxuXFxuXFxuICAgIGdyaWQtY29sdW1uOiAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcblxcblxcbn1cXG5cXG4jaG91cldyYXAge1xcblxcbiAgICBncmlkLXJvdzogMjtcXG5cXG5cXG59XFxuXFxuI2xvZ29XcmFwcGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLWdhcDogMjBweDtcXG5cXG5cXG59XFxuXFxuLnNvY2lhbFdyYXAge1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtZ2FwOiAycHg7XFxuXFxufVxcblxcbi5zb2NpYWxXcmFwOmhvdmVyIHtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcblxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibGV0IGRvbU1hbmlwdWxhdG9yID0gZnVuY3Rpb24gKCkge1xuXG4gICAgbGV0IGN1cnJlbnRUYWIgPSBcImhvbWVcIjtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xuICAgIGxldCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YWJzLmlkID0gXCJ0YWJzXCI7XG4gICAgY29udGVudC5hcHBlbmQoaGVhZGVyKTtcbiAgICBoZWFkZXIuYXBwZW5kKHRhYnMpO1xuXG4gICAgbGV0IHNldEJhY2tncm91bmQgPSBmdW5jdGlvbiAoaWQsIGltYWdlKSB7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlfSlgO1xuICAgIH0gXG5cbiAgICBsZXQgZ2V0VGFicyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gdGFicztcbiAgICB9XG5cbiAgICBsZXQgc2V0Q3VycmVudFRhYiA9IGZ1bmN0aW9uICh0YWIpIHtcblxuICAgICAgICBjdXJyZW50VGFiID0gdGFiO1xuICAgIH1cblxuICAgIGxldCBnZXRDdXJyZW50VGFiID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50VGFiO1xuICAgIH1cblxuICAgIGxldCBnZXRDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cbiAgXG5cbiAgICBsZXQgY3JlYXRlRGl2ID0gZnVuY3Rpb24gKGlkKSB7XG5cbiAgICAgICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ICAgICAgXG4gICAgICAgIG5ld0Rpdi5pZCA9IGlkOyAgICBcbiAgICAgICAgcmV0dXJuIG5ld0RpdjtcbiAgICB9XG5cbiAgICBsZXQgY3JlYXRlRGl2V2l0aENsYXNzID0gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuXG4gICAgICAgIGxldCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAgICAgICBcbiAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3RGl2O1xuICAgIH1cblxuICAgIGxldCBhcHBlbmRWaWFRdWVyeSA9IGZ1bmN0aW9uIChlbGVtZW50MSwgZWxlbWVudDIpIHtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQxKS5hcHBlbmQoZWxlbWVudDIpO1xuICAgIH1cblxuICAgIGxldCByZW1vdmVBbGxOb2RlcyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBsZXQgbm9kZXMgPSBnZXRDb250ZW50KCkuY2hpbGROb2RlcztcblxuICAgICAgICBub2Rlcy5mb3JFYWNoKChub2RlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUuaWQpO1xuICAgICAgICAgICAgaWYgKG5vZGUuaWQgIT0gXCJoZWFkZXJcIikge1xuXG4gICAgICAgICAgICAgICAgZ2V0Q29udGVudCgpLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSkgICAgICAgIFxuXG4gICAgICAgIGxldCBub2RlczIgPSBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXM7XG5cbiAgICAgICAgbm9kZXMyLmZvckVhY2goKG5vZGUgPT4ge1xuXG4gICAgICAgICAgICBpZiAobm9kZS5pZCA9PSBcImFib3V0UGFnZVdyYXBwZXJcIikge1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlcmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgbGV0IHdpbmRvd1Njcm9sbCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBsZXQgcHJldlNjcm9sbHBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50U2Nyb2xsUG9zKVxuXG4gICAgICAgICAgICBpZihjdXJyZW50U2Nyb2xsUG9zID4gMCkge1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdG9yeUxvZ29XcmFwXCIpLmNsYXNzTGlzdC5hZGQoXCJvcGFjaXR5XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RvcnlMb2dvV3JhcFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwib3BhY2l0eVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByZXZTY3JvbGxwb3MgPiBjdXJyZW50U2Nyb2xsUG9zKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcIm9wYWNpdHlcIik7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIikpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpLmNsYXNzTGlzdC5hZGQoXCJvcGFjaXR5XCIpO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmV2U2Nyb2xscG9zID0gY3VycmVudFNjcm9sbFBvcztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgd2luZG93U2Nyb2xsKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVEaXYsICAgICAgICBcbiAgICAgICAgc2V0Q3VycmVudFRhYixcbiAgICAgICAgZ2V0Q3VycmVudFRhYixcbiAgICAgICAgZ2V0Q29udGVudCwgICAgICAgXG4gICAgICAgIGdldFRhYnMsXG4gICAgICAgIHJlbW92ZUFsbE5vZGVzLFxuICAgICAgICBzZXRCYWNrZ3JvdW5kLFxuICAgICAgICBjcmVhdGVEaXZXaXRoQ2xhc3MsXG4gICAgICAgIGFwcGVuZFZpYVF1ZXJ5XG4gICAgfVxuXG59KClcblxuZXhwb3J0IHtcbiAgICBcbiAgICBkb21NYW5pcHVsYXRvclxufSIsImltcG9ydCBiYWNrZ3JvdW5kIGZyb20gXCIuL2ltYWdlcy9idXJnZXIuanBnXCJcbmltcG9ydCB7XG4gICAgZG9tTWFuaXB1bGF0b3Jcbn0gZnJvbSBcIi4vZG9tXCJcblxubGV0IHVwZGF0ZUhvbWUgPSBmdW5jdGlvbiAoKSB7IFxuXG4gICAgbGV0IHNldEhvbWVDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBtYWluID0gZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2KFwibWFpblwiKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoXCJtYWluQ29udGVudFwiKSk7XG4gICAgICAgIGRvbU1hbmlwdWxhdG9yLmdldENvbnRlbnQoKS5hcHBlbmQobWFpbik7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwib3BhY2l0eVwiKTtcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBtYWluLmlubmVyVGV4dCA9IFwiTGlmZSdzIHRvbyBzaG9ydCBmb3IgYm9yaW5nIGZvb2RcIiArIFwiXFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICBcIkNvbWUgYW5kIHNlZSB3aGF0IHlvdSBoYXZlIGJlZW4gbWlzc2luZy4uLlwiXG4gICAgICAgICAgICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwib3BhY2l0eVwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDApO1xuXG4gICAgICAgIGRvbU1hbmlwdWxhdG9yLnNldEJhY2tncm91bmQoXCJjb250ZW50XCIsIGJhY2tncm91bmQpOyAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgXG4gICAgICAgIHNldEhvbWVDb250ZW50XG4gICAgfTtcblxufSgpXG5cbmV4cG9ydCB7XG4gICAgdXBkYXRlSG9tZVxufTsiLCJcbmltcG9ydCB7XG4gICAgdXBkYXRlSG9tZVxufSBmcm9tIFwiLi9ob21lXCI7XG5cbmNvbnN0IHBhZ2VMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICBcbiAgICB1cGRhdGVIb21lLnNldEhvbWVDb250ZW50KCk7XG5cbn0oKVxuXG4iLCJpbXBvcnQgYmFja2dyb3VuZCBmcm9tIFwiLi4vaW1hZ2VzL2NoZWYuanBnXCJcbmltcG9ydCBsb2dvIGZyb20gXCIuLi9pbWFnZXMvbG9nbygxKS5wbmdcIlxuaW1wb3J0IHtcbiAgICBkb21NYW5pcHVsYXRvclxufSBmcm9tIFwiLi4vZG9tXCJcbmltcG9ydCB0d2l0dGVyIGZyb20gXCIuLi9pbWFnZXMvdHdpdHRlci5wbmdcIlxuaW1wb3J0IGluc3RhIGZyb20gXCIuLi9pbWFnZXMvaW5zdGEucG5nXCJcbmltcG9ydCBzdG9yeSBmcm9tIFwiLi4vaW1hZ2VzL3N0b3J5LnBuZ1wiXG5cbmxldCB1cGRhdGVBYm91dCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGRvbU1hbmlwdWxhdG9yLnNldEJhY2tncm91bmQoXCJjb250ZW50XCIsIGJhY2tncm91bmQpO1xuXG4gICAgbGV0IGN1cnJlbnRNZW51SXRlbXMgPSBhYm91dEhlbHBlcnMuZ2V0TWVudSgpO1xuICAgIGxldCBzdG9yeUNvbnRlbnQgPSBhYm91dEhlbHBlcnMuZ2V0SXBzdW0oKTtcbiAgICBsZXQgaG91cnMgPSBhYm91dEhlbHBlcnMuZ2V0SG91cnMoKTtcbiAgICBsZXQgY29udGFjdEluZm8gPSBhYm91dEhlbHBlcnMuZ2V0Q29udGFjdHMoKTtcbiAgICBsZXQgbWFpbkxvZ28gPSBhYm91dEhlbHBlcnMuY3JlYXRlSW1hZ2UobG9nbyk7XG4gICAgbGV0IHR3aXR0ZXJMb2dvID0gYWJvdXRIZWxwZXJzLmNyZWF0ZUltYWdlKHR3aXR0ZXIpO1xuICAgIGxldCBpbnN0YUxvZ28gPSBhYm91dEhlbHBlcnMuY3JlYXRlSW1hZ2UoaW5zdGEpO1xuICAgIGxldCBzdG9yeUxvZ28gPSBhYm91dEhlbHBlcnMuY3JlYXRlSW1hZ2Uoc3RvcnkpO1xuXG4gICAgbGV0IHN0b3J5TG9nb1dyYXAgPSBkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoXCJzdG9yeUxvZ29XcmFwXCIpO1xuICAgIHN0b3J5TG9nb1dyYXAuYXBwZW5kQ2hpbGQoc3RvcnlMb2dvKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hcHBlbmRDaGlsZChzdG9yeUxvZ29XcmFwKTtcblxuICAgIGxldCBhYm91dFBhZ2VXcmFwcGVyID0gZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2KFwiYWJvdXRQYWdlV3JhcHBlclwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFib3V0UGFnZVdyYXBwZXIpO1xuICAgIGFib3V0UGFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2KFwiYWJvdXRQYWdlU3RvcnlcIikpO1xuXG4gICAgbGV0IGFib3V0UGFnZVN0b3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhYm91dFBhZ2VTdG9yeVwiKTtcbiAgICBsZXQgYWJvdXRTdG9yeUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBhYm91dFN0b3J5SGVhZGVyLmlubmVyVGV4dCA9IFwiRGlnbmlzc2ltLi4uXCI7XG5cbiAgICBsZXQgYWJvdXRTdG9yeVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBhYm91dFN0b3J5VGV4dC5pbm5lclRleHQgPSBzdG9yeUNvbnRlbnQ7XG4gICAgYWJvdXRQYWdlU3RvcnkuYXBwZW5kKGFib3V0U3RvcnlIZWFkZXIpO1xuICAgIGFib3V0UGFnZVN0b3J5LmFwcGVuZChhYm91dFN0b3J5VGV4dCk7XG5cbiAgICBsZXQgYWJvdXRQYWdlTWVudSA9IGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdihcImFib3V0UGFnZU1lbnVcIik7XG4gICAgYWJvdXRQYWdlV3JhcHBlci5hcHBlbmRDaGlsZChhYm91dFBhZ2VNZW51KTtcblxuICAgIGFib3V0UGFnZU1lbnUuYXBwZW5kQ2hpbGQoZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2KFwibWVhbEl0ZW1UaXRsZVwiKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZWFsSXRlbVRpdGxlXCIpLmlubmVyVGV4dCA9IFwiU29tZSBmYXZvcml0ZXMuLi5cIjtcblxuICAgIGN1cnJlbnRNZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXG4gICAgICAgIGxldCBjdXJyZW50TWVudUl0ZW0gPSBkb21NYW5pcHVsYXRvci5jcmVhdGVEaXZXaXRoQ2xhc3MoXCJtZWFsSXRlbVwiKTtcbiAgICAgICAgYWJvdXRQYWdlTWVudS5hcHBlbmRDaGlsZChjdXJyZW50TWVudUl0ZW0pO1xuICAgICAgICBjdXJyZW50TWVudUl0ZW0uaW5uZXJUZXh0ID0gaXRlbTtcbiAgICB9KVxuXG4gICAgYWJvdXRQYWdlV3JhcHBlci5hcHBlbmRDaGlsZChkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoXCJhYm91dEZvb3RlclwiKSk7XG5cbiAgICBsZXQgZm9vdGVyQ29udGVudCA9IFtcImFib3V0Q29udGFjdFwiLCBcImFib3V0SG91cnNcIiwgXCJsb2dvV3JhcHBlclwiXTtcblxuICAgIGZvb3RlckNvbnRlbnQuZm9yRWFjaCgoaWQpID0+IHtcblxuICAgICAgICBkb21NYW5pcHVsYXRvci5hcHBlbmRWaWFRdWVyeShcIiNhYm91dEZvb3RlclwiLCBkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoaWQpKVxuXG4gICAgfSk7XG5cbiAgICBkb21NYW5pcHVsYXRvci5hcHBlbmRWaWFRdWVyeShcIiNsb2dvV3JhcHBlclwiLCBtYWluTG9nbyk7XG4gICAgZG9tTWFuaXB1bGF0b3IuYXBwZW5kVmlhUXVlcnkoXCIjYWJvdXRDb250YWN0XCIsIGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdihcImNvbnRhY3RXcmFwXCIpKTtcbiAgICBkb21NYW5pcHVsYXRvci5hcHBlbmRWaWFRdWVyeShcIiNhYm91dEhvdXJzXCIsIGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdihcImhvdXJXcmFwXCIpKTtcbiAgICBkb21NYW5pcHVsYXRvci5hcHBlbmRWaWFRdWVyeShcIiNhYm91dEZvb3RlclwiLCBkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoXCJpY29uc1wiKSk7XG5cbiAgICBsZXQgc29jaWFsV3JhcCA9IGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdldpdGhDbGFzcyhcInNvY2lhbFdyYXBcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2dvV3JhcHBlclwiKS5hcHBlbmRDaGlsZChzb2NpYWxXcmFwKTtcblxuICAgIGxldCBtZWRpYUljb25zID0gW3R3aXR0ZXJMb2dvLCBpbnN0YUxvZ29dO1xuXG4gICAgbWVkaWFJY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG5cbiAgICAgICAgZG9tTWFuaXB1bGF0b3IuYXBwZW5kVmlhUXVlcnkoXCIuc29jaWFsV3JhcFwiLCBpY29uKVxuICAgIH0pO1xuXG4gICAgY29udGFjdEluZm8uZm9yRWFjaCgoaXRlbSkgPT4ge1xuXG4gICAgICAgIGxldCBjdXJyZW50Q29udGFjdCA9IGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdldpdGhDbGFzcyhcImNvbnRhY3RJdGVtXCIpO1xuICAgICAgICBjdXJyZW50Q29udGFjdC5pbm5lclRleHQgPSBpdGVtO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RXcmFwXCIpLmFwcGVuZENoaWxkKGN1cnJlbnRDb250YWN0KTtcbiAgICB9KTtcblxuXG4gICAgaG91cnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXG4gICAgICAgIGxldCBjdXJyZW50SXRlbSA9IGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdldpdGhDbGFzcyhcImhvdXJJdGVtXCIpO1xuICAgICAgICBjdXJyZW50SXRlbS5pbm5lclRleHQgPSBpdGVtO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvdXJXcmFwXCIpLmFwcGVuZENoaWxkKGN1cnJlbnRJdGVtKTtcbiAgICB9KTtcbn1cblxubGV0IGFib3V0SGVscGVycyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGxldCBjb250YWN0SW5mbyA9IFtcIkVtYWlsOiBsZXJlc3RhdXJhbnRAZ21haWwuY29tXCIsIFwiVGVsZXBob25lOiAwODIzNDY2NlwiLCBcIkFkZHJlc3M6IDEgUG9zaCBTdHJlZXQsIFBvc2ggVG93blwiXVxuXG4gICAgbGV0IGhvdXJzID0gW1wiTW9uIC0gVGh1cnM6IDExIC0gOVwiLCBcIkZyaSAtIFNhdDogOSAtIDExXCIsIFwiU3VuOiAxMiAtIDhcIl1cblxuICAgIGxldCBpcHN1bSA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YVxuICAgICBRdWlzcXVlIGlkIGRpYW0gdmVsIHF1YW0gZWxlbWVudHVtIHB1bHZpbmFyIGV0aWFtIG5vbiBxdWFtLiBJbiBwZWxsZW50ZXNxdWUgbWFzc2EgcGxhY2VyYXQgZHVpcyB1bHRyaWNpZXMgbGFjdXMgc2VkLlxuICAgICAgRmV1Z2lhdCBuaXNsIHByZXRpdW0gZnVzY2UgaWQgdmVsaXQgdXQuIFZpdmVycmEgc3VzcGVuZGlzc2UgcG90ZW50aSBudWxsYW0gYWMgdG9ydG9yIHZpdGFlIHB1cnVzLlxuICAgICBBbnRlIGluIG5pYmggbWF1cmlzIGN1cnN1cyBtYXR0aXMgbW9sZXN0aWUuIFF1YW0gcGVsbGVudGVzcXVlIG5lYyBuYW0gYWxpcXVhbS4gXG4gICAgIFZpdmVycmEgdml0YWUgY29uZ3VlIGV1IGNvbnNlcXVhdCBhYy4gRW5pbSBudW5jIGZhdWNpYnVzIGEgcGVsbGVudGVzcXVlIHNpdCBhbWV0IHBvcnR0aXRvci4gXG4gICAgIFZpdGFlIGNvbmd1ZSBldSBjb25zZXF1YXQgYWMgZmVsaXMgZG9uZWMgZXQgb2RpbyBwZWxsZW50ZXNxdWUuXG4gICAgIFxuICAgIElwc3VtIG51bmMgYWxpcXVldCBiaWJlbmR1bSBlbmltIGZhY2lsaXNpcy4gRXUgc2VtIGludGVnZXIgdml0YWUganVzdG8gZWdldCBtYWduYSBmZXJtZW50dW0gaWFjdWxpcyBldS5cbiAgICAgVHJpc3RpcXVlIG1hZ25hIHNpdCBhbWV0IHB1cnVzIGdyYXZpZGEgcXVpcyBibGFuZGl0LiBTY2VsZXJpc3F1ZSB2YXJpdXMgbW9yYmkgZW5pbSBudW5jIGZhdWNpYnVzLiBcbiAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXG4gICAgICBBbGlxdWFtIHZlc3RpYnVsdW0gbW9yYmkgYmxhbmRpdCBjdXJzdXMgcmlzdXMuIFZlbGl0IGRpZ25pc3NpbSBzb2RhbGVzIHV0IGV1IHNlbSBpbnRlZ2VyIHZpdGFlIGp1c3RvIGVnZXQuIFxuICAgICAgVml2YW11cyBhcmN1IGZlbGlzIGJpYmVuZHVtIHV0IHRyaXN0aXF1ZSBldCBlZ2VzdGFzLiBQcmFlc2VudCB0cmlzdGlxdWUgbWFnbmEgc2l0IGFtZXQgcHVydXMgZ3JhdmlkYSBxdWlzIGJsYW5kaXQuIFxuICAgICAgU2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzIHNlZC4gRW5pbSB1dCBzZW0gdml2ZXJyYSBhbGlxdWV0IGVnZXQgc2l0IGFtZXQgdGVsbHVzIGNyYXMuXG4gICAgICBDb21tb2RvIG9kaW8gYWVuZWFuIHNlZCBhZGlwaXNjaW5nIGRpYW0gZG9uZWMuIEV1IG1pIGJpYmVuZHVtIG5lcXVlIGVnZXN0YXMuIFNjZWxlcmlzcXVlIGV1IHVsdHJpY2VzIHZpdGFlIGF1Y3Rvci5cbiAgICAgYFxuXG4gICAgbGV0IGN1cnJlbnRNZW51SXRlbXMgPSBbXCJDb2xkIFRvbWF0byBTb3VwLCBNZWxvbiAmIEN1Y3VtYmVyXCIsXG4gICAgICAgIFwiQm9ybG90dGkgQmVhbnMsIENvdXJnZXR0ZXMgJiBOYXN0dXJ0aXVtIFwiLFxuICAgICAgICBcIlJhdyBTY2FsbG9wLCBTdW5nb2xkIFRvbWF0byAmIEZlbm5lbCBCbG9zc29tXCIsXG4gICAgICAgIFwiU3Vja2xpbmcgS2lkIFNhdXNhZ2UsIFBlYXMgJiBBcnRpY2hva2VzXCIsXG4gICAgICAgIFwiU21va2VkIEVlbCwgQmVldHJvb3RzICYgRWxkZXJiZXJyaWVzXCIsXG4gICAgICAgIFwiQmxhY2sgUHVkZGluZywgV2hpdGUgUGVhY2ggJiBCb2JieSBCZWFuc1wiLFxuICAgICAgICBcIkR1Y2sgTGVnLCBUdXJuaXAgJiBQaWNrbGVkIE1vcmVsbG8gQ2hlcnJpZXNcIixcbiAgICAgICAgXCJNYW5nYWxpdHNhIENvbGxhciwgSGlzcGkgQ2FiYmFnZSAmIExhcmRvXCIsXG4gICAgICAgIFwiRG9yc2V0IEJsdWUgTG9ic3RlciwgU2FtcGhpcmUgJiBMb2JzdGVyIEJ1dHRlclwiXG4gICAgXVxuXG4gICAgbGV0IGdldElwc3VtID0gKCkgPT4ge1xuXG4gICAgICAgIHJldHVybiBpcHN1bTtcbiAgICB9XG5cbiAgICBsZXQgZ2V0TWVudSA9ICgpID0+IHtcblxuICAgICAgICByZXR1cm4gY3VycmVudE1lbnVJdGVtcztcbiAgICB9XG5cbiAgICBsZXQgZ2V0Q29udGFjdHMgPSAoKSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhY3RJbmZvO1xuICAgIH1cblxuICAgIGxldCBnZXRIb3VycyA9ICgpID0+IHtcblxuICAgICAgICByZXR1cm4gaG91cnM7XG4gICAgfVxuXG4gICAgbGV0IGNyZWF0ZUltYWdlID0gZnVuY3Rpb24gKGltZ1NyYykge1xuXG4gICAgICAgIGxldCBuZXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBuZXdJbWFnZS5zcmMgPSBpbWdTcmM7XG4gICAgICAgIHJldHVybiBuZXdJbWFnZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVJbWFnZSxcbiAgICAgICAgZ2V0SXBzdW0sXG4gICAgICAgIGdldE1lbnUsXG4gICAgICAgIGdldENvbnRhY3RzLFxuICAgICAgICBnZXRIb3Vyc1xuICAgIH1cblxufSgpXG5cblxuZXhwb3J0IHtcbiAgICB1cGRhdGVBYm91dFxufTsiLCJpbXBvcnQgeyBkb21NYW5pcHVsYXRvciB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gXCIuLi9pbWFnZXMvZm9vZC5qcGdcIjtcblxuXG5sZXQgdXBkYXRlR2FsbGVyeSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgZG9tTWFuaXB1bGF0b3Iuc2V0QmFja2dyb3VuZChcImNvbnRlbnRcIiwgYmFja2dyb3VuZCk7ICAgIFxufVxuXG5leHBvcnQge3VwZGF0ZUdhbGxlcnl9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7cGFnZUxvYWRlcn0gZnJvbSBcIi4vbG9hZGVyXCJcbmltcG9ydCB7dXBkYXRlSG9tZX0gZnJvbSBcIi4vaG9tZVwiXG5pbXBvcnQge3VwZGF0ZUdhbGxlcnl9IGZyb20gXCIuL3RhYnMvZ2FsbGVyeVwiXG5pbXBvcnQge3VwZGF0ZUFib3V0fSBmcm9tIFwiLi90YWJzL2Fib3V0XCJcbmltcG9ydCB7ZG9tTWFuaXB1bGF0b3J9IGZyb20gXCIuL2RvbVwiXG5cbmNvbnN0IHRhYkxvZ2ljID0gZnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgdGFiRnVuY3Rpb25zID0ge1xuXG4gICAgICAgIFwiaG9tZVwiOiB1cGRhdGVIb21lLnNldEhvbWVDb250ZW50LFxuICAgICAgICBcImdhbGxlcnlcIjogdXBkYXRlR2FsbGVyeSxcbiAgICAgICAgXCJhYm91dFwiOiB1cGRhdGVBYm91dCxcbiAgICB9XG5cbiAgICBsZXQgdGFiVGl0bGVzID0gW1wiSG9tZVwiLCBcIkdhbGxlcnlcIiwgXCJBYm91dFwiXTtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMzsgeCsrKSB7XG5cbiAgICAgICAgbGV0IGlubmVyVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5uZXJUYWIuY2xhc3NMaXN0LmFkZChcImlubmVyVGFiXCIpO1xuICAgICAgICBpbm5lclRhYi5pbm5lclRleHQgPSB0YWJUaXRsZXNbeF07XG4gICAgICAgIGlubmVyVGFiLmlkID0gdGFiVGl0bGVzW3hdO1xuICAgICAgICBkb21NYW5pcHVsYXRvci5nZXRUYWJzKCkuYXBwZW5kKGlubmVyVGFiKTtcbiAgICAgICAgaW5uZXJUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhYkNoYW5nZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0YWJDaGFuZ2UoZSkge1xuXG4gICAgICAgIC8vc3RvcHMgZnJvbSB0cmlnZ2VyaW5nIHRhYiBzd2l0Y2ggb24gdGhlIHNhbWUgdGFiIG92ZXIgYW5kIG92ZXJcbiAgICAgICAgaWYoZS50YXJnZXQuaW5uZXJUZXh0ICE9IGRvbU1hbmlwdWxhdG9yLmdldEN1cnJlbnRUYWIoKSkgeyAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBkb21NYW5pcHVsYXRvci5yZW1vdmVBbGxOb2RlcygpO1xuXG4gICAgICAgXG5cbiAgICAgICAvLyBkb21NYW5pcHVsYXRvci5yZW1vdmVBbGxOb2RlcygpO1xuICAgICAgICBkb21NYW5pcHVsYXRvci5zZXRDdXJyZW50VGFiKGUudGFyZ2V0LmlubmVyVGV4dCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlubmVyVGV4dCk7XG4gICAgICAgIGxldCBmdW5jID0gdGFiRnVuY3Rpb25zW2UudGFyZ2V0LmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpXTtcblxuICAgICAgICBmdW5jKCk7fVxuXG5cbiAgXG5cbiAgICBlbHNlIHtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgICAgIFxuICAgIH0gIFxuXG59KClcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=