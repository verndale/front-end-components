module.exports = {
  title: 'C-FMT-1: Accordions Module',
  status: 'ready',
  context: {
    title: 'Accordion Heading',
    description:
      'Praesent dui elit, porttitor sed vulputate id, mollis sed nibh. Morbi molestie scelerisque diam, at efficitur erat auctor vitae. Proin vehicula volutpat consequat. Donec sit amet magna sed urna egestas feugiat in et nisi. Suspendisse risus dolor, maximus sit amet pharetra sed, convallis sed orci. Nulla sit amet nisi cursus, blandit ipsum vel, feugiat nisl.',
    items: [
      {
        expanded: true,
        title: 'Accordion Tab Title',
        content:
          '<h4>Putting you at the center of it all</h4><p>Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>'
      },
      {
        title: 'Accordion Tab With Image',
        content:
          '<p>Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p><img src="https://verndale-image-tools.herokuapp.com/id/EFvP9cHipMQ?w=900&h=450" alt="Image Description">'
      },
      {
        title: 'Accordion Tab With Video',
        content:
          '<p>Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>',
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
        autoplay: false
      },
      {
        title: 'Accordion Tab With Buttons',
        content:
          '<p>Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>',
        buttons:
          '<a href="#" class="btn btn--primary">Document Name</a><a href="#" class="btn btn--primary">Document Name</a>'
      },
      {
        title: 'Accordion Tab With Image and Paragraph',
        content:
          '<p>Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p><img src="https://verndale-image-tools.herokuapp.com/id/EFvP9cHipMQ?w=900&h=450" alt="Image Description"><p>Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>',
        buttons:
          '<a href="#" class="btn btn--primary">Document Name</a><a href="#" class="btn btn--primary">Document Name</a>'
      },
      {
        title: 'Accordion Tab With Video, Paragraph and buttons',
        content:
          '<p>Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p><img src="https://verndale-image-tools.herokuapp.com/id/EFvP9cHipMQ?w=900&h=450" alt="Image Description"><p>Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>',
        buttons:
          '<a href="#" class="btn btn--primary">Document Name</a><a href="#" class="btn btn--primary">Document Name</a>',
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
        autoplay: false
      }
    ]
  }
}
