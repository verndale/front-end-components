const path = require('path');
const fs = require('fs');
const mandelbrot = require('@frctl/mandelbrot');
const fractal = module.exports = require('@frctl/fractal').create();
const hbsHelpers = require('./handlebars/helpers');
const partialsDirectory = './handlebars/partials';

let hbsPartials = {};

const readDirectory = () => {
   return fs.promises.readdir(path.resolve(__dirname, partialsDirectory))
    .then(files => {
      for (let i = 0; i < files.length; i++) {
        const splitNames = files[i].split('.');
        const name = splitNames[0];

        hbsPartials[name] = require(partialsDirectory + '/' + name + '.hbs')
      }
    });
};

readDirectory()
  .then(() => {
    const hbs = require('@frctl/handlebars')({
      partials: hbsPartials,
      helpers: hbsHelpers
    });

    fractal.components.engine(hbs);
  });

fractal.set('project.title', 'Verndale UI Components');
fractal.components.set('path', path.join(__dirname, 'src/components'));
fractal.components.set('default.preview', '@preview');
fractal.components.set('default.status', 'wip');
fractal.docs.set('default.status', 'draft');

const theme = mandelbrot({
  skin: 'black'
});

fractal.web.theme(theme);
fractal.web.set('builder.dest', __dirname + '/dist/fractal');
fractal.web.set('static.path', path.join(__dirname, 'public'));
fractal.docs.set('path', path.join(__dirname, 'src/docs'));
