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
  media: true
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
        }
      }
    },
    {
      name: 'C-BNR-4: Masthead with Background Vimeo Video',
      context: {
        ...context,
        vimeoId: '430133542'
      }
    },
    {
      name: 'C-BNR-4: Masthead with Background Youtube Video',
      context: {
        ...context,
        youtubeId: 'DSLgAsrcpGQ'
      }
    },
    {
      name: 'C-BNR-4: Masthead with Background Image container left',
      context: {
        ...context,
        youtubeId: 'DSLgAsrcpGQ'
      }
    },
    {
      name: 'C-BNR-4: Masthead with Background Image container center',
      context: {
        ...context,
        containerPosition: 'center',
        youtubeId: 'DSLgAsrcpGQ'
      }
    },
    {
      name: 'C-BNR-4: Masthead with Background Image container right',
      context: {
        ...context,
        containerPosition: 'right',
        youtubeId: 'DSLgAsrcpGQ'
      }
    }
  ]
}
