module.exports = {
  title: 'C-CRD-8: Carousel Content Card',
  status: 'ready',
  context: {
    image: {
      srcset: {
        767: 'https://verndale-image-tools.herokuapp.com/id/9wg5jCEPBsw?w=768&h=414',
        1279: 'https://verndale-image-tools.herokuapp.com/id/9wg5jCEPBsw?w=1280&h=690'
      },
      src: 'https://verndale-image-tools.herokuapp.com/id/9wg5jCEPBsw?w=1600&h=700',
      description: 'Image Description'
    },
    heading: 'Default',
    copy: '<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.</p>',
    ctaLabel: 'Action',
    cta: '#'
  },
  variants: [
    {
      name: 'Card with Copy',
      context: {
        image: {
          srcset: {
            767: 'https://verndale-image-tools.herokuapp.com/id/9wg5jCEPBsw?w=768&h=414',
            1279: 'https://verndale-image-tools.herokuapp.com/id/9wg5jCEPBsw?w=1280&h=690'
          },
          src: 'https://verndale-image-tools.herokuapp.com/id/9wg5jCEPBsw?w=1600&h=700',
          description: 'Image Description'
        },
        heading: 'Default',
        copy: '<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.</p>',
        ctaLabel: 'Action',
        cta: '#'
      }
    },
    {
      name: 'Card without Copy',
      context: {
        image: {
          srcset: {
            767: 'https://verndale-image-tools.herokuapp.com/id/9wg5jCEPBsw?w=768&h=414',
            1279: 'https://verndale-image-tools.herokuapp.com/id/9wg5jCEPBsw?w=1280&h=690'
          },
          src: 'https://verndale-image-tools.herokuapp.com/id/9wg5jCEPBsw?w=1600&h=700',
          description: 'Image Description'
        },
        heading: 'Default',
        copy: null,
        ctaLabel: 'Action',
        cta: '#'
      }
    }
  ]
}
