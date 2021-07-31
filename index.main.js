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
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nbody {\n\n    font-family: 'Courgette', cursive;\n    font-size: 28px;\n    background-color: #F5F5F5;\n   \n}\n\n  \n\n\n#content {\n\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    min-height: 100vh;\n    background-size: cover;    \n  \n}\n\n\n\n#storyLogoWrap {\n\n    grid-column: 2;\n    grid-row: 2;\n    justify-self: center;\n    align-self: center;\n\n}\n\n\n#storyLogoWrap img {\n\n    width: 400px;\n    height: auto;\n}\n\n#header {\n    position: fixed;\n\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 1fr 1fr;\n    color: white;\n    font-family: 'Raleway', sans-serif;\n    font-size: 0.8em;\n    transition: all 0.5s ease-in-out;\n}\n\n#header,\n#storyLogoWrap {\n\n    transition: all 0.5s ease-in-out;\n}\n\n#main {\n\n    grid-row: 1;\n    display: grid;\n    border-style: solid white 2px;\n \n    grid-column: 2;\n    justify-self: center;\n    align-self: center;\n    grid-template-columns: 1fr;\n    color: #FFFFFF;\n    font-size: 24px;\n    line-height: 1.6;\n    font-family: 'Raleway', sans-serif;\n}\n\n#tabs {\n\n    grid-column: 1;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 6px;\n    margin: 6px;\n}\n\n.innerTab {\n\n\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    justify-self: center;\n    width: 100%;\n    text-decoration: underline;\n    padding: 20px;\n\n}\n\n.innerTab:hover {\n\n    scale: 1.1;\n    cursor: pointer;  \n\n}\n\n.mainAbout {\n\n    grid-template-columns: 1fr 1fr;\n}\n\n.opacity {\n\n    opacity: 0 !important;\n    transition: all 0.9s ease-in-out;\n\n}\n\n#aboutPageWrapper {\n\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: minmax(65vh, 1fr) minmax(70vh, 1fr) auto;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-row: 3;\n    grid-column: 1/-1;\n    background-color: #EEEEEE;\n    width:100%;\n    \n\n}\n\n#aboutPageWrapper p {\n\n    font-family: 'Raleway', sans-serif;\n}\n\n\n\n#aboutPageStory {\n\n    display: grid;\n    grid-row: 1;\n    border-width: 2px;\n    grid-column: 1/-1;\n    align-self: center;\n    align-content: center;\n    font-size: 18px;\n    line-height: 26px;\n    justify-content: center;\n    height: 100%;\n    margin: 40px;\n    margin-top: 0px;\n    grid-gap: 30px;\n}\n\n#aboutPageMenu {\n    grid-column: 1/-1;\n    display: grid;\n    align-self: center;\n    align-content: center;\n    background-color: #0E1111;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-content: center;\n    height: 100%;\n}\n\nh2 {\n\n    justify-self: center;\n    align-self: center;\n    font-size: 24px;\n}\n\n#mealItemTitle {\n\n    grid-row: 1;\n    grid-column: 1/-1;\n    color: white;\n    justify-self: center;\n    align-self: start;\n\n}\n\n.mealItem {\n\n    border-bottom: solid;\n    border-top: solid;\n    border-color: white;\n    border-width: 1px;\n    justify-self: center;\n    margin: 40px;\n    color: white;\n    padding: 10px;\n    font-size: 18px;\n}\n\n\n\n#aboutContact {\n\n    grid-column: 1;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-content: center;\n    align-items: center;\n    font-size: 18px;\n    max-height: 30vh;\n}\n\n#contactWrap {\n\n    grid-row: 2;\n    justify-self: center;\n    display: grid;\n    grid-gap: 10px;\n}\n\n#aboutHours {\n\n    grid-column: 3;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-content: center;\n    align-items: center;\n    font-size: 18px;\n    justify-items: center;\n    max-height: 30vh;\n}\n\n#hourWrap {\n\n    grid-row: 2;\n}\n\n#logoWrapper {\n    grid-column: 2;\n    grid-row: 1;\n    border-width: 2px;\n    align-self: center;\n    justify-self: center;\n    margin: 10px;\n    display: grid;\n    grid-template-rows: 1fr auto;\n    justify-items: center;\n    justify-content: center;\n    grid-gap: 20px;\n\n}\n\n.socialWrap {\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 2px;\n\n}\n\n.socialWrap:hover {\n\n    cursor: pointer;\n\n}\n\n#galleryWrapper {\n\n    display: grid;\n    grid-template-columns: repeat(4, minmax(200px, 1fr));\n    grid-template-rows: repeat(4, 1fr);\n    grid-auto-rows: 1fr;\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n    grid-auto-flow: dense;\n    height: 100vh;\n\n}\n\n#galleryWrapper img {\n\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    max-height: 100vh;\n\n}\n\n.galleryDiv {\n\n    display: grid;\n    grid-column: 1/-1;\n}\n\n#image0 {\n\n    grid-column: span 2;\n}\n\n#image1 {\n\n    grid-column: span 2;\n}\n\n#image2 {\n\n    grid-column: span 2;\n}\n\n#image3 {\n\n    grid-column: span 2;\n\n}\n\n#image4 {\n\n    grid-column: 1/-1;\n}\n\n#footer {\n\n    grid-column: 1/-1;\n    grid-row: -1;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr auto;\n    background-color: #EEEEEE;\n    font-family: 'Raleway', sans-serif;\n \n    height: 30vh; \n\n}\n\n\n@media (max-width: 1100px) {\n\n\n\n    #logoWrapper img {\n       \n        width:100%;\n        height:auto;  \n\n    }   \n\n\n  }\n\n  @media (max-width: 750px) {\n\n\n  #aboutHours {\n\n    font-size: 12px;\n   \n}\n\n\n\n#aboutContact {\n\n   \n    font-size: 12px;\n}\n\n\n#galleryWrapper {\n\n    grid-template-columns: 1fr;\n}\n\n\n#footer {\n\n    grid-row: 6;\n}\n\n#main img {\n\n   \n   width:300px;\n    height:auto;\n}\n\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nbody {\n\n    font-family: 'Courgette', cursive;\n    font-size: 28px;\n    background-color: #F5F5F5;\n   \n}\n\n  \n\n\n#content {\n\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    min-height: 100vh;\n    background-size: cover;    \n  \n}\n\n\n\n#storyLogoWrap {\n\n    grid-column: 2;\n    grid-row: 2;\n    justify-self: center;\n    align-self: center;\n\n}\n\n\n#storyLogoWrap img {\n\n    width: 400px;\n    height: auto;\n}\n\n#header {\n    position: fixed;\n\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 1fr 1fr;\n    color: white;\n    font-family: 'Raleway', sans-serif;\n    font-size: 0.8em;\n    transition: all 0.5s ease-in-out;\n}\n\n#header,\n#storyLogoWrap {\n\n    transition: all 0.5s ease-in-out;\n}\n\n#main {\n\n    grid-row: 1;\n    display: grid;\n    border-style: solid white 2px;\n \n    grid-column: 2;\n    justify-self: center;\n    align-self: center;\n    grid-template-columns: 1fr;\n    color: #FFFFFF;\n    font-size: 24px;\n    line-height: 1.6;\n    font-family: 'Raleway', sans-serif;\n}\n\n#tabs {\n\n    grid-column: 1;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 6px;\n    margin: 6px;\n}\n\n.innerTab {\n\n\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    justify-self: center;\n    width: 100%;\n    text-decoration: underline;\n    padding: 20px;\n\n}\n\n.innerTab:hover {\n\n    scale: 1.1;\n    cursor: pointer;  \n\n}\n\n.mainAbout {\n\n    grid-template-columns: 1fr 1fr;\n}\n\n.opacity {\n\n    opacity: 0 !important;\n    transition: all 0.9s ease-in-out;\n\n}\n\n#aboutPageWrapper {\n\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: minmax(65vh, 1fr) minmax(70vh, 1fr) auto;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-row: 3;\n    grid-column: 1/-1;\n    background-color: #EEEEEE;\n    width:100%;\n    \n\n}\n\n#aboutPageWrapper p {\n\n    font-family: 'Raleway', sans-serif;\n}\n\n\n\n#aboutPageStory {\n\n    display: grid;\n    grid-row: 1;\n    border-width: 2px;\n    grid-column: 1/-1;\n    align-self: center;\n    align-content: center;\n    font-size: 18px;\n    line-height: 26px;\n    justify-content: center;\n    height: 100%;\n    margin: 40px;\n    margin-top: 0px;\n    grid-gap: 30px;\n}\n\n#aboutPageMenu {\n    grid-column: 1/-1;\n    display: grid;\n    align-self: center;\n    align-content: center;\n    background-color: #0E1111;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-content: center;\n    height: 100%;\n}\n\nh2 {\n\n    justify-self: center;\n    align-self: center;\n    font-size: 24px;\n}\n\n#mealItemTitle {\n\n    grid-row: 1;\n    grid-column: 1/-1;\n    color: white;\n    justify-self: center;\n    align-self: start;\n\n}\n\n.mealItem {\n\n    border-bottom: solid;\n    border-top: solid;\n    border-color: white;\n    border-width: 1px;\n    justify-self: center;\n    margin: 40px;\n    color: white;\n    padding: 10px;\n    font-size: 18px;\n}\n\n\n\n#aboutContact {\n\n    grid-column: 1;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-content: center;\n    align-items: center;\n    font-size: 18px;\n    max-height: 30vh;\n}\n\n#contactWrap {\n\n    grid-row: 2;\n    justify-self: center;\n    display: grid;\n    grid-gap: 10px;\n}\n\n#aboutHours {\n\n    grid-column: 3;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-content: center;\n    align-items: center;\n    font-size: 18px;\n    justify-items: center;\n    max-height: 30vh;\n}\n\n#hourWrap {\n\n    grid-row: 2;\n}\n\n#logoWrapper {\n    grid-column: 2;\n    grid-row: 1;\n    border-width: 2px;\n    align-self: center;\n    justify-self: center;\n    margin: 10px;\n    display: grid;\n    grid-template-rows: 1fr auto;\n    justify-items: center;\n    justify-content: center;\n    grid-gap: 20px;\n\n}\n\n.socialWrap {\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 2px;\n\n}\n\n.socialWrap:hover {\n\n    cursor: pointer;\n\n}\n\n#galleryWrapper {\n\n    display: grid;\n    grid-template-columns: repeat(4, minmax(200px, 1fr));\n    grid-template-rows: repeat(4, 1fr);\n    grid-auto-rows: 1fr;\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n    grid-auto-flow: dense;\n    height: 100vh;\n\n}\n\n#galleryWrapper img {\n\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    max-height: 100vh;\n\n}\n\n.galleryDiv {\n\n    display: grid;\n    grid-column: 1/-1;\n}\n\n#image0 {\n\n    grid-column: span 2;\n}\n\n#image1 {\n\n    grid-column: span 2;\n}\n\n#image2 {\n\n    grid-column: span 2;\n}\n\n#image3 {\n\n    grid-column: span 2;\n\n}\n\n#image4 {\n\n    grid-column: 1/-1;\n}\n\n#footer {\n\n    grid-column: 1/-1;\n    grid-row: -1;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr auto;\n    background-color: #EEEEEE;\n    font-family: 'Raleway', sans-serif;\n \n    height: 30vh; \n\n}\n\n\n@media (max-width: 1100px) {\n\n\n\n    #logoWrapper img {\n       \n        width:100%;\n        height:auto;  \n\n    }   \n\n\n  }\n\n  @media (max-width: 750px) {\n\n\n  #aboutHours {\n\n    font-size: 12px;\n   \n}\n\n\n\n#aboutContact {\n\n   \n    font-size: 12px;\n}\n\n\n#galleryWrapper {\n\n    grid-template-columns: 1fr;\n}\n\n\n#footer {\n\n    grid-row: 6;\n}\n\n#main img {\n\n   \n   width:300px;\n    height:auto;\n}\n\n  }"],"sourceRoot":""}]);
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

   

    nodes.forEach((node => {
       
        if (node.id != "header") {

            getContent().removeChild(node);
        }
    }))

    let nodes2 = document.body.childNodes;

    nodes2.forEach((node => {

        if (node.id == "aboutPageWrapper") {

            document.body.removeChild(node);
           
        }
    }))
}

let windowScroll = function () {

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
      

        if (document.querySelector("#storyLogoWrap") != null) {

            if (currentScrollPos > 0) {

                document.querySelector("#storyLogoWrap").classList.add("opacity");
            } else {

                document.querySelector("#storyLogoWrap").classList.remove("opacity");
            }

        }

        if (prevScrollpos > currentScrollPos) {
            document.querySelector("#header").classList.remove("opacity");

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

/***/ "./src/images/burger.jpg":
/*!*******************************!*\
  !*** ./src/images/burger.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8699163673553f606137.jpg";

/***/ }),

/***/ "./src/images/chef.jpg":
/*!*****************************!*\
  !*** ./src/images/chef.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b9e10e6e778f69b80de.jpg";

/***/ }),

/***/ "./src/images/gallery1.jpg":
/*!*********************************!*\
  !*** ./src/images/gallery1.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e3fde252d9bf720a092.jpg";

/***/ }),

/***/ "./src/images/gallery2.jpg":
/*!*********************************!*\
  !*** ./src/images/gallery2.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "175bf07f649382000498.jpg";

/***/ }),

/***/ "./src/images/gallery3.jpg":
/*!*********************************!*\
  !*** ./src/images/gallery3.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99b0610283220bd7c0b0.jpg";

/***/ }),

/***/ "./src/images/gallery4.jpg":
/*!*********************************!*\
  !*** ./src/images/gallery4.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64d0ab0e0cafaa7042ab.jpg";

/***/ }),

/***/ "./src/images/gallery5.jpg":
/*!*********************************!*\
  !*** ./src/images/gallery5.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "439a5791d526d6bc2f72.jpg";

/***/ }),

/***/ "./src/images/homeLogo.png":
/*!*********************************!*\
  !*** ./src/images/homeLogo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "881341450f74fb00cc5d.png";

/***/ }),

/***/ "./src/images/insta.png":
/*!******************************!*\
  !*** ./src/images/insta.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09a7fb88686acc007bbf.png";

/***/ }),

/***/ "./src/images/logo(1).png":
/*!********************************!*\
  !*** ./src/images/logo(1).png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9dbf3efb49c84354002.png";

/***/ }),

/***/ "./src/images/story.png":
/*!******************************!*\
  !*** ./src/images/story.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "869494d89db9f13288d2.png";

/***/ }),

/***/ "./src/images/twitter.png":
/*!********************************!*\
  !*** ./src/images/twitter.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "108036059a16504bedc6.png";

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

    document.querySelector("#galleryWrapper").appendChild(footer);
}



/***/ }),

/***/ "./src/tabs/home.js":
/*!**************************!*\
  !*** ./src/tabs/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateHome": () => (/* binding */ updateHome)
/* harmony export */ });
/* harmony import */ var _images_burger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/burger.jpg */ "./src/images/burger.jpg");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom */ "./src/dom.js");
/* harmony import */ var _images_homeLogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/homeLogo.png */ "./src/images/homeLogo.png");



let updateHome = function () {


    let setHomeContent = function () {

        let main = _dom__WEBPACK_IMPORTED_MODULE_1__.domManipulator.createDiv("main");
        
        _dom__WEBPACK_IMPORTED_MODULE_1__.domManipulator.getContent().append(main);
        setTimeout(function () {
            main.appendChild(_dom__WEBPACK_IMPORTED_MODULE_1__.domManipulator.createImage(_images_homeLogo_png__WEBPACK_IMPORTED_MODULE_2__));

        }, 0);


        _dom__WEBPACK_IMPORTED_MODULE_1__.domManipulator.setBackground("content", _images_burger_jpg__WEBPACK_IMPORTED_MODULE_0__);
    }

    return {

        setHomeContent
    };

}()



/***/ }),

/***/ "./src/tabs/loader.js":
/*!****************************!*\
  !*** ./src/tabs/loader.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/tabs/home.js");



const pageLoader = function () {
   
    _home__WEBPACK_IMPORTED_MODULE_0__.updateHome.setHomeContent();

}()



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
/* harmony import */ var _tabs_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/loader */ "./src/tabs/loader.js");
/* harmony import */ var _tabs_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/home */ "./src/tabs/home.js");
/* harmony import */ var _tabs_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/gallery */ "./src/tabs/gallery.js");
/* harmony import */ var _tabs_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/about */ "./src/tabs/about.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom */ "./src/dom.js");







const tabLogic = function () {

    let tabFunctions = {

        "home": _tabs_home__WEBPACK_IMPORTED_MODULE_2__.updateHome.setHomeContent,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9zcmMvdGFicy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS8uL3NyYy90YWJzL2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2UvLi9zcmMvdGFicy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlLy4vc3JjL3RhYnMvbG9hZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0Esd3NCQUF3c0IsZ0JBQWdCLGlCQUFpQixnQkFBZ0Isc0JBQXNCLG9CQUFv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RkFBa0YsS0FBSyxxRkFBcUYsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLGdCQUFnQixVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sUUFBUSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLGFBQWEsVUFBVSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxTQUFTLE1BQU0sVUFBVSxVQUFVLFlBQVksY0FBYyxRQUFRLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksY0FBYyxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLFNBQVMsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFNBQVMsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVks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QkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNpQjtBQUdsQjtBQUdHO0FBR0Y7QUFHUDs7QUFFZDs7QUFFQTs7QUFFQSxnQkFBZ0IsaUVBQXlCO0FBQ3pDLG1CQUFtQix3REFBYTtBQUNoQyxpQkFBaUIsb0RBQVc7QUFDNUI7O0FBRUE7O0FBRUEsbUJBQW1CLE9BQU87O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBc0I7QUFDOUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtDQUFrQyw4REFBNEIsSzs7QUFFOUQsWUFBWSwrREFBNkI7QUFDekMsWUFBWSw4REFBNEIscUI7QUFDeEMsc0U7QUFDQSxtQjs7O0FBR0EsU0FBUzs7QUFFVDtBQUNBOzs7QUFHQTs7QUFFQSxDQUFDLEUiLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cXG52Mi4wIHwgMjAxMTAxMjZcXG5MaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gICAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuYm9keSB7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmdldHRlJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbiAgIFxcbn1cXG5cXG4gIFxcblxcblxcbiNjb250ZW50IHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgICAgXFxuICBcXG59XFxuXFxuXFxuXFxuI3N0b3J5TG9nb1dyYXAge1xcblxcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxufVxcblxcblxcbiNzdG9yeUxvZ29XcmFwIGltZyB7XFxuXFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuI2hlYWRlcixcXG4jc3RvcnlMb2dvV3JhcCB7XFxuXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jbWFpbiB7XFxuXFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkIHdoaXRlIDJweDtcXG4gXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI3RhYnMge1xcblxcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC1nYXA6IDZweDtcXG4gICAgbWFyZ2luOiA2cHg7XFxufVxcblxcbi5pbm5lclRhYiB7XFxuXFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxufVxcblxcbi5pbm5lclRhYjpob3ZlciB7XFxuXFxuICAgIHNjYWxlOiAxLjE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgIFxcblxcbn1cXG5cXG4ubWFpbkFib3V0IHtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4ub3BhY2l0eSB7XFxuXFxuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuOXMgZWFzZS1pbi1vdXQ7XFxuXFxufVxcblxcbiNhYm91dFBhZ2VXcmFwcGVyIHtcXG5cXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDY1dmgsIDFmcikgbWlubWF4KDcwdmgsIDFmcikgYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC1yb3c6IDM7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBcXG5cXG59XFxuXFxuI2Fib3V0UGFnZVdyYXBwZXIgcCB7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcblxcbiNhYm91dFBhZ2VTdG9yeSB7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDQwcHg7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgZ3JpZC1nYXA6IDMwcHg7XFxufVxcblxcbiNhYm91dFBhZ2VNZW51IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEUxMTExO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oMiB7XFxuXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuI21lYWxJdGVtVGl0bGUge1xcblxcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcblxcbn1cXG5cXG4ubWVhbEl0ZW0ge1xcblxcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcXG4gICAgYm9yZGVyLXRvcDogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiA0MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuXFxuXFxuI2Fib3V0Q29udGFjdCB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWF4LWhlaWdodDogMzB2aDtcXG59XFxuXFxuI2NvbnRhY3RXcmFwIHtcXG5cXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWdhcDogMTBweDtcXG59XFxuXFxuI2Fib3V0SG91cnMge1xcblxcbiAgICBncmlkLWNvbHVtbjogMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LWhlaWdodDogMzB2aDtcXG59XFxuXFxuI2hvdXJXcmFwIHtcXG5cXG4gICAgZ3JpZC1yb3c6IDI7XFxufVxcblxcbiNsb2dvV3JhcHBlciB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1nYXA6IDIwcHg7XFxuXFxufVxcblxcbi5zb2NpYWxXcmFwIHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLWdhcDogMnB4O1xcblxcbn1cXG5cXG4uc29jaWFsV3JhcDpob3ZlciB7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59XFxuXFxuI2dhbGxlcnlXcmFwcGVyIHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGdyaWQtcm93OiAxLy0xO1xcbiAgICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxufVxcblxcbiNnYWxsZXJ5V3JhcHBlciBpbWcge1xcblxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxuXFxufVxcblxcbi5nYWxsZXJ5RGl2IHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcblxcbiNpbWFnZTAge1xcblxcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG4jaW1hZ2UxIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuXFxuI2ltYWdlMiB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbiNpbWFnZTMge1xcblxcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcblxcbn1cXG5cXG4jaW1hZ2U0IHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcblxcbiNmb290ZXIge1xcblxcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZ3JpZC1yb3c6IC0xO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiBcXG4gICAgaGVpZ2h0OiAzMHZoOyBcXG5cXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xcblxcblxcblxcbiAgICAjbG9nb1dyYXBwZXIgaW1nIHtcXG4gICAgICAgXFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgaGVpZ2h0OmF1dG87ICBcXG5cXG4gICAgfSAgIFxcblxcblxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuXFxuXFxuICAjYWJvdXRIb3VycyB7XFxuXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICBcXG59XFxuXFxuXFxuXFxuI2Fib3V0Q29udGFjdCB7XFxuXFxuICAgXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuXFxuI2dhbGxlcnlXcmFwcGVyIHtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxufVxcblxcblxcbiNmb290ZXIge1xcblxcbiAgICBncmlkLXJvdzogNjtcXG59XFxuXFxuI21haW4gaW1nIHtcXG5cXG4gICBcXG4gICB3aWR0aDozMDBweDtcXG4gICAgaGVpZ2h0OmF1dG87XFxufVxcblxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlGSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHdCQUF3QjtBQUM1Qjs7QUFFQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0lBV0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7Ozs7SUFJSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZix5QkFBeUI7O0FBRTdCOzs7OztBQUtBOztJQUVJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixzQkFBc0I7O0FBRTFCOzs7O0FBSUE7O0lBRUksY0FBYztJQUNkLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsa0JBQWtCOztBQUV0Qjs7O0FBR0E7O0lBRUksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlOztJQUVmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGdDQUFnQztBQUNwQzs7QUFFQTs7O0lBR0ksZ0NBQWdDO0FBQ3BDOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsNkJBQTZCOztJQUU3QixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsY0FBYztJ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Q1osYUFBYTtJQUNiLGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLGtDQUFrQzs7SUFFbEMsWUFBWTs7QUFFaEI7OztBQUdBOzs7O0lBSUk7O1FBRUksVUFBVTtRQUNWLFdBQVc7O0lBRWY7OztFQUdGOztFQUVBOzs7RUFHQTs7SUFFRSxlQUFlOztBQUVuQjs7OztBQUlBOzs7SUFHSSxlQUFlO0FBQ25COzs7QUFHQTs7SUFFSSwwQkFBMEI7QUFDOUI7OztBQUdBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7O0dBR0csV0FBVztJQUNWLFdBQVc7QUFDZjs7RUFFRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xcbnYyLjAgfCAyMDExMDEyNlxcbkxpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyZ2V0dGUnLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxuICAgXFxufVxcblxcbiAgXFxuXFxuXFxuI2NvbnRlbnQge1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgICBcXG4gIFxcbn1cXG5cXG5cXG5cXG4jc3RvcnlMb2dvV3JhcCB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG59XFxuXFxuXFxuI3N0b3J5TG9nb1dyYXAgaW1nIHtcXG5cXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jaGVhZGVyLFxcbiNzdG9yeUxvZ29XcmFwIHtcXG5cXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNtYWluIHtcXG5cXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQgd2hpdGUgMnB4O1xcbiBcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMS42O1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jdGFicyB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLWdhcDogNnB4O1xcbiAgICBtYXJnaW46IDZweDtcXG59XFxuXFxuLmlubmVyVGFiIHtcXG5cXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG59XFxuXFxuLmlubmVyVGFiOmhvdmVyIHtcXG5cXG4gICAgc2NhbGU6IDEuMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyAgXFxuXFxufVxcblxcbi5tYWluQWJvdXQge1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5vcGFjaXR5IHtcXG5cXG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC45cyBlYXNlLWluLW91dDtcXG5cXG59XFxuXFxuI2Fib3V0UGFnZVdyYXBwZXIge1xcblxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoNjV2aCwgMWZyKSBtaW5tYXgoNzB2aCwgMWZyKSBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXJvdzogMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIFxcblxcbn1cXG5cXG4jYWJvdXRQYWdlV3JhcHBlciBwIHtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuXFxuI2Fib3V0UGFnZVN0b3J5IHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBncmlkLWdhcDogMzBweDtcXG59XFxuXFxuI2Fib3V0UGFnZU1lbnUge1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTExMTE7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmgyIHtcXG5cXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4jbWVhbEl0ZW1UaXRsZSB7XFxuXFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuXFxufVxcblxcbi5tZWFsSXRlbSB7XFxuXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkO1xcbiAgICBib3JkZXItdG9wOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IDQwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5cXG5cXG4jYWJvdXRDb250YWN0IHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzMHZoO1xcbn1cXG5cXG4jY29udGFjdFdyYXAge1xcblxcbiAgICBncmlkLXJvdzogMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAxMHB4O1xcbn1cXG5cXG4jYWJvdXRIb3VycyB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtaGVpZ2h0OiAzMHZoO1xcbn1cXG5cXG4jaG91cldyYXAge1xcblxcbiAgICBncmlkLXJvdzogMjtcXG59XFxuXFxuI2xvZ29XcmFwcGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLWdhcDogMjBweDtcXG5cXG59XFxuXFxuLnNvY2lhbFdyYXAge1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtZ2FwOiAycHg7XFxuXFxufVxcblxcbi5zb2NpYWxXcmFwOmhvdmVyIHtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG4jZ2FsbGVyeVdyYXBwZXIge1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICAgIGdyaWQtYXV0by1mbG93OiBkZW5zZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG5cXG59XFxuXFxuI2dhbGxlcnlXcmFwcGVyIGltZyB7XFxuXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG5cXG59XFxuXFxuLmdhbGxlcnlEaXYge1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuXFxuI2ltYWdlMCB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbiNpbWFnZTEge1xcblxcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG4jaW1hZ2UyIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuXFxuI2ltYWdlMyB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuXFxufVxcblxcbiNpbWFnZTQge1xcblxcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBncmlkLXJvdzogLTE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuIFxcbiAgICBoZWlnaHQ6IDMwdmg7IFxcblxcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XFxuXFxuXFxuXFxuICAgICNsb2dvV3JhcHBlciBpbWcge1xcbiAgICAgICBcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxuICAgICAgICBoZWlnaHQ6YXV0bzsgIFxcblxcbiAgICB9ICAgXFxuXFxuXFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXG5cXG5cXG4gICNhYm91dEhvdXJzIHtcXG5cXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgIFxcbn1cXG5cXG5cXG5cXG4jYWJvdXRDb250YWN0IHtcXG5cXG4gICBcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG5cXG4jZ2FsbGVyeVdyYXBwZXIge1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG59XFxuXFxuXFxuI2Zvb3RlciB7XFxuXFxuICAgIGdyaWQtcm93OiA2O1xcbn1cXG5cXG4jbWFpbiBpbWcge1xcblxcbiAgIFxcbiAgIHdpZHRoOjMwMHB4O1xcbiAgICBoZWlnaHQ6YXV0bztcXG59XFxuXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB0d2l0dGVyIGZyb20gXCIuL2ltYWdlcy90d2l0dGVyLnBuZ1wiXG5pbXBvcnQgaW5zdGEgZnJvbSBcIi4vaW1hZ2VzL2luc3RhLnBuZ1wiXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi9pbWFnZXMvbG9nbygxKS5wbmdcIlxuXG5sZXQgZG9tTWFuaXB1bGF0b3IgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBsZXQgY3VycmVudFRhYiA9IFwiaG9tZVwiO1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XG4gICAgbGV0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhYnMuaWQgPSBcInRhYnNcIjtcbiAgICBjb250ZW50LmFwcGVuZChoZWFkZXIpO1xuICAgIGhlYWRlci5hcHBlbmQodGFicyk7XG4gICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dIZWFkZXIpO1xuXG5sZXQgc2V0QmFja2dyb3VuZCA9IGZ1bmN0aW9uIChpZCwgaW1hZ2UpIHtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWFnZX0pYDtcbn1cblxubGV0IGdldFRhYnMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICByZXR1cm4gdGFicztcbn1cblxubGV0IHNldEN1cnJlbnRUYWIgPSBmdW5jdGlvbiAodGFiKSB7XG5cbiAgICBjdXJyZW50VGFiID0gdGFiO1xufVxuXG5sZXQgZ2V0Q3VycmVudFRhYiA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHJldHVybiBjdXJyZW50VGFiO1xufVxuXG5sZXQgZ2V0Q29udGVudCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHJldHVybiBjb250ZW50O1xufVxuXG5cbmxldCBjcmVhdGVEaXYgPSBmdW5jdGlvbiAoaWQpIHtcblxuICAgIGxldCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld0Rpdi5pZCA9IGlkO1xuICAgIHJldHVybiBuZXdEaXY7XG59XG5cbmxldCBjcmVhdGVEaXZXaXRoQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG5cbiAgICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybiBuZXdEaXY7XG59XG5cbmxldCBhcHBlbmRWaWFRdWVyeSA9IGZ1bmN0aW9uIChlbGVtZW50MSwgZWxlbWVudDIpIHtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudDEpLmFwcGVuZChlbGVtZW50Mik7XG59XG5cbmxldCByZW1vdmVBbGxOb2RlcyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGxldCBub2RlcyA9IGdldENvbnRlbnQoKS5jaGlsZE5vZGVzO1xuICAgIGdldENvbnRlbnQoKS5zdHlsZS5iYWNrZ3JvdW5kSW1nID0gXCJ3aGl0ZVwiO1xuXG4gICBcblxuICAgIG5vZGVzLmZvckVhY2goKG5vZGUgPT4ge1xuICAgICAgIFxuICAgICAgICBpZiAobm9kZS5pZCAhPSBcImhlYWRlclwiKSB7XG5cbiAgICAgICAgICAgIGdldENvbnRlbnQoKS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgIH0pKVxuXG4gICAgbGV0IG5vZGVzMiA9IGRvY3VtZW50LmJvZHkuY2hpbGROb2RlcztcblxuICAgIG5vZGVzMi5mb3JFYWNoKChub2RlID0+IHtcblxuICAgICAgICBpZiAobm9kZS5pZCA9PSBcImFib3V0UGFnZVdyYXBwZXJcIikge1xuXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0pKVxufVxuXG5sZXQgd2luZG93U2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXG4gICAgbGV0IHByZXZTY3JvbGxwb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgIFxuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0b3J5TG9nb1dyYXBcIikgIT0gbnVsbCkge1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudFNjcm9sbFBvcyA+IDApIHtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RvcnlMb2dvV3JhcFwiKS5jbGFzc0xpc3QuYWRkKFwib3BhY2l0eVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0b3J5TG9nb1dyYXBcIikuY2xhc3NMaXN0LnJlbW92ZShcIm9wYWNpdHlcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmV2U2Nyb2xscG9zID4gY3VycmVudFNjcm9sbFBvcykge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcIm9wYWNpdHlcIik7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpLmNsYXNzTGlzdC5hZGQoXCJvcGFjaXR5XCIpO1xuXG4gICAgICAgIH1cbiAgICAgICAgcHJldlNjcm9sbHBvcyA9IGN1cnJlbnRTY3JvbGxQb3M7XG4gICAgfVxufVxuXG5sZXQgY3JlYXRlSW1hZ2UgPSBmdW5jdGlvbiAoaW1nU3JjKSB7XG5cbiAgICBsZXQgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBuZXdJbWFnZS5zcmMgPSBpbWdTcmM7XG4gICAgcmV0dXJuIG5ld0ltYWdlO1xufVxuXG5sZXQgZ2V0Rm9vdGVyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgbGV0IGNvbnRhY3RJbmZvID0gW1wiRW1haWw6IGxlcmVzdGF1cmFudEBnbWFpbC5jb21cIiwgXCJUZWxlcGhvbmU6IDA4MjM0NjY2XCIsIFwiQWRkcmVzczogMSBQb3NoIFN0cmVldCwgUG9zaCBUb3duXCJdXG5cbiAgICBsZXQgaG91cnMgPSBbXCJNb24gLSBUaHVyczogMTEgLSA5XCIsIFwiRnJpIC0gU2F0OiA5IC0gMTFcIiwgXCJTdW46IDEyIC0gOFwiXVxuXG4gICAgbGV0IG1haW5Mb2dvID0gY3JlYXRlSW1hZ2UobG9nbyk7XG4gICAgbGV0IHR3aXR0ZXJMb2dvID0gY3JlYXRlSW1hZ2UodHdpdHRlcik7XG4gICAgbGV0IGluc3RhTG9nbyA9IGNyZWF0ZUltYWdlKGluc3RhKTtcblxuICAgIGxldCBmb290ZXIgPSBkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoXCJmb290ZXJcIik7XG5cbiAgICBsZXQgZm9vdGVyQ29udGVudCA9IFtcImFib3V0Q29udGFjdFwiLCBcImFib3V0SG91cnNcIiwgXCJsb2dvV3JhcHBlclwiXTtcblxuICAgIGZvb3RlckNvbnRlbnQuZm9yRWFjaCgoaWQpID0+IHtcblxuICAgICAgICBmb290ZXIuYXBwZW5kKGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdihpZCkpXG4gICAgfSk7XG5cbiAgICBsZXQgZm9vdGVyQ2hpbGRyZW4gPSBmb290ZXIuY2hpbGROb2RlcztcblxuICAgIGxldCBjb250YWN0RGl2ID0gZm9vdGVyQ2hpbGRyZW5bMF07XG4gICAgbGV0IGhvdXJEaXYgPSBmb290ZXJDaGlsZHJlblsxXTtcbiAgICBsZXQgbG9nb0RpdiA9IGZvb3RlckNoaWxkcmVuWzJdO1xuXG4gICAgbGV0IGNvbnRhY3RJbm5lciA9IGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdihcImNvbnRhY3RXcmFwXCIpO1xuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdElubmVyKTtcblxuICAgIGxldCBob3VyV3JhcCA9IGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdihcImhvdXJXcmFwXCIpO1xuICAgIGhvdXJEaXYuYXBwZW5kQ2hpbGQoaG91cldyYXApO1xuXG4gICAgbG9nb0Rpdi5hcHBlbmRDaGlsZChtYWluTG9nbyk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdihcImljb25zXCIpKTtcblxuICAgIGxldCBzb2NpYWxXcmFwID0gZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2V2l0aENsYXNzKFwic29jaWFsV3JhcFwiKTtcbiAgICBsb2dvRGl2LmFwcGVuZENoaWxkKHNvY2lhbFdyYXApO1xuXG4gICAgbGV0IG1lZGlhSWNvbnMgPSBbdHdpdHRlckxvZ28sIGluc3RhTG9nb107XG5cbiAgICBtZWRpYUljb25zLmZvckVhY2goKGljb24pID0+IHtcblxuICAgICAgICBzb2NpYWxXcmFwLmFwcGVuZENoaWxkKGljb24pO1xuICAgIH0pO1xuXG4gICAgY29udGFjdEluZm8uZm9yRWFjaCgoaXRlbSkgPT4ge1xuXG4gICAgICAgIGxldCBjdXJyZW50Q29udGFjdCA9IGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdldpdGhDbGFzcyhcImNvbnRhY3RJdGVtXCIpO1xuICAgICAgICBjdXJyZW50Q29udGFjdC5pbm5lclRleHQgPSBpdGVtO1xuICAgICAgICBjb250YWN0SW5uZXIuYXBwZW5kQ2hpbGQoY3VycmVudENvbnRhY3QpO1xuICAgIH0pO1xuXG4gICAgaG91cnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXG4gICAgICAgIGxldCBjdXJyZW50SXRlbSA9IGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdldpdGhDbGFzcyhcImhvdXJJdGVtXCIpO1xuICAgICAgICBjdXJyZW50SXRlbS5pbm5lclRleHQgPSBpdGVtO1xuICAgICAgICBob3VyV3JhcC5hcHBlbmRDaGlsZChjdXJyZW50SXRlbSk7XG4gICAgfSk7XG5cbiAgICAgXG5cbiAgICByZXR1cm4gZm9vdGVyO1xuXG59XG5cbmZ1bmN0aW9uIHNob3dIZWFkZXIoKSB7XG5cbiAgICBpZiAoaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyhcIm9wYWNpdHlcIikpIHtcblxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wYWNpdHlcIik7XG5cbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uICgpIHsgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgaWYgKCFoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BhY2l0eVwiKSAmJiB3aW5kb3cucGFnZVlPZmZzZXQgPiAwKSB7XG5cbiAgICAgICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcIm9wYWNpdHlcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG53aW5kb3dTY3JvbGwoKTtcblxucmV0dXJuIHtcbiAgICBjcmVhdGVEaXYsXG4gICAgc2V0Q3VycmVudFRhYixcbiAgICBnZXRDdXJyZW50VGFiLFxuICAgIGdldENvbnRlbnQsXG4gICAgZ2V0VGFicyxcbiAgICByZW1vdmVBbGxOb2RlcyxcbiAgICBzZXRCYWNrZ3JvdW5kLFxuICAgIGNyZWF0ZURpdldpdGhDbGFzcyxcbiAgICBhcHBlbmRWaWFRdWVyeSxcbiAgICBnZXRGb290ZXIsXG4gICAgY3JlYXRlSW1hZ2Vcbn1cblxufSgpXG5cbmV4cG9ydCB7XG5cbiAgICBkb21NYW5pcHVsYXRvclxufSIsImltcG9ydCBiYWNrZ3JvdW5kIGZyb20gXCIuLi9pbWFnZXMvY2hlZi5qcGdcIlxuaW1wb3J0IHtcbiAgICBkb21NYW5pcHVsYXRvclxufSBmcm9tIFwiLi4vZG9tXCJcbmltcG9ydCBzdG9yeSBmcm9tIFwiLi4vaW1hZ2VzL3N0b3J5LnBuZ1wiXG5cblxuXG5sZXQgdXBkYXRlQWJvdXQgPSBmdW5jdGlvbiAoKSB7IFxuXG4gICAgZG9tTWFuaXB1bGF0b3Iuc2V0QmFja2dyb3VuZChcImNvbnRlbnRcIiwgYmFja2dyb3VuZCk7XG4gICAgbGV0IGN1cnJlbnRNZW51SXRlbXMgPSBhYm91dEhlbHBlcnMuZ2V0TWVudSgpO1xuICAgIGxldCBzdG9yeUNvbnRlbnQgPSBhYm91dEhlbHBlcnMuZ2V0SXBzdW0oKTtcbiAgICBsZXQgc3RvcnlMb2dvID0gZG9tTWFuaXB1bGF0b3IuY3JlYXRlSW1hZ2Uoc3RvcnkpO1xuXG4gICAgbGV0IHN0b3J5TG9nb1dyYXAgPSBkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoXCJzdG9yeUxvZ29XcmFwXCIpO1xuICAgIHN0b3J5TG9nb1dyYXAuYXBwZW5kQ2hpbGQoc3RvcnlMb2dvKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hcHBlbmRDaGlsZChzdG9yeUxvZ29XcmFwKTtcblxuICAgIGxldCBhYm91dFBhZ2VXcmFwcGVyID0gZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2KFwiYWJvdXRQYWdlV3JhcHBlclwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFib3V0UGFnZVdyYXBwZXIpO1xuICBcbiAgICBhYm91dFBhZ2VXcmFwcGVyLmFwcGVuZENoaWxkKGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdihcImFib3V0UGFnZVN0b3J5XCIpKTtcblxuICAgIGxldCBhYm91dFBhZ2VTdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWJvdXRQYWdlU3RvcnlcIik7XG4gICAgbGV0IGFib3V0U3RvcnlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgYWJvdXRTdG9yeUhlYWRlci5pbm5lclRleHQgPSBcIkRpZ25pc3NpbS4uLlwiO1xuXG4gICAgbGV0IGFib3V0U3RvcnlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYWJvdXRTdG9yeVRleHQuaW5uZXJUZXh0ID0gc3RvcnlDb250ZW50O1xuICAgIGFib3V0UGFnZVN0b3J5LmFwcGVuZChhYm91dFN0b3J5SGVhZGVyKTtcbiAgICBhYm91dFBhZ2VTdG9yeS5hcHBlbmQoYWJvdXRTdG9yeVRleHQpO1xuXG4gICAgbGV0IGFib3V0UGFnZU1lbnUgPSBkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoXCJhYm91dFBhZ2VNZW51XCIpO1xuICAgIGFib3V0UGFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQoYWJvdXRQYWdlTWVudSk7XG5cbiAgICBhYm91dFBhZ2VNZW51LmFwcGVuZENoaWxkKGRvbU1hbmlwdWxhdG9yLmNyZWF0ZURpdihcIm1lYWxJdGVtVGl0bGVcIikpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVhbEl0ZW1UaXRsZVwiKS5pbm5lclRleHQgPSBcIlNvbWUgZmF2b3JpdGVzLi4uXCI7XG5cbiAgICBjdXJyZW50TWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcblxuICAgICAgICBsZXQgY3VycmVudE1lbnVJdGVtID0gZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2V2l0aENsYXNzKFwibWVhbEl0ZW1cIik7XG4gICAgICAgIGFib3V0UGFnZU1lbnUuYXBwZW5kQ2hpbGQoY3VycmVudE1lbnVJdGVtKTtcbiAgICAgICAgY3VycmVudE1lbnVJdGVtLmlubmVyVGV4dCA9IGl0ZW07XG4gICAgfSlcbiAgIFxuICAgIGFib3V0UGFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZG9tTWFuaXB1bGF0b3IuZ2V0Rm9vdGVyKCkpOyAgICBcblxufVxuXG5sZXQgYWJvdXRIZWxwZXJzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgbGV0IGlwc3VtID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhXG4gICAgIFF1aXNxdWUgaWQgZGlhbSB2ZWwgcXVhbSBlbGVtZW50dW0gcHVsdmluYXIgZXRpYW0gbm9uIHF1YW0uIEluIHBlbGxlbnRlc3F1ZSBtYXNzYSBwbGFjZXJhdCBkdWlzIHVsdHJpY2llcyBsYWN1cyBzZWQuXG4gICAgICBGZXVnaWF0IG5pc2wgcHJldGl1bSBmdXNjZSBpZCB2ZWxpdCB1dC4gVml2ZXJyYSBzdXNwZW5kaXNzZSBwb3RlbnRpIG51bGxhbSBhYyB0b3J0b3Igdml0YWUgcHVydXMuXG4gICAgIEFudGUgaW4gbmliaCBtYXVyaXMgY3Vyc3VzIG1hdHRpcyBtb2xlc3RpZS4gUXVhbSBwZWxsZW50ZXNxdWUgbmVjIG5hbSBhbGlxdWFtLiBcbiAgICAgVml2ZXJyYSB2aXRhZSBjb25ndWUgZXUgY29uc2VxdWF0IGFjLiBFbmltIG51bmMgZmF1Y2lidXMgYSBwZWxsZW50ZXNxdWUgc2l0IGFtZXQgcG9ydHRpdG9yLiBcbiAgICAgVml0YWUgY29uZ3VlIGV1IGNvbnNlcXVhdCBhYyBmZWxpcyBkb25lYyBldCBvZGlvIHBlbGxlbnRlc3F1ZS5cbiAgICAgXG4gICAgSXBzdW0gbnVuYyBhbGlxdWV0IGJpYmVuZHVtIGVuaW0gZmFjaWxpc2lzLiBFdSBzZW0gaW50ZWdlciB2aXRhZSBqdXN0byBlZ2V0IG1hZ25hIGZlcm1lbnR1bSBpYWN1bGlzIGV1LlxuICAgICBUcmlzdGlxdWUgbWFnbmEgc2l0IGFtZXQgcHVydXMgZ3JhdmlkYSBxdWlzIGJsYW5kaXQuIFNjZWxlcmlzcXVlIHZhcml1cyBtb3JiaSBlbmltIG51bmMgZmF1Y2lidXMuIFxuICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cbiAgICAgIEFsaXF1YW0gdmVzdGlidWx1bSBtb3JiaSBibGFuZGl0IGN1cnN1cyByaXN1cy4gVmVsaXQgZGlnbmlzc2ltIHNvZGFsZXMgdXQgZXUgc2VtIGludGVnZXIgdml0YWUganVzdG8gZWdldC4gXG4gICAgICBWaXZhbXVzIGFyY3UgZmVsaXMgYmliZW5kdW0gdXQgdHJpc3RpcXVlIGV0IGVnZXN0YXMuIFByYWVzZW50IHRyaXN0aXF1ZSBtYWduYSBzaXQgYW1ldCBwdXJ1cyBncmF2aWRhIHF1aXMgYmxhbmRpdC4gXG4gICAgICBTZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMgc2VkLiBFbmltIHV0IHNlbSB2aXZlcnJhIGFsaXF1ZXQgZWdldCBzaXQgYW1ldCB0ZWxsdXMgY3Jhcy5cbiAgICAgIENvbW1vZG8gb2RpbyBhZW5lYW4gc2VkIGFkaXBpc2NpbmcgZGlhbSBkb25lYy4gRXUgbWkgYmliZW5kdW0gbmVxdWUgZWdlc3Rhcy4gU2NlbGVyaXNxdWUgZXUgdWx0cmljZXMgdml0YWUgYXVjdG9yLlxuICAgICBgXG5cbiAgICBsZXQgY3VycmVudE1lbnVJdGVtcyA9IFtcIkNvbGQgVG9tYXRvIFNvdXAsIE1lbG9uICYgQ3VjdW1iZXJcIixcbiAgICAgICAgXCJCb3Jsb3R0aSBCZWFucywgQ291cmdldHRlcyAmIE5hc3R1cnRpdW0gXCIsXG4gICAgICAgIFwiUmF3IFNjYWxsb3AsIFN1bmdvbGQgVG9tYXRvICYgRmVubmVsIEJsb3Nzb21cIixcbiAgICAgICAgXCJTdWNrbGluZyBLaWQgU2F1c2FnZSwgUGVhcyAmIEFydGljaG9rZXNcIixcbiAgICAgICAgXCJTbW9rZWQgRWVsLCBCZWV0cm9vdHMgJiBFbGRlcmJlcnJpZXNcIixcbiAgICAgICAgXCJCbGFjayBQdWRkaW5nLCBXaGl0ZSBQZWFjaCAmIEJvYmJ5IEJlYW5zXCIsXG4gICAgICAgIFwiRHVjayBMZWcsIFR1cm5pcCAmIFBpY2tsZWQgTW9yZWxsbyBDaGVycmllc1wiLFxuICAgICAgICBcIk1hbmdhbGl0c2EgQ29sbGFyLCBIaXNwaSBDYWJiYWdlICYgTGFyZG9cIixcbiAgICAgICAgXCJEb3JzZXQgQmx1ZSBMb2JzdGVyLCBTYW1waGlyZSAmIExvYnN0ZXIgQnV0dGVyXCJcbiAgICBdXG5cbiAgICBsZXQgZ2V0SXBzdW0gPSAoKSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIGlwc3VtO1xuICAgIH1cblxuICAgIGxldCBnZXRNZW51ID0gKCkgPT4ge1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50TWVudUl0ZW1zO1xuICAgIH1cblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgZ2V0SXBzdW0sXG4gICAgICAgIGdldE1lbnUsXG5cbiAgICB9XG5cbn0oKVxuXG5cbmV4cG9ydCB7XG4gICAgdXBkYXRlQWJvdXRcbn07IiwiaW1wb3J0IHtcbiAgICBkb21NYW5pcHVsYXRvclxufSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgZmlyc3RJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2dhbGxlcnkxLmpwZ1wiXG5pbXBvcnQgc2Vjb25kSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9nYWxsZXJ5Mi5qcGdcIlxuaW1wb3J0IHRoaXJkSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9nYWxsZXJ5My5qcGdcIlxuaW1wb3J0IGZvdXJ0aEltYWdlIGZyb20gXCIuLi9pbWFnZXMvZ2FsbGVyeTQuanBnXCJcbmltcG9ydCBmaWZ0aEltYWdlIGZyb20gXCIuLi9pbWFnZXMvZ2FsbGVyeTUuanBnXCJcblxubGV0IHVwZGF0ZUdhbGxlcnkgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBsZXQgZ2FsbGVyeVdyYXBwZXIgPSBkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoXCJnYWxsZXJ5V3JhcHBlclwiKTtcblxuXG5cbiAgICBkb21NYW5pcHVsYXRvci5nZXRDb250ZW50KCkuYXBwZW5kQ2hpbGQoZ2FsbGVyeVdyYXBwZXIpO1xuXG4gICAgbGV0IGltYWdlcyA9IFtmaXJzdEltYWdlLCBzZWNvbmRJbWFnZSwgdGhpcmRJbWFnZSwgZm91cnRoSW1hZ2UsIGZpZnRoSW1hZ2VdO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBpbWFnZXMubGVuZ3RoOyB4KyspIHtcblxuICAgICAgICBsZXQgY3VycmVudEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGN1cnJlbnRJbWFnZS5zcmMgPSBpbWFnZXNbeF07XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FsbGVyeVdyYXBwZXJcIikuYXBwZW5kQ2hpbGQoZG9tTWFuaXB1bGF0b3IuY3JlYXRlRGl2KGBpbWFnZSR7eH1gKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpbWFnZSR7eH1gKS5jbGFzc0xpc3QuYWRkKFwiZ2FsbGVyeURpdlwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2ltYWdlJHt4fWApLmFwcGVuZENoaWxkKGN1cnJlbnRJbWFnZSlcblxuICAgIH1cblxuICAgIGxldCBmb290ZXIgPSBkb21NYW5pcHVsYXRvci5nZXRGb290ZXIoKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FsbGVyeVdyYXBwZXJcIikuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuZXhwb3J0IHtcbiAgICB1cGRhdGVHYWxsZXJ5XG59OyIsImltcG9ydCBiYWNrZ3JvdW5kIGZyb20gXCIuLi9pbWFnZXMvYnVyZ2VyLmpwZ1wiXG5pbXBvcnQge1xuICAgIGRvbU1hbmlwdWxhdG9yXG59IGZyb20gXCIuLi9kb21cIlxuaW1wb3J0IGhvbWVMb2dvIGZyb20gXCIuLi9pbWFnZXMvaG9tZUxvZ28ucG5nXCJcbmxldCB1cGRhdGVIb21lID0gZnVuY3Rpb24gKCkge1xuXG5cbiAgICBsZXQgc2V0SG9tZUNvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IG1haW4gPSBkb21NYW5pcHVsYXRvci5jcmVhdGVEaXYoXCJtYWluXCIpO1xuICAgICAgICBcbiAgICAgICAgZG9tTWFuaXB1bGF0b3IuZ2V0Q29udGVudCgpLmFwcGVuZChtYWluKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGRvbU1hbmlwdWxhdG9yLmNyZWF0ZUltYWdlKGhvbWVMb2dvKSk7XG5cbiAgICAgICAgfSwgMCk7XG5cblxuICAgICAgICBkb21NYW5pcHVsYXRvci5zZXRCYWNrZ3JvdW5kKFwiY29udGVudFwiLCBiYWNrZ3JvdW5kKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIHNldEhvbWVDb250ZW50XG4gICAgfTtcblxufSgpXG5cbmV4cG9ydCB7XG4gICAgdXBkYXRlSG9tZVxufTsiLCJcbmltcG9ydCB7XG4gICAgdXBkYXRlSG9tZVxufSBmcm9tIFwiLi9ob21lXCI7XG5cbmNvbnN0IHBhZ2VMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICBcbiAgICB1cGRhdGVIb21lLnNldEhvbWVDb250ZW50KCk7XG5cbn0oKVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgcGFnZUxvYWRlciBmcm9tIFwiLi90YWJzL2xvYWRlclwiXG5pbXBvcnQge1xuICAgIHVwZGF0ZUhvbWVcbn0gZnJvbSBcIi4vdGFicy9ob21lXCJcbmltcG9ydCB7XG4gICAgdXBkYXRlR2FsbGVyeVxufSBmcm9tIFwiLi90YWJzL2dhbGxlcnlcIlxuaW1wb3J0IHtcbiAgICB1cGRhdGVBYm91dFxufSBmcm9tIFwiLi90YWJzL2Fib3V0XCJcbmltcG9ydCB7XG4gICAgZG9tTWFuaXB1bGF0b3Jcbn0gZnJvbSBcIi4vZG9tXCJcblxuY29uc3QgdGFiTG9naWMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBsZXQgdGFiRnVuY3Rpb25zID0ge1xuXG4gICAgICAgIFwiaG9tZVwiOiB1cGRhdGVIb21lLnNldEhvbWVDb250ZW50LFxuICAgICAgICBcImdhbGxlcnlcIjogdXBkYXRlR2FsbGVyeSxcbiAgICAgICAgXCJhYm91dFwiOiB1cGRhdGVBYm91dCxcbiAgICB9XG5cbiAgICBsZXQgdGFiVGl0bGVzID0gW1wiSG9tZVwiLCBcIkdhbGxlcnlcIiwgXCJBYm91dFwiXTtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMzsgeCsrKSB7XG5cbiAgICAgICAgbGV0IGlubmVyVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5uZXJUYWIuY2xhc3NMaXN0LmFkZChcImlubmVyVGFiXCIpO1xuICAgICAgICBpbm5lclRhYi5pbm5lclRleHQgPSB0YWJUaXRsZXNbeF07XG4gICAgICAgIGlubmVyVGFiLmlkID0gdGFiVGl0bGVzW3hdO1xuICAgICAgICBkb21NYW5pcHVsYXRvci5nZXRUYWJzKCkuYXBwZW5kKGlubmVyVGFiKTtcbiAgICAgICAgaW5uZXJUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhYkNoYW5nZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0YWJDaGFuZ2UoZSkge1xuXG4gICAgICAgIC8vc3RvcHMgZnJvbSB0cmlnZ2VyaW5nIHRhYiBzd2l0Y2ggb24gdGhlIHNhbWUgdGFiIG92ZXIgYW5kIG92ZXJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlubmVyVGV4dCAhPSBkb21NYW5pcHVsYXRvci5nZXRDdXJyZW50VGFiKCkpIHsgICAgICAgICAgXG5cbiAgICAgICAgICAgIGRvbU1hbmlwdWxhdG9yLnJlbW92ZUFsbE5vZGVzKCk7XG4gICAgICAgICAgICBkb21NYW5pcHVsYXRvci5zZXRDdXJyZW50VGFiKGUudGFyZ2V0LmlubmVyVGV4dCk7ICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGZ1bmMgPSB0YWJGdW5jdGlvbnNbZS50YXJnZXQuaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCldOyAgICAgIFxuICAgICAgICAgICAgZnVuYygpOyAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgXG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgIH1cblxufSgpIl0sInNvdXJjZVJvb3QiOiIifQ==