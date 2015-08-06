var gulp = require('gulp');
var rename = require("gulp-rename");
var babel = require('gulp-babel');

gulp.task('default', function () {
    return gulp.src('javascript/app.js')
    	.pipe(babel())
    	.pipe(rename('script.js'))
        .pipe(gulp.dest('javascript/'));
});

gulp.task('watch', function() {
	gulp.watch('javascript/*.js', ['default'])
});