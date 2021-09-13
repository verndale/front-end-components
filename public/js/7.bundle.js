(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./src/components/helpers/index.js":
/*!*****************************************!*\
  !*** ./src/components/helpers/index.js ***!
  \*****************************************/
/*! exports provided: open, close, debounce, keyCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"open\", function() { return open; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"close\", function() { return close; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"keyCode\", function() { return keyCode; });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\ngsap__WEBPACK_IMPORTED_MODULE_0__[\"gsap\"].registerPlugin(gsap__WEBPACK_IMPORTED_MODULE_0__[\"CSSPlugin\"]);\n/**\n * Opens an element\n *\n * @example\n * import {open} from '../helpers';\n *\n * open({ element: this.el.querySelector('.element)});\n *\n * @param {Object} element - HTML element you want to target for animation\n * @param {Number} duration - Speed of the animation\n * @param {String} ease - Ease of the animation\n * @param {Function} onComplete - On complete function\n */\n\nconst open = ({\n  element,\n  duration = 0.4,\n  ease = 'easeOut',\n  onComplete\n}) => {\n  gsap__WEBPACK_IMPORTED_MODULE_0__[\"gsap\"].set(element, {\n    height: 'auto'\n  });\n  gsap__WEBPACK_IMPORTED_MODULE_0__[\"gsap\"].from(element, {\n    height: 0,\n    ease: gsap__WEBPACK_IMPORTED_MODULE_0__[\"Expo\"][ease],\n    duration,\n    onComplete: () => {\n      element.style.height = null;\n      onComplete && onComplete();\n    }\n  });\n};\n/**\n * Closes an element\n *\n * @example\n * import {close} from '../helpers';\n *\n * close({ element: this.el.querySelector('.element)});\n *\n * @param {Object} element - HTML element you want to target for animation\n * @param {Number} duration - Speed of the animation\n * @param {String} ease - Ease of the animation\n * @param {Function} onComplete - On complete function\n */\n\nconst close = ({\n  element,\n  duration = 0.4,\n  ease = 'easeOut',\n  onComplete\n}) => {\n  gsap__WEBPACK_IMPORTED_MODULE_0__[\"gsap\"].set(element, {\n    height: element.offsetHeight\n  });\n  gsap__WEBPACK_IMPORTED_MODULE_0__[\"gsap\"].to(element, {\n    height: 0,\n    ease: gsap__WEBPACK_IMPORTED_MODULE_0__[\"Expo\"][ease],\n    duration,\n    onComplete: () => {\n      element.style.height = null;\n      onComplete && onComplete();\n    }\n  });\n};\n/**\n * Debounce function\n * Delays the processing of the event\n */\n\nconst debounce = (callback, wait) => {\n  let timerId;\n  return (...args) => {\n    clearTimeout(timerId);\n    timerId = setTimeout(() => {\n      callback(...args);\n    }, wait);\n  };\n};\n/**\n * Key code list object\n */\n\nconst keyCode = {\n  TAB: 9,\n  RETURN: 13,\n  ESC: 27,\n  SPACE: 32,\n  PAGEUP: 33,\n  PAGEDOWN: 34,\n  END: 35,\n  HOME: 36,\n  LEFT: 37,\n  UP: 38,\n  RIGHT: 39,\n  DOWN: 40\n};\n\n//# sourceURL=webpack:///./src/components/helpers/index.js?");

/***/ }),

/***/ "./src/components/tabbed-content/tabbed-content.js":
/*!*********************************************************!*\
  !*** ./src/components/tabbed-content/tabbed-content.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @verndale/core */ \"./node_modules/@verndale/core/lib/index.js\");\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_verndale_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./src/components/helpers/index.js\");\n\n\nconst KEYS_DIRECTION = {\n  37: -1,\n  38: -1,\n  39: 1,\n  40: 1\n};\n\nclass Module extends _verndale_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  setupDefaults() {\n    const identifier = this.el.dataset.identifier;\n    this.dom = {\n      $tabs: this.el.querySelectorAll(`[data-identifier=\"${identifier}\"][role=\"tab\"]`),\n      $panels: this.el.querySelectorAll(`[data-identifier=\"${identifier}\"][role=\"tabpanel\"]`)\n    };\n    console.log(identifier, this.dom);\n    this.isVertical = this.el.dataset.isVertical === 'true';\n  }\n\n  addListeners() {\n    this.dom.$tabs.forEach(tab => tab.addEventListener('click', this.onClick.bind(this)));\n    this.dom.$tabs.forEach(tab => tab.addEventListener('keydown', this.onKeyDown.bind(this)));\n    this.dom.$tabs.forEach(tab => tab.addEventListener('keyup', this.onKeyUp.bind(this)));\n    this.el.addEventListener('activatetab', this.onActivatetab.bind(this));\n    this.el.addEventListener('reset', this.onReset.bind(this));\n  }\n\n  onClick(e) {\n    this.activateTab(e.target, false);\n  }\n\n  onKeyDown(e) {\n    switch (e.keyCode) {\n      case _helpers__WEBPACK_IMPORTED_MODULE_1__[\"keyCode\"].END:\n        e.preventDefault();\n        this.activateTab(this.dom.$tabs[this.dom.$tabs.length - 1]);\n        break;\n\n      case _helpers__WEBPACK_IMPORTED_MODULE_1__[\"keyCode\"].HOME:\n        e.preventDefault();\n        this.activateTab(this.don.$tabs[0]);\n        break;\n\n      case _helpers__WEBPACK_IMPORTED_MODULE_1__[\"keyCode\"].UP:\n      case _helpers__WEBPACK_IMPORTED_MODULE_1__[\"keyCode\"].DOWN:\n        if (this.isVertical) e.preventDefault();\n        break;\n    }\n  }\n\n  onKeyUp(e) {\n    switch (e.keyCode) {\n      case _helpers__WEBPACK_IMPORTED_MODULE_1__[\"keyCode\"].LEFT:\n      case _helpers__WEBPACK_IMPORTED_MODULE_1__[\"keyCode\"].RIGHT:\n        if (!this.isVertical) this.switchTabOnArrowPress(e);\n        break;\n\n      case _helpers__WEBPACK_IMPORTED_MODULE_1__[\"keyCode\"].UP:\n      case _helpers__WEBPACK_IMPORTED_MODULE_1__[\"keyCode\"].DOWN:\n        if (this.isVertical) this.switchTabOnArrowPress(e);\n        break;\n    }\n  }\n\n  onActivatetab(e) {\n    const tab = document.getElementById(e.detail.id);\n    this.activateTab(tab, !!e.detail.setFocus);\n  }\n\n  onReset() {\n    this.deactivateTabs();\n    this.dom.$tabs[0].setAttribute('tabindex', '0');\n  }\n\n  activateTab(tab, setFocus = true) {\n    this.deactivateTabs();\n    tab.removeAttribute('tabindex');\n    tab.setAttribute('aria-selected', 'true');\n    const controls = tab.getAttribute('aria-controls');\n    document.getElementById(controls).removeAttribute('aria-hidden');\n\n    if (setFocus) {\n      tab.focus();\n    }\n\n    const event = new CustomEvent('tabchange', {\n      detail: {\n        id: tab.id\n      }\n    });\n    this.el.dispatchEvent(event);\n  }\n\n  deactivateTabs() {\n    this.dom.$tabs.forEach(tab => {\n      tab.setAttribute('tabindex', '-1');\n      tab.setAttribute('aria-selected', 'false');\n    });\n    this.dom.$panels.forEach(panel => {\n      panel.setAttribute('aria-hidden', 'true');\n    });\n  }\n\n  switchTabOnArrowPress(e) {\n    if (!KEYS_DIRECTION[e.keyCode]) return;\n    if (typeof e.target.dataset.index === 'undefined') return;\n    const index = parseInt(e.target.dataset.index, 10);\n\n    if (this.dom.$tabs[index + KEYS_DIRECTION[e.keyCode]]) {\n      this.activateTab(this.dom.$tabs[index + KEYS_DIRECTION[e.keyCode]], true);\n      return;\n    }\n\n    if (this.isVertical) {\n      if (e.keyCode === _helpers__WEBPACK_IMPORTED_MODULE_1__[\"keyCode\"].UP) {\n        this.activateTab(this.dom.$tabs[this.dom.$tabs.length - 1], true);\n      } else if (e.keyCode === _helpers__WEBPACK_IMPORTED_MODULE_1__[\"keyCode\"].DOWN) {\n        this.activateTab(this.dom.$tabs[0], true);\n      }\n    } else {\n      if (e.keyCode === _helpers__WEBPACK_IMPORTED_MODULE_1__[\"keyCode\"].LEFT) {\n        this.activateTab(this.dom.$tabs[this.dom.$tabs.length - 1], true);\n      } else if (e.keyCode === _helpers__WEBPACK_IMPORTED_MODULE_1__[\"keyCode\"].RIGHT) {\n        this.activateTab(this.dom.$tabs[0], true);\n      }\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Module);\n\n//# sourceURL=webpack:///./src/components/tabbed-content/tabbed-content.js?");

/***/ })

}]);