import { Component } from '@verndale/core';

class Module extends Component {
  setupDefaults() {
    this.dom = {
      poster: this.el.querySelector('.video__poster'),
      backgroundVideo: this.el.querySelector('.video__background'),
      icon: this.el.querySelector('svg'),
      videoPoster: this.el.parentNode.querySelector('picture:not(.video__poster)'),
      video: this.el.querySelector('video')
    };

    this.initialized = false;
    this.videoId = this.el.dataset.videoId;
    this.videoPlayer = this.el.dataset.videoPlayer;
    this.vimeoPlayer = 'vimeo';
    this.youtubePlayer = 'youtube';
    this.localVideo = 'video';
    this.vimeoScript = 'https://player.vimeo.com/api/player.js';


  }

  addListeners() {
    document.addEventListener('playVideo', this.getCurrentPlayer.bind(this), false);

    if (!this.el.dataset.videoAutoPlay !== true) {
      this.el.addEventListener('click', this.getCurrentPlayer.bind(this));
    }


    if (this.el.dataset.videoAutoPlay === 'true') {
      this.removeCover();
      this.el.classList.add('full-background-video')
      if (this.vimeoPlayer === this.el.dataset.videoPlayer) {
        return this.dom.backgroundVideo.appendChild(this.getVimeoIframe());

      }
      if (this.youtubePlayer === this.el.dataset.videoPlayer){
        return this.dom.backgroundVideo.appendChild(this.getYoutubeIframe(true));
      }
      if (this.localVideo === this.el.dataset.videoPlayer){
        this.dom.backgroundVideo.appendChild(this.getLocalVideo());
        return
      }
      return;
    }
  }

  getCurrentPlayer() {
    if (this.initialized) return;
    if (this.vimeoPlayer === this.el.dataset.videoPlayer) {
      return this.handleInitVideos(this.el.dataset.videoPlayer, this.getVimeoIframe());
    }

    if (this.youtubePlayer === this.el.dataset.videoPlayer) {
      return this.handleInitVideos(this.el.dataset.videoPlayer, this.getYoutubeIframe());
    }

    if (this.localVideo === this.el.dataset.videoPlayer) {
      this.handleInitVideos(this.el.dataset.videoPlayer, this.getLocalVideo());
      this.addVideoListeners();
    }

    return null
  }

  addVideoListeners() {
    this.video = this.el.querySelector('video');
    if (!this.initialized) {
      this.definePlayingObject();
      return;
    }

    this.video.addEventListener('click', this.handleVideoClick.bind(this));
    this.video.addEventListener('play', this.handleVideoPlay.bind(this));
    this.video.addEventListener('pause', this.handleVideoPause.bind(this));
    this.video.addEventListener('ended', this.handleVideoEnd.bind(this));
    return;
  }

  definePlayingObject() {
    Object.defineProperty(this.video, 'playing', {
      // eslint-disable-next-line object-shorthand
      get: function() {
        return !!(
          this.currentTime > 0 &&
          !this.paused &&
          !this.ended &&
          this.readyState > 2
        );
      }
    });
  }

  getYoutubeIframe(controls = false) {
    const iframe = document.createElement('iframe');

    iframe.setAttribute('width', 640);
    iframe.setAttribute('height', 360);
    iframe.setAttribute('frameborder', 0);
    iframe.setAttribute(
      'src',
      `http://www.youtube.com/embed/${this.videoId}?modestbranding=1&rel=0&showinfo=0&autohide=1&autoplay=1&mute=1${controls ? '&controls=0' : ''}`
    );
    return iframe;
  }

  getVimeoIframe() {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('width', 640);
    iframe.setAttribute('height', 360);
    iframe.setAttribute('frameborder', 0);
    iframe.setAttribute('webkitallowfullscreen', 'webkitallowfullscreen');
    iframe.setAttribute('mozallowfullscreen', 'mozallowfullscreen');
    iframe.setAttribute('allowfullscreen', 'allowfullscreen');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute(
      'src',
      `https://player.vimeo.com/video/${this.videoId}?title=false&autoplay=true&muted=1`
    );
    return iframe;
  }

  getLocalVideo() {
    const video = document.createElement('video')
    const source = document.createElement('source');

    source.src = this.el.dataset.videoId;
    video.autoplay = true;
    video.poster = this.el.dataset.videoPoster
    video.appendChild(source)
    return video;
  }

  removeCover() {
    this.dom.poster.remove();
    this.dom.icon.remove();
  }

  addVimeoScript() {
    const script = document.createElement('script');
    script.setAttribute('src', this.vimeoScript);
    document.body.prepend(script);
  }

  handleInitVideos(videoType, iframe) {

    if (videoType === this.vimeoPlayer) {
      this.addVimeoScript();
    }

    if (videoType === this.localVideo) {
      this.removeCover();
    }

    if (!this.initialized) {
      iframe.onload = () => {
        this.removeCover();
      };
      this.dom.backgroundVideo.appendChild(iframe);
      this.initialized = true;
    }

  }


  handleVideoClick() {
    if (!this.video.playing) {
      this.video.play();
    }
  }

  handleVideoPlay() {
    this.video.classList.add('video--playing');
    this.video.setAttribute('controls', 'controls');
  }

  handleVideoPause() {
    this.video.classList.remove('video--playing');
    this.video.removeAttribute('controls');
  }

  handleVideoEnd() {
    this.video.classList.remove('video--playing');
    this.video.removeAttribute('controls');
    this.video.currentTime = 0;
    this.video.load();
  }
}

export default Module;
