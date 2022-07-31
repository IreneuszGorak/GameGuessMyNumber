const rename = require('gulp-rename');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

gulp.task('sass', () => {
  return gulp
    .src('./sass/main.scss')
    .pipe(rename('style.css'))
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});
