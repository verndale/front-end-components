const context =  {
  mediaPosition: 'background',
  subheading: 'Optional Subheading',
  heading: 'Masthead Width Right Aligned Image',
  copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
  ctaLabel: 'Primary Call-to-Action',
  linkLabel: 'Large Text Link',
  image: {
    srcset: {
      767: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=768&h=414',
      1024: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=1025&h=650'
    },
    src: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=760&h=650',
    description: 'Image Description'
  },
  media: true,
  autoplay: true
};

module.exports = {
  title: 'Masthead component',
  status: 'ready',
  context,
  variants: [
    {
      name: 'C-BNR-4: Masthead with Background Image Left variation',
      context: {
        ...context,
        containerPosition: 'left'
      }
    },
    {
      name: 'C-BNR-4: Masthead with Background Image Center Variation',
      context: {
        ...context,
        containerPosition: 'center'
      }
    },
    {
      name: 'C-BNR-4: Masthead with Background Image Right variation',
      context: {
        ...context,
        containerPosition: 'right'
      }
    },
    {
      name: 'C-BNR-4: Masthead with Background Full Width Video',
      context: {
        ...context,
        video: {
          url: '/images/video.mp4',
          poster:
            'https://verndale-image-tools.herokuapp.com/random/mountains?seed=2&w=790&h=444'
        },
        background: true
      }
    },
    {
      name: 'C-BNR-4: Masthead with Background Vimeo Video',
      context: {
        ...context,
        videoId: '430133542',
        videoPlayer: 'vimeo',
        background: true
      }
    },
    {
      name: 'C-BNR-4: Masthead with Background Youtube Video',
      context: {
        ...context,
        videoId: 'DSLgAsrcpGQ',
        videoPlayer: 'youtube',
        background: true
      }
    },
    {
      name: 'C-BNR-4: Masthead with Background Image container left',
      context: {
        ...context,
        background: null
      }
    },
    {
      name: 'C-BNR-4: Masthead with Background Image container center',
      context: {
        ...context,
        containerPosition: 'center',
        background: null
      }
    },
    {
      name: 'C-BNR-4: Masthead with Background Youtube video',
      context: {
        ...context,
        containerPosition: 'right',
        videoId: 'DSLgAsrcpGQ',
        videoPlayer: 'youtube',
        background: true
      }
    },
    {
      name: 'C-BNR-4: Masthead with Background Vimeo Video',
      context: {
        ...context,
        videoId: '430133542',
        videoPlayer: 'vimeo',
        background: true
      }
    },
    {
      name: 'C-BNR-4: Masthead with Background Video',
      context: {
        ...context,
        videoPlayer: 'video',
        background: true,
        videoId: '/images/video.mp4',
        poster:'https://verndale-image-tools.herokuapp.com/random/mountains?seed=2&w=790&h=444'
      }
    }
  ]
}
