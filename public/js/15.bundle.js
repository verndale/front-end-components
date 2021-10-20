(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./src/components/content-carousel/content-carousel.js":
/*!*************************************************************!*\
  !*** ./src/components/content-carousel/content-carousel.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @verndale/core */ \"./node_modules/@verndale/core/lib/index.js\");\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_verndale_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n\n\n\nclass Module extends _verndale_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  setupDefaults() {\n    this.dom = {\n      next: this.el.querySelector('.content-carousel__button-next'),\n      prev: this.el.querySelector('.content-carousel__button-prev')\n    };\n    this.initSlider();\n  }\n\n  addListeners() {\n    this.dom.next.addEventListener('click', this.nextSlide.bind(this));\n    this.dom.prev.addEventListener('click', this.prevSlide.bind(this));\n  }\n\n  initSlider() {\n    this.lastSlide = null;\n    this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('.swiper-container', {\n      slidesPerView: 1,\n      spaceBetween: 3,\n      speed: 400,\n      preventClicks: false,\n      preventClicksPropagation: false,\n      preloadImages: false,\n      lazy: true,\n      allowTouchMove: false,\n      breakpoints: {\n        576: {\n          slidesPerView: 2\n        },\n        1280: {\n          slidesPerView: 3\n        }\n      }\n    });\n    this.changeSlide();\n    this.lastSlide = null;\n    this.begining = 0;\n    this.swiper.on('slideChange', this.changeSlide.bind(this));\n    this.swiper.on('reachEnd', this.reachEnd.bind(this));\n    this.swiper.on('resize', this.resize.bind(this));\n  }\n\n  nextSlide() {\n    this.swiper.slideNext();\n  }\n\n  prevSlide() {\n    this.swiper.slidePrev();\n  }\n\n  changeSlide() {\n    if (this.swiper.activeIndex === 0) {\n      this.dom.prev.disabled = true;\n    } else {\n      this.dom.prev.disabled = false;\n    }\n\n    if (typeof this.lastSlide === 'number' && this.swiper.activeIndex > this.lastSlide) {\n      this.dom.next.disabled = true;\n    } else {\n      this.dom.next.disabled = false;\n    }\n  }\n\n  resize() {\n    this.swiper.destroy();\n    this.initSlider();\n  }\n\n  reachEnd() {\n    this.lastSlide = this.swiper.activeIndex;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Module);\n\n//# sourceURL=webpack:///./src/components/content-carousel/content-carousel.js?");

/***/ })

}]);