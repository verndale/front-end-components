"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.open = exports.keyCode = exports.debounce = exports.close = void 0;

var _gsap = require("gsap");

_gsap.gsap.registerPlugin(_gsap.CSSPlugin);
/**
 * Opens an element
 *
 * @example
 * import {open} from '../helpers';
 *
 * open({ element: this.el.querySelector('.element)});
 *
 * @param {Object} element - HTML element you want to target for animation
 * @param {Number} duration - Speed of the animation
 * @param {String} ease - Ease of the animation
 * @param {Function} onComplete - On complete function
 */


const open = _ref => {
  let {
    element,
    duration = 0.4,
    ease = 'easeOut',
    onComplete
  } = _ref;

  _gsap.gsap.set(element, {
    height: 'auto'
  });

  _gsap.gsap.from(element, {
    height: 0,
    ease: _gsap.Expo[ease],
    duration,
    onComplete: () => {
      element.style.height = null;
      onComplete && onComplete();
    }
  });
};
/**
 * Closes an element
 *
 * @example
 * import {close} from '../helpers';
 *
 * close({ element: this.el.querySelector('.element)});
 *
 * @param {Object} element - HTML element you want to target for animation
 * @param {Number} duration - Speed of the animation
 * @param {String} ease - Ease of the animation
 * @param {Function} onComplete - On complete function
 */


exports.open = open;

const close = _ref2 => {
  let {
    element,
    duration = 0.4,
    ease = 'easeOut',
    onComplete
  } = _ref2;

  _gsap.gsap.set(element, {
    height: element.offsetHeight
  });

  _gsap.gsap.to(element, {
    height: 0,
    ease: _gsap.Expo[ease],
    duration,
    onComplete: () => {
      element.style.height = null;
      onComplete && onComplete();
    }
  });
};
/**
 * Debounce function
 * Delays the processing of the event
 */


exports.close = close;

const debounce = (callback, wait) => {
  let timerId;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
};
/**
 * Key code list object
 */


exports.debounce = debounce;
const keyCode = {
  TAB: 9,
  RETURN: 13,
  ESC: 27,
  SPACE: 32,
  PAGEUP: 33,
  PAGEDOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
exports.keyCode = keyCode;