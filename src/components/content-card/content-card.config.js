module.exports = {
  title: 'Button component',
  status: 'ready',
  context: {
    image: 'https://via.placeholder.com/282x159',
    heading: 'Default',
    copy: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.',
    ctaLabel: 'Action',
    cta: '#',
    icon: 'chevron-right'
  },
  variants: [
    {
      name: 'Card with Image',
      context: {
        image: 'https://via.placeholder.com/282x159',
        heading: 'Default',
        copy: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.',
        ctaLabel: 'Action',
        cta: '#',
        icon: 'chevron-right'
      }
    },
    {
      name: 'Card without Image',
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
