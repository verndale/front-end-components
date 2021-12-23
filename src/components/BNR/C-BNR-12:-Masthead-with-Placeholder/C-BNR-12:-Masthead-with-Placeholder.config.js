const context = {
  mediaPosition: 'left',
  subheading: 'Optional Subheading',
  heading: 'Masthead With Left Aligned Image',
  copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
  ctaLabel: 'Primary Call-to-Action',
  linkLabel: 'Large Text Link',
  image: {
    srcset: {
      767: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=768&h=414',
      1279: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=1280&h=650'
    },
    src: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=760&h=650',
    description: 'Image Description'
  },
  media: true,
  autoplay: false,
  background: true
}

module.exports = {
  title: 'Masthead component',
  status: 'ready',
  context,
  variants: [
    {
      name: 'C-BNR-12: Masthead with Placeholder left aligned Image',
      context
    },
    {
      name: 'C-BNR-12: Masthead with Placeholder Right aligned Image',
      context: {
        ...context,
        mediaPosition: 'right',
        heading: 'Masthead With Right Aligned Image'
      }
    },
    {
      name: 'C-BNR-12: Masthead with Placeholders Left Aligned Video',
      context: {
        ...context,
        mediaPosition: 'left',
        videoPlayer: 'video',
        videoId: '/images/video.mp4',
        poster:
          'https://verndale-image-tools.herokuapp.com/random/mountains?seed=2&w=790&h=444',
        heading: 'Masthead With Left Aligned Local Video'
      }
    },
    {
      name: 'C-BNR-12: Masthead with Placeholders Right Aligned Video',
      context: {
        ...context,
        mediaPosition: 'right',
        videoPlayer: 'video',
        videoId: '/images/video.mp4',
        poster:
          'https://verndale-image-tools.herokuapp.com/random/mountains?seed=2&w=790&h=444',
        heading: 'Masthead With Right Aligned Local Video'
      }
    },
    {
      name: 'C-BNR-12: Masthead with Placeholders left Vimeo Video',
      context: {
        ...context,
        mediaPosition: 'left',
        videoId: '430133542',
        videoPlayer: 'vimeo',
        heading: 'Masthead With Left Aligned Vimeo Video'
      }
    },
    {
      name: 'C-BNR-12: Masthead with Placeholders Vimeo Video',
      context: {
        ...context,
        mediaPosition: 'right',
        videoId: '430133542',
        videoPlayer: 'vimeo',
        heading: 'Masthead With Right Aligned Vimeo Video'
      }
    },
    {
      name: 'C-BNR-12: Masthead with Youtube Video',
      context: {
        ...context,
        mediaPosition: 'right',
        videoId: 'DSLgAsrcpGQ',
        videoPlayer: 'youtube',
        heading: 'Masthead With Right Aligned Youtube Video'
      }
    },
    {
      name: 'C-BNR-12: Masthead with Vimeo Video',
      context: {
        ...context,
        mediaPosition: 'right',
        videoId: '430133542',
        videoPlayer: 'vimeo',
        heading: 'Masthead With Right Aligned Vimeo Video',
        autoplay: false
      }
    },
    {
      name: 'C-BNR-12: Masthead with Local Video',
      context: {
        ...context,
        mediaPosition: 'right',
        videoPlayer: 'video',
        videoId: '/images/video.mp4',
        poster:
          'https://verndale-image-tools.herokuapp.com/random/mountains?seed=2&w=790&h=444',
        heading: 'Masthead With Right Aligned Local Video'
      }
    }
  ]
}
