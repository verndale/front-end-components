"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@verndale/core");

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * `Alert`
 *
 *
 * @example
 * import { Alert } from '@verndale/front-end-components';
 *
 * class Foo {
 *   construction(){
 *
 *     const Alert = new Alert('.alert');
 *   }
 * }
 */
class Alert extends _core.Component {
  setupDefaults() {
    this.dom = {
      content: this.el.querySelector('.alert__content'),
      toggle: this.el.querySelector('.alert__toggle'),
      hide: this.el.querySelector('.alert__hide'),
      show: this.el.querySelector('.alert__show'),
      close: this.el.querySelector('.alert__close')
    };
    this.id = this.el.dataset.id;
    this.cookieName = this.el.dataset.cookieName;
    this.canDismiss = this.el.dataset.canDismiss;
    this.expanded = this.el.dataset.expanded;
    this.shouldDisplayAlert();

    if (this.dom.content !== null) {
      this.cookieNameToggle = `${this.id}_toggle`;
      this.shouldToggle();
    }

    this.setDismissibleButton();
    this.setExpandedAlert();
  }

  shouldToggle() {
    this.alertToggle = _jsCookie.default.get(this.cookieNameToggle);

    if (this.alertToggle) {
      _jsCookie.default.set(this.cookieNameToggle, false);

      this.dom.toggle.setAttribute('aria-expanded', 'true');
    } else {
      _jsCookie.default.set(this.cookieNameToggle, true);

      this.dom.toggle.setAttribute('aria-expanded', 'false');
    }

    this.handleToggle();
  }

  addListeners() {
    if (this.dom.content) {
      this.dom.toggle.addEventListener('click', this.handleToggle.bind(this));
    }

    if (this.dom.close) {
      this.dom.close.addEventListener('click', this.handleClose.bind(this));
    }
  }

  shouldDisplayAlert() {
    this.alerts = _jsCookie.default.get(this.cookieName);

    if (this.alerts) {
      this.alerts = JSON.parse(this.alerts);

      if (this.alerts.includes(this.id)) {
        return this.el.remove();
      }
    } else {
      this.alerts = [];
    }

    (0, _helpers.open)({
      element: this.el,
      onComplete: () => this.el.style.height = 'auto'
    });
  }

  setDismissibleButton() {
    if (this.canDismiss !== 'true') {
      this.dom.close.style.display = 'none';
      return;
    }

    this.dom.close.style.display = 'block';
  }

  setExpandedAlert() {
    if (this.expanded === 'true') {
      this.handleToggle();
      (0, _helpers.open)({
        element: this.el,
        onComplete: () => this.dom.content.style.display = 'block'
      });
    }
  }

  handleToggle() {
    if (this.dom.toggle.getAttribute('aria-expanded') === 'true') {
      this.dom.toggle.setAttribute('aria-expanded', false);
      this.collapseAlert();
    } else {
      this.dom.toggle.setAttribute('aria-expanded', true);
      this.expandAlert();
    }
  }

  expandAlert() {
    this.dom.content.style.display = 'block';
    (0, _helpers.open)({
      element: this.dom.content,
      onComplete: () => {
        this.dom.content.focus();
        this.dom.content.style.height = 'auto';
      }
    });
  }

  collapseAlert() {
    (0, _helpers.close)({
      element: this.dom.content,
      onComplete: () => {
        this.dom.content.style.display = 'none';
      }
    });
  }

  handleClose() {
    this.alerts.push(this.id);
    (0, _helpers.close)({
      element: this.el,
      onComplete: () => {
        _jsCookie.default.set(this.cookieName, JSON.stringify(this.alerts));

        this.el.remove();
      }
    });
  }

}

var _default = Alert;
exports.default = _default;