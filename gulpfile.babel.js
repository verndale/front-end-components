import gulp from 'gulp';
import { log, colors, PluginError } from 'gulp-util';
import mergeStream from 'merge-stream';
import babel from 'gulp-babel';
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

function copy() {
  const theme = gulp
    .src('./src/components/_theme.scss')
    .pipe(gulp.dest('./lib'));

  const styles = gulp
    .src([
      './src/components/**/**.scss',
      '!./src/components/preview.scss'
    ])
    .pipe(gulp.dest('./lib/'));

  return mergeStream(theme, styles);
}

function babelfy() {
  return gulp.src([
    './src/components/**/*.js',
    "!./src/components/**/*.config.js",
    "!./src/components/preview.js"
  ])
    .pipe(babel(
      {
        configFile: './.babelrc'
      }
    ))
    .pipe(gulp.dest('./lib'));
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
gulp.task('copy', copy);
gulp.task('babel', babelfy);
