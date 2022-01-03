module.exports = {
  title: 'C-FMT-11: Full Width Video Row',
  status: 'ready',
  default: 'Full',
  context: {
    heading: ' Take the virtual tour',
    videoId: 'DSLgAsrcpGQ',
    videoPlayer: 'youtube',
    background: true,
    image: {
      srcset: {
        767: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=767&h=430',
        1279: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=1280&h=717'
      },
      src: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=790&h=444',
      description: 'Image Description'
    },
    autoplay: false,
    caption:
      'Video Description. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
  },
  variants: [
    {
      name: 'No Caption',
      context: {
        heading: ' Take the virtual tour',
        videoId: 'DSLgAsrcpGQ',
        videoPlayer: 'youtube',
        background: true,
        image: {
          srcset: {
            767: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=767&h=430',
            1279: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=1280&h=717'
          },
          src: 'https://verndale-image-tools.herokuapp.com/random/mountains?seed=1&w=790&h=444',
          description: 'Image Description'
        },
        autoplay: false,
        caption: null
      }
    }
  ]
}
