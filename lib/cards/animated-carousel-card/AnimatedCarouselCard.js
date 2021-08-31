"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@verndale/core");

var _helpers = require("../../helpers");

var _gsap = require("gsap");

class Module extends _core.Component {
  setupDefaults() {
    this.dom = {
      btnExpandCollapse: this.el.querySelector('.animated-carousel-card__action .btn'),
      description: this.el.querySelector('.animated-carousel-card__description')
    };
    this.breakpoint = window.matchMedia('(max-width: 1279px)');
    this.showMoreLabel = this.el.dataset.showMoreLabel;
    this.showLessLabel = this.el.dataset.showLessLabel;
    this.checkCollapseText();
  }

  addListeners() {
    window.addEventListener('resize', (0, _helpers.debounce)(this.checkCollapseText.bind(this), 500));
    this.dom.btnExpandCollapse.addEventListener('click', this.handleShowMoreLess.bind(this));
  }

  checkCollapseText() {
    if (this.breakpoint.matches && this.dom.description.offsetHeight < this.dom.description.scrollHeight) {
      this.dom.btnExpandCollapse.style.display = 'block';
    } else {
      this.dom.description.style.height = null;
      this.dom.btnExpandCollapse.style.display = 'none';
    }
  }

  handleShowMoreLess(e) {
    e.preventDefault();

    if (this.dom.description.classList.contains('animated-carousel-card__description--expanded')) {
      this.collapse();
    } else {
      this.expand();
    }
  }

  expand() {
    const {
      description,
      btnExpandCollapse
    } = this.dom;
    this.textHeight = description.offsetHeight;
    description.classList.add('animated-carousel-card__description--expanded');

    _gsap.gsap.set(description, {
      height: 'auto'
    });

    _gsap.gsap.from(description, {
      height: this.textHeight,
      ease: _gsap.Expo['easeOut'],
      duration: 0.4,
      onComplete: () => {
        description.style.height = null;
        btnExpandCollapse.textContent = this.showLessLabel;
      }
    });
  }

  collapse() {
    const {
      description,
      btnExpandCollapse
    } = this.dom;

    _gsap.gsap.set(description, {
      height: description.offsetHeight
    });

    _gsap.gsap.to(description, {
      height: this.textHeight,
      ease: _gsap.Expo['easeOut'],
      duration: 0.4,
      onComplete: () => {
        description.classList.remove('animated-carousel-card__description--expanded');
        description.style.height = null;
        btnExpandCollapse.textContent = this.showMoreLabel;
      }
    });
  }

}

var _default = Module;
exports.default = _default;