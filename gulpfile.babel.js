import gulp from 'gulp';
import { log, colors, PluginError } from 'gulp-util';
import mergeStream from 'merge-stream';
import babel from 'gulp-babel';
import fractal from './fractal.config';
import webpack from 'webpack';
import webpackConfig from './webpack.config.babel';

const gulpScss = require('gulp-sass')(require('node-sass'))
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

//copy for lib build
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

//babel
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

//compile css
function scss(){
  log(
    colors.green.bold(`
--------------------------------------------------------------
Compiling SCSS
--------------------------------------------------------------`)
  );

  return gulp.src('./src/components/**/**.scss')
    .pipe(
      gulpScss({
        sourceComments: true
      }).on('error', gulpScss.logError)
    )
    .pipe(gulp.dest('./public/css'));
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
Watching...
--------------------------------------------------------------`)
  );

  //js
  gulp.watch([
    'src/components/**/*.js',
    '!src/components/**/*.config.js'
  ], watchOptions, js);

  //scss
  gulp.watch([
    './src/components/**/**.scss'
  ], watchOptions, scss);

  cb();
}


//tasks
let tasks = gulp.series(
  scss,
  js,
  fractalStart,
  watch
);

gulp.task('default', tasks);
gulp.task('copy', copy);
gulp.task('babel', babelfy);
