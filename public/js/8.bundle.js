(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/components/C-FMT-11-full-width-video-row/full-width-video-row.js":
/*!******************************************************************************!*\
  !*** ./src/components/C-FMT-11-full-width-video-row/full-width-video-row.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @verndale/core */ \"./node_modules/@verndale/core/lib/index.js\");\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_verndale_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _video_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../video/video */ \"./src/components/video/video.js\");\n\n\n\nclass FullWidthVideo extends _verndale_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  setupDefaults() {\n    this.dom = {\n      $overlay: this.el.querySelector('.full-width-video__overlay'),\n      $wrapper: this.el.querySelector('.full-width-video__wrapper')\n    };\n  }\n\n  addListeners() {\n    const {\n      $overlay\n    } = this.dom;\n    $overlay.addEventListener('click', this.handleClick.bind(this));\n  }\n\n  handleClick(e) {\n    const $button = e.target.closest('.full-width-video__play-button');\n\n    if ($button) {\n      this.removeOverlay($button);\n      this.removeImage();\n      this.el.dataset.hideGradient = 'true';\n      new _video_video__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.el.querySelector('.full-width-video .video')).getCurrentPlayer();\n    }\n  }\n\n  removeOverlay($button) {\n    if ($button) {\n      const {\n        $overlay\n      } = this.dom;\n      $overlay.parentNode.removeChild($overlay);\n    }\n  }\n\n  removeImage() {\n    const {\n      $image\n    } = this.dom;\n\n    if ($image) {\n      this.dom.$image.remove();\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FullWidthVideo);\n\n//# sourceURL=webpack:///./src/components/C-FMT-11-full-width-video-row/full-width-video-row.js?");

/***/ }),

/***/ "./src/components/video/video.js":
/*!***************************************!*\
  !*** ./src/components/video/video.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @verndale/core */ \"./node_modules/@verndale/core/lib/index.js\");\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_verndale_core__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Module extends _verndale_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  setupDefaults() {\n    this.dom = {\n      poster: this.el.querySelector('.video__poster'),\n      backgroundVideo: this.el.querySelector('.video__background'),\n      icon: this.el.querySelector('svg'),\n      videoPoster: this.el.parentNode.querySelector('picture:not(.video__poster)'),\n      video: this.el.querySelector('video')\n    };\n    this.initialized = false;\n    this.videoId = this.el.dataset.videoId;\n    this.videoPlayer = this.el.dataset.videoPlayer;\n    this.vimeoPlayer = 'vimeo';\n    this.youtubePlayer = 'youtube';\n    this.localVideo = 'video';\n    this.vimeoScript = 'https://player.vimeo.com/api/player.js';\n  }\n\n  addListeners() {\n    if (!this.el.dataset.videoAutoPlay !== true) {\n      this.el.addEventListener('click', this.getCurrentPlayer.bind(this));\n    }\n\n    if (this.el.dataset.videoAutoPlay === 'true') {\n      this.removeCover();\n      this.el.classList.add('full-background-video');\n\n      if (this.vimeoPlayer === this.el.dataset.videoPlayer) {\n        return this.dom.backgroundVideo.appendChild(this.getVimeoIframe());\n      }\n\n      if (this.youtubePlayer === this.el.dataset.videoPlayer) {\n        return this.dom.backgroundVideo.appendChild(this.getYoutubeIframe(true));\n      }\n\n      if (this.localVideo === this.el.dataset.videoPlayer) {\n        this.dom.backgroundVideo.appendChild(this.getLocalVideo());\n        return;\n      }\n\n      return;\n    }\n  }\n\n  getCurrentPlayer() {\n    if (this.initialized) return;\n\n    if (this.vimeoPlayer === this.el.dataset.videoPlayer) {\n      return this.handleInitVideos(this.el.dataset.videoPlayer, this.getVimeoIframe());\n    }\n\n    if (this.youtubePlayer === this.el.dataset.videoPlayer) {\n      return this.handleInitVideos(this.el.dataset.videoPlayer, this.getYoutubeIframe());\n    }\n\n    if (this.localVideo === this.el.dataset.videoPlayer) {\n      this.handleInitVideos(this.el.dataset.videoPlayer, this.getLocalVideo());\n      this.addVideoListeners();\n    }\n\n    return null;\n  }\n\n  addVideoListeners() {\n    this.video = this.el.querySelector('video');\n\n    if (!this.initialized) {\n      this.definePlayingObject();\n      return;\n    }\n\n    this.video.addEventListener('click', this.handleVideoClick.bind(this));\n    this.video.addEventListener('play', this.handleVideoPlay.bind(this));\n    this.video.addEventListener('pause', this.handleVideoPause.bind(this));\n    this.video.addEventListener('ended', this.handleVideoEnd.bind(this));\n    return;\n  }\n\n  definePlayingObject() {\n    Object.defineProperty(this.video, 'playing', {\n      // eslint-disable-next-line object-shorthand\n      get: function () {\n        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);\n      }\n    });\n  }\n\n  getYoutubeIframe(controls = false) {\n    const iframe = document.createElement('iframe');\n    iframe.setAttribute('width', 640);\n    iframe.setAttribute('height', 360);\n    iframe.setAttribute('frameborder', 0);\n    iframe.setAttribute('src', `https://www.youtube.com/embed/${this.videoId}?modestbranding=1&rel=0&showinfo=0&autohide=1&autoplay=1&mute=1${controls ? '&controls=0' : ''}`);\n    return iframe;\n  }\n\n  getVimeoIframe() {\n    const iframe = document.createElement('iframe');\n    iframe.setAttribute('width', 640);\n    iframe.setAttribute('height', 360);\n    iframe.setAttribute('frameborder', 0);\n    iframe.setAttribute('webkitallowfullscreen', 'webkitallowfullscreen');\n    iframe.setAttribute('mozallowfullscreen', 'mozallowfullscreen');\n    iframe.setAttribute('allowfullscreen', 'allowfullscreen');\n    iframe.setAttribute('allow', 'autoplay');\n    iframe.setAttribute('src', `https://player.vimeo.com/video/${this.videoId}?title=false&autoplay=true&muted=1`);\n    return iframe;\n  }\n\n  getLocalVideo() {\n    const video = document.createElement('video');\n    const source = document.createElement('source');\n    source.src = this.el.dataset.videoId;\n    video.autoplay = true;\n    video.poster = this.el.dataset.videoPoster;\n    video.appendChild(source);\n    return video;\n  }\n\n  removeCover() {\n    this.dom.poster.remove();\n    this.dom.icon.remove();\n  }\n\n  addVimeoScript() {\n    const script = document.createElement('script');\n    script.setAttribute('src', this.vimeoScript);\n    document.body.prepend(script);\n  }\n\n  handleInitVideos(videoType, iframe) {\n    if (videoType === this.vimeoPlayer) {\n      this.addVimeoScript();\n    }\n\n    if (videoType === this.localVideo) {\n      this.removeCover();\n    }\n\n    if (!this.initialized) {\n      iframe.onload = () => {\n        this.removeCover();\n      };\n\n      this.dom.backgroundVideo.appendChild(iframe);\n      this.initialized = true;\n    }\n  }\n\n  handleVideoClick() {\n    if (!this.video.playing) {\n      this.video.play();\n    }\n  }\n\n  handleVideoPlay() {\n    this.video.classList.add('video--playing');\n    this.video.setAttribute('controls', 'controls');\n  }\n\n  handleVideoPause() {\n    this.video.classList.remove('video--playing');\n    this.video.removeAttribute('controls');\n  }\n\n  handleVideoEnd() {\n    this.video.classList.remove('video--playing');\n    this.video.removeAttribute('controls');\n    this.video.currentTime = 0;\n    this.video.load();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Module);\n\n//# sourceURL=webpack:///./src/components/video/video.js?");

/***/ })

}]);