import gulp from 'gulp';
import { log, colors, PluginError } from 'gulp-util';
import fractal from './fractal.config';
import webpack from 'webpack';
import webpackConfig from './webpack.config.babel';

const logger = fractal.cli.console;

//fractal
function fractalStart(cb){
  log(
    colors.green.bold(`
--------------------------------------------------------------
Fractal start
--------------------------------------------------------------`)
  );

  const server = fractal.web.server({
    sync: true
  });

  server.on('error', err => logger.error(err.message));

  return server.start().then(() => {
    logger.success(`Fractal server is now running at ${server.urls.sync.local}`);

    cb();
  });
}

//js/webpack
function js(cb){
  log(
    colors.green.bold(`
--------------------------------------------------------------
Webpack
--------------------------------------------------------------`)
  );

  webpack(webpackConfig(), (err, stats) => {
    if (err){
      throw new PluginError('webpack:build', err);
    }

    log('webpack', stats.toString({
      colors: true
    }));

    cb();
  });
}

//watch
function watch(cb) {
  const watchOptions = {
    cwd: './',
    awaitWriteFinish: true
  };

  log(
    colors.green.bold(`
--------------------------------------------------------------
Watch
--------------------------------------------------------------`)
  );

  //js
  gulp.watch([
    'src/components/**/*.js',
    '!src/components/**/*.config.js'
  ], watchOptions, js);

  cb();
}

//tasks
let tasks = gulp.series(
  js,
  fractalStart,
  watch
);

//default task
gulp.task('default', tasks);
