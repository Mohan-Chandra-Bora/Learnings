var gulp = require('gulp'),
  connect = require('gulp-connect'),
  open = require('gulp-open');
 
gulp.task('connect', function() {
  connect.server({
	  port: 8000
  });
});

gulp.task('fabex', function(){
  var options = {
    uri: 'http://localhost:8000/FabricPlayground.html?4.1.0',
    app: 'chrome'
  };
  gulp.src("FabricPlayground.html")
  .pipe(open(options));
});
 
gulp.task('default', ['connect', 'fabex']);