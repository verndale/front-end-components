(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./src/components/C-FMT-11-full-width-video-row/full-width-video-row.js":
/*!******************************************************************************!*\
  !*** ./src/components/C-FMT-11-full-width-video-row/full-width-video-row.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @verndale/core */ \"./node_modules/@verndale/core/lib/index.js\");\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_verndale_core__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass FullWidthVideo extends _verndale_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  setupDefaults() {\n    this.dom = {\n      $overlay: this.el.querySelector('.full-width-video__overlay'),\n      $wrapper: this.el.querySelector('.full-width-video__wrapper')\n    };\n  }\n\n  addListeners() {\n    const {\n      $overlay\n    } = this.dom;\n    $overlay.addEventListener('click', this.handleClick.bind(this));\n  }\n\n  handleClick(e) {\n    const event = new Event('playVideo');\n    document.dispatchEvent(event);\n    const $button = e.target.closest('.full-width-video__play-button');\n\n    if ($button) {\n      this.removeOverlay($button);\n      this.removeImage();\n      this.el.dataset.hideGradient = 'true';\n    }\n  }\n\n  removeOverlay($button) {\n    if ($button) {\n      const {\n        $overlay\n      } = this.dom;\n      $overlay.parentNode.removeChild($overlay);\n    }\n  }\n\n  removeImage() {\n    const {\n      $image\n    } = this.dom;\n\n    if ($image) {\n      this.dom.$image.remove();\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FullWidthVideo);\n\n//# sourceURL=webpack:///./src/components/C-FMT-11-full-width-video-row/full-width-video-row.js?");

/***/ })

}]);