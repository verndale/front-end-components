"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@verndale/core");

class Module extends _core.Component {
  setupDefaults() {
    this.dom = {
      video: this.el.querySelector('video')
    };
    Object.defineProperty(this.dom.video, 'playing', {
      // eslint-disable-next-line object-shorthand
      get: function () {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
      }
    });
  }

  addListeners() {
    this.dom.video.addEventListener('click', this.handleVideoClick.bind(this));
    this.dom.video.addEventListener('play', this.handleVideoPlay.bind(this));
    this.dom.video.addEventListener('pause', this.handleVideoPause.bind(this));
    this.dom.video.addEventListener('ended', this.handleVideoEnd.bind(this));
  }

  handleVideoClick() {
    if (!this.dom.video.playing) {
      this.dom.video.play();
    }
  }

  handleVideoPlay() {
    this.el.classList.add('video--playing');
    this.dom.video.setAttribute('controls', 'controls');
  }

  handleVideoPause() {
    this.el.classList.remove('video--playing');
    this.dom.video.removeAttribute('controls');
  }

  handleVideoEnd() {
    this.el.classList.remove('video--playing');
    this.dom.video.removeAttribute('controls');
    this.dom.video.currentTime = 0;
    this.dom.video.load();
  }

}

var _default = Module;
exports.default = _default;