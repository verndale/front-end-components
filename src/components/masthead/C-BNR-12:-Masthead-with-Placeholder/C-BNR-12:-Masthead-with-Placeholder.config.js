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
      name: 'C-BNR-12: Masthead with Placeholder left aligned Image',
      context: {
        mediaPosition: 'left',
        subheading: 'Optional Subheading',
        heading: 'Masthead Width Left Aligned Image',
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
      name: 'C-BNR-12: Masthead with Placeholder Right aligned Image',
      context: {
        mediaPosition: 'right',
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
      }
    },
    {
      name: 'C-BNR-12: Masthead with Placeholders Left Aligned Video',
      context: {
        mediaPosition: 'left',
        subheading: 'Optional Subheading',
        heading: 'Masthead Width Left Aligned Video',
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
      name: 'C-BNR-12: Masthead with Placeholders Right Aligned Video',
      context: {
        mediaPosition: 'right',
        subheading: 'Optional Subheading',
        heading: 'Masthead Width Left Aligned Video',
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
      name: 'C-BNR-12: Masthead with Placeholders left Vimeo Video',
      context: {
        mediaPosition: 'left',
        subheading: 'Optional Subheading',
        heading: 'Masthead Over Full Width Image',
        copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        ctaLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link',
        vimeoId: '430133542'
      }
    },
    {
      name: 'C-BNR-12: Masthead with Placeholders Right Vimeo Video',
      context: {
        mediaPosition: 'right',
        subheading: 'Optional Subheading',
        heading: 'Masthead Over Full Width Image',
        copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        ctaLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link',
        vimeoId: '430133542'
      }
    },
    {
      name: 'C-BNR-12: Masthead with Placeholders Left Youtube Video',
      context: {
        mediaPosition: 'left',
        subheading: 'Optional Subheading',
        heading: 'Masthead Width Left Aligned Video',
        copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        ctaLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link',
        youtubeId: 'DSLgAsrcpGQ'
      }
    },
    {
      name: 'C-BNR-12: Masthead with Placeholders Right Youtube Video',
      context: {
        mediaPosition: 'right',
        subheading: 'Optional Subheading',
        heading: 'Masthead Width Right Aligned Video',
        copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        ctaLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link',
        youtubeId: 'DSLgAsrcpGQ'
      }
    }
  ]
}
