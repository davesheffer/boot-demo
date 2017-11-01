var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    autoprefixer = require('autoprefixer');

gulp.task('default', function () {
    console.log("gulpidoo");
});

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/style.css')
        .pipe(postcss([cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/assets/temp/styles'));
});
gulp.task('watch', function () {
    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('styles');
    });

});
