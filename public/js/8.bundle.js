(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n * JavaScript Cookie v2.2.1\n * https://github.com/js-cookie/js-cookie\n *\n * Copyright 2006, 2015 Klaus Hartl & Fagner Brack\n * Released under the MIT license\n */\n;(function (factory) {\n\tvar registeredInModuleLoader;\n\tif (true) {\n\t\t!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t\tregisteredInModuleLoader = true;\n\t}\n\tif (true) {\n\t\tmodule.exports = factory();\n\t\tregisteredInModuleLoader = true;\n\t}\n\tif (!registeredInModuleLoader) {\n\t\tvar OldCookies = window.Cookies;\n\t\tvar api = window.Cookies = factory();\n\t\tapi.noConflict = function () {\n\t\t\twindow.Cookies = OldCookies;\n\t\t\treturn api;\n\t\t};\n\t}\n}(function () {\n\tfunction extend () {\n\t\tvar i = 0;\n\t\tvar result = {};\n\t\tfor (; i < arguments.length; i++) {\n\t\t\tvar attributes = arguments[ i ];\n\t\t\tfor (var key in attributes) {\n\t\t\t\tresult[key] = attributes[key];\n\t\t\t}\n\t\t}\n\t\treturn result;\n\t}\n\n\tfunction decode (s) {\n\t\treturn s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);\n\t}\n\n\tfunction init (converter) {\n\t\tfunction api() {}\n\n\t\tfunction set (key, value, attributes) {\n\t\t\tif (typeof document === 'undefined') {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tattributes = extend({\n\t\t\t\tpath: '/'\n\t\t\t}, api.defaults, attributes);\n\n\t\t\tif (typeof attributes.expires === 'number') {\n\t\t\t\tattributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);\n\t\t\t}\n\n\t\t\t// We're using \"expires\" because \"max-age\" is not supported by IE\n\t\t\tattributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';\n\n\t\t\ttry {\n\t\t\t\tvar result = JSON.stringify(value);\n\t\t\t\tif (/^[\\{\\[]/.test(result)) {\n\t\t\t\t\tvalue = result;\n\t\t\t\t}\n\t\t\t} catch (e) {}\n\n\t\t\tvalue = converter.write ?\n\t\t\t\tconverter.write(value, key) :\n\t\t\t\tencodeURIComponent(String(value))\n\t\t\t\t\t.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);\n\n\t\t\tkey = encodeURIComponent(String(key))\n\t\t\t\t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)\n\t\t\t\t.replace(/[\\(\\)]/g, escape);\n\n\t\t\tvar stringifiedAttributes = '';\n\t\t\tfor (var attributeName in attributes) {\n\t\t\t\tif (!attributes[attributeName]) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t\tstringifiedAttributes += '; ' + attributeName;\n\t\t\t\tif (attributes[attributeName] === true) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\t// Considers RFC 6265 section 5.2:\n\t\t\t\t// ...\n\t\t\t\t// 3.  If the remaining unparsed-attributes contains a %x3B (\";\")\n\t\t\t\t//     character:\n\t\t\t\t// Consume the characters of the unparsed-attributes up to,\n\t\t\t\t// not including, the first %x3B (\";\") character.\n\t\t\t\t// ...\n\t\t\t\tstringifiedAttributes += '=' + attributes[attributeName].split(';')[0];\n\t\t\t}\n\n\t\t\treturn (document.cookie = key + '=' + value + stringifiedAttributes);\n\t\t}\n\n\t\tfunction get (key, json) {\n\t\t\tif (typeof document === 'undefined') {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tvar jar = {};\n\t\t\t// To prevent the for loop in the first place assign an empty array\n\t\t\t// in case there are no cookies at all.\n\t\t\tvar cookies = document.cookie ? document.cookie.split('; ') : [];\n\t\t\tvar i = 0;\n\n\t\t\tfor (; i < cookies.length; i++) {\n\t\t\t\tvar parts = cookies[i].split('=');\n\t\t\t\tvar cookie = parts.slice(1).join('=');\n\n\t\t\t\tif (!json && cookie.charAt(0) === '\"') {\n\t\t\t\t\tcookie = cookie.slice(1, -1);\n\t\t\t\t}\n\n\t\t\t\ttry {\n\t\t\t\t\tvar name = decode(parts[0]);\n\t\t\t\t\tcookie = (converter.read || converter)(cookie, name) ||\n\t\t\t\t\t\tdecode(cookie);\n\n\t\t\t\t\tif (json) {\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\tcookie = JSON.parse(cookie);\n\t\t\t\t\t\t} catch (e) {}\n\t\t\t\t\t}\n\n\t\t\t\t\tjar[name] = cookie;\n\n\t\t\t\t\tif (key === name) {\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t} catch (e) {}\n\t\t\t}\n\n\t\t\treturn key ? jar[key] : jar;\n\t\t}\n\n\t\tapi.set = set;\n\t\tapi.get = function (key) {\n\t\t\treturn get(key, false /* read as raw */);\n\t\t};\n\t\tapi.getJSON = function (key) {\n\t\t\treturn get(key, true /* read as json */);\n\t\t};\n\t\tapi.remove = function (key, attributes) {\n\t\t\tset(key, '', extend(attributes, {\n\t\t\t\texpires: -1\n\t\t\t}));\n\t\t};\n\n\t\tapi.defaults = {};\n\n\t\tapi.withConverter = init;\n\n\t\treturn api;\n\t}\n\n\treturn init(function () {});\n}));\n\n\n//# sourceURL=webpack:///./node_modules/js-cookie/src/js.cookie.js?");

/***/ }),

/***/ "./src/components/alert/Alert.js":
/*!***************************************!*\
  !*** ./src/components/alert/Alert.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @verndale/core */ \"./node_modules/@verndale/core/lib/index.js\");\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_verndale_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ \"./src/components/helpers/index.js\");\n\n\n\n/**\n * `Alert`\n *\n *\n * @example\n * import { Alert } from '@verndale/front-end-components';\n *\n * class Foo {\n *   construction(){\n *\n *     const Alert = new Alert('.alert');\n *   }\n * }\n */\n\nclass Alert extends _verndale_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  setupDefaults() {\n    this.dom = {\n      content: this.el.querySelector('.alert__content'),\n      toggle: this.el.querySelector('.alert__toggle'),\n      hide: this.el.querySelector('.alert__hide'),\n      show: this.el.querySelector('.alert__show'),\n      close: this.el.querySelector('.alert__close')\n    };\n    this.id = this.el.dataset.id;\n    this.cookieName = this.el.dataset.cookieName;\n    this.canDismiss = this.el.dataset.canDismiss;\n    this.expanded = this.el.dataset.expanded;\n    this.shouldDisplayAlert();\n\n    if (this.dom.content !== null) {\n      this.cookieNameToggle = `${this.id}_toggle`;\n      this.shouldToggle();\n    }\n\n    this.setDismissibleButton();\n    this.setExpandedAlert();\n  }\n\n  shouldToggle() {\n    this.alertToggle = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.cookieNameToggle);\n\n    if (this.alertToggle) {\n      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set(this.cookieNameToggle, false);\n      this.dom.toggle.setAttribute('aria-expanded', 'true');\n    } else {\n      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set(this.cookieNameToggle, true);\n      this.dom.toggle.setAttribute('aria-expanded', 'false');\n    }\n\n    this.handleToggle();\n  }\n\n  addListeners() {\n    if (this.dom.content) {\n      this.dom.toggle.addEventListener('click', this.handleToggle.bind(this));\n    }\n\n    if (this.dom.close) {\n      this.dom.close.addEventListener('click', this.handleClose.bind(this));\n    }\n  }\n\n  shouldDisplayAlert() {\n    this.alerts = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.cookieName);\n\n    if (this.alerts) {\n      this.alerts = JSON.parse(this.alerts);\n\n      if (this.alerts.includes(this.id)) {\n        return this.el.remove();\n      }\n    } else {\n      this.alerts = [];\n    }\n\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"open\"])({\n      element: this.el,\n      onComplete: () => this.el.style.height = 'auto'\n    });\n  }\n\n  setDismissibleButton() {\n    if (this.canDismiss !== 'true') {\n      this.dom.close.style.display = 'none';\n      return;\n    }\n\n    this.dom.close.style.display = 'block';\n  }\n\n  setExpandedAlert() {\n    if (this.expanded === 'true') {\n      this.handleToggle();\n      Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"open\"])({\n        element: this.el,\n        onComplete: () => this.dom.content.style.display = 'block'\n      });\n    }\n  }\n\n  handleToggle() {\n    if (this.dom.toggle.getAttribute('aria-expanded') === 'true') {\n      this.dom.toggle.setAttribute('aria-expanded', false);\n      this.collapseAlert();\n    } else {\n      this.dom.toggle.setAttribute('aria-expanded', true);\n      this.expandAlert();\n    }\n  }\n\n  expandAlert() {\n    this.dom.content.style.display = 'block';\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"open\"])({\n      element: this.dom.content,\n      onComplete: () => {\n        this.dom.content.focus();\n        this.dom.content.style.height = 'auto';\n      }\n    });\n  }\n\n  collapseAlert() {\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"close\"])({\n      element: this.dom.content,\n      onComplete: () => {\n        this.dom.content.style.display = 'none';\n      }\n    });\n  }\n\n  handleClose() {\n    this.alerts.push(this.id);\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"close\"])({\n      element: this.el,\n      onComplete: () => {\n        js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set(this.cookieName, JSON.stringify(this.alerts));\n        this.el.remove();\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Alert);\n\n//# sourceURL=webpack:///./src/components/alert/Alert.js?");

/***/ }),

/***/ "./src/components/helpers/index.js":
/*!*****************************************!*\
  !*** ./src/components/helpers/index.js ***!
  \*****************************************/
/*! exports provided: open, close, debounce, keyCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"open\", function() { return open; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"close\", function() { return close; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"keyCode\", function() { return keyCode; });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\ngsap__WEBPACK_IMPORTED_MODULE_0__[\"gsap\"].registerPlugin(gsap__WEBPACK_IMPORTED_MODULE_0__[\"CSSPlugin\"]);\n/**\n * Opens an element\n *\n * @example\n * import {open} from '../helpers';\n *\n * open({ element: this.el.querySelector('.element)});\n *\n * @param {Object} element - HTML element you want to target for animation\n * @param {Number} duration - Speed of the animation\n * @param {String} ease - Ease of the animation\n * @param {Function} onComplete - On complete function\n */\n\nconst open = ({\n  element,\n  duration = 0.4,\n  ease = 'easeOut',\n  onComplete\n}) => {\n  gsap__WEBPACK_IMPORTED_MODULE_0__[\"gsap\"].set(element, {\n    height: 'auto'\n  });\n  gsap__WEBPACK_IMPORTED_MODULE_0__[\"gsap\"].from(element, {\n    height: 0,\n    ease: gsap__WEBPACK_IMPORTED_MODULE_0__[\"Expo\"][ease],\n    duration,\n    onComplete: () => {\n      element.style.height = null;\n      onComplete && onComplete();\n    }\n  });\n};\n/**\n * Closes an element\n *\n * @example\n * import {close} from '../helpers';\n *\n * close({ element: this.el.querySelector('.element)});\n *\n * @param {Object} element - HTML element you want to target for animation\n * @param {Number} duration - Speed of the animation\n * @param {String} ease - Ease of the animation\n * @param {Function} onComplete - On complete function\n */\n\nconst close = ({\n  element,\n  duration = 0.4,\n  ease = 'easeOut',\n  onComplete\n}) => {\n  gsap__WEBPACK_IMPORTED_MODULE_0__[\"gsap\"].set(element, {\n    height: element.offsetHeight\n  });\n  gsap__WEBPACK_IMPORTED_MODULE_0__[\"gsap\"].to(element, {\n    height: 0,\n    ease: gsap__WEBPACK_IMPORTED_MODULE_0__[\"Expo\"][ease],\n    duration,\n    onComplete: () => {\n      element.style.height = null;\n      onComplete && onComplete();\n    }\n  });\n};\n/**\n * Debounce function\n * Delays the processing of the event\n */\n\nconst debounce = (callback, wait) => {\n  let timerId;\n  return (...args) => {\n    clearTimeout(timerId);\n    timerId = setTimeout(() => {\n      callback(...args);\n    }, wait);\n  };\n};\n/**\n * Key code list object\n */\n\nconst keyCode = {\n  TAB: 9,\n  RETURN: 13,\n  ESC: 27,\n  SPACE: 32,\n  PAGEUP: 33,\n  PAGEDOWN: 34,\n  END: 35,\n  HOME: 36,\n  LEFT: 37,\n  UP: 38,\n  RIGHT: 39,\n  DOWN: 40\n};\n\n//# sourceURL=webpack:///./src/components/helpers/index.js?");

/***/ })

}]);