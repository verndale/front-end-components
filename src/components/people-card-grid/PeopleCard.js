import { Component } from '@verndale/core';

class PeopleCardGrid extends Component {
  constructor(el) {
    super(el);
  }

  setupDefaults() {
    this.dom = {
      cards: [...this.el.querySelectorAll('.people-card-grid__person')]
    };
  }

  addListeners() {
    this.dom.cards.forEach(card => {
      card.addEventListener('click', this.handleClick.bind(this))
    }
    );
  }

  handleClick(e) {
    console.log('object', e.currentTarget.dataset);

  }
}

export default PeopleCardGrid;
