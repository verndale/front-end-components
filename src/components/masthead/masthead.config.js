module.exports = {
  title: 'Masthead component',
  status: 'ready',
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
  },
  variants: [
    {
      name: 'Background Image',
      context: {
        mediaPosition: 'background',
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
      name: 'Left aligned Image',
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
      name: 'Right aligned Image',
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
    }
  ]
}
