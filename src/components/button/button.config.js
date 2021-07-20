module.exports = {
  title: 'Button component',
  status: 'ready',
  context: {
    label: 'Buy Now',
    type: 'button',
    className: 'primary'
  },
  variants: [
    {
      name: 'submit',
      context: {
        label: 'Buy Now',
        type: 'submit',
        className: 'primary'
      }
    },
    {
      name: 'link',
      context: {
        label: 'Buy Now',
        type: 'link',
        className: 'primary'
      }
    },
    {
      name: 'outline',
      context: {
        label: 'Buy Now',
        type: 'button',
        className: 'primary',
        style: 'outline'
      }
    },
    {
      name: 'icon',
      context: {
        label: 'Buy Now',
        type: 'button',
        className: 'primary',
        icon: {
          name: 'file-pdf',
          viewBox: '0 0 30 30'
        }
      }
    },
    {
      name: 'small',
      context: {
        label: 'Buy Now',
        type: 'button',
        className: 'primary',
        size: 'small'
      }
    },
    {
      name: 'disabled button',
      context: {
        label: 'Buy Now',
        type: 'button',
        className: 'primary',
        disabled: true
      }
    },
    {
      name: 'disabled link',
      context: {
        label: 'Buy Now',
        type: 'link',
        className: 'primary',
        disabled: true
      }
    }
  ]
};
