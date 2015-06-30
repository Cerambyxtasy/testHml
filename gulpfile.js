var gulp = require('gulp'),
    bower = require('gulp-bower'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;
 
var config = {
     bowerDir: './bower_components',
	 cssDir : 'public_html/css'
}
 
gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(config.bowerDir))
});

gulp.task('watch', function() {
  return gulp.src('public_html/sass/*.scss')
    .pipe(watch('public_html/sass/*.scss'))
    .pipe(sass())
    .pipe(gulp.dest(config.cssDir))
	.pipe(reload({stream: true}));
});
 
gulp.task('default', ['bower','watch']);