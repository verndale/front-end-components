(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./src/components/video/video.js":
/*!***************************************!*\
  !*** ./src/components/video/video.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @verndale/core */ \"./node_modules/@verndale/core/lib/index.js\");\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_verndale_core__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Module extends _verndale_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  setupDefaults() {\n    this.dom = {\n      video: this.el.querySelector('video')\n    };\n    Object.defineProperty(this.dom.video, 'playing', {\n      // eslint-disable-next-line object-shorthand\n      get: function () {\n        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);\n      }\n    });\n  }\n\n  addListeners() {\n    this.dom.video.addEventListener('click', this.handleVideoClick.bind(this));\n    this.dom.video.addEventListener('play', this.handleVideoPlay.bind(this));\n    this.dom.video.addEventListener('pause', this.handleVideoPause.bind(this));\n    this.dom.video.addEventListener('ended', this.handleVideoEnd.bind(this));\n  }\n\n  handleVideoClick() {\n    if (!this.dom.video.playing) {\n      this.dom.video.play();\n    }\n  }\n\n  handleVideoPlay() {\n    this.el.classList.add('video--playing');\n    this.dom.video.setAttribute('controls', 'controls');\n  }\n\n  handleVideoPause() {\n    this.el.classList.remove('video--playing');\n    this.dom.video.removeAttribute('controls');\n  }\n\n  handleVideoEnd() {\n    this.el.classList.remove('video--playing');\n    this.dom.video.removeAttribute('controls');\n    this.dom.video.currentTime = 0;\n    this.dom.video.load();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Module);\n\n//# sourceURL=webpack:///./src/components/video/video.js?");

/***/ })

}]);