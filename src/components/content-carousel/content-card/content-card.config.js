module.exports = {
  title: 'Button component',
  status: 'ready',
  context: {
    image: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=282&h=159',
    heading: 'Default',
    copy: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.',
    ctaLabel: 'Action',
    cta: '#',
    icon: 'chevron-right'
  },
  variants: [
    {
      name: 'C-CRD-1: Content Card with Image',
      context: {
        image: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=282&h=159',
        heading: 'Default',
        copy: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.',
        ctaLabel: 'Action',
        cta: '#',
        icon: 'chevron-right'
      }
    },
    {
      name: 'C-CRD-4: Content Card',
      context: {
        image: '',
        heading: 'Default',
        copy: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.',
        ctaLabel: 'Action',
        cta: '#',
        icon: 'chevron-right'
      }
    }
  ]
}
