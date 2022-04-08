module.exports = {
  title: 'Alert component',
  status: 'ready',
  // eslint-disable-next-line quote-props
  default: 'Default',
  context: {
    heading: 'Notice Alert',
    type: 'notice',
    copy: '<p>Fugiat irure reprehenderit elit magna occaecat dolore ut laborum tempor consequat minim exercitation Lorem dolor.</p>',
    hideButtonLabel: 'hide',
    showButtonLabel: 'show',
    closeButtonLabel: 'close',
    id: '123456'
  },
  variants: [
    {
      name: 'C-BNR-8: Critical Header Alert',
      context: {
        heading: 'Critical Alert',
        type: 'critical',
        copy: '<p>Fugiat irure reprehenderit elit magna occaecat dolore ut laborum tempor consequat minim exercitation Lorem dolor.</p>',
        hideButtonLabel: 'hide',
        showButtonLabel: 'show',
        closeButtonLabel: 'close',
        id: '123'
      }
    },
    {
      name: 'C-BNR-5: Notice Header Alert',
      context: {
        heading: 'Notice Alert',
        type: 'notice',
        copy: '<p>Fugiat irure reprehenderit elit magna occaecat dolore ut laborum tempor consequat minim exercitation Lorem dolor.</p>',
        hideButtonLabel: 'hide',
        showButtonLabel: 'show',
        closeButtonLabel: 'close',
        id: '12345'
      }
    },
    {
      name: 'C-BNR-6: Warning Header Alert',
      context: {
        heading: 'Warning Alert',
        type: 'warning',
        copy: '<p>Fugiat irure reprehenderit elit magna occaecat dolore ut laborum tempor consequat minim exercitation Lorem dolor.</p>',
        hideButtonLabel: 'hide',
        showButtonLabel: 'show',
        closeButtonLabel: 'close',
        id: '123456'
      }
    },
    {
      name: 'C-BNR-5: Notice Header Alert without close button',
      context: {
        heading: 'Notice Alert',
        type: 'notice',
        copy: '<p>Fugiat irure reprehenderit elit magna occaecat dolore ut laborum tempor consequat minim exercitation Lorem dolor.</p>',
        hideButtonLabel: 'hide',
        showButtonLabel: 'show',
        closeButtonLabel: '',
        id: 'notice_without_close_button'
      }
    },
    {
      name: 'C-BNR-5: Notice Header Alert without copy',
      context: {
        heading: 'Notice Alert',
        type: 'notice',
        copy: '',
        hideButtonLabel: 'hide',
        showButtonLabel: 'show',
        closeButtonLabel: 'close',
        id: 'notice_without_copy'
      }
    }
  ]
}
