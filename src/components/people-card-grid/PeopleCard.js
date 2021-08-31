import { Component } from '@verndale/core'
import MicroModal from 'micromodal'
class PeopleCardGrid extends Component {
  constructor(el) {
    super(el)
  }

  setupDefaults() {
    this.dom = {
      cards: [...this.el.querySelectorAll('.people-card-grid__person--modal')],
      modalTitle: document.getElementById('modal-people-card-grid-name'),
      modalPosition: document.getElementById('modal-people-card-grid-position'),
      modalBio: document.getElementById('modal-people-card-grid-bio'),
      modal: document.getElementById('modal-people-card-grid'),
      modalShowMore: document.querySelector('.modal-people-grid__show-more')
    }

    this.showMoreActive = 'modal-people-grid__bio--expanded'
    this.showMoreExpandedBtn = 'btn--outline'
    this.showMoreLabel = 'Show More'
    this.showLessLabel = 'Show Less'
  }

  addListeners() {
    this.dom.cards.forEach((card) => {
      card.addEventListener('click', this.handleClick.bind(this))
      card.addEventListener('keyup', this.handleEnter.bind(this))
    })

    this.dom.modalShowMore.addEventListener(
      'click',
      this.handleShowMore.bind(this)
    )

    MicroModal.init({
      disableScroll: true,
      onClose: () => this.resetModalBtnLabel() // [2]
    })
  }

  openModal(e) {
    MicroModal.show('modal-people-card-grid')
    this.dom.modalTitle.innerHTML = e.currentTarget.dataset.name
    this.dom.modalPosition.innerHTML = e.currentTarget.dataset.position
    this.dom.modalBio.innerHTML = e.currentTarget.dataset.bio
  }

  resetModalBtnLabel() {
    this.dom.modalBio.classList.remove(this.showMoreActive)
    this.dom.modalShowMore.classList.remove(this.showMoreExpandedBtn)
    this.changeShowMoreBtnLabel()
  }

  addToggleClass(element, className) {
    element.classList.toggle(className)
  }

  changeShowMoreBtnLabel() {
    if (this.dom.modalShowMore.classList.contains(this.showMoreExpandedBtn)) {
      this.dom.modalShowMore.innerHTML = this.showLessLabel
      return
    }
    this.dom.modalShowMore.innerHTML = this.showMoreLabel
  }

  handleShowMore() {
    this.addToggleClass(this.dom.modalBio, this.showMoreActive)
    this.addToggleClass(this.dom.modalShowMore, this.showMoreExpandedBtn)
    this.changeShowMoreBtnLabel()
  }

  handleEnter(e) {
    if (e.keyCode === 13) {
      this.openModal(e)
    }
  }

  handleClick(e) {
    this.openModal(e)
  }
}

export default PeopleCardGrid
