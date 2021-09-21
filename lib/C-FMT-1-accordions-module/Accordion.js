"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@verndale/core");

var _uuid = require("uuid");

var _helpers = require("../helpers");

/**
 * `Accordion`
 *
 *
 * @example
 * import { Accordion } from '@verndale/front-end-components';
 *
 * class Foo {
 *   construction(){
 *
 *     cont Accordion = new Accordion('.accordion');
 *   }
 * }
 */
class Accordion extends _core.Component {
  constructor(el) {
    super(el);
    this.initAccordion();
  }

  setupDefaults() {
    this.dom = {
      container: this.el.querySelector('.accordion__items'),
      items: this.el.querySelectorAll('.accordion__item'),
      triggers: [...this.el.querySelectorAll('.accordion__item-trigger')]
    };
  }

  addListeners() {
    this.dom.container.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.dom.triggers.forEach(trigger => trigger.addEventListener('click', this.handleClick.bind(this)));
  }

  initAccordion() {
    this.dom.items.forEach((item, index) => {
      const guid = (0, _uuid.v4)();
      const trigger = item.querySelector('.accordion__item-trigger');
      const content = item.querySelector('.accordion__item-panel');

      if (trigger.getAttribute('aria-expanded') === 'true') {
        content.style.height = 'auto';
        content.style.visibility = 'visible';
      }

      trigger.setAttribute('aria-controls', `tabcontent-${guid}`);
      trigger.setAttribute('id', `tab-${guid}`);
      content.setAttribute('aria-labelledby', `tab-${guid}`);
      content.setAttribute('id', `tabcontent-${guid}`);
      content.setAttribute('aria-hidden', trigger.getAttribute('aria-expanded') !== 'true');
    });
  }

  handleClick(e) {
    const button = e.currentTarget;

    if (button.getAttribute('aria-expanded') === 'true') {
      this.closeItem(button);
    } else {
      this.openItem(button);
    }
  }

  handleKeyDown(e) {
    const target = e.target;
    const key = e.which || e.keyCode;
    const ctrlModifier = e.ctrlKey && (key === _helpers.keyCode.PAGEUP || key === _helpers.keyCode.PAGEDOWN);

    if (target.classList.contains('accordion__item-trigger')) {
      if (key === _helpers.keyCode.UP || key === _helpers.keyCode.DOWN || ctrlModifier) {
        const index = this.dom.triggers.indexOf(target);
        const direction = key === _helpers.keyCode.PAGEDOWN || key === _helpers.keyCode.DOWN ? 1 : -1;
        const length = this.dom.triggers.length;
        const newIndex = (index + length + direction) % length;
        this.dom.triggers[newIndex].focus();
        e.preventDefault();
      } else if (key === _helpers.keyCode.END || key === _helpers.keyCode.HOME) {
        switch (key) {
          case _helpers.keyCode.HOME:
            this.dom.triggers[0].focus();
            break;

          case _helpers.keyCode.END:
            this.dom.triggers[this.dom.triggers.length - 1].focus();
            break;
        }

        e.preventDefault();
      }
    }
  }

  openItem(trigger) {
    const content = document.getElementById(trigger.getAttribute('aria-controls'));
    trigger.setAttribute('aria-expanded', true);
    content.style.visibility = 'visible';
    (0, _helpers.open)({
      element: content,
      ease: 'easeInOut',
      onComplete: () => {
        content.setAttribute('aria-hidden', false);
        content.style.height = 'auto';
      }
    });
  }

  closeItem(trigger) {
    const content = document.getElementById(trigger.getAttribute('aria-controls'));
    trigger.setAttribute('aria-expanded', false);
    (0, _helpers.close)({
      element: content,
      ease: 'easeInOut',
      onComplete: () => {
        content.setAttribute('aria-hidden', true);
        content.style.visibility = 'hidden';
      }
    });
  }

}

var _default = Accordion;
exports.default = _default;