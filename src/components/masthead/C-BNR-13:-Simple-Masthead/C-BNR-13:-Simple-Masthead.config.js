module.exports = {
  title: 'C-BNR-13: Simple Masthead',
  status: 'ready',
  context: {
    centered: false,
    heading: 'Masterhead With No Image',
    subHeading: 'Optional Subheading',
    copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Masterhead With No Image rutrum faucibus dolor auctor.</p>',
  },
  variants: [
    {
      name: 'Heading Only',
      context: {
        centered: false,
        heading: 'Masterhead With No Image',
        subHeading: null,
        copy: null
      },
    },
    {
      name: 'With Sub Heading',
      context: {
        centered: false,
        heading: 'Masterhead With No Image',
        subHeading: 'Optional Subheading',
        copy: null
      },
    },
    {
      name: 'With Copy',
      context: {
        centered: false,
        heading: 'Masterhead With No Image',
        subHeading: null,
        copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Masterhead With No Image rutrum faucibus dolor auctor.</p>',
      },
    },
    {
      name: 'With Sub Heading and Copy',
      context: {
        centered: false,
        heading: 'Masterhead With No Image',
        subHeading: 'Optional Subheading',
        copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Masterhead With No Image rutrum faucibus dolor auctor.</p>',
      },
    },
    {
      name: 'center Content',
      context: {
        centered: true,
        heading: 'Masterhead With No Image',
        subHeading: 'Optional Subheading',
        copy: '<p>Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Masterhead With No Image rutrum faucibus dolor auctor.</p>',
      },
    }
  ]
}
