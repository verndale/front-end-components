"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@verndale/core");

var _helpers = require("../helpers");

const KEYS_DIRECTION = {
  37: -1,
  38: -1,
  39: 1,
  40: 1
};

class Module extends _core.Component {
  setupDefaults() {
    const identifier = this.el.dataset.identifier;
    this.dom = {
      $tabs: this.el.querySelectorAll(`[data-identifier="${identifier}"][role="tab"]`),
      $panels: this.el.querySelectorAll(`[data-identifier="${identifier}"][role="tabpanel"]`),
      $dropdown: this.el.querySelector('.tabbed-content__dropdown')
    };
    this.isVertical = this.el.dataset.isVertical === 'true';
  }

  addListeners() {
    this.dom.$tabs.forEach(tab => tab.addEventListener('click', this.onClick.bind(this)));
    this.dom.$tabs.forEach(tab => tab.addEventListener('keydown', this.onKeyDown.bind(this)));
    this.dom.$tabs.forEach(tab => tab.addEventListener('keyup', this.onKeyUp.bind(this)));
    this.dom.$dropdown.addEventListener('change', this.onChange.bind(this));
    this.el.addEventListener('activatetab', this.onActivatetab.bind(this));
    this.el.addEventListener('reset', this.onReset.bind(this));
  }

  onChange(e) {
    this.el.querySelector(`#${e.target.value}`).click();
  }

  onClick(e) {
    this.activateTab(e.target, false);
  }

  onKeyDown(e) {
    switch (e.keyCode) {
      case _helpers.keyCode.END:
        e.preventDefault();
        this.activateTab(this.dom.$tabs[this.dom.$tabs.length - 1]);
        break;

      case _helpers.keyCode.HOME:
        e.preventDefault();
        this.activateTab(this.don.$tabs[0]);
        break;

      case _helpers.keyCode.UP:
      case _helpers.keyCode.DOWN:
        if (this.isVertical) e.preventDefault();
        break;
    }
  }

  onKeyUp(e) {
    switch (e.keyCode) {
      case _helpers.keyCode.LEFT:
      case _helpers.keyCode.RIGHT:
        if (!this.isVertical) this.switchTabOnArrowPress(e);
        break;

      case _helpers.keyCode.UP:
      case _helpers.keyCode.DOWN:
        if (this.isVertical) this.switchTabOnArrowPress(e);
        break;
    }
  }

  onActivatetab(e) {
    const tab = document.getElementById(e.detail.id);
    this.activateTab(tab, !!e.detail.setFocus);
  }

  onReset() {
    this.deactivateTabs();
    this.dom.$tabs[0].setAttribute('tabindex', '0');
  }

  activateTab(tab) {
    let setFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    this.deactivateTabs();
    tab.removeAttribute('tabindex');
    tab.setAttribute('aria-selected', 'true');
    const controls = tab.getAttribute('aria-controls');
    document.getElementById(controls).removeAttribute('aria-hidden');

    if (setFocus) {
      tab.focus();
    }

    const event = new CustomEvent('tabchange', {
      detail: {
        id: tab.id
      }
    });
    this.el.dispatchEvent(event);
  }

  deactivateTabs() {
    this.dom.$tabs.forEach(tab => {
      tab.setAttribute('tabindex', '-1');
      tab.setAttribute('aria-selected', 'false');
    });
    this.dom.$panels.forEach(panel => {
      panel.setAttribute('aria-hidden', 'true');
    });
  }

  switchTabOnArrowPress(e) {
    if (!KEYS_DIRECTION[e.keyCode]) return;
    if (typeof e.target.dataset.index === 'undefined') return;
    const index = parseInt(e.target.dataset.index, 10);

    if (this.dom.$tabs[index + KEYS_DIRECTION[e.keyCode]]) {
      this.activateTab(this.dom.$tabs[index + KEYS_DIRECTION[e.keyCode]], true);
      return;
    }

    if (this.isVertical) {
      if (e.keyCode === _helpers.keyCode.UP) {
        this.activateTab(this.dom.$tabs[this.dom.$tabs.length - 1], true);
      } else if (e.keyCode === _helpers.keyCode.DOWN) {
        this.activateTab(this.dom.$tabs[0], true);
      }
    } else {
      if (e.keyCode === _helpers.keyCode.LEFT) {
        this.activateTab(this.dom.$tabs[this.dom.$tabs.length - 1], true);
      } else if (e.keyCode === _helpers.keyCode.RIGHT) {
        this.activateTab(this.dom.$tabs[0], true);
      }
    }
  }

}

var _default = Module;
exports.default = _default;