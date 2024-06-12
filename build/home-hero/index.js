/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home-hero/edit.js":
/*!*******************************!*\
  !*** ./src/home-hero/edit.js ***!
  \*******************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/home-hero/editor.scss");

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
    level: 1,
    placeholder: 'Page Title'
  }], ['core/paragraph', {
    level: 1,
    placeholder: 'Page Title'
  }], ['core/buttons', {
    'layout': {
      'type': 'flex',
      'justifyContent': 'left'
    }
  }]];
  let myClass = `alignfull`;
  const onSelectImage = img => {
    setAttributes({
      imageID: img.id,
      imageURL: img.url
    });
  };
  const onRemoveImage = () => {
    setAttributes({
      imageID: null,
      imageURL: null
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: myClass
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "home-hero__img-column"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "home-hero__img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "https://source.unsplash.com/random"
  }), !attributes.imageID ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onSelectImage,
    type: "image",
    value: attributes.imageID,
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        onClick: open,
        className: "home-hero__img home-hero__img-placeholder",
        src: "https://source.unsplash.com/random"
      });
    }
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onSelectImage,
    type: "image",
    value: attributes.imageID,
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        onClick: open,
        className: "home-hero__img",
        src: attributes.imageURL
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "home-hero__path-2 home-hero__path-2--mobile",
    "data-name": "Layer 1",
    viewBox: "0 0 849.63 472.66"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
    id: "linear-gradient",
    x1: "0",
    y1: "236.33",
    x2: "849.63",
    y2: "236.33",
    gradientUnits: "userSpaceOnUse"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "0",
    "stop-color": "#efc65f"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "1",
    "stop-color": "#9cd563"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
    id: "linear-gradient-2",
    x1: "304.18",
    y1: "284.22",
    x2: "768.73",
    y2: "284.22",
    gradientUnits: "userSpaceOnUse"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "0",
    "stop-color": "#d3ca60"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "1",
    "stop-color": "#9cd563"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.4,455.17c208.12-88.06,332.65-165.71,397.04-256.16C538.93,10.08,694.23,232.62,833.52,10.08",
    fill: "none",
    stroke: "url(#linear-gradient)",
    "stroke-miterlimit": "10",
    "stroke-width": "38"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M315.63,288.8c74.41-56.17,320.28-105.81,437.84,52.69",
    fill: "none",
    stroke: "url(#linear-gradient-2)",
    "stroke-miterlimit": "10",
    "stroke-width": "38"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    className: "home-hero__img-attribution",
    value: attributes.attribution,
    onChange: attribution => setAttributes({
      attribution
    }),
    multiline: false,
    placeholder: "Attribution (optional)",
    allowedFormats: []
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "home-hero__content-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    template: MY_TEMPLATE
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "home-hero__path-1",
    version: "1.1",
    viewBox: "0 0 5139.24 1599.41"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
    id: "linear-gradient-5",
    x1: "0",
    y1: "462.34",
    x2: "5025.58",
    y2: "462.34",
    gradientUnits: "userSpaceOnUse"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: ".75",
    "stop-color": "#e48b3a"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: ".91",
    "stop-color": "#efc65f"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5005.16,339.8c16.63,128.27-114.01,384.8-296.23,401.09-233.81,12.51-379.69,216.97-418.74,375.35-39.05,158.38-253.33,32.67-386.2-138.86-123.23-159.08-357.88-59.64-447.72-4.87-120.56,73.5-501.78,335.24-836.92,255.63-335.14-79.62-299.56-927.59-510.31-509.57-158.88,315.13-323.79,280.7-376.88,246.51S686.42,439.23,5.19,632.57",
    fill: "none",
    stroke: "url(#linear-gradient-5)",
    "stroke-miterlimit": "10",
    "vector-effect": "non-scaling-stroke"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "home-hero__path-1-loop",
    viewBox: "0 0 430.69 368.01"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
    id: "linear-gradient-6",
    x1: "0",
    y1: "184.01",
    x2: "430.69",
    y2: "184.01",
    gradientUnits: "userSpaceOnUse"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "0",
    "stop-color": "#e9ac50"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: ".57",
    "stop-color": "#efc65f"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17.55,360.74c30.03-72.51,180.69-72.86,258.92-151.18,78.23-78.33,93.51-178.94,150.27-190.97",
    fill: "none",
    stroke: "url(#linear-gradient-6)",
    "stroke-miterlimit": "10",
    "vector-effect": "non-scaling-stroke"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "home-hero__path-secondary-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "home-hero__path-2 home-hero__path-2--desktop",
    "data-name": "Layer 1",
    viewBox: "0 0 849.63 472.66"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
    id: "linear-gradient-3",
    x1: "0",
    y1: "236.33",
    x2: "849.63",
    y2: "236.33",
    gradientUnits: "userSpaceOnUse"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "0",
    "stop-color": "#efc65f"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "1",
    "stop-color": "#9cd563"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
    id: "linear-gradient-4",
    x1: "304.18",
    y1: "284.22",
    x2: "768.73",
    y2: "284.22",
    gradientUnits: "userSpaceOnUse"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "0",
    "stop-color": "#d3ca60"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "1",
    "stop-color": "#9cd563"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.4,455.17c208.12-88.06,332.65-165.71,397.04-256.16C538.93,10.08,694.23,232.62,833.52,10.08",
    fill: "none",
    stroke: "url(#linear-gradient-3)",
    "stroke-miterlimit": "10",
    "vector-effect": "non-scaling-stroke"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M315.63,288.8c74.41-56.17,320.28-105.81,437.84,52.69",
    fill: "none",
    stroke: "url(#linear-gradient-4)",
    "stroke-miterlimit": "10",
    "vector-effect": "non-scaling-stroke"
  }))));
}

/***/ }),

/***/ "./src/home-hero/index.js":
/*!********************************!*\
  !*** ./src/home-hero/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/home-hero/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/home-hero/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/home-hero/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/home-hero/block.json");
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

/***/ "./src/home-hero/save.js":
/*!*******************************!*\
  !*** ./src/home-hero/save.js ***!
  \*******************************/
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
  let myClass = `alignfull`;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: myClass
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "home-hero__img-column"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "home-hero__img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.imageURL
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "home-hero__path-2 home-hero__path-2--mobile",
    viewBox: "0 0 849.63 472.66"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
    id: "linear-gradient",
    x1: "0",
    y1: "236.33",
    x2: "849.63",
    y2: "236.33",
    gradientUnits: "userSpaceOnUse"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "0",
    "stop-color": "#efc65f"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "1",
    "stop-color": "#9cd563"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
    id: "linear-gradient-2",
    x1: "304.18",
    y1: "284.22",
    x2: "768.73",
    y2: "284.22",
    gradientUnits: "userSpaceOnUse"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "0",
    "stop-color": "#d3ca60"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "1",
    "stop-color": "#9cd563"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.4,455.17c208.12-88.06,332.65-165.71,397.04-256.16C538.93,10.08,694.23,232.62,833.52,10.08",
    fill: "none",
    stroke: "url(#linear-gradient)",
    "stroke-miterlimit": "10",
    "stroke-width": "38"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M315.63,288.8c74.41-56.17,320.28-105.81,437.84,52.69",
    fill: "none",
    stroke: "url(#linear-gradient-2)",
    "stroke-miterlimit": "10",
    "stroke-width": "38"
  }))), attributes.attribution && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: attributes.attribution,
    className: "home-hero__img-attribution"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "home-hero__content-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "home-hero__path-1",
    version: "1.1",
    viewBox: "0 0 5139.24 1599.41"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
    id: "linear-gradient-5",
    x1: "0",
    y1: "462.34",
    x2: "5025.58",
    y2: "462.34",
    gradientUnits: "userSpaceOnUse"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: ".75",
    "stop-color": "#e48b3a"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: ".91",
    "stop-color": "#efc65f"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5005.16,339.8c16.63,128.27-114.01,384.8-296.23,401.09-233.81,12.51-379.69,216.97-418.74,375.35-39.05,158.38-253.33,32.67-386.2-138.86-123.23-159.08-357.88-59.64-447.72-4.87-120.56,73.5-501.78,335.24-836.92,255.63-335.14-79.62-299.56-927.59-510.31-509.57-158.88,315.13-323.79,280.7-376.88,246.51S686.42,439.23,5.19,632.57",
    fill: "none",
    stroke: "url(#linear-gradient-5)",
    "stroke-miterlimit": "10",
    "vector-effect": "non-scaling-stroke"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "home-hero__path-1-loop",
    viewBox: "0 0 430.69 368.01"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
    id: "linear-gradient-6",
    x1: "0",
    y1: "184.01",
    x2: "430.69",
    y2: "184.01",
    gradientUnits: "userSpaceOnUse"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "0",
    "stop-color": "#e9ac50"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: ".57",
    "stop-color": "#efc65f"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17.55,360.74c30.03-72.51,180.69-72.86,258.92-151.18,78.23-78.33,93.51-178.94,150.27-190.97",
    fill: "none",
    stroke: "url(#linear-gradient-6)",
    "stroke-miterlimit": "10",
    "vector-effect": "non-scaling-stroke"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "home-hero__path-secondary-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "home-hero__path-2 home-hero__path-2--desktop",
    "data-name": "Layer 1",
    viewBox: "0 0 849.63 472.66"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
    id: "linear-gradient-3",
    x1: "0",
    y1: "236.33",
    x2: "849.63",
    y2: "236.33",
    gradientUnits: "userSpaceOnUse"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "0",
    "stop-color": "#efc65f"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "1",
    "stop-color": "#9cd563"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
    id: "linear-gradient-4",
    x1: "304.18",
    y1: "284.22",
    x2: "768.73",
    y2: "284.22",
    gradientUnits: "userSpaceOnUse"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "0",
    "stop-color": "#d3ca60"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "1",
    "stop-color": "#9cd563"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.4,455.17c208.12-88.06,332.65-165.71,397.04-256.16C538.93,10.08,694.23,232.62,833.52,10.08",
    fill: "none",
    stroke: "url(#linear-gradient-3)",
    "stroke-miterlimit": "10",
    "vector-effect": "non-scaling-stroke"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M315.63,288.8c74.41-56.17,320.28-105.81,437.84,52.69",
    fill: "none",
    stroke: "url(#linear-gradient-4)",
    "stroke-miterlimit": "10",
    "vector-effect": "non-scaling-stroke"
  }))));
}

/***/ }),

/***/ "./src/home-hero/editor.scss":
/*!***********************************!*\
  !*** ./src/home-hero/editor.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/home-hero/style.scss":
/*!**********************************!*\
  !*** ./src/home-hero/style.scss ***!
  \**********************************/
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

/***/ "./src/home-hero/block.json":
/*!**********************************!*\
  !*** ./src/home-hero/block.json ***!
  \**********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"ridges/home-hero","version":"0.1.0","title":"Home Hero","category":"ridges","icon":"superhero-alt","description":"The home hero block is a special version of the hero with colorful paths and an image.","example":{},"supports":{"html":false},"textdomain":"home-hero","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"imageID":{"type":"number","default":null},"imageURL":{"type":"string","default":"https://source.unsplash.com/random?sig=event-preview"},"attribution":{"type":"string","source":"html","selector":".home-hero__img-attribution","placeholder":"Attribution (optional)"}}}');

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
/******/ 			"home-hero/index": 0,
/******/ 			"home-hero/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["home-hero/style-index"], () => (__webpack_require__("./src/home-hero/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map