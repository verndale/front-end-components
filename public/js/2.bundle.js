(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/components/people-card-grid/PeopleCard.js":
/*!*******************************************************!*\
  !*** ./src/components/people-card-grid/PeopleCard.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @verndale/core */ \"./node_modules/@verndale/core/lib/index.js\");\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_verndale_core__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass PeopleCardGrid extends _verndale_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(el) {\n    super(el);\n  }\n\n  setupDefaults() {\n    this.dom = {\n      cards: [...this.el.querySelectorAll('.people-card-grid__person')]\n    };\n  }\n\n  addListeners() {\n    this.dom.cards.forEach(card => {\n      card.addEventListener('click', this.handleClick.bind(this))\n    }\n    );\n  }\n\n  handleClick(e) {\n    console.log('object', e.currentTarget.dataset);\n\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PeopleCardGrid);\n\n\n//# sourceURL=webpack:///./src/components/people-card-grid/PeopleCard.js?");

/***/ })

}]);