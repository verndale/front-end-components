module.exports = {
  title: 'C-FMT-13: Full Viewport 2 Column Row',
  status: 'ready',
  context: {
    name: 'Default',
    heading: 'Other Brands You’ll Enjoy',
    introText: 'But wait there’s more!',
    contentCard: true
  },
  variants: [
    {
      name: 'Content Card',
      context: {
        heading: 'Other Brands You’ll Enjoy',
        introText: 'But wait there’s more!',
        contentCard: true
      }
    },
    {
      name: 'Link List Card',
      context: {
        heading: 'Other Brands You’ll Enjoy',
        introText: 'But wait there’s more!',
        linkListCard: true,
        contentCard: false
      }
    },
    {
      name: 'Related Content Card',
      context: {
        heading: 'Other Brands You’ll Enjoy',
        introText: 'But wait there’s more!',
        relatedContentCard: true,
        contentCard: false
      }
    }
  ]
}
