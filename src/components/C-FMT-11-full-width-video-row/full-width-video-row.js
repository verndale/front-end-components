import { Component } from '@verndale/core'

class FullWidthVideo extends Component {
  setupDefaults() {
    this.dom = {
      $overlay: this.el.querySelector('.full-width-video__overlay'),
      $wrapper: this.el.querySelector('.full-width-video__wrapper')
    }
  }

  addListeners() {
    const { $overlay } = this.dom;
    $overlay.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(e) {
    const event = new Event('playVideo');
    document.dispatchEvent(event);
    const $button = e.target.closest('.full-width-video__play-button');

    if ($button) {
      this.removeOverlay($button);
      this.removeImage();
      this.el.dataset.hideGradient = 'true';
    }
  }

  removeOverlay($button) {
    if ($button) {
      const { $overlay } = this.dom;
      $overlay.parentNode.removeChild($overlay);
    }
  }

  removeImage() {
    const { $image } = this.dom;

    if ($image) {
      this.dom.$image.remove();
    }
  }
}

export default FullWidthVideo
