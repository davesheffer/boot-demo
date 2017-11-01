var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function() {
    console.log("gulpidoo");
          });

gulp.task ('styles', function(){
    
    gulp.src('/app/assets/styles/style.css').pipe(gulp.dest('./app/assets/temp/styles'));
});
gulp.task ('watch', function(){
     watch('./app/assets/styles/**/*.css', function(){
     gulp.start('styles'); 
  });
    
});