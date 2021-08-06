module.exports = {
  title: 'Link component',
  status: 'ready',
  context: {
    label: 'Hover on me',
    size: 'large',
    icon: 'none',
    className: 'primary'
  },
  variants: [
    {
      name: 'small',
      context: {
        label: 'Hover on me',
        size: 'small',
        icon: 'none',
        className: 'primary'
      }
    },
    {
      name: 'right icon',
      context: {
        label: 'Hover on me',
        size: 'large',
        icon: 'right',
        className: 'primary'
      }
    },
    {
      name: 'left',
      context: {
        label: 'Hover on me',
        size: 'large',
        icon: 'left',
        className: 'primary'
      }
    }
  ]
}
