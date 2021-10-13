"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@verndale/core");

var _tinySlider = require("tiny-slider/src/tiny-slider");

class FlexibleImageCarousel extends _core.Component {
  setupDefaults() {
    this.dom = {
      slider: this.el.querySelector('.flexible-image-carousel__slider'),
      cards: this.el.querySelectorAll('.generic-card'),
      tallCards: this.el.querySelectorAll('.generic-card--tall'),
      shortCards: this.el.querySelectorAll('.generic-card--default, .generic-card--short'),
      buttons: this.el.querySelector('.flexible-image-carousel__buttons')
    };
    this.wrapSliderText();
    this.setupTallSlides();
    this.initSlider();
  }

  initSlider() {
    (0, _tinySlider.tns)({
      container: this.dom.slider,
      loop: false,
      items: 1,
      gutter: 17,
      edgePadding: 40,
      nav: false,
      controlsContainer: this.dom.buttons,
      lazyloadSelector: 'lazyload',
      preventScrollOnTouch: 'auto',
      responsive: {
        625: {
          items: 2
        },
        960: {
          items: 3,
          gutter: 23,
          edgePadding: 0
        }
      }
    });
  }

  setupTallSlides() {
    if (!Array.from(this.dom.shortCards).length) {
      Array.from(this.dom.tallCards).forEach(tallCard => tallCard.classList.add('respect-ratio'));
    }
  }

  wrapSliderText() {
    Array.from(this.dom.cards).forEach(element => {
      const inner = element.querySelector('.generic-card__inner');
      const innerElements = element.querySelectorAll('.generic-card__title, .generic-card__subtitle');
      const wrapper = document.createElement('div');
      inner.appendChild(wrapper);
      wrapper.classList.add('generic-card__inner__content');
      Array.from(innerElements).forEach(child => wrapper.appendChild(child));
    });
  }

}

var _default = FlexibleImageCarousel;
exports.default = _default;