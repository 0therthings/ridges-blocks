/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hero/edit.js":
/*!**************************!*\
  !*** ./src/hero/edit.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/hero/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const MY_TEMPLATE = [['core/heading', {
    textAlign: 'center',
    level: 1,
    placeholder: 'Page Title'
  }], ['core/buttons', {
    'layout': {
      'type': 'flex',
      'justifyContent': 'center'
    }
  }]];
  let myClass = `hero--trail-${attributes.pattern} alignfull`;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: myClass
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hero__content-container container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    template: MY_TEMPLATE
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    version: "1.1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 1512 261.71",
    "enable-background": "new 0 0 1512 261.71",
    className: "hero__path-generator"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    className: "path-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    "stroke-miterlimit": "10",
    d: "M1530.34,103.73l-367.18-77.15 c-62.15-13.06-149.99-9.77-195.21,7.3L694.42,137.2c-45.21,17.08-127.9,17.26-183.74,0.41l-71.77-21.66C383.07,99.1,285.93,91.29,223.03,98.59L-67.22,132.3"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    d: "M1006,31.01c12.42,36.81,56.33,115.39,132.56,135.25c76.23,19.86,325.53,66.83,440.66,87.83"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    className: "path-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    "stroke-miterlimit": "10",
    d: "M1532.51,135.28c-70.2,0-124.27,54.49-257.4,54.29c-261.1-0.41-157.13-139.94-384.83-114.28c-278.7,31.42-318.75,114.28-593.31,114.28c-223.11,0-317.48-43.02-317.48-43.02"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    className: "path-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    "stroke-miterlimit": "10",
    d: "M1536.82,174.64 c-435.66,0-452.98-166.53-731.19-135.85C549.9,66.98,560.44,189.25,188.34,189.25c-141.57,0-213.16-1.47-213.16-1.47"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    "stroke-miterlimit": "10",
    d: "M848.54,39.58c0,0-67.99,61.18-42.91,119.73c32.83,76.69,162,76.69,280.21,54.77c111.97-20.75,224.81-53.71,330.42-44.23"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    className: "path-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    "stroke-miterlimit": "10",
    d: "M148.46,192.61c98.51,0,271.42,20.95,394.03,0c107.97-18.45,159.48-95.07,315.73-95.07c94.87,0,348.46,95.07,533.02,95.07c119.39,0,209.91-95.07,209.91-95.07"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    "stroke-miterlimit": "10",
    d: "M911.03,103.34c0,0-293.12-59.01-400.93-39.66C321.62,97.54,302.38,192.61,146.12,192.61H-89.15"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    className: "path-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    "stroke-miterlimit": "10",
    d: "M1516.5,181.39 c-427.94,0-329.02-112.04-696.76-112.04c-337.62,0-262.35,96.25-627.86,96.25c-139.07,0-209.39,56.75-209.39,56.75"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    "stroke-miterlimit": "10",
    d: "M-17.5,39.35 c125.52,106.4,330.94,133.01,438,106.4"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    "stroke-miterlimit": "10",
    d: "M1141.5,124.35c0,0,1.03-76,112.82-76 c111.78,0,275.18,2.16,275.18,2.16"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    className: "path-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    "stroke-miterlimit": "10",
    d: "M1543.71,206.49 c-71.3,0.82-575.1-1.17-710.32,0.18C568.2,209.31,706.92,42.3,474.17,44.98c-296.3,3.41-69.98,166.64-348.85,169.85c-226.58,2.61-159.04,1.83-159.04,1.83"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    "stroke-miterlimit": "10",
    d: "M920.55,206.26c0,0,28.94-134.75,150.94-136.16l483.65-5.57"
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Trail Pattern",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    value: attributes.pattern,
    options: [{
      value: 1,
      label: 'Trail 1'
    }, {
      value: 2,
      label: 'Trail 2'
    }, {
      value: 3,
      label: 'Trail 3'
    }, {
      value: 4,
      label: 'Trail 4'
    }, {
      value: 5,
      label: 'Trail 5'
    }, {
      value: 6,
      label: 'Trail 6'
    }],
    onChange: pattern => setAttributes({
      pattern
    })
  }))));
}

/***/ }),

/***/ "./src/hero/index.js":
/*!***************************!*\
  !*** ./src/hero/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/hero/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/hero/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/hero/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/hero/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/hero/save.js":
/*!**************************!*\
  !*** ./src/hero/save.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
function save(props) {
  const {
    attributes
  } = props;
  let className = `hero--trail-${attributes.pattern} alignfull`;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: className
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hero__content-container container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    version: "1.1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 1512 261.71",
    "enable-background": "new 0 0 1512 261.71",
    className: "hero__path-generator"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    className: "path-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "vector-effect": "non-scaling-stroke",
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    "stroke-miterlimit": "10",
    d: "M1530.34,103.73l-367.18-77.15 c-62.15-13.06-149.99-9.77-195.21,7.3L694.42,137.2c-45.21,17.08-127.9,17.26-183.74,0.41l-71.77-21.66C383.07,99.1,285.93,91.29,223.03,98.59L-67.22,132.3"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "vector-effect": "non-scaling-stroke",
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    d: "M1006,31.01c12.42,36.81,56.33,115.39,132.56,135.25c76.23,19.86,325.53,66.83,440.66,87.83"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    className: "path-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "vector-effect": "non-scaling-stroke",
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    "stroke-miterlimit": "10",
    d: "M1532.51,135.28c-70.2,0-124.27,54.49-257.4,54.29c-261.1-0.41-157.13-139.94-384.83-114.28c-278.7,31.42-318.75,114.28-593.31,114.28c-223.11,0-317.48-43.02-317.48-43.02"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    className: "path-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "vector-effect": "non-scaling-stroke",
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    "stroke-miterlimit": "10",
    d: "M1536.82,174.64 c-435.66,0-452.98-166.53-731.19-135.85C549.9,66.98,560.44,189.25,188.34,189.25c-141.57,0-213.16-1.47-213.16-1.47"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "vector-effect": "non-scaling-stroke",
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    "stroke-miterlimit": "10",
    d: "M848.54,39.58c0,0-67.99,61.18-42.91,119.73c32.83,76.69,162,76.69,280.21,54.77c111.97-20.75,224.81-53.71,330.42-44.23"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    className: "path-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "vector-effect": "non-scaling-stroke",
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    "stroke-miterlimit": "10",
    d: "M148.46,192.61c98.51,0,271.42,20.95,394.03,0c107.97-18.45,159.48-95.07,315.73-95.07c94.87,0,348.46,95.07,533.02,95.07c119.39,0,209.91-95.07,209.91-95.07"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "vector-effect": "non-scaling-stroke",
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    "stroke-miterlimit": "10",
    d: "M911.03,103.34c0,0-293.12-59.01-400.93-39.66C321.62,97.54,302.38,192.61,146.12,192.61H-89.15"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    className: "path-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "vector-effect": "non-scaling-stroke",
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    "stroke-miterlimit": "10",
    d: "M1516.5,181.39 c-427.94,0-329.02-112.04-696.76-112.04c-337.62,0-262.35,96.25-627.86,96.25c-139.07,0-209.39,56.75-209.39,56.75"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "vector-effect": "non-scaling-stroke",
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    "stroke-miterlimit": "10",
    d: "M-17.5,39.35 c125.52,106.4,330.94,133.01,438,106.4"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "vector-effect": "non-scaling-stroke",
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    "stroke-miterlimit": "10",
    d: "M1141.5,124.35c0,0,1.03-76,112.82-76 c111.78,0,275.18,2.16,275.18,2.16"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    className: "path-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "vector-effect": "non-scaling-stroke",
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    "stroke-miterlimit": "10",
    d: "M1543.71,206.49 c-71.3,0.82-575.1-1.17-710.32,0.18C568.2,209.31,706.92,42.3,474.17,44.98c-296.3,3.41-69.98,166.64-348.85,169.85c-226.58,2.61-159.04,1.83-159.04,1.83"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "vector-effect": "non-scaling-stroke",
    fill: "none",
    stroke: "#DED3C4",
    "stroke-width": "37",
    "stroke-miterlimit": "10",
    d: "M920.55,206.26c0,0,28.94-134.75,150.94-136.16l483.65-5.57"
  })))));
}

/***/ }),

/***/ "./src/hero/editor.scss":
/*!******************************!*\
  !*** ./src/hero/editor.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/hero/style.scss":
/*!*****************************!*\
  !*** ./src/hero/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/hero/block.json":
/*!*****************************!*\
  !*** ./src/hero/block.json ***!
  \*****************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"ridges/hero","version":"0.1.0","title":"Hero","category":"ridges","icon":"superhero-alt","description":"The hero block is used for most page headers, allowing for a title and list of buttons, with a path motif in the background.","example":{},"supports":{"html":false},"textdomain":"hero","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"pattern":{"type":"number","default":1}}}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"hero/index": 0,
/******/ 			"hero/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkridges_blocks"] = globalThis["webpackChunkridges_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["hero/style-index"], () => (__webpack_require__("./src/hero/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map