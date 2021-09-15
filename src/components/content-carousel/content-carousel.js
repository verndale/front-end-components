import { Component } from '@verndale/core';
import Swiper, { Navigation } from 'swiper';

class Module extends Component {
  setupDefaults() {
    this.dom = {
      next: this.el.querySelector('.content-carousel__button-next'),
      prev: this.el.querySelector('.content-carousel__button-prev'),
    };

    this.initSlider();
  }

  addListeners() {
    this.dom.next.addEventListener('click', this.nextSlide.bind(this));
    this.dom.prev.addEventListener('click', this.prevSlide.bind(this));
  }

  initSlider() {
    this.lastSlide = null;
    this.swiper = new Swiper('.swiper-container', {
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
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3
        },
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
    if(this.swiper.activeIndex == 0){
      this.dom.prev.disabled = true;
    } else {
      this.dom.prev.disabled = false;
    }

    if(typeof this.lastSlide == 'number' && this.swiper.activeIndex > this.lastSlide) {
      this.dom.next.disabled = true;
    } else {
      this.dom.next.disabled = false;
    }
  }

  resize() {
    this.swiper.destroy()
    this.initSlider();
  }

  reachEnd() {
    this.lastSlide = this.swiper.activeIndex;
  }
}

export default Module;
