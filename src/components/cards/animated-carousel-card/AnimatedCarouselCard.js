import { Component } from '@verndale/core';
import { debounce } from '../../helpers';
import { gsap, Expo } from 'gsap';

class Module extends Component {
  setupDefaults() {
    this.dom = {
      btnExpandCollapse: this.el.querySelector(
        '.animated-carousel-card__action .btn'
      ),
      description: this.el.querySelector('.animated-carousel-card__description')
    };

    this.breakpoint = window.matchMedia('(max-width: 1279px)');
    this.showMoreLabel = this.el.dataset.showMoreLabel;
    this.showLessLabel = this.el.dataset.showLessLabel;

    this.checkCollapseText();
  }

  addListeners() {
    window.addEventListener(
      'resize',
      debounce(this.checkCollapseText.bind(this), 500)
    );

    this.dom.btnExpandCollapse.addEventListener(
      'click',
      this.handleShowMoreLess.bind(this)
    );
  }

  checkCollapseText() {
    if (
      this.breakpoint.matches &&
      this.dom.description.offsetHeight < this.dom.description.scrollHeight
    ) {
      this.dom.btnExpandCollapse.style.display = 'block';
    } else {
      this.dom.description.style.height = null;
      this.dom.btnExpandCollapse.style.display = 'none';
    }
  }

  handleShowMoreLess(e) {
    e.preventDefault();

    if (
      this.dom.description.classList.contains(
        'animated-carousel-card__description--expanded'
      )
    ) {
      this.collapse();
    } else {
      this.expand();
    }
  }

  expand() {
    const { description, btnExpandCollapse } = this.dom;

    this.textHeight = description.offsetHeight;
    description.classList.add('animated-carousel-card__description--expanded');
    gsap.set(description, { height: 'auto' });
    gsap.from(description, {
      height: this.textHeight,
      ease: Expo['easeOut'],
      duration: 0.4,
      onComplete: () => {
        description.style.height = null;
        btnExpandCollapse.textContent = this.showLessLabel;
      }
    });
  }

  collapse() {
    const { description, btnExpandCollapse } = this.dom;

    gsap.set(description, { height: description.offsetHeight });
    gsap.to(description, {
      height: this.textHeight,
      ease: Expo['easeOut'],
      duration: 0.4,
      onComplete: () => {
        description.classList.remove(
          'animated-carousel-card__description--expanded'
        );
        description.style.height = null;
        btnExpandCollapse.textContent = this.showMoreLabel;
      }
    });
  }
}

export default Module;
