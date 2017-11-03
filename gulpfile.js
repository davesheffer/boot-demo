var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    autoprefixer = require('autoprefixer'),
    mixins = require('postcss-mixins'),
    browserSync = require('browser-sync').create();
    

gulp.task('default', function () {
    console.log("gulpidoo");
});

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/style.css')
        .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});
gulp.task('watch', function () {
    
    browserSync.init({
        notify: false, 
        server: {
           baseDir: "app"
       }
    });
    
    watch('./app/index.html', function(){
      browserSync.reload();
    });
    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('cssInject');
    });

});

gulp.task('cssInject', ['styles'], function() {
   gulp.src('./app/temp/styles/style.css')
    .pipe(browserSync.stream());
    
});
