module.exports = {
  title: 'Masthead component',
  status: 'ready',
  context: {
    mediaPosition: 'Default',
    subheading: 'Optional Subheading',
    heading: 'Masthead Width Right Aligned Image',
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
    }
  },
  variants: [
    {
      name: 'C-BNR-4: Masthead with Background Image Left variation',
      context: {
        mediaPosition: 'background',
        containerPosition: 'left',
        subheading: 'Optional Subheading',
        heading: 'Masthead Over Full Width Image',
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
        }
      }
    },
    {
      name: 'C-BNR-4: Masthead with Background Image Center Variation',
      context: {
        mediaPosition: 'background',
        containerPosition: 'center',
        subheading: 'Optional Subheading',
        heading: 'Masthead Over Full Width Image',
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
        }
      }
    },
    {
      name: 'C-BNR-4: Masthead with Background Image Right variation',
      context: {
        mediaPosition: 'background',
        containerPosition: 'right',
        subheading: 'Optional Subheading',
        heading: 'Masthead Over Full Width Image',
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
        }
      }
    },
    {
      name: 'C-BNR-4: Masthead with Background Full Width Video',
      context: {
        mediaPosition: 'background',
        subheading: 'Optional Subheading',
        heading: 'Masthead Over Full Width Image',
        copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        ctaLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link',
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
        mediaPosition: 'background',
        subheading: 'Optional Subheading',
        heading: 'Masthead Over Full Width Image',
        copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        ctaLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link',
        vimeoId: '430133542'
      }
    },
    {
      name: 'C-BNR-4: Masthead with Background Image container left',
      context: {
        mediaPosition: 'background',
        containerPosition: 'left',
        subheading: 'Optional Subheading',
        heading: 'Masthead Over Full Width Image',
        copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        ctaLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link',
        youtubeId: 'DSLgAsrcpGQ'
      }
    },
    {
      name: 'C-BNR-4: Masthead with Background Image container center',
      context: {
        mediaPosition: 'background',
        containerPosition: 'center',
        subheading: 'Optional Subheading',
        heading: 'Masthead Over Full Width Image',
        copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        ctaLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link',
        youtubeId: 'DSLgAsrcpGQ'
      }
    },
    {
      name: 'C-BNR-4: Masthead with Background Image container right',
      context: {
        mediaPosition: 'background',
        containerPosition: 'right',
        subheading: 'Optional Subheading',
        heading: 'Masthead Over Full Width Image',
        copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        ctaLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link',
        youtubeId: 'DSLgAsrcpGQ'
      }
    }
  ]
}
