const context = {
  heading: 'Masthead With No Image',
  subheading: 'Optional subheading',
  ctaLabel: 'Primary Call-to-Action',
  linkLabel: 'Large Text Link',
  copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Masterhead With No Image rutrum faucibus dolor auctor.</p>',
}

module.exports = {
  title: 'C-BNR-13: Simple Masthead',
  status: 'ready',
  context,
  variants: [
    {
      name: 'Heading Only',
      context: {
        ...context,
        subheading: null,
        copy: null
      }
    },
    {
      name: 'With Sub Heading',
      context: {
        ...context,
        subheading: 'Optional subheading',
        copy: null
      }
    },
    {
      name: 'With Copy',
      context: {
        ...context,
        subheading: null
      }
    },
    {
      name: 'With Sub Heading and Copy',
      context
    },
    {
      name: 'center Content',
      context: {
        ...context,
        center: true
      }
    }
  ]
}
