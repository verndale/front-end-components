import { Component } from '@verndale/core'
import Swiper, { Pagination, Navigation } from 'swiper'

Swiper.use([Pagination, Navigation])

class Module extends Component {
  setupDefaults() {
    this.dom = {
      container: this.el.querySelector('.swiper-container'),
      pagination: this.el.querySelector('.swiper-pagination'),
      next: this.el.querySelector('.swiper-button-next'),
      prev: this.el.querySelector('.swiper-button-prev')
    }
    console.log(this.dom)
    this.initSlider()
  }

  addListeners() {}

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
