import { Component } from '@verndale/core'
import { v4 as uuidv4 } from 'uuid'
import { keyCode } from '../helpers'

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
class Accordion extends Component {
  constructor(el) {
    super(el)

    this.initAccordion()
  }

  setupDefaults() {
    this.dom = {
      container: this.el.querySelector('.accordion__items'),
      items: this.el.querySelectorAll('.accordion__item'),
      triggers: [...this.el.querySelectorAll('.accordion__item-trigger')],
      panels: [...this.el.querySelectorAll('.accordion__item-panel')]
    }
  }

  addListeners() {
    this.dom.container.addEventListener(
      'keydown',
      this.handleKeyDown.bind(this)
    )
    this.dom.triggers.forEach((trigger) =>
      trigger.addEventListener('click', this.handleClick.bind(this))
    )

    this.dom.panels.forEach(el => el.addEventListener('transitionend', this.handleTransitionEnd.bind(this)))
  }

  initAccordion() {
    this.dom.items.forEach((item) => {
      const guid = uuidv4()

      const trigger = item.querySelector('.accordion__item-trigger')
      const content = item.querySelector('.accordion__item-panel')

      if (trigger.getAttribute('aria-expanded') === 'true') {
        const height = content.querySelector(
          '.accordion__item-content'
        ).offsetHeight

        content.style.height = `${height}px`
        content.style.visibility = 'visible'
      }

      trigger.setAttribute('aria-controls', `tabcontent-${guid}`)
      trigger.setAttribute('id', `tab-${guid}`)
      content.setAttribute('aria-labelledby', `tab-${guid}`)
      content.setAttribute('id', `tabcontent-${guid}`)

      content.setAttribute(
        'aria-hidden',
        trigger.getAttribute('aria-expanded') !== 'true'
      )
    })
  }

  handleClick(e) {
    const button = e.currentTarget

    if (button.getAttribute('aria-expanded') === 'true') {
      this.closeItem(button)
    } else {
      this.openItem(button)
    }
  }

  handleKeyDown(e) {
    const target = e.target
    const key = e.which || e.keyCode

    const ctrlModifier =
      e.ctrlKey && (key === keyCode.PAGEUP || key === keyCode.PAGEDOWN)

    if (target.classList.contains('accordion__item-trigger')) {
      if (key === keyCode.UP || key === keyCode.DOWN || ctrlModifier) {
        const index = this.dom.triggers.indexOf(target)
        const direction =
          key === keyCode.PAGEDOWN || key === keyCode.DOWN ? 1 : -1
        const length = this.dom.triggers.length
        const newIndex = (index + length + direction) % length

        this.dom.triggers[newIndex].focus()

        e.preventDefault()
      } else if (key === keyCode.END || key === keyCode.HOME) {
        switch (key) {
          case keyCode.HOME:
            this.dom.triggers[0].focus()
            break
          case keyCode.END:
            this.dom.triggers[this.dom.triggers.length - 1].focus()
            break
        }
        e.preventDefault()
      }
    }
  }

  openItem(trigger) {
    const content = document.getElementById(
      trigger.getAttribute('aria-controls')
    )

    trigger.setAttribute('aria-expanded', true)
    content.style.visibility = 'visible'
    content.setAttribute('aria-hidden', false)

    const height = content.querySelector(
      '.accordion__item-content'
    ).offsetHeight

    content.style.maxHeight = `${height}px`
    content.style.visibility = 'visible'
    this.open(content);
  }

  closeItem(trigger) {
    const content = document.getElementById(
      trigger.getAttribute('aria-controls')
    )

    trigger.setAttribute('aria-expanded', false)
    content.style = null
    content.setAttribute('aria-hidden', true)
    this.close(content);
  }

  open(el) {
    el.setAttribute('aria-hidden', false)
    el.style.height = `${el.scrollHeight}px`;
  }

  close(el) {
    el.style.height = `${el.scrollHeight}px`;
    el.setAttribute('aria-hidden', true)
    el.style.height = 0
  }

  handleTransitionEnd(e) {
    const el = e.target;
    const height = el.style.height;
    if (height !== '0' || height !== 0) {
      el.style.height = 'auto';
    }
  }
}

export default Accordion
