"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@verndale/core");

var _swiper = _interopRequireWildcard(require("swiper"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// configure Swiper to use modules
_swiper.default.use([_swiper.Autoplay, _swiper.Pagination, _swiper.Parallax]);
/**
 * `AnimatedCardCarousel`
 *
 *
 * @example
 * import { AnimatedCardCarousel } from '@verndale/front-end-components';
 *
 * class Foo {
 *   construction(){
 *
 *     const AnimatedCardCarousel = new AnimatedCardCarousel('.animated-carousel-card');
 *   }
 * }
 */


class AnimatedCardCarousel extends _core.Component {
  setupDefaults() {
    this.autoplay = this.el.dataset.autoplayTimeout || 10000;
    this.dom = {
      slider: this.el.querySelector('.swiper-container'),
      slides: this.el.querySelectorAll('.swiper-slide'),
      actionsContainer: this.el.querySelector('.animated-card-carousel__actions'),
      pagination: this.el.querySelector('.animated-card-carousel__pagination'),
      present: this.el.querySelector('.animated-card-carousel__present')
    };

    if (this.dom.slides.length) {
      this.initSlider();
    } else {
      this.dom.actionsContainer.style.display = 'none';
    }
  }

  addListeners() {
    this.dom.present.addEventListener('click', this.onPresentClick.bind(this));
  }

  initSlider() {
    this.swiper = new _swiper.default(this.dom.slider, {
      speed: 1000,
      parallax: true,
      spaceBetween: 60,
      threshold: 8,
      autoplay: {
        delay: this.autoplay,
        disableOnInteraction: false,
        stopOnLastSlide: true,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: this.dom.pagination,
        clickable: true,
        renderBullet: (index, className) => `<div class="${className}" aria-label="Slide ${index}">
            <div class="${className}__inner"></div>
          </div>`
      },
      on: {
        afterInit: swiper => {
          this.animateBullet(swiper);
          this.disableLinks(swiper);
        },
        slideChangeTransitionStart: swiper => {
          if (!swiper.autoplay.running) {
            swiper.autoplay.start();
          }

          this.animateBullet(swiper);
          this.disableLinks(swiper);
        }
      }
    });
  }

  disableLinks(swiper) {
    swiper.slides.forEach(slide => {
      if (slide.classList.contains('swiper-slide-active')) {
        slide.querySelectorAll('a').forEach(link => link.removeAttribute('tabindex'));
      } else {
        slide.querySelectorAll('a').forEach(link => link.setAttribute('tabindex', -1));
      }
    });
  }

  animateBullet(swiper) {
    let progress = 0;
    const index = swiper.realIndex + 1;
    const autoplayTime = this.autoplay / 100;
    const bulletInner = this.dom.pagination.querySelector(`.swiper-pagination-bullet:nth-child(${index}) .swiper-pagination-bullet__inner`); // Reset all bullets

    this.dom.pagination.querySelectorAll('.swiper-pagination-bullet__inner').forEach(bullet => bullet.style.width = 0); // Reset intervals if exist

    if (this.interval) {
      clearInterval(this.interval);
    }

    if (bulletInner) {
      this.interval = setInterval(() => {
        if (swiper.autoplay.paused || !swiper.autoplay.running) {
          progress = 0;
          bulletInner.style.width = progress;
        }

        if (progress >= 100) {
          bulletInner.style.width = 0;
          clearInterval(this.interval);
          return;
        }

        bulletInner.style.width = `${progress++}%`;
      }, autoplayTime);
    }
  }

  onPresentClick() {
    this.swiper.slideTo(this.dom.slides.length - 1);
  }

}

var _default = AnimatedCardCarousel;
exports.default = _default;