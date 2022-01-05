"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@verndale/core");

var _video = _interopRequireDefault(require("../video/video"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FullWidthVideo extends _core.Component {
  setupDefaults() {
    this.dom = {
      $overlay: this.el.querySelector('.full-width-video__overlay'),
      $wrapper: this.el.querySelector('.full-width-video__wrapper')
    };
    console.log(this.el);
  }

  addListeners() {
    const {
      $overlay
    } = this.dom;
    $overlay.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(e) {
    const $button = e.target.closest('.full-width-video__play-button');

    if ($button) {
      this.removeOverlay($button);
      this.removeImage();
      this.el.dataset.hideGradient = 'true';
      new _video.default(this.el.querySelector('.full-width-video .video')).getCurrentPlayer();
    }
  }

  removeOverlay($button) {
    if ($button) {
      const {
        $overlay
      } = this.dom;
      $overlay.parentNode.removeChild($overlay);
    }
  }

  removeImage() {
    const {
      $image
    } = this.dom;

    if ($image) {
      this.dom.$image.remove();
    }
  }

}

var _default = FullWidthVideo;
exports.default = _default;