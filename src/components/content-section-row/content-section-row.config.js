module.exports = {
  title: 'Content section row component',
  status: 'ready',
  context: {
    heading: 'Lorem ipsum dolor sit amet',
    rtf: '<p>Fugiat irure reprehenderit elit magna occaecat dolore ut laborum tempor consequat minim exercitation `Lorem `dolor.</p>',
  },
  variants: [
    {
      name: 'Full',
      context: {
        heading: 'Lorem ipsum dolor sit amet',
        rtf: '<p>Fugiat irure reprehenderit elit magna occaecat dolore ut laborum tempor consequat minim exercitation `Lorem `dolor.</p>',
      }
    },
    {
      name: 'RTF Only',
      context: {
        rtf: '<p>Fugiat irure reprehenderit elit magna occaecat dolore ut laborum tempor consequat minim exercitation `Lorem `dolor.</p>',
      }
    },
  ],
};
