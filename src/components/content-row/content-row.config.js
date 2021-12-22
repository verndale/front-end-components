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
  headline: 'S-Curve With Small Image',
  subhead: 'Optional Subheading',
  description:
    '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
  buttonLabel: 'Primary Call-to-Action',
  linkLabel: 'Large Text Link'
}

module.exports = {
  title: 'C-FMT-6: S-Curve Row',
  status: 'ready',
  // eslint-disable-next-line quote-props
  default: 'default',
  context: { ...context },
  variants: [
    {
      name: 'With Youtube Video',
      context: {
        ...context,
        videoId: 'DSLgAsrcpGQ',
        videoPlayer: 'youtube',
        autoplay: false,
        headline: 'S-Curve With Youtube Video'
      }
    },
    {
      name: 'With Vimeo Video',
      context: {
        ...context,
        videoId: '430133542',
        videoPlayer: 'vimeo',
        autoplay: false,
        headline: 'S-Curve With Vimeo Video'
      }
    },
    {
      name: 'Media align left',
      context: {
        ...context,
        videoId: '430133542',
        videoPlayer: 'vimeo',
        autoplay: false,
        headline: 'S-Curve With Left Aligned Vimeo Video',
        mediaAlign: 'left'
      }
    },
    {
      name: 'Single column',
      context: {
        ...context,
        singleColumn: true,
        videoId: 'DSLgAsrcpGQ',
        videoPlayer: 'youtube',
        autoplay: false,
        headline: 'S-Curve Single Column Youtube Video'
      }
    }
  ]
}
