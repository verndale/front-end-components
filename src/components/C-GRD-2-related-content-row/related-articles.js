import { Component } from '@verndale/core'
import Swiper, { Pagination, Navigation } from 'swiper'

Swiper.use([Pagination, Navigation])

class Module extends Component {
  setupDefaults() {
    this.dom = {
      container: this.el.querySelector('.swiper-container'),
      pagination: this.el.querySelector('.swiper-pagination'),
      next: this.el.querySelector('.swiper-button-next'),
      prev: this.el.querySelector('.swiper-button-prev'),
      breakpoint: this.el.dataset.breakpoint
    }
    this.slider = null

    if (!this.dom.breakpoint) {
      this.dom.breakpoint = 320
    }
    this.isMobile = window.matchMedia(`(max-width:${this.dom.breakpoint}px)`)

    if (this.isMobile.matches) {
      this.initSlider()
    }
  }

  addListeners() {
    window.addEventListener(
      'resize',
      this.debounce((e) => {
        // if is not mobile and there is a slider, destroy swiper slider func
        if (!this.isMobile.matches && this.slider) {
          this.slider.destroy(true, true)
        } else {
          if (this.isMobile.matches) {
            this.initSlider()
          }
        }
      })
    )
  }

  debounce(func, timeParam) {
    const time = timeParam || 1000 // 100 by default if no param
    let timer
    // eslint-disable-next-line space-before-function-paren
    return function (event) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(func, time, event)
    }
  }

  initSlider() {
    this.slider = new Swiper(this.dom.container, {
      centeredSlides: true,
      spaceBetween: 25,
      pagination: {
        el: this.dom.pagination
      },
      navigation: {
        nextEl: this.dom.next,
        prevEl: this.dom.prev
      }
    })
  }
}

export default Module
