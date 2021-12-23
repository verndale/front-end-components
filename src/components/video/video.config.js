const context = {
  image: {
    srcset: {
      767: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=767&h=430',
      1279: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=1280&h=717'
    },
    src: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=790&h=444',
    description: 'Image Description'
  },
  autoplay: false,
  videoId: 'DSLgAsrcpGQ',
  videoPlayer: 'youtube',
  background: true
}

module.exports = {
  title: 'Video',
  status: 'ready',
  // eslint-disable-next-line quote-props
  default: 'default',
  context: { ...context },
  variants: [
    {
      name: 'Youtube Video',
      context: {
        ...context,
        videoId: 'DSLgAsrcpGQ',
        videoPlayer: 'youtube'
      }
    },
    {
      name: 'Vimeo Video',
      context: {
        ...context,
        videoId: '430133542',
        videoPlayer: 'vimeo'
      }
    },
    {
      name: 'Local Video',
      context: {
        ...context,
        videoPlayer: 'video',
        videoId: '/images/video.mp4',
        poster:
          'https://verndale-image-tools.herokuapp.com/random/mountains?seed=2&w=790&h=444'
      }
    }
  ]
}
