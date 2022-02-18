import { Component } from '@verndale/core'
import Cookies from 'js-cookie'
import { open, close } from '../helpers'

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

class Alert extends Component {
  setupDefaults() {
    this.dom = {
      content: this.el.querySelector('.alert__content'),
      toggle: this.el.querySelector('.alert__toggle'),
      hide: this.el.querySelector('.alert__hide'),
      show: this.el.querySelector('.alert__show'),
      close: this.el.querySelector('.alert__close')
    }

    this.id = this.el.dataset.id
    this.cookieName = this.el.dataset.cookieName
    this.canDismiss = this.el.dataset.canDismiss
    this.expanded = this.el.dataset.expanded
    this.shouldDisplayAlert()
    if (this.dom.content !== null) {
      this.cookieNameToggle = `${this.id}_toggle`
      this.shouldToggle()
    }

    this.setDismissibleButton()
    this.setExpandedAlert()
  }

  shouldToggle() {
    this.alertToggle = Cookies.get(this.cookieNameToggle)
    if (this.alertToggle) {
      Cookies.set(this.cookieNameToggle, false)
      this.dom.toggle.setAttribute('aria-expanded', 'true')
    } else {
      Cookies.set(this.cookieNameToggle, true)
      this.dom.toggle.setAttribute('aria-expanded', 'false')
    }
    this.handleToggle()
  }

  addListeners() {
    if (this.dom.content) {
      this.dom.toggle.addEventListener('click', this.handleToggle.bind(this))
    }
    if (this.dom.close) {
      this.dom.close.addEventListener('click', this.handleClose.bind(this))
    }
  }

  shouldDisplayAlert() {
    this.alerts = Cookies.get(this.cookieName)

    if (this.alerts) {
      this.alerts = JSON.parse(this.alerts)

      if (this.alerts.includes(this.id)) {
        return this.el.remove()
      }
    } else {
      this.alerts = []
    }
    open({
      element: this.el,
      onComplete: () => (this.el.style.height = 'auto')
    })
  }

  setDismissibleButton() {
    if (this.canDismiss !== 'true') {
      this.dom.close.style.display = 'none'
      return
    }
    this.dom.close.style.display = 'block'
  }

  setExpandedAlert() {
    if (this.expanded === 'true') {
      this.handleToggle()
      open({
        element: this.el,
        onComplete: () => (this.dom.content.style.display = 'block')
      })
    }
  }

  handleToggle() {
    if (this.dom.toggle.getAttribute('aria-expanded') === 'true') {
      this.dom.toggle.setAttribute('aria-expanded', false)
      this.collapseAlert()
    } else {
      this.dom.toggle.setAttribute('aria-expanded', true)
      this.expandAlert()
    }
  }

  expandAlert() {
    this.dom.content.style.display = 'block'
    open({
      element: this.dom.content,
      onComplete: () => {
        this.dom.content.focus()
        this.dom.content.style.height = 'auto'
      }
    })
  }

  collapseAlert() {
    close({
      element: this.dom.content,
      onComplete: () => {
        this.dom.content.style.display = 'none'
      }
    })
  }

  handleClose() {
    this.alerts.push(this.id)

    close({
      element: this.el,
      onComplete: () => {
        Cookies.set(this.cookieName, JSON.stringify(this.alerts))
        this.el.remove()
      }
    })
  }
}

export default Alert
