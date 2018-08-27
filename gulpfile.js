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
const src = 'src/';
const dest = 'assets/';

const srcPaths = {
  styles: `${src}_css/**/*.scss`,
  scripts: `${src}_js/**/*.js`,
  assets: [
    `${src}_assets/**/*`,
    'node_modules/coop-frontend-toolkit/static/**/*',
  ],
  html: `${src}**/*.html`,
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
 * Lint tasks
 */
gulp.task('lintjs', () => {
  gulp.src(srcPaths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('lintscss', () => {
  gulp.src(srcPaths.styles)
    .pipe(scsslint());
});


/**
 * Build tasks
 */

// Styles
gulp.task('css', ['lintscss'], () => {
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
gulp.task('js', ['lintjs'], () => {
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
  gulp.watch(srcPaths.styles, ['lintscss', 'css']);
  gulp.watch(srcPaths.scripts, ['lintjs', 'js']);
  gulp.watch(srcPaths.assets, ['assets']);
  gulp.watch([srcPaths.html, `${src}_config.yml`], ['html']);
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
