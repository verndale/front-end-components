module.exports = {
  title: 'Alert component',
  status: 'ready',
  'default': 'notice',
  context: {
    heading: 'Notice Alert',
    type: 'notice',
    copy: '<p>Fugiat irure reprehenderit elit magna occaecat dolore ut laborum tempor consequat minim exercitation Lorem dolor.</p>',
    hideButtonLabel: 'hide',
    showButtonLabel: 'show',
    closeButtonLabel: 'close'
  },
  variants: [
    {
      name: 'critical',
      context: {
        heading: 'Critical Alert',
        type: 'critical',
        copy: '<p>Fugiat irure reprehenderit elit magna occaecat dolore ut laborum tempor consequat minim exercitation Lorem dolor.</p>',
        hideButtonLabel: 'hide',
        showButtonLabel: 'show',
        closeButtonLabel: 'close',
        id: 'critical'
      }
    },
    {
      name: 'notice',
      context: {
        heading: 'Notice Alert',
        type: 'notice',
        copy: '<p>Fugiat irure reprehenderit elit magna occaecat dolore ut laborum tempor consequat minim exercitation Lorem dolor.</p>',
        hideButtonLabel: 'hide',
        showButtonLabel: 'show',
        closeButtonLabel: 'close',
        id: 'notice'
      }
    },
    {
      name: 'warning',
      context: {
        heading: 'Warning Alert',
        type: 'warning',
        copy: '<p>Fugiat irure reprehenderit elit magna occaecat dolore ut laborum tempor consequat minim exercitation Lorem dolor.</p>',
        hideButtonLabel: 'hide',
        showButtonLabel: 'show',
        closeButtonLabel: 'close',
        id: 'warning'
      }
    }
  ]
}
