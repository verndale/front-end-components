(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/components/testimonials/testimonials.js":
/*!*****************************************************!*\
  !*** ./src/components/testimonials/testimonials.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @verndale/core */ \"./node_modules/@verndale/core/lib/index.js\");\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_verndale_core__WEBPACK_IMPORTED_MODULE_0__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'swiper'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'swiper'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).use([!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'swiper'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'swiper'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())])\n\nclass Module extends _verndale_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  setupDefaults() {\n    this.dom = {\n      container: this.el.querySelector('.swiper-container'),\n      pagination: this.el.querySelector('.swiper-pagination'),\n      next: this.el.querySelector('.swiper-button-next'),\n      prev: this.el.querySelector('.swiper-button-prev')\n    }\n    console.log(this.dom)\n    this.initSlider()\n  }\n\n  addListeners() {}\n\n  initSlider() {\n    this.slider = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'swiper'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.dom.container, {\n      centeredSlides: true,\n      spaceBetween: 25,\n      pagination: {\n        el: this.dom.pagination\n      },\n      navigation: {\n        nextEl: this.dom.next,\n        prevEl: this.dom.prev\n      }\n    })\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Module);\n\n\n//# sourceURL=webpack:///./src/components/testimonials/testimonials.js?");

/***/ })

}]);