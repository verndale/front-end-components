const context = {
  mediaAlign: 'right',
  image: {
    srcset: {
      767: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=767&h=430',
      1279: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=1280&h=717'
    },
    src: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=790&h=444',
    description: 'Image Description'
  },
  headline: 'vitae tempus quam pellentesque',
  subhead: 'rhoncus est pellentesque elit ullamcorper',
  description:
    '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
  buttonLabel: 'vitae tempus',
  linkLabel: 'vitae tempus',
  media: true
}

module.exports = {
  title: 'C-FMT-6: Content Row',
  status: 'ready',
  // eslint-disable-next-line quote-props
  default: 'default',
  context,
  variants: [
    {
      name: 'With Youtube Video',
      context: {
        ...context,
        videoId: 'DSLgAsrcpGQ',
        videoPlayer: 'youtube'
      }
    },
    {
      name: 'With Vimeo Video',
      context: {
        ...context,
        videoId: '430133542',
        videoPlayer: 'vimeo'
      }
    },
    {
      name: 'Media align left',
      context: {
        ...context,
        videoId: '430133542',
        videoPlayer: 'vimeo',
        mediaAlign: 'left'
      }
    },
    {
      name: 'Media align right',
      context: {
        ...context,
        videoId: '430133542',
        videoPlayer: 'vimeo',
        mediaAlign: 'right'
      }
    },
    {
      name: 'Single column',
      context: {
        ...context,
        singleColumn: true,
        videoId: 'DSLgAsrcpGQ',
        videoPlayer: 'youtube'
      }
    },
    {
      name: 'Full Width',
      context: {
        ...context,
        fullWidth: true,
        media: false
      }
    }
  ]
}
