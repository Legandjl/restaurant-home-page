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
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nbody {\n\n    font-family: 'Courgette', cursive;\n    font-size: 28px;\n    background-color: #F5F5F5;\n}\n\n#content {\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    min-height: 100vh;\n    background-size: cover;\n}\n\n#header {\n    position: fixed;\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 1fr 1fr;\n    color: white;\n    font-family: 'Raleway', sans-serif;\n}\n\n#main {\n\n    grid-row: 1;\n    display: grid;\n    border-style: solid white 2px;\n    transition: all 0.5s ease-in-out;\n    grid-column: 1;\n    justify-self: center;\n    align-self: center;\n    grid-template-columns: 1fr;\n    color: #FFFFFF;\n    font-size: 24px;\n    line-height: 1.6;\n    font-family: 'Raleway', sans-serif;\n}\n\n#tabs {\n\n    grid-column: 1;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 6px;\n    margin: 6px;\n}\n\n.innerTab {\n\n\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    justify-self: center;\n    width: 100%;\n    text-decoration: underline;\n    padding: 20px;\n\n}\n\n.innerTab:hover {\n\n    scale: 1.1;\n    cursor: pointer;\n\n}\n\n.mainAbout {\n\n    grid-template-columns: 1fr 1fr;\n}\n\n.opacity {\n\n    opacity: 0;\n}\n\n#aboutContent {\n\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: minmax(60vh, 1fr) 70vh 30vh;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-row: 3;\n    grid-column: 1/-1;\n    background-color: #EEEEEE;\n\n}\n\n#aboutContent p {\n\n    font-family: 'Raleway', sans-serif;\n}\n\n#aboutLeftBlock {\n\n    grid-column: 1;\n    grid-template-rows: 1fr 2fr;\n    border-style: solid;\n    border-width: 2px;\n    align-self: center;\n    align-content: center;\n    padding-right: 10px;\n    padding-left: 10px;\n    font-size: 18px;\n\n}\n\n#aboutTopBlock {\n\n    display: grid;\n    grid-row: 1;\n    grid-template-rows: 1fr 2fr;\n    border-width: 2px;\n    grid-column: 1/-1;\n    align-self: center;\n    align-content: center;\n    font-size: 18px;\n    line-height: 26px;\n    justify-content: center;\n    height: 100%;\n}\n\n#aboutCenter {\n    grid-column: 1/-1;\n    display: grid;\n    align-self: center;\n    align-content: center;\n    background-color: #0E1111;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-content: center;\n    height: 100%;\n}\n\nh2 {\n\n    justify-self: center;\n    align-self: center;\n    font-size: 24px;\n}\n\n#mealItemTitle {\n\n    grid-row: 1;\n    grid-column: 1/-1;\n    color: white;\n    justify-self: center;\n    align-self: start;\n\n}\n\n.mealItem {\n\n    border-bottom: solid;\n    border-top: solid;\n    border-color: white;\n    border-width: 1px;\n    justify-self: center;\n    margin: 40px;\n    color: white;\n    padding: 10px;\n    font-size: 18px;\n}\n\n#aboutBottom {\n\n    grid-column: 1/-1;\n    grid-row: 3;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr auto;\n    background-color: #EEEEEE;\n    font-family: 'Raleway', sans-serif;\n\n}\n\n#aboutContact {\n\n\n    grid-column: 1;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-content: center;\n    align-items: center;\n    font-size: 18px;\n\n\n\n}\n\n#contactWrap {\n\n    grid-row: 2;\n    justify-self: center;\n    display: grid;\n    grid-gap: 10px;\n}\n\n#aboutHours {\n\n\n    grid-column: 3;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-content: center;\n    align-items: center;\n    font-size: 18px;\n    justify-items: center;\n\n\n\n}\n\n#hourWrap {\n\n    grid-row: 2;\n\n\n}\n\n#logoWrapper {\n    grid-column: 2;\n    grid-row: 1;\n    border-width: 2px;\n    align-self: center;\n    justify-self: center;\n    margin: 10px;\n    display: grid;\n    grid-template-rows: 1fr auto;\n    justify-items: center;\n    justify-content: center;\n    grid-gap: 20px;\n\n\n}\n\n.socialWrap {\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 2px;\n\n}\n\n.socialWrap:hover {\n\n    cursor: pointer;\n\n\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nbody {\n\n    font-family: 'Courgette', cursive;\n    font-size: 28px;\n    background-color: #F5F5F5;\n}\n\n#content {\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    min-height: 100vh;\n    background-size: cover;\n}\n\n#header {\n    position: fixed;\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 1fr 1fr;\n    color: white;\n    font-family: 'Raleway', sans-serif;\n}\n\n#main {\n\n    grid-row: 1;\n    display: grid;\n    border-style: solid white 2px;\n    transition: all 0.5s ease-in-out;\n    grid-column: 1;\n    justify-self: center;\n    align-self: center;\n    grid-template-columns: 1fr;\n    color: #FFFFFF;\n    font-size: 24px;\n    line-height: 1.6;\n    font-family: 'Raleway', sans-serif;\n}\n\n#tabs {\n\n    grid-column: 1;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 6px;\n    margin: 6px;\n}\n\n.innerTab {\n\n\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    justify-self: center;\n    width: 100%;\n    text-decoration: underline;\n    padding: 20px;\n\n}\n\n.innerTab:hover {\n\n    scale: 1.1;\n    cursor: pointer;\n\n}\n\n.mainAbout {\n\n    grid-template-columns: 1fr 1fr;\n}\n\n.opacity {\n\n    opacity: 0;\n}\n\n#aboutContent {\n\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: minmax(60vh, 1fr) 70vh 30vh;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-row: 3;\n    grid-column: 1/-1;\n    background-color: #EEEEEE;\n\n}\n\n#aboutContent p {\n\n    font-family: 'Raleway', sans-serif;\n}\n\n#aboutLeftBlock {\n\n    grid-column: 1;\n    grid-template-rows: 1fr 2fr;\n    border-style: solid;\n    border-width: 2px;\n    align-self: center;\n    align-content: center;\n    padding-right: 10px;\n    padding-left: 10px;\n    font-size: 18px;\n\n}\n\n#aboutTopBlock {\n\n    display: grid;\n    grid-row: 1;\n    grid-template-rows: 1fr 2fr;\n    border-width: 2px;\n    grid-column: 1/-1;\n    align-self: center;\n    align-content: center;\n    font-size: 18px;\n    line-height: 26px;\n    justify-content: center;\n    height: 100%;\n}\n\n#aboutCenter {\n    grid-column: 1/-1;\n    display: grid;\n    align-self: center;\n    align-content: center;\n    background-color: #0E1111;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-content: center;\n    height: 100%;\n}\n\nh2 {\n\n    justify-self: center;\n    align-self: center;\n    font-size: 24px;\n}\n\n#mealItemTitle {\n\n    grid-row: 1;\n    grid-column: 1/-1;\n    color: white;\n    justify-self: center;\n    align-self: start;\n\n}\n\n.mealItem {\n\n    border-bottom: solid;\n    border-top: solid;\n    border-color: white;\n    border-width: 1px;\n    justify-self: center;\n    margin: 40px;\n    color: white;\n    padding: 10px;\n    font-size: 18px;\n}\n\n#aboutBottom {\n\n    grid-column: 1/-1;\n    grid-row: 3;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr auto;\n    background-color: #EEEEEE;\n    font-family: 'Raleway', sans-serif;\n\n}\n\n#aboutContact {\n\n\n    grid-column: 1;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-content: center;\n    align-items: center;\n    font-size: 18px;\n\n\n\n}\n\n#contactWrap {\n\n    grid-row: 2;\n    justify-self: center;\n    display: grid;\n    grid-gap: 10px;\n}\n\n#aboutHours {\n\n\n    grid-column: 3;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-content: center;\n    align-items: center;\n    font-size: 18px;\n    justify-items: center;\n\n\n\n}\n\n#hourWrap {\n\n    grid-row: 2;\n\n\n}\n\n#logoWrapper {\n    grid-column: 2;\n    grid-row: 1;\n    border-width: 2px;\n    align-self: center;\n    justify-self: center;\n    margin: 10px;\n    display: grid;\n    grid-template-rows: 1fr auto;\n    justify-items: center;\n    justify-content: center;\n    grid-gap: 20px;\n\n\n}\n\n.socialWrap {\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 2px;\n\n}\n\n.socialWrap:hover {\n\n    cursor: pointer;\n\n\n\n}"],"sourceRoot":""}]);
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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateAbout": () => (/* binding */ updateAbout)
/* harmony export */ });
/* harmony import */ var _chef_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chef.jpg */ "./src/chef.jpg");
/* harmony import */ var _logo_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo(1).png */ "./src/logo(1).png");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _twitter_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./twitter.png */ "./src/twitter.png");
/* harmony import */ var _insta_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./insta.png */ "./src/insta.png");





let updateAbout = function () {

    _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.setBackground("content", _chef_jpg__WEBPACK_IMPORTED_MODULE_0__);

    let currentMenuItems = aboutHelpers.getMenu();
    let ipsum = aboutHelpers.getIpsum();
    let hours = aboutHelpers.getHours();
    let contactInfo = aboutHelpers.getContacts();
    let mainLogo = aboutHelpers.createImage(_logo_1_png__WEBPACK_IMPORTED_MODULE_1__);
    let twitterLogo = aboutHelpers.createImage(_twitter_png__WEBPACK_IMPORTED_MODULE_3__);
    let instaLogo = aboutHelpers.createImage(_insta_png__WEBPACK_IMPORTED_MODULE_4__);

    let aboutContent = _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDiv("aboutContent");
    document.body.appendChild(aboutContent);
    aboutContent.appendChild(_dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDiv("aboutTopBlock"));

    let topBlock = document.querySelector("#aboutTopBlock");
    let topHeader = document.createElement("h2");
    topHeader.innerText = "Our Story";

    let topPara = document.createElement("p");
    topPara.innerText = ipsum;
    topBlock.append(topHeader);
    topBlock.append(topPara);

    let aboutCenter = _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDiv("aboutCenter");
    aboutContent.appendChild(aboutCenter);

    aboutCenter.appendChild(_dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDiv("mealItemTitle"));
    document.querySelector("#mealItemTitle").innerText = "Some favorites...";


    for (let x = 0; x < currentMenuItems.length; x++) {

        let currentMenuItem = _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDivWithClass("mealItem");
        aboutCenter.appendChild(currentMenuItem);
        currentMenuItem.innerText = currentMenuItems[x];
    }


    aboutContent.appendChild(_dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDiv("aboutBottom"));

    let bottomContent = ["aboutContact", "aboutHours", "logoWrapper"];

    bottomContent.forEach((id) => {

        _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.appendViaQuery("#aboutBottom", _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDiv(id))

    });

    _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.appendViaQuery("#logoWrapper", mainLogo);
    _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.appendViaQuery("#aboutContact", _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDiv("contactWrap"));
    _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.appendViaQuery("#aboutHours", _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDiv("hourWrap"));
    _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.appendViaQuery("#aboutBottom", _dom__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createDiv("icons"));

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

/***/ "./src/burger.jpg":
/*!************************!*\
  !*** ./src/burger.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad73cd861ff2ddc66a10.jpg";

/***/ }),

/***/ "./src/chef.jpg":
/*!**********************!*\
  !*** ./src/chef.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0cefa993534eae46bfb4.jpg";

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

    let getBody = function () {

        return document.body;
    }

    let getMain = function () {

        return main;
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

    let getHeader = function () {

        return header;
    }

    let createDiv = function (id) {

        let newDiv = document.createElement("div");
        console.log("generating div");
        newDiv.id = id;
        console.log(newDiv)
        return newDiv;
    }

    let createDivWithClass = function (className) {

        let newDiv = document.createElement("div");
        console.log("generating div");
        newDiv.classList.add(className);
        console.log(newDiv)
        return newDiv;
    }

    let appendViaQuery = function(element1, element2) {

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

            if (node.id == "aboutContent") {

                document.body.removeChild(node);
                console.log("here")
            }
        }))


    }

    let windowScroll = function () {

        let prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("header").style.opacity = "100";
            } else {
                document.getElementById("header").style.opacity = "0";
            }
            prevScrollpos = currentScrollPos;
        }

    }

    windowScroll();

    //these elements will always be present on the page
    //content wrapper and header



    return {
        createDiv,
        getMain,
        setCurrentTab,
        getCurrentTab,
        getContent,
        getHeader,
        getTabs,
        removeAllNodes,
        getBody,
        setBackground,
        createDivWithClass,
         appendViaQuery
    };

}()



/***/ }),

/***/ "./src/food.jpg":
/*!**********************!*\
  !*** ./src/food.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26767aaf1f0dc47eb170.jpg";

/***/ }),

/***/ "./src/gallery.js":
/*!************************!*\
  !*** ./src/gallery.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateGallery": () => (/* binding */ updateGallery)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _food_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food.jpg */ "./src/food.jpg");




let updateGallery = function() {

    _dom__WEBPACK_IMPORTED_MODULE_0__.domManipulator.setBackground("content", _food_jpg__WEBPACK_IMPORTED_MODULE_1__);    
}



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
/* harmony import */ var _burger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger.jpg */ "./src/burger.jpg");
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

        _dom__WEBPACK_IMPORTED_MODULE_1__.domManipulator.setBackground("content", _burger_jpg__WEBPACK_IMPORTED_MODULE_0__);      
    }

    return {
       
        setHomeContent
    };

}()



/***/ }),

/***/ "./src/insta.png":
/*!***********************!*\
  !*** ./src/insta.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "239da8678fff17fc7907.png";

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

/***/ "./src/logo(1).png":
/*!*************************!*\
  !*** ./src/logo(1).png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0de6b954dbd1161df6be.png";

/***/ }),

/***/ "./src/twitter.png":
/*!*************************!*\
  !*** ./src/twitter.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa1356ec0f8a9c369ff1.png";

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
/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery */ "./src/gallery.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom */ "./src/dom.js");







const tabLogic = function() {

    let tabFunctions = {

        "home": _home__WEBPACK_IMPORTED_MODULE_2__.updateHome.setHomeContent,
        "gallery": _gallery__WEBPACK_IMPORTED_MODULE_3__.updateGallery,
        "about": _about__WEBPACK_IMPORTED_MODULE_4__.updateAbout,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9zcmMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vc3JjL2xvYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLHdzQkFBd3NCLGdCQUFnQixpQkFBaUIsZ0JBQWdCLHNCQUFzQixvQkFBb0IsK0JBQStCLEdBQUcsMEpBQTBK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SUFBSSw0REFBeUI7O0FBRTdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNURDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNjO0FBQ0Y7QUFDTTtBQUNKO0FBQ0M7O0FBRXBDOztBQUVBOztBQUVBLGdCQUFnQiw0REFBeUI7QUFDekMsbUJBQW1CLG1EQUFhO0FBQ2hDLGlCQUFpQiwrQ0FBVztBQUM1Qjs7QUFFQTs7QUFFQSxtQkFBbUIsT0FBTzs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFzQjtBQUM5QjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUNBQWlDLDhEQUE0QixLOztBQUU3RCxZQUFZLCtEQUE2Qjs7OztBQUl6QztBQUNBLFFBQVEsOERBQTRCO0FBQ3BDO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7QUFDQTs7QUFFQSxLOztBQUVBLENBQUMiLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cXG52Mi4wIHwgMjAxMTAxMjZcXG5MaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gICAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuYm9keSB7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmdldHRlJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG5cXG4jY29udGVudCB7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI21haW4ge1xcblxcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCB3aGl0ZSAycHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxufVxcblxcbiN0YWJzIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtZ2FwOiA2cHg7XFxuICAgIG1hcmdpbjogNnB4O1xcbn1cXG5cXG4uaW5uZXJUYWIge1xcblxcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbn1cXG5cXG4uaW5uZXJUYWI6aG92ZXIge1xcblxcbiAgICBzY2FsZTogMS4xO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxufVxcblxcbi5tYWluQWJvdXQge1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5vcGFjaXR5IHtcXG5cXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuI2Fib3V0Q29udGVudCB7XFxuXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCg2MHZoLCAxZnIpIDcwdmggMzB2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC1yb3c6IDM7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcblxcbn1cXG5cXG4jYWJvdXRDb250ZW50IHAge1xcblxcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jYWJvdXRMZWZ0QmxvY2sge1xcblxcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcblxcbn1cXG5cXG4jYWJvdXRUb3BCbG9jayB7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNhYm91dENlbnRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBFMTExMTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaDIge1xcblxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbiNtZWFsSXRlbVRpdGxlIHtcXG5cXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG5cXG59XFxuXFxuLm1lYWxJdGVtIHtcXG5cXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbiNhYm91dEJvdHRvbSB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBncmlkLXJvdzogMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG5cXG59XFxuXFxuI2Fib3V0Q29udGFjdCB7XFxuXFxuXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG5cXG5cXG5cXG59XFxuXFxuI2NvbnRhY3RXcmFwIHtcXG5cXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWdhcDogMTBweDtcXG59XFxuXFxuI2Fib3V0SG91cnMge1xcblxcblxcbiAgICBncmlkLWNvbHVtbjogMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXG5cXG5cXG59XFxuXFxuI2hvdXJXcmFwIHtcXG5cXG4gICAgZ3JpZC1yb3c6IDI7XFxuXFxuXFxufVxcblxcbiNsb2dvV3JhcHBlciB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1nYXA6IDIwcHg7XFxuXFxuXFxufVxcblxcbi5zb2NpYWxXcmFwIHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLWdhcDogMnB4O1xcblxcbn1cXG5cXG4uc29jaWFsV3JhcDpob3ZlciB7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG5cXG5cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUZJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOztBQUVBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7SUFXSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7OztJQUlJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixrQ0FBa0M7QUFDdEM7O0FBRUE7O0lBRUksV0FBVztJQUNYLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQ0FBa0M7QUFDdEM7O0FBRUE7O0lBRUksY0FBYztJQUNkLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTs7O0lBR0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsYUFBYTs7QUFFakI7O0FBRUE7O0lBRUksVUFBVTtJQUNWLGVBQWU7O0FBRW5COztBQUVBOztJQUVJLDhCQUE4QjtBQUNsQzs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiwrQ0FBK0M7SUFDL0Msa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIseUJBQXlCOztBQUU3Qjs7QUFFQTs7SUFFSSxrQ0FBa0M7QUFDdEM7O0FBRUE7O0lBRUksY0FBYztJQUNkLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlOztBQUVuQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUJBQWlCOztBQUVyQjs7QUFFQTs7SUFFSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsa0NBQWtDOztBQUV0Qzs7QUFFQTs7O0lBR0ksY0FBYztJQUNkLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixlQUFlOzs7O0FBSW5COztBQUVBOztJQUVJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHFCQUFxQjs7OztBQUl6Qjs7QUFFQTs7SUFFSSxXQUFXOzs7QUFHZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixjQUFjOzs7QUFHbEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixhQUFhOztBQUVqQjs7QUFFQTs7SUFFSSxlQUFlOzs7O0FBSW5CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXFxudjIuMCB8IDIwMTEwMTI2XFxuTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICAgIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcblxcbiAgICBmb250LWZhbWlseTogJ0NvdXJnZXR0ZScsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuXFxuI2NvbnRlbnQge1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNtYWluIHtcXG5cXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQgd2hpdGUgMnB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMS42O1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jdGFicyB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLWdhcDogNnB4O1xcbiAgICBtYXJnaW46IDZweDtcXG59XFxuXFxuLmlubmVyVGFiIHtcXG5cXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG59XFxuXFxuLmlubmVyVGFiOmhvdmVyIHtcXG5cXG4gICAgc2NhbGU6IDEuMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG4ubWFpbkFib3V0IHtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4ub3BhY2l0eSB7XFxuXFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbiNhYm91dENvbnRlbnQge1xcblxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoNjB2aCwgMWZyKSA3MHZoIDMwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtcm93OiAzO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcXG5cXG59XFxuXFxuI2Fib3V0Q29udGVudCBwIHtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2Fib3V0TGVmdEJsb2NrIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG5cXG59XFxuXFxuI2Fib3V0VG9wQmxvY2sge1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jYWJvdXRDZW50ZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTExMTE7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmgyIHtcXG5cXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4jbWVhbEl0ZW1UaXRsZSB7XFxuXFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuXFxufVxcblxcbi5tZWFsSXRlbSB7XFxuXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkO1xcbiAgICBib3JkZXItdG9wOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IDQwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4jYWJvdXRCb3R0b20ge1xcblxcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZ3JpZC1yb3c6IDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuXFxufVxcblxcbiNhYm91dENvbnRhY3Qge1xcblxcblxcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuXFxuXFxuXFxufVxcblxcbiNjb250YWN0V3JhcCB7XFxuXFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDEwcHg7XFxufVxcblxcbiNhYm91dEhvdXJzIHtcXG5cXG5cXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxuXFxufVxcblxcbiNob3VyV3JhcCB7XFxuXFxuICAgIGdyaWQtcm93OiAyO1xcblxcblxcbn1cXG5cXG4jbG9nb1dyYXBwZXIge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtZ2FwOiAyMHB4O1xcblxcblxcbn1cXG5cXG4uc29jaWFsV3JhcCB7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC1nYXA6IDJweDtcXG5cXG59XFxuXFxuLnNvY2lhbFdyYXA6aG92ZXIge1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuXFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYmFja2dyb3VuZCBmcm9tIFwiLi9jaGVmLmpwZ1wiXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi9sb2dvKDEpLnBuZ1wiXG5pbXBvcnQge1xuICAgIGRvbU1hbmlwdWxhdG9yXG59IGZyb20gXCIuL2RvbVwiXG5pbXBvcnQgdHdpdHRlciBmcm9tIFwiLi90d2l0dGVyLnBuZ1wiXG5pbXBvcnQgaW5zdGEgZnJvbSBcIi4vaW5zdGEucG5nXCJcbmxldCB1cGRhdGVBYm91dCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGRvbU1hbmlwdWxhdG9yLnNldEJhY2tncm91bmQoXCJjb250ZW50XCIsIGJhY2tncm91bmQpO1xuXG4gICAgbGV0IGN1cnJlbnRNZW51SXRlbXMgPSBhYm91dEhlbHBlcnMuZ2V0TWVudSgpO1xuICAgIGxldCBpcHN1bSA9IGFib3V0SGVscGVycy5nZXRJcHN1bSgpO1xuICAgIGxldCBob3VycyA9IGFib3V0SGVscGVycy5nZXRIb3VycygpO1xuICAgIGxldCBjb250YWN0SW5mbyA9IGFib3V0SGVscGVycy5nZXRDb250YWN0cygpO1xuICAgIGxldCBtYWluTG9nbyA9IGFib3V0SGVscGVycy5jcmVhdGVJbWFnZShsb2dvKTtcbiAgICBsZXQgdHdpdHRlckxvZ28gPSBhYm91dEhlbHBlcnMuY3JlYXRlSW1hZ2UodHdpdHRlcik7XG4gICAgbGV0IGluc3RhTG9nbyA9IGFib3V0SGVscGVycy5jcmVhdGVJbWFnZShpbnN0YSk7XG5cbiAgICBsZXQgYWJvdXRDb250ZW50ID0gZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2KFwiYWJvdXRDb250ZW50XCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWJvdXRDb250ZW50KTtcbiAgICBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2KFwiYWJvdXRUb3BCbG9ja1wiKSk7XG5cbiAgICBsZXQgdG9wQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fib3V0VG9wQmxvY2tcIik7XG4gICAgbGV0IHRvcEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0b3BIZWFkZXIuaW5uZXJUZXh0ID0gXCJPdXIgU3RvcnlcIjtcblxuICAgIGxldCB0b3BQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdG9wUGFyYS5pbm5lclRleHQgPSBpcHN1bTtcbiAgICB0b3BCbG9jay5hcHBlbmQodG9wSGVhZGVyKTtcbiAgICB0b3BCbG9jay5hcHBlbmQodG9wUGFyYSk7XG5cbiAgICBsZXQgYWJvdXRDZW50ZXIgPSBkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoXCJhYm91dENlbnRlclwiKTtcbiAgICBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRDZW50ZXIpO1xuXG4gICAgYWJvdXRDZW50ZXIuYXBwZW5kQ2hpbGQoZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2KFwibWVhbEl0ZW1UaXRsZVwiKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZWFsSXRlbVRpdGxlXCIpLmlubmVyVGV4dCA9IFwiU29tZSBmYXZvcml0ZXMuLi5cIjtcblxuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBjdXJyZW50TWVudUl0ZW1zLmxlbmd0aDsgeCsrKSB7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRNZW51SXRlbSA9IGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdldpdGhDbGFzcyhcIm1lYWxJdGVtXCIpO1xuICAgICAgICBhYm91dENlbnRlci5hcHBlbmRDaGlsZChjdXJyZW50TWVudUl0ZW0pO1xuICAgICAgICBjdXJyZW50TWVudUl0ZW0uaW5uZXJUZXh0ID0gY3VycmVudE1lbnVJdGVtc1t4XTtcbiAgICB9XG5cblxuICAgIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoXCJhYm91dEJvdHRvbVwiKSk7XG5cbiAgICBsZXQgYm90dG9tQ29udGVudCA9IFtcImFib3V0Q29udGFjdFwiLCBcImFib3V0SG91cnNcIiwgXCJsb2dvV3JhcHBlclwiXTtcblxuICAgIGJvdHRvbUNvbnRlbnQuZm9yRWFjaCgoaWQpID0+IHtcblxuICAgICAgICBkb21NYW5pcHVsYXRvci5hcHBlbmRWaWFRdWVyeShcIiNhYm91dEJvdHRvbVwiLCBkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoaWQpKVxuXG4gICAgfSk7XG5cbiAgICBkb21NYW5pcHVsYXRvci5hcHBlbmRWaWFRdWVyeShcIiNsb2dvV3JhcHBlclwiLCBtYWluTG9nbyk7XG4gICAgZG9tTWFuaXB1bGF0b3IuYXBwZW5kVmlhUXVlcnkoXCIjYWJvdXRDb250YWN0XCIsIGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdihcImNvbnRhY3RXcmFwXCIpKTtcbiAgICBkb21NYW5pcHVsYXRvci5hcHBlbmRWaWFRdWVyeShcIiNhYm91dEhvdXJzXCIsIGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdihcImhvdXJXcmFwXCIpKTtcbiAgICBkb21NYW5pcHVsYXRvci5hcHBlbmRWaWFRdWVyeShcIiNhYm91dEJvdHRvbVwiLCBkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoXCJpY29uc1wiKSk7XG5cbiAgICBsZXQgc29jaWFsV3JhcCA9IGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdldpdGhDbGFzcyhcInNvY2lhbFdyYXBcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2dvV3JhcHBlclwiKS5hcHBlbmRDaGlsZChzb2NpYWxXcmFwKTtcblxuICAgIGxldCBtZWRpYUljb25zID0gW3R3aXR0ZXJMb2dvLCBpbnN0YUxvZ29dO1xuXG4gICAgbWVkaWFJY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG5cbiAgICAgICAgZG9tTWFuaXB1bGF0b3IuYXBwZW5kVmlhUXVlcnkoXCIuc29jaWFsV3JhcFwiLCBpY29uKVxuICAgIH0pO1xuXG4gICAgY29udGFjdEluZm8uZm9yRWFjaCgoaXRlbSkgPT4ge1xuXG4gICAgICAgIGxldCBjdXJyZW50Q29udGFjdCA9IGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdldpdGhDbGFzcyhcImNvbnRhY3RJdGVtXCIpO1xuICAgICAgICBjdXJyZW50Q29udGFjdC5pbm5lclRleHQgPSBpdGVtO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RXcmFwXCIpLmFwcGVuZENoaWxkKGN1cnJlbnRDb250YWN0KTtcbiAgICB9KTtcblxuXG4gICAgaG91cnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXG4gICAgICAgIGxldCBjdXJyZW50SXRlbSA9IGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdldpdGhDbGFzcyhcImhvdXJJdGVtXCIpO1xuICAgICAgICBjdXJyZW50SXRlbS5pbm5lclRleHQgPSBpdGVtO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvdXJXcmFwXCIpLmFwcGVuZENoaWxkKGN1cnJlbnRJdGVtKTtcbiAgICB9KTtcbn1cblxubGV0IGFib3V0SGVscGVycyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGxldCBjb250YWN0SW5mbyA9IFtcIkVtYWlsOiBsZXJlc3RhdXJhbnRAZ21haWwuY29tXCIsIFwiVGVsZXBob25lOiAwODIzNDY2NlwiLCBcIkFkZHJlc3M6IDEgUG9zaCBTdHJlZXQsIFBvc2ggVG93blwiXVxuICAgIGxldCBob3VycyA9IFtcIk1vbiAtIFRodXJzOiAxMSAtIDlcIiwgXCJGcmkgLSBTYXQ6IDkgLSAxMVwiLCBcIlN1bjogMTIgLSA4XCJdXG5cbiAgICBsZXQgaXBzdW0gPSBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWFcbiAgICAgUXVpc3F1ZSBpZCBkaWFtIHZlbCBxdWFtIGVsZW1lbnR1bSBwdWx2aW5hciBldGlhbSBub24gcXVhbS4gSW4gcGVsbGVudGVzcXVlIG1hc3NhIHBsYWNlcmF0IGR1aXMgdWx0cmljaWVzIGxhY3VzIHNlZC5cbiAgICAgIEZldWdpYXQgbmlzbCBwcmV0aXVtIGZ1c2NlIGlkIHZlbGl0IHV0LiBWaXZlcnJhIHN1c3BlbmRpc3NlIHBvdGVudGkgbnVsbGFtIGFjIHRvcnRvciB2aXRhZSBwdXJ1cy5cbiAgICAgQW50ZSBpbiBuaWJoIG1hdXJpcyBjdXJzdXMgbWF0dGlzIG1vbGVzdGllLiBRdWFtIHBlbGxlbnRlc3F1ZSBuZWMgbmFtIGFsaXF1YW0uIFxuICAgICBWaXZlcnJhIHZpdGFlIGNvbmd1ZSBldSBjb25zZXF1YXQgYWMuIEVuaW0gbnVuYyBmYXVjaWJ1cyBhIHBlbGxlbnRlc3F1ZSBzaXQgYW1ldCBwb3J0dGl0b3IuIFxuICAgICBWaXRhZSBjb25ndWUgZXUgY29uc2VxdWF0IGFjIGZlbGlzIGRvbmVjIGV0IG9kaW8gcGVsbGVudGVzcXVlLlxuICAgIElwc3VtIG51bmMgYWxpcXVldCBiaWJlbmR1bSBlbmltIGZhY2lsaXNpcy4gRXUgc2VtIGludGVnZXIgdml0YWUganVzdG8gZWdldCBtYWduYSBmZXJtZW50dW0gaWFjdWxpcyBldS5cbiAgICAgVHJpc3RpcXVlIG1hZ25hIHNpdCBhbWV0IHB1cnVzIGdyYXZpZGEgcXVpcyBibGFuZGl0LiBTY2VsZXJpc3F1ZSB2YXJpdXMgbW9yYmkgZW5pbSBudW5jIGZhdWNpYnVzLiBcbiAgICAgYFxuXG4gICAgbGV0IGN1cnJlbnRNZW51SXRlbXMgPSBbXCJDb2xkIFRvbWF0byBTb3VwLCBNZWxvbiAmIEN1Y3VtYmVyXCIsXG4gICAgICAgIFwiQm9ybG90dGkgQmVhbnMsIENvdXJnZXR0ZXMgJiBOYXN0dXJ0aXVtIFwiLFxuICAgICAgICBcIlJhdyBTY2FsbG9wLCBTdW5nb2xkIFRvbWF0byAmIEZlbm5lbCBCbG9zc29tXCIsXG4gICAgICAgIFwiU3Vja2xpbmcgS2lkIFNhdXNhZ2UsIFBlYXMgJiBBcnRpY2hva2VzXCIsXG4gICAgICAgIFwiU21va2VkIEVlbCwgQmVldHJvb3RzICYgRWxkZXJiZXJyaWVzXCIsXG4gICAgICAgIFwiQmxhY2sgUHVkZGluZywgV2hpdGUgUGVhY2ggJiBCb2JieSBCZWFuc1wiLFxuICAgICAgICBcIkR1Y2sgTGVnLCBUdXJuaXAgJiBQaWNrbGVkIE1vcmVsbG8gQ2hlcnJpZXNcIixcbiAgICAgICAgXCJNYW5nYWxpdHNhIENvbGxhciwgSGlzcGkgQ2FiYmFnZSAmIExhcmRvXCIsXG4gICAgICAgIFwiRG9yc2V0IEJsdWUgTG9ic3RlciwgU2FtcGhpcmUgJiBMb2JzdGVyIEJ1dHRlclwiXG4gICAgXVxuXG4gICAgbGV0IGdldElwc3VtID0gKCkgPT4ge1xuXG4gICAgICAgIHJldHVybiBpcHN1bTtcbiAgICB9XG5cbiAgICBsZXQgZ2V0TWVudSA9ICgpID0+IHtcblxuICAgICAgICByZXR1cm4gY3VycmVudE1lbnVJdGVtcztcbiAgICB9XG5cbiAgICBsZXQgZ2V0Q29udGFjdHMgPSAoKSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhY3RJbmZvO1xuICAgIH1cblxuICAgIGxldCBnZXRIb3VycyA9ICgpID0+IHtcblxuICAgICAgICByZXR1cm4gaG91cnM7XG4gICAgfVxuXG4gICAgbGV0IGNyZWF0ZUltYWdlID0gZnVuY3Rpb24gKGltZ1NyYykge1xuXG4gICAgICAgIGxldCBuZXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBuZXdJbWFnZS5zcmMgPSBpbWdTcmM7XG4gICAgICAgIHJldHVybiBuZXdJbWFnZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVJbWFnZSxcbiAgICAgICAgZ2V0SXBzdW0sXG4gICAgICAgIGdldE1lbnUsXG4gICAgICAgIGdldENvbnRhY3RzLFxuICAgICAgICBnZXRIb3Vyc1xuICAgIH1cblxufSgpXG5cblxuZXhwb3J0IHtcbiAgICB1cGRhdGVBYm91dFxufTsiLCJsZXQgZG9tTWFuaXB1bGF0b3IgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBsZXQgY3VycmVudFRhYiA9IFwiaG9tZVwiO1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XG4gICAgbGV0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhYnMuaWQgPSBcInRhYnNcIjtcbiAgICBjb250ZW50LmFwcGVuZChoZWFkZXIpO1xuICAgIGhlYWRlci5hcHBlbmQodGFicyk7XG5cblxuXG5cbiAgICBsZXQgc2V0QmFja2dyb3VuZCA9IGZ1bmN0aW9uIChpZCwgaW1hZ2UpIHtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2V9KWA7XG5cbiAgICB9XG5cbiAgICBsZXQgZ2V0Qm9keSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcbiAgICB9XG5cbiAgICBsZXQgZ2V0TWFpbiA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gbWFpbjtcbiAgICB9XG5cbiAgICBsZXQgZ2V0VGFicyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gdGFicztcbiAgICB9XG5cbiAgICBsZXQgc2V0Q3VycmVudFRhYiA9IGZ1bmN0aW9uICh0YWIpIHtcblxuICAgICAgICBjdXJyZW50VGFiID0gdGFiO1xuICAgIH1cblxuICAgIGxldCBnZXRDdXJyZW50VGFiID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50VGFiO1xuICAgIH1cblxuICAgIGxldCBnZXRDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cblxuICAgIGxldCBnZXRIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9XG5cbiAgICBsZXQgY3JlYXRlRGl2ID0gZnVuY3Rpb24gKGlkKSB7XG5cbiAgICAgICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2VuZXJhdGluZyBkaXZcIik7XG4gICAgICAgIG5ld0Rpdi5pZCA9IGlkO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdEaXYpXG4gICAgICAgIHJldHVybiBuZXdEaXY7XG4gICAgfVxuXG4gICAgbGV0IGNyZWF0ZURpdldpdGhDbGFzcyA9IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcblxuICAgICAgICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZW5lcmF0aW5nIGRpdlwiKTtcbiAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3RGl2KVxuICAgICAgICByZXR1cm4gbmV3RGl2O1xuICAgIH1cblxuICAgIGxldCBhcHBlbmRWaWFRdWVyeSA9IGZ1bmN0aW9uKGVsZW1lbnQxLCBlbGVtZW50Mikge1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudDEpLmFwcGVuZChlbGVtZW50Mik7XG4gICAgfVxuXG5cblxuICAgIGxldCByZW1vdmVBbGxOb2RlcyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBsZXQgbm9kZXMgPSBnZXRDb250ZW50KCkuY2hpbGROb2RlcztcblxuICAgICAgICBub2Rlcy5mb3JFYWNoKChub2RlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUuaWQpO1xuICAgICAgICAgICAgaWYgKG5vZGUuaWQgIT0gXCJoZWFkZXJcIikge1xuXG4gICAgICAgICAgICAgICAgZ2V0Q29udGVudCgpLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSlcblxuICAgICAgICBsZXQgbm9kZXMyID0gZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzO1xuXG5cbiAgICAgICAgbm9kZXMyLmZvckVhY2goKG5vZGUgPT4ge1xuXG4gICAgICAgICAgICBpZiAobm9kZS5pZCA9PSBcImFib3V0Q29udGVudFwiKSB7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSlcblxuXG4gICAgfVxuXG4gICAgbGV0IHdpbmRvd1Njcm9sbCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBsZXQgcHJldlNjcm9sbHBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICBpZiAocHJldlNjcm9sbHBvcyA+IGN1cnJlbnRTY3JvbGxQb3MpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKS5zdHlsZS5vcGFjaXR5ID0gXCIxMDBcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIikuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldlNjcm9sbHBvcyA9IGN1cnJlbnRTY3JvbGxQb3M7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHdpbmRvd1Njcm9sbCgpO1xuXG4gICAgLy90aGVzZSBlbGVtZW50cyB3aWxsIGFsd2F5cyBiZSBwcmVzZW50IG9uIHRoZSBwYWdlXG4gICAgLy9jb250ZW50IHdyYXBwZXIgYW5kIGhlYWRlclxuXG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZURpdixcbiAgICAgICAgZ2V0TWFpbixcbiAgICAgICAgc2V0Q3VycmVudFRhYixcbiAgICAgICAgZ2V0Q3VycmVudFRhYixcbiAgICAgICAgZ2V0Q29udGVudCxcbiAgICAgICAgZ2V0SGVhZGVyLFxuICAgICAgICBnZXRUYWJzLFxuICAgICAgICByZW1vdmVBbGxOb2RlcyxcbiAgICAgICAgZ2V0Qm9keSxcbiAgICAgICAgc2V0QmFja2dyb3VuZCxcbiAgICAgICAgY3JlYXRlRGl2V2l0aENsYXNzLFxuICAgICAgICAgYXBwZW5kVmlhUXVlcnlcbiAgICB9O1xuXG59KClcblxuZXhwb3J0IHtcbiAgICBkb21NYW5pcHVsYXRvclxufTsiLCJpbXBvcnQgeyBkb21NYW5pcHVsYXRvciB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IGJhY2tncm91bmQgZnJvbSBcIi4vZm9vZC5qcGdcIjtcblxuXG5sZXQgdXBkYXRlR2FsbGVyeSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgZG9tTWFuaXB1bGF0b3Iuc2V0QmFja2dyb3VuZChcImNvbnRlbnRcIiwgYmFja2dyb3VuZCk7ICAgIFxufVxuXG5leHBvcnQge3VwZGF0ZUdhbGxlcnl9OyIsImltcG9ydCBiYWNrZ3JvdW5kIGZyb20gXCIuL2J1cmdlci5qcGdcIlxuaW1wb3J0IHtcbiAgICBkb21NYW5pcHVsYXRvclxufSBmcm9tIFwiLi9kb21cIlxuXG5sZXQgdXBkYXRlSG9tZSA9IGZ1bmN0aW9uICgpIHsgXG5cbiAgICBsZXQgc2V0SG9tZUNvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IG1haW4gPSBkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoXCJtYWluXCIpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdihcIm1haW5Db250ZW50XCIpKTtcbiAgICAgICAgZG9tTWFuaXB1bGF0b3IuZ2V0Q29udGVudCgpLmFwcGVuZChtYWluKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJvcGFjaXR5XCIpO1xuICAgICAgICB9LCAwKTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1haW4uaW5uZXJUZXh0ID0gXCJMaWZlJ3MgdG9vIHNob3J0IGZvciBib3JpbmcgZm9vZFwiICsgXCJcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgIFwiQ29tZSBhbmQgc2VlIHdoYXQgeW91IGhhdmUgYmVlbiBtaXNzaW5nLi4uXCJcbiAgICAgICAgICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGFjaXR5XCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgZG9tTWFuaXB1bGF0b3Iuc2V0QmFja2dyb3VuZChcImNvbnRlbnRcIiwgYmFja2dyb3VuZCk7ICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICBcbiAgICAgICAgc2V0SG9tZUNvbnRlbnRcbiAgICB9O1xuXG59KClcblxuZXhwb3J0IHtcbiAgICB1cGRhdGVIb21lXG59OyIsIlxuaW1wb3J0IHtcbiAgICB1cGRhdGVIb21lXG59IGZyb20gXCIuL2hvbWVcIjtcblxuY29uc3QgcGFnZUxvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgIFxuICAgIHVwZGF0ZUhvbWUuc2V0SG9tZUNvbnRlbnQoKTtcblxufSgpXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7cGFnZUxvYWRlcn0gZnJvbSBcIi4vbG9hZGVyXCJcbmltcG9ydCB7dXBkYXRlSG9tZX0gZnJvbSBcIi4vaG9tZVwiXG5pbXBvcnQge3VwZGF0ZUdhbGxlcnl9IGZyb20gXCIuL2dhbGxlcnlcIlxuaW1wb3J0IHt1cGRhdGVBYm91dH0gZnJvbSBcIi4vYWJvdXRcIlxuaW1wb3J0IHtkb21NYW5pcHVsYXRvcn0gZnJvbSBcIi4vZG9tXCJcblxuY29uc3QgdGFiTG9naWMgPSBmdW5jdGlvbigpIHtcblxuICAgIGxldCB0YWJGdW5jdGlvbnMgPSB7XG5cbiAgICAgICAgXCJob21lXCI6IHVwZGF0ZUhvbWUuc2V0SG9tZUNvbnRlbnQsXG4gICAgICAgIFwiZ2FsbGVyeVwiOiB1cGRhdGVHYWxsZXJ5LFxuICAgICAgICBcImFib3V0XCI6IHVwZGF0ZUFib3V0LFxuICAgIH1cblxuICAgIGxldCB0YWJUaXRsZXMgPSBbXCJIb21lXCIsIFwiR2FsbGVyeVwiLCBcIkFib3V0XCJdO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAzOyB4KyspIHtcblxuICAgICAgICBsZXQgaW5uZXJUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbm5lclRhYi5jbGFzc0xpc3QuYWRkKFwiaW5uZXJUYWJcIik7XG4gICAgICAgIGlubmVyVGFiLmlubmVyVGV4dCA9IHRhYlRpdGxlc1t4XTtcbiAgICAgICAgaW5uZXJUYWIuaWQgPSB0YWJUaXRsZXNbeF07XG4gICAgICAgIGRvbU1hbmlwdWxhdG9yLmdldFRhYnMoKS5hcHBlbmQoaW5uZXJUYWIpO1xuICAgICAgICBpbm5lclRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFiQ2hhbmdlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRhYkNoYW5nZShlKSB7XG5cbiAgICAgICAgLy9zdG9wcyBmcm9tIHRyaWdnZXJpbmcgdGFiIHN3aXRjaCBvbiB0aGUgc2FtZSB0YWIgb3ZlciBhbmQgb3ZlclxuICAgICAgICBpZihlLnRhcmdldC5pbm5lclRleHQgIT0gZG9tTWFuaXB1bGF0b3IuZ2V0Q3VycmVudFRhYigpKSB7ICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRvbU1hbmlwdWxhdG9yLnJlbW92ZUFsbE5vZGVzKCk7XG5cbiAgICAgICBcblxuICAgICAgIC8vIGRvbU1hbmlwdWxhdG9yLnJlbW92ZUFsbE5vZGVzKCk7XG4gICAgICAgIGRvbU1hbmlwdWxhdG9yLnNldEN1cnJlbnRUYWIoZS50YXJnZXQuaW5uZXJUZXh0KTtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaW5uZXJUZXh0KTtcbiAgICAgICAgbGV0IGZ1bmMgPSB0YWJGdW5jdGlvbnNbZS50YXJnZXQuaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCldO1xuXG4gICAgICAgIGZ1bmMoKTt9XG5cblxuICBcblxuICAgIGVsc2Uge1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgICAgXG4gICAgfSAgXG5cbn0oKVxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==