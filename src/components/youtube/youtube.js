import { Component } from '@verndale/core';

class Module extends Component {
  setupDefaults() {
    this.dom = {
      poster: this.el.querySelector('.video__poster'),
      icon: this.el.querySelector('svg')
    };
    this.initialized = false;
    this.videoId = this.el.dataset.videoId;
  }

  addListeners() {
    this.el.addEventListener('click', this.initVideo.bind(this));
  }

  initVideo() {
    if (!this.initialized) {
      const iframe = document.createElement('iframe');
      iframe.setAttribute('width', 640);
      iframe.setAttribute('height', 360);
      iframe.setAttribute('frameborder', 0);
      iframe.setAttribute(
        'src',
        `http://www.youtube.com/embed/${this.videoId}?modestbranding=1&rel=0&showinfo=0&autohide=1&autoplay=1`
      );

      iframe.onload = () => {
        this.dom.poster.remove();
        this.dom.icon.remove();
      };

      this.dom.poster.parentNode.appendChild(iframe);
      this.initialized = true;
    }
  }
}

export default Module;
