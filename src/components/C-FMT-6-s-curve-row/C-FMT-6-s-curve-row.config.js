module.exports = {
  title: 'C-FMT-6: S-Curve Row',
  status: 'ready',
  // eslint-disable-next-line quote-props
  default: 'default',
  context: {
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
  },
  variants: [
    {
      name: 'With Youtube Video',
      context: {
        mediaAlign: 'right',
        youtubeId: 'DSLgAsrcpGQ',
        image: {
          srcset: {
            767: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=767&h=430',
            1279: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=1280&h=717'
          },
          src: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=790&h=444',
          description: 'Image Description'
        },
        headline: 'S-Curve With Small Video',
        subhead: 'Optional Subheading',
        description:
          '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        buttonLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link'
      }
    },
    {
      name: 'With Vimeo Video',
      context: {
        mediaAlign: 'right',
        vimeoId: '430133542',
        image: {
          srcset: {
            767: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=767&h=430',
            1279: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=1280&h=717'
          },
          src: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=790&h=444',
          description: 'Image Description'
        },
        headline: 'S-Curve With Small Video',
        subhead: 'Optional Subheading',
        description:
          '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        buttonLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link'
      }
    },
    {
      name: 'Media align left',
      context: {
        mediaAlign: 'left',
        vimeoId: '430133542',
        image: {
          srcset: {
            767: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=767&h=430',
            1279: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=1280&h=717'
          },
          src: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=790&h=444',
          description: 'Image Description'
        },
        headline: 'S-Curve With Small Video',
        subhead: 'Optional Subheading',
        description:
          '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        buttonLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link'
      }
    },
    {
      name: 'Single column',
      context: {
        singleColumn: true,
        youtubeId: 'DSLgAsrcpGQ',
        image: {
          srcset: {
            767: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=767&h=430',
            1279: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=1280&h=717'
          },
          src: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=790&h=444',
          description: 'Image Description'
        },
        headline: 'S-Curve With Small Video',
        subhead: 'Optional Subheading',
        description:
          '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
        buttonLabel: 'Primary Call-to-Action',
        linkLabel: 'Large Text Link'
      }
    }
  ]
}
