module.exports = {
  title: 'Link list component',
  status: 'ready',
  context: {
    links: [
      {
        label: 'Explore experimental learning',
        icon: 'chevron-right',
        iconPosition: 'right',
        size: 'small'
      },
      {
        label: 'Explore experimental learning',
        icon: 'chevron-right',
        iconPosition: 'right',
        size: 'small'
      },
      {
        label: 'Explore experimental learning',
        icon: 'chevron-right',
        iconPosition: 'right',
        size: 'small'
      }
    ]
  },
  variants: [
    {
      name: 'Small',
      context: {
        links: [
          {
            label: 'Explore experimental learning',
            icon: 'chevron-right',
            iconPosition: 'right',
            size: 'small'
          },
          {
            label: 'Explore experimental learning',
            icon: 'chevron-right',
            iconPosition: 'right',
            size: 'small'
          },
          {
            label: 'Explore experimental learning',
            icon: 'chevron-right',
            iconPosition: 'right',
            size: 'small'
          }
        ]
      }
    },
    {
      name: 'Large',
      context: {
        links: [
          {
            label: 'Explore experimental learning',
            icon: 'chevron-right',
            iconPosition: 'right',
            size: 'large'
          },
          {
            label: 'Explore experimental learning',
            icon: 'chevron-right',
            iconPosition: 'right',
            size: 'large'
          },
          {
            label: 'Explore experimental learning',
            icon: 'chevron-right',
            iconPosition: 'right',
            size: 'large'
          }
        ]
      }
    },
    {
      name: 'Left Icon',
      context: {
        links: [
          {
            label: 'Explore experimental learning',
            icon: 'chevron-left',
            iconPosition: 'left',
            size: 'small'
          },
          {
            label: 'Explore experimental learning',
            icon: 'chevron-left',
            iconPosition: 'left',
            size: 'small'
          },
          {
            label: 'Explore experimental learning',
            icon: 'chevron-left',
            iconPosition: 'left',
            size: 'small'
          }
        ]
      }
    }
  ]
};
