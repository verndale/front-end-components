module.exports = {
  title: 'C-FMT-9: Content Section Row',
  status: 'ready',
  hidden: true,
  context: {
    heading: 'Lorem ipsum dolor sit amet',
    subheading: 'Magna occaecat dolore',
    rtf: '<p>Fugiat irure reprehenderit elit magna occaecat dolore ut laborum tempor consequat minim exercitation `Lorem `dolor.</p>',
    buttons: '<a href="#" class="btn btn--primary">Document Name</a>'
  },
  variants: [
    {
      name: 'RTF Only',
      context: {
        rtf: '<p>Fugiat irure reprehenderit elit magna occaecat dolore ut laborum tempor consequat minim exercitation `Lorem `dolor.</p>',
        subheading: null
      }
    }
  ]
}
