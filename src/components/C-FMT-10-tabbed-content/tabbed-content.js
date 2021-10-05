import { Component } from '@verndale/core';
import { keyCode as KEYS } from '../helpers';
const KEYS_DIRECTION = {
  37: -1,
  38: -1,
  39: 1,
  40: 1
};

class Module extends Component {
  setupDefaults() {
    const identifier = this.el.dataset.identifier;

    this.dom = {
      $tabs: this.el.querySelectorAll(`[data-identifier="${identifier}"][role="tab"]`),
      $panels: this.el.querySelectorAll(`[data-identifier="${identifier}"][role="tabpanel"]`),
      $dropdown: this.el.querySelector('.tabbed-content__dropdown')
    };

    console.log(identifier, this.dom)

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
    this.el.querySelector(`#${e.target.value}`).click()
  }

  onClick(e) {
    this.activateTab(e.target, false);
  }

  onKeyDown(e) {
    switch (e.keyCode) {
      case KEYS.END:
        e.preventDefault();
        this.activateTab(this.dom.$tabs[this.dom.$tabs.length - 1]);
        break;
      case KEYS.HOME:
        e.preventDefault();
        this.activateTab(this.don.$tabs[0]);
        break;
      case KEYS.UP:
      case KEYS.DOWN:
        if (this.isVertical) e.preventDefault();
        break
    }
  }

  onKeyUp(e) {
    switch (e.keyCode) {
      case KEYS.LEFT:
      case KEYS.RIGHT:
        if (!this.isVertical) this.switchTabOnArrowPress(e);
        break;
      case KEYS.UP:
      case KEYS.DOWN:
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

  activateTab(tab, setFocus = true) {
    this.deactivateTabs();
    tab.removeAttribute('tabindex');
    tab.setAttribute('aria-selected', 'true');
    const controls = tab.getAttribute('aria-controls');
    document.getElementById(controls).removeAttribute('aria-hidden');
    if (setFocus) {
      tab.focus();
    }
    const event = new CustomEvent('tabchange', { detail: { id: tab.id } });
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
      if (e.keyCode === KEYS.UP) {
        this.activateTab(this.dom.$tabs[this.dom.$tabs.length - 1], true);
      } else if (e.keyCode === KEYS.DOWN) {
        this.activateTab(this.dom.$tabs[0], true);
      }
    } else {
      if (e.keyCode === KEYS.LEFT) {
        this.activateTab(this.dom.$tabs[this.dom.$tabs.length - 1], true);
      } else if (e.keyCode === KEYS.RIGHT) {
        this.activateTab(this.dom.$tabs[0], true);
      }
    }
  }
}

export default Module;
