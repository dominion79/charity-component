const gulp = require('gulp');
const scsslint = require('gulp-scss-lint');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const connect = require('gulp-connect');
const concat = require('gulp-concat');
const include = require('gulp-include');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const uglify = require('gulp-uglify');
const mocha = require('gulp-mocha');


/**
 * Settings
 */
const src = 'assets/';
const dest = 'assets/build/';

const srcPaths = {
  styles: `${src}sass/**/*.scss`,
  scripts: `${src}javascript/**/*.js`,
  assets: [
    'node_modules/coop-frontend-toolkit/static/**/*',
  ],
};

const destPaths = {
  styles: `${dest}stylesheets`,
  scripts: `${dest}javascript`,
  assets: `${dest}`,
};

const settings = {
  sass: {
    outputStyle: 'compressed',
    includePaths: [
      'node_modules/coop-frontend-toolkit/styles/',
      `${src}src/css`,
    ],
  },
  autoprefixer: {
    browsers: ['> 5%', 'last 2 versions'],
  },
};



/**
 * Build tasks
 */

// Styles
gulp.task('css', () => {
  gulp.src(srcPaths.styles)
    .pipe(sourcemaps.init())
    .pipe(sass(settings.sass))
    .on('error', sass.logError)
    .pipe(autoprefixer(settings.autoprefixer))
    .pipe(sourcemaps.write('maps/'))
    .pipe(gulp.dest(destPaths.styles))
    .pipe(connect.reload());
});

// Scripts
gulp.task('js', () => {
  gulp.src(srcPaths.scripts)
    .pipe(sourcemaps.init())
    .pipe(include())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('maps/'))
    .pipe(gulp.dest(destPaths.scripts))
    .pipe(connect.reload());
});

// Static assets
gulp.task('assets', () => {
  gulp.src(srcPaths.assets)
    .pipe(gulp.dest(destPaths.assets))
    .pipe(connect.reload());
});


/**
 * Tests
 */
gulp.task('testjs', () => {
  gulp.src('test.js')
    .pipe(mocha());
});


/**
 * Watch tasks
 */
gulp.task('watch', () => {
  gulp.watch(srcPaths.styles, ['css']);
  gulp.watch(srcPaths.scripts, ['js']);
  gulp.watch(srcPaths.assets, ['assets']);
});


/**
 * Local server
 */
gulp.task('connect', () => {
  connect.server({
    port: 9000,
    root: 'build',
    livereload: true,
    middleware() {
      return [
        function (req, res, next) {
          // treat POST request like GET during dev
          req.method = 'GET';
          return next();
        },
      ];
    },
  });
});

/**
 * Run tasks
 */
gulp.task('test', ['testjs']);
gulp.task('build', ['css', 'js', 'assets']);
gulp.task('server', ['build', 'watch', 'connect']);

gulp.task('default', ['server']);
