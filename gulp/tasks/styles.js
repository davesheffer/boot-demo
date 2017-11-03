var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    autoprefixer = require('autoprefixer'); 

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/style.css')
        .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
        .on('error', function(errorinfo) {
        console.log(errorinfo.toString());
            this.emit('end')
            })
        .pipe(gulp.dest('./app/temp/styles'));
});
