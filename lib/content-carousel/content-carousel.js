"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@verndale/core");

var _swiper = _interopRequireWildcard(require("swiper"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Module extends _core.Component {
  setupDefaults() {
    this.dom = {
      next: this.el.querySelector('.content-carousel__button-next'),
      prev: this.el.querySelector('.content-carousel__button-prev')
    };
    this.initSlider();
  }

  addListeners() {
    this.dom.next.addEventListener('click', this.nextSlide.bind(this));
    this.dom.prev.addEventListener('click', this.prevSlide.bind(this));
  }

  initSlider() {
    this.lastSlide = null;
    this.swiper = new _swiper.default('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 3,
      speed: 400,
      preventClicks: false,
      preventClicksPropagation: false,
      preloadImages: false,
      lazy: true,
      allowTouchMove: false,
      breakpoints: {
        576: {
          slidesPerView: 2
        },
        1280: {
          slidesPerView: 3
        }
      }
    });
    this.changeSlide();
    this.lastSlide = null;
    this.begining = 0;
    this.swiper.on('slideChange', this.changeSlide.bind(this));
    this.swiper.on('reachEnd', this.reachEnd.bind(this));
    this.swiper.on('resize', this.resize.bind(this));
  }

  nextSlide() {
    this.swiper.slideNext();
  }

  prevSlide() {
    this.swiper.slidePrev();
  }

  changeSlide() {
    if (this.swiper.activeIndex === 0) {
      this.dom.prev.disabled = true;
    } else {
      this.dom.prev.disabled = false;
    }

    if (typeof this.lastSlide === 'number' && this.swiper.activeIndex > this.lastSlide) {
      this.dom.next.disabled = true;
    } else {
      this.dom.next.disabled = false;
    }
  }

  resize() {
    this.swiper.destroy();
    this.initSlider();
  }

  reachEnd() {
    this.lastSlide = this.swiper.activeIndex;
  }

}

var _default = Module;
exports.default = _default;