module.exports = {
  title: 'C-CRD-8: Carousel Content Card',
  status: 'ready',
  context: {
    image: 'https://via.placeholder.com/282x159',
    heading: 'Default',
    copy: '<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.</p>',
    ctaLabel: 'Action',
    cta: '#',
  },
  variants: [
    {
      name: 'Card with Copy',
      context: {
        image: 'https://via.placeholder.com/282x159',
        heading: 'Default',
        copy: '<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.</p>',
        ctaLabel: 'Action',
        cta: '#',
      }
    },
    {
      name: 'Card without Copy',
      context: {
        image: 'https://via.placeholder.com/282x159',
        heading: 'Default',
        copy: null,
        ctaLabel: 'Action',
        cta: '#',
      }
    }
  ]
}
