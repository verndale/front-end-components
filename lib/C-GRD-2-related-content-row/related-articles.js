"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@verndale/core");

var _swiper = _interopRequireWildcard(require("swiper"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_swiper.default.use([_swiper.Pagination, _swiper.Navigation]);

class Module extends _core.Component {
  setupDefaults() {
    this.dom = {
      container: this.el.querySelector('.swiper-container'),
      pagination: this.el.querySelector('.swiper-pagination'),
      next: this.el.querySelector('.swiper-button-next'),
      prev: this.el.querySelector('.swiper-button-prev'),
      breakpoint: this.el.dataset.breakpoint
    };
    this.slider = null;

    if (!this.dom.breakpoint) {
      this.dom.breakpoint = 320;
    }

    this.isMobile = window.matchMedia(`(max-width:${this.dom.breakpoint}px)`);

    if (this.isMobile.matches) {
      this.initSlider();
    }
  }

  addListeners() {
    window.addEventListener('resize', this.debounce(e => {
      // if is not mobile and there is a slider, destroy swiper slider func
      if (!this.isMobile.matches && this.slider) {
        this.slider.destroy(true, true);
      } else {
        if (this.isMobile.matches) {
          this.initSlider();
        }
      }
    }));
  }

  debounce(func, timeParam) {
    const time = timeParam || 1000; // 100 by default if no param

    let timer; // eslint-disable-next-line space-before-function-paren

    return function (event) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(func, time, event);
    };
  }

  initSlider() {
    this.slider = new _swiper.default(this.dom.container, {
      centeredSlides: true,
      spaceBetween: 25,
      pagination: {
        el: this.dom.pagination
      },
      navigation: {
        nextEl: this.dom.next,
        prevEl: this.dom.prev
      }
    });
  }

}

var _default = Module;
exports.default = _default;