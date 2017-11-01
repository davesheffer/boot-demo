var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function() {
    console.log("gulpidoo");
          });

gulp.task ('html', function(){
    
    console.log("fucking awsome htnl");
});
gulp.task ('styles', function(){
    
    console.log("SASS POST CSS RUNNING");
});
gulp.task ('watch', function(){
    
  watch('./app/index.html', function(){
     gulp.start('html'); 
  });
     watch('./app/assets/styles/**/*.css', function(){
     gulp.start('styles'); 
  });
    
});