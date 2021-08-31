import { Component } from '@verndale/core';

class FullWidthVideo extends Component {
  setupDefaults() {
    this.dom = {
      $image: this.el.querySelector('img.full-width-video__media'),
      $overlay: this.el.querySelector('.full-width-video__overlay'),
      $wrapper: this.el.querySelector('.full-width-video__wrapper')
    };

    this.playButtonLabel = this.el.dataset.playButtonLabel;
    this.videoTitle = this.el.dataset.videoTitle;
    this.videoId = this.el.dataset.videoId;
    this.addVideoPlayer();
  }

  addListeners() {
    const { $overlay } = this.dom;
    $overlay.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(e) {
    const $button = e.target.closest('.full-width-video__play-button');

    if ($button) {
      this.removeOverlay($button);
      this.removeImage();
      this.el.dataset.hideGradient = 'true';
    }
  }

  removeOverlay($button) {
    if ($button) {
      const { $wrapper, $overlay } = this.dom;
      const $iframe = $wrapper.querySelector('iframe');

      $iframe.src = `${$iframe.src}?autoplay=1`;
      $iframe.removeAttribute('tabindex');
      $overlay.parentNode.removeChild($overlay);
    }
  }

  removeImage() {
    const { $image } = this.dom;

    if ($image) {
      $image.parentNode.removeChild($image);
    }
  }

  addVideoPlayer() {
    const { $wrapper, $overlay } = this.dom;

    $wrapper.insertAdjacentHTML('afterbegin', this.getIframe());
    $overlay.insertAdjacentHTML('afterbegin', this.getPlayButton());
  }

  getIframe() {
    return `
      <div class="full-width-video__media">
        <iframe
          loading="lazy"
          src="https://www.youtube.com/embed/${this.videoId}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
          msallowfullscreen="msallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
          title="${this.videoTitle}"
          tabindex="-1"
        ></iframe>
      </div>
    `;
  }

  getPlayButton() {
    return `
      <button class="full-width-video__play-button">
        <svg aria-label="${this.playButtonLabel}">
          <use xlink:href="#play-outline" />
        </svg>
      </button>
    `;
  }
}

export default FullWidthVideo;
