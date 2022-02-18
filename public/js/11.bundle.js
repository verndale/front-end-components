(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./src/components/C-CSL-2-3-column-image-gallery/flexibleImageCarousel.js":
/*!********************************************************************************!*\
  !*** ./src/components/C-CSL-2-3-column-image-gallery/flexibleImageCarousel.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @verndale/core */ \"./node_modules/@verndale/core/lib/index.js\");\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_verndale_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-slider/src/tiny-slider */ \"./node_modules/tiny-slider/src/tiny-slider.js\");\n\n\n\nclass FlexibleImageCarousel extends _verndale_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  setupDefaults() {\n    this.dom = {\n      slider: this.el.querySelector('.flexible-image-carousel__slider'),\n      cards: this.el.querySelectorAll('.generic-card'),\n      tallCards: this.el.querySelectorAll('.generic-card--tall'),\n      shortCards: this.el.querySelectorAll('.generic-card--default, .generic-card--short'),\n      buttons: this.el.querySelector('.flexible-image-carousel__buttons')\n    };\n    this.wrapSliderText();\n    this.setupTallSlides();\n    this.initSlider();\n  }\n\n  initSlider() {\n    Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_1__[\"tns\"])({\n      container: this.dom.slider,\n      loop: false,\n      items: 1,\n      gutter: 17,\n      edgePadding: 40,\n      nav: false,\n      controlsContainer: this.dom.buttons,\n      lazyloadSelector: 'lazyload',\n      preventScrollOnTouch: 'auto',\n      responsive: {\n        625: {\n          items: 2\n        },\n        960: {\n          items: 3,\n          gutter: 23,\n          edgePadding: 0\n        }\n      }\n    });\n  }\n\n  setupTallSlides() {\n    if (!Array.from(this.dom.shortCards).length) {\n      Array.from(this.dom.tallCards).forEach(tallCard => tallCard.classList.add('respect-ratio'));\n    }\n  }\n\n  wrapSliderText() {\n    Array.from(this.dom.cards).forEach(element => {\n      const inner = element.querySelector('.generic-card__inner');\n      const innerElements = element.querySelectorAll('.generic-card__title, .generic-card__subtitle');\n      const wrapper = document.createElement('div');\n      inner.appendChild(wrapper);\n      wrapper.classList.add('generic-card__inner__content');\n      Array.from(innerElements).forEach(child => wrapper.appendChild(child));\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlexibleImageCarousel);\n\n//# sourceURL=webpack:///./src/components/C-CSL-2-3-column-image-gallery/flexibleImageCarousel.js?");

/***/ })

}]);