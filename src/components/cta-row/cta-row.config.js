module.exports = {
  title: 'Call To Action Row',
  status: 'ready',
  // eslint-disable-next-line quote-props
  default: 'with_image',
  variants: [
    {
      name: 'with_image',

      context: {
        title: 'Receive two rewards cards when you purchase gift cards!',
        ctaLabel: 'View all Promotions',
        description:
          '<p>Now through October 31, 2020. Promotion available online only. Reward card valid January 1 through May 31, 2021. Terms and conditions apply.</p>',
        image: {
          srcset: {
            767: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=687&h=505',
            1023: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=943&h=693'
          },
          src: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=380&h=280',
          description: 'Image Description'
        }
      }
    },
    {
      name: 'with background',
      context: {
        title: 'Receive two rewards cards when you purchase gift cards!',
        ctaLabel: 'View all Promotions',
        description:
          '<p>Now through October 31, 2020. Promotion available online only. Reward card valid January 1 through May 31, 2021. Terms and conditions apply.</p>',
        backgroundImage: {
          srcset: {
            767: 'https://verndale-image-tools.herokuapp.com/id/kO1G3neRA2o?w=727&h=652',
            1023: 'https://verndale-image-tools.herokuapp.com/id/kO1G3neRA2o?w=983&h=840'
          },
          src: 'https://verndale-image-tools.herokuapp.com/id/kO1G3neRA2o?w=1552&h=320',
          description: 'Image Description'
        }
      }
    },
    {
      name: 'with image and background',
      context: {
        title: 'Receive two rewards cards when you purchase gift cards!',
        ctaLabel: 'View all Promotions',
        description:
          '<p>Now through October 31, 2020. Promotion available online only. Reward card valid January 1 through May 31, 2021. Terms and conditions apply.</p>',
        image: {
          srcset: {
            767: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=687&h=505',
            1023: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=943&h=693'
          },
          src: 'https://verndale-image-tools.herokuapp.com/id/Ixp4YhCKZkI?w=380&h=280',
          description: 'Image Description'
        },
        backgroundImage: {
          srcset: {
            767: 'https://verndale-image-tools.herokuapp.com/id/kO1G3neRA2o?w=727&h=652',
            1023: 'https://verndale-image-tools.herokuapp.com/id/kO1G3neRA2o?w=983&h=840'
          },
          src: 'https://verndale-image-tools.herokuapp.com/id/kO1G3neRA2o?w=1552&h=320',
          description: 'Image Description'
        }
      }
    }
  ]
}
