(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./src/components/C-CSL-5-testimonials-carousel/testimonials.js":
/*!**********************************************************************!*\
  !*** ./src/components/C-CSL-5-testimonials-carousel/testimonials.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @verndale/core */ \"./node_modules/@verndale/core/lib/index.js\");\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_verndale_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n\n\nswiper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use([swiper__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"], swiper__WEBPACK_IMPORTED_MODULE_1__[\"Navigation\"]]);\n\nclass Module extends _verndale_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  setupDefaults() {\n    this.dom = {\n      container: this.el.querySelector('.swiper-container'),\n      pagination: this.el.querySelector('.swiper-pagination'),\n      next: this.el.querySelector('.swiper-button-next'),\n      prev: this.el.querySelector('.swiper-button-prev')\n    };\n    this.initSlider();\n  }\n\n  addListeners() {}\n\n  initSlider() {\n    this.slider = new swiper__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dom.container, {\n      centeredSlides: true,\n      spaceBetween: 25,\n      pagination: {\n        el: this.dom.pagination\n      },\n      navigation: {\n        nextEl: this.dom.next,\n        prevEl: this.dom.prev\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Module);\n\n//# sourceURL=webpack:///./src/components/C-CSL-5-testimonials-carousel/testimonials.js?");

/***/ })

}]);