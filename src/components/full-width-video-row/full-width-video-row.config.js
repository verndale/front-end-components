module.exports = {
  title: 'Full Width Video Row',
  status: 'ready',
  default: 'Full',
  context: {
    heading: ' Take the virtual tour',
    image: 'https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1440&w=2560',
    videoId: 'Sn7l3UDPV0M',
    caption: 'Video Description. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
  },
  variants: [
      {
        name: 'No Caption',
        context: {
          heading: ' Take the virtual tour',
          image: 'https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1440&w=2560',
          videoId: 'Sn7l3UDPV0M',
          caption: null
        }
      }
  ]
}
