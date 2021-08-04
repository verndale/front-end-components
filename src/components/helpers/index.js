import { gsap, Expo, CSSPlugin } from 'gsap'

gsap.registerPlugin(CSSPlugin)

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
export const open = ({
  element,
  duration = 0.4,
  ease = 'easeOut',
  onComplete
}) => {
  gsap.set(element, { height: 'auto' })
  gsap.from(element, {
    height: 0,
    ease: Expo[ease],
    duration,
    onComplete: () => {
      element.style.height = null
      onComplete && onComplete()
    }
  })
}

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
export const close = ({
  element,
  duration = 0.4,
  ease = 'easeOut',
  onComplete
}) => {
  gsap.set(element, { height: element.offsetHeight })
  gsap.to(element, {
    height: 0,
    ease: Expo[ease],
    duration,
    onComplete: () => {
      element.style.height = null
      onComplete && onComplete()
    }
  })
}

/**
 * Debounce function
 * Delays the processing of the event
 */
export const debounce = (callback, wait) => {
  let timerId
  return (...args) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      callback(...args)
    }, wait)
  }
}

/**
 * Key code list object
 */
export const keyCode = {
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
}
