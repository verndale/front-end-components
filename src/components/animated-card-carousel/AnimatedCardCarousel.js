import { Component } from '@verndale/core'
import Swiper, { Autoplay, Pagination, Parallax } from 'swiper';

// configure Swiper to use modules
Swiper.use([Autoplay, Pagination, Parallax]);

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

class AnimatedCardCarousel extends Component {
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
    this.swiper = new Swiper(this.dom.slider, {
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
        renderBullet: (index, className) =>
          `<div class="${className}" aria-label="Slide ${index}">
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
        slide
          .querySelectorAll('a')
          .forEach(link => link.removeAttribute('tabindex'));
      } else {
        slide
          .querySelectorAll('a')
          .forEach(link => link.setAttribute('tabindex', -1));
      }
    });
  }

  animateBullet(swiper) {
    let progress = 0;
    const index = swiper.realIndex + 1;
    const autoplayTime = this.autoplay / 100;
    const bulletInner = this.dom.pagination.querySelector(
      `.swiper-pagination-bullet:nth-child(${index}) .swiper-pagination-bullet__inner`
    );

    // Reset all bullets
    this.dom.pagination
      .querySelectorAll('.swiper-pagination-bullet__inner')
      .forEach(bullet => (bullet.style.width = 0));

    // Reset intervals if exist
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

export default AnimatedCardCarousel
