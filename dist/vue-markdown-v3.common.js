/*!
 * /**
 *  * vue-markdown-v3 v3.0.0
 *  * https://github.com/princeahugah/vue-markdown-v3
 *  * MIT License
 *  * /
 *
 */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("markdown-it"), require("markdown-it-emoji"), require("markdown-it-sub"), require("markdown-it-sup"), require("markdown-it-footnote"), require("markdown-it-deflist"), require("markdown-it-abbr"), require("markdown-it-ins"), require("markdown-it-mark"), require("markdown-it-toc-and-anchor"), require("markdown-it-katex"), require("markdown-it-task-lists"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["markdown-it", "markdown-it-emoji", "markdown-it-sub", "markdown-it-sup", "markdown-it-footnote", "markdown-it-deflist", "markdown-it-abbr", "markdown-it-ins", "markdown-it-mark", "markdown-it-toc-and-anchor", "markdown-it-katex", "markdown-it-task-lists", "vue"], factory);
	else if(typeof exports === 'object')
		exports["VueMarkdownV3"] = factory(require("markdown-it"), require("markdown-it-emoji"), require("markdown-it-sub"), require("markdown-it-sup"), require("markdown-it-footnote"), require("markdown-it-deflist"), require("markdown-it-abbr"), require("markdown-it-ins"), require("markdown-it-mark"), require("markdown-it-toc-and-anchor"), require("markdown-it-katex"), require("markdown-it-task-lists"), require("vue"));
	else
		root["VueMarkdownV3"] = factory(root["markdown-it"], root["markdown-it-emoji"], root["markdown-it-sub"], root["markdown-it-sup"], root["markdown-it-footnote"], root["markdown-it-deflist"], root["markdown-it-abbr"], root["markdown-it-ins"], root["markdown-it-mark"], root["markdown-it-toc-and-anchor"], root["markdown-it-katex"], root["markdown-it-task-lists"], root["vue"]);
})(global, (__WEBPACK_EXTERNAL_MODULE_markdown_it__, __WEBPACK_EXTERNAL_MODULE_markdown_it_emoji__, __WEBPACK_EXTERNAL_MODULE_markdown_it_sub__, __WEBPACK_EXTERNAL_MODULE_markdown_it_sup__, __WEBPACK_EXTERNAL_MODULE_markdown_it_footnote__, __WEBPACK_EXTERNAL_MODULE_markdown_it_deflist__, __WEBPACK_EXTERNAL_MODULE_markdown_it_abbr__, __WEBPACK_EXTERNAL_MODULE_markdown_it_ins__, __WEBPACK_EXTERNAL_MODULE_markdown_it_mark__, __WEBPACK_EXTERNAL_MODULE_markdown_it_toc_and_anchor__, __WEBPACK_EXTERNAL_MODULE_markdown_it_katex__, __WEBPACK_EXTERNAL_MODULE_markdown_it_task_lists__, __WEBPACK_EXTERNAL_MODULE_vue__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/VueMarkdown.js":
/*!****************************!*\
  !*** ./src/VueMarkdown.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! markdown-it */ \"markdown-it\");\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var markdown_it_emoji__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! markdown-it-emoji */ \"markdown-it-emoji\");\n/* harmony import */ var markdown_it_emoji__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(markdown_it_emoji__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var markdown_it_sub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! markdown-it-sub */ \"markdown-it-sub\");\n/* harmony import */ var markdown_it_sub__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(markdown_it_sub__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var markdown_it_sup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! markdown-it-sup */ \"markdown-it-sup\");\n/* harmony import */ var markdown_it_sup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(markdown_it_sup__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! markdown-it-footnote */ \"markdown-it-footnote\");\n/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(markdown_it_footnote__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var markdown_it_deflist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! markdown-it-deflist */ \"markdown-it-deflist\");\n/* harmony import */ var markdown_it_deflist__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(markdown_it_deflist__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var markdown_it_abbr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! markdown-it-abbr */ \"markdown-it-abbr\");\n/* harmony import */ var markdown_it_abbr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(markdown_it_abbr__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var markdown_it_ins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! markdown-it-ins */ \"markdown-it-ins\");\n/* harmony import */ var markdown_it_ins__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(markdown_it_ins__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var markdown_it_mark__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! markdown-it-mark */ \"markdown-it-mark\");\n/* harmony import */ var markdown_it_mark__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(markdown_it_mark__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var markdown_it_toc_and_anchor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! markdown-it-toc-and-anchor */ \"markdown-it-toc-and-anchor\");\n/* harmony import */ var markdown_it_toc_and_anchor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(markdown_it_toc_and_anchor__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var markdown_it_katex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! markdown-it-katex */ \"markdown-it-katex\");\n/* harmony import */ var markdown_it_katex__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(markdown_it_katex__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! markdown-it-task-lists */ \"markdown-it-task-lists\");\n/* harmony import */ var markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_12__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  md: new (markdown_it__WEBPACK_IMPORTED_MODULE_0___default())(),\n  template: '<div><slot></slot></div>',\n  data: function data() {\n    return {\n      sourceData: this.source\n    };\n  },\n  props: {\n    watches: {\n      type: Array,\n      \"default\": function _default() {\n        return ['source', 'show', 'toc'];\n      }\n    },\n    source: {\n      type: String,\n      \"default\": \"\"\n    },\n    show: {\n      type: Boolean,\n      \"default\": true\n    },\n    highlight: {\n      type: Boolean,\n      \"default\": true\n    },\n    html: {\n      type: Boolean,\n      \"default\": true\n    },\n    xhtmlOut: {\n      type: Boolean,\n      \"default\": true\n    },\n    breaks: {\n      type: Boolean,\n      \"default\": true\n    },\n    linkify: {\n      type: Boolean,\n      \"default\": true\n    },\n    emoji: {\n      type: Boolean,\n      \"default\": true\n    },\n    typographer: {\n      type: Boolean,\n      \"default\": true\n    },\n    langPrefix: {\n      type: String,\n      \"default\": 'language-'\n    },\n    quotes: {\n      type: String,\n      \"default\": '“”‘’'\n    },\n    tableClass: {\n      type: String,\n      \"default\": 'table'\n    },\n    taskLists: {\n      type: Boolean,\n      \"default\": true\n    },\n    toc: {\n      type: Boolean,\n      \"default\": false\n    },\n    tocId: {\n      type: String\n    },\n    tocClass: {\n      type: String,\n      \"default\": 'table-of-contents'\n    },\n    tocFirstLevel: {\n      type: Number,\n      \"default\": 2\n    },\n    tocLastLevel: {\n      type: Number\n    },\n    tocAnchorLink: {\n      type: Boolean,\n      \"default\": true\n    },\n    tocAnchorClass: {\n      type: String,\n      \"default\": 'toc-anchor'\n    },\n    tocAnchorLinkSymbol: {\n      type: String,\n      \"default\": '#'\n    },\n    tocAnchorLinkSpace: {\n      type: Boolean,\n      \"default\": true\n    },\n    tocAnchorLinkClass: {\n      type: String,\n      \"default\": 'toc-anchor-link'\n    },\n    anchorAttributes: {\n      type: Object,\n      \"default\": function _default() {\n        return {};\n      }\n    },\n    prerender: {\n      type: Function,\n      \"default\": function _default(sourceData) {\n        return sourceData;\n      }\n    },\n    postrender: {\n      type: Function,\n      \"default\": function _default(htmlData) {\n        return htmlData;\n      }\n    }\n  },\n  computed: {\n    tocLastLevelComputed: function tocLastLevelComputed() {\n      return this.tocLastLevel > this.tocFirstLevel ? this.tocLastLevel : this.tocFirstLevel + 1;\n    }\n  },\n  render: function render() {\n    var _this = this;\n\n    this.md = new (markdown_it__WEBPACK_IMPORTED_MODULE_0___default())().use((markdown_it_sub__WEBPACK_IMPORTED_MODULE_2___default())).use((markdown_it_sup__WEBPACK_IMPORTED_MODULE_3___default())).use((markdown_it_footnote__WEBPACK_IMPORTED_MODULE_4___default())).use((markdown_it_deflist__WEBPACK_IMPORTED_MODULE_5___default())).use((markdown_it_abbr__WEBPACK_IMPORTED_MODULE_6___default())).use((markdown_it_ins__WEBPACK_IMPORTED_MODULE_7___default())).use((markdown_it_mark__WEBPACK_IMPORTED_MODULE_8___default())).use((markdown_it_katex__WEBPACK_IMPORTED_MODULE_10___default()), {\n      \"throwOnError\": false,\n      \"errorColor\": \" #cc0000\"\n    }).use((markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_11___default()), {\n      enabled: this.taskLists\n    });\n\n    if (this.emoji) {\n      this.md.use((markdown_it_emoji__WEBPACK_IMPORTED_MODULE_1___default()));\n    }\n\n    this.md.set({\n      html: this.html,\n      xhtmlOut: this.xhtmlOut,\n      breaks: this.breaks,\n      linkify: this.linkify,\n      typographer: this.typographer,\n      langPrefix: this.langPrefix,\n      quotes: this.quotes\n    });\n\n    this.md.renderer.rules.table_open = function () {\n      return \"<table class=\\\"\".concat(_this.tableClass, \"\\\">\\n\");\n    };\n\n    var defaultLinkRenderer = this.md.renderer.rules.link_open || function (tokens, idx, options, env, self) {\n      return self.renderToken(tokens, idx, options);\n    };\n\n    this.md.renderer.rules.link_open = function (tokens, idx, options, env, self) {\n      Object.keys(_this.anchorAttributes).map(function (attribute) {\n        var aIndex = tokens[idx].attrIndex(attribute);\n        var value = _this.anchorAttributes[attribute];\n\n        if (aIndex < 0) {\n          tokens[idx].attrPush([attribute, value]); // add new attribute\n        } else {\n          tokens[idx].attrs[aIndex][1] = value;\n        }\n      });\n      return defaultLinkRenderer(tokens, idx, options, env, self);\n    };\n\n    if (this.toc) {\n      this.md.use((markdown_it_toc_and_anchor__WEBPACK_IMPORTED_MODULE_9___default()), {\n        tocClassName: this.tocClass,\n        tocFirstLevel: this.tocFirstLevel,\n        tocLastLevel: this.tocLastLevelComputed,\n        anchorLink: this.tocAnchorLink,\n        anchorLinkSymbol: this.tocAnchorLinkSymbol,\n        anchorLinkSpace: this.tocAnchorLinkSpace,\n        anchorClassName: this.tocAnchorClass,\n        anchorLinkSymbolClassName: this.tocAnchorLinkClass,\n        tocCallback: function tocCallback(tocMarkdown, tocArray, tocHtml) {\n          if (tocHtml) {\n            if (_this.tocId && document.getElementById(_this.tocId)) {\n              document.getElementById(_this.tocId).innerHTML = tocHtml;\n            }\n\n            _this.$emit('toc-rendered', tocHtml);\n          }\n        }\n      });\n    }\n\n    var outHtml = this.show ? this.md.render(this.prerender(this.sourceData)) : '';\n    outHtml = this.postrender(outHtml);\n    this.$emit('rendered', outHtml);\n    return (0,vue__WEBPACK_IMPORTED_MODULE_12__.h)('div', {\n      domProps: {\n        innerHTML: outHtml\n      }\n    });\n  },\n  beforeMount: function beforeMount() {\n    var _this2 = this;\n\n    if (this.$slots[\"default\"]) {\n      this.sourceData = '';\n\n      var _iterator = _createForOfIteratorHelper(this.$slots[\"default\"]),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var slot = _step.value;\n          this.sourceData += slot.text;\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n\n    this.$watch('source', function () {\n      _this2.sourceData = _this2.prerender(_this2.source);\n\n      _this2.$forceUpdate();\n    });\n    this.watches.forEach(function (v) {\n      _this2.$watch(v, function () {\n        _this2.$forceUpdate();\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack://VueMarkdownV3/./src/VueMarkdown.js?");

/***/ }),

/***/ "markdown-it":
/*!******************************!*\
  !*** external "markdown-it" ***!
  \******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_markdown_it__;

/***/ }),

/***/ "markdown-it-abbr":
/*!***********************************!*\
  !*** external "markdown-it-abbr" ***!
  \***********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_markdown_it_abbr__;

/***/ }),

/***/ "markdown-it-deflist":
/*!**************************************!*\
  !*** external "markdown-it-deflist" ***!
  \**************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_markdown_it_deflist__;

/***/ }),

/***/ "markdown-it-emoji":
/*!************************************!*\
  !*** external "markdown-it-emoji" ***!
  \************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_markdown_it_emoji__;

/***/ }),

/***/ "markdown-it-footnote":
/*!***************************************!*\
  !*** external "markdown-it-footnote" ***!
  \***************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_markdown_it_footnote__;

/***/ }),

/***/ "markdown-it-ins":
/*!**********************************!*\
  !*** external "markdown-it-ins" ***!
  \**********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_markdown_it_ins__;

/***/ }),

/***/ "markdown-it-katex":
/*!************************************!*\
  !*** external "markdown-it-katex" ***!
  \************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_markdown_it_katex__;

/***/ }),

/***/ "markdown-it-mark":
/*!***********************************!*\
  !*** external "markdown-it-mark" ***!
  \***********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_markdown_it_mark__;

/***/ }),

/***/ "markdown-it-sub":
/*!**********************************!*\
  !*** external "markdown-it-sub" ***!
  \**********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_markdown_it_sub__;

/***/ }),

/***/ "markdown-it-sup":
/*!**********************************!*\
  !*** external "markdown-it-sup" ***!
  \**********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_markdown_it_sup__;

/***/ }),

/***/ "markdown-it-task-lists":
/*!*****************************************!*\
  !*** external "markdown-it-task-lists" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_markdown_it_task_lists__;

/***/ }),

/***/ "markdown-it-toc-and-anchor":
/*!*********************************************!*\
  !*** external "markdown-it-toc-and-anchor" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_markdown_it_toc_and_anchor__;

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_vue__;

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/VueMarkdown.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});