module.exports = {
  title: 'Accordion component',
  status: 'wip',
  context: {
    title: 'Accordion Heading',
    description:
      'Praesent dui elit, porttitor sed vulputate id, mollis sed nibh. Morbi molestie scelerisque diam, at efficitur erat auctor vitae. Proin vehicula volutpat consequat. Donec sit amet magna sed urna egestas feugiat in et nisi. Suspendisse risus dolor, maximus sit amet pharetra sed, convallis sed orci. Nulla sit amet nisi cursus, blandit ipsum vel, feugiat nisl.',
    items: [
      {
        expanded: true,
        title: 'Accordion Tab Title',
        content:
          '<h4>Accordion Tab Heading</h4><p>Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>'
      },
      {
        title: 'Accordion Tab With Image',
        content:
          '<p>Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p><img src="https://verndale-image-tools.herokuapp.com/id/EFvP9cHipMQ?w=900&h=450" alt="Image Description">'
      },
      {
        title: 'Accordion Tab With Video',
        content:
          '<p>Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p><video controls="controls"><source src="/images/video.mp4" type="video/mp4"></video>'
      },
      {
        title: 'Accordion Tab With Buttons',
        content:
          '<p>Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p><div class="buttons-row"><a href="#" class="btn btn--primary"><svg viewBox="0 0 30 30"><use xlink:href="#file-pdf" /></svg>Document Name</a><a href="#" class="btn btn--primary"><svg viewBox="0 0 30 30"><use xlink:href="#file-pdf" /></svg>Document Name</a></div>'
      }
    ]
  }
}
