import { Component } from '@verndale/core'
import video from '../video/video'

class FullWidthVideo extends Component {
  setupDefaults() {
    this.dom = {
      $overlay: this.el.querySelector('.full-width-video__overlay'),
      $wrapper: this.el.querySelector('.full-width-video__wrapper')
    }

    console.log(this.el)
  }

  addListeners() {
    const { $overlay } = this.dom;
    $overlay.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(e){
    const $button = e.target.closest('.full-width-video__play-button');

    if ($button) {
      this.removeOverlay($button);
      this.removeImage();
      this.el.dataset.hideGradient = 'true';
      new video(this.el.querySelector('.full-width-video .video')).getCurrentPlayer();
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
