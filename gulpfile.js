const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');

gulp.task('less', function() {
	return gulp.src('./css/*.less')
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(gulp.dest('./css'));
});

gulp.task("listener", function() {
	gulp.watch('./css/*.less', ['less']);
})