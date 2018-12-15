// gulpfile.js

/* Packages: */
var gulp = require('gulp'),
	sass = require('gulp-sass');

// SCSS -> CSS
var css_compile = (done) => {
	gulp.src('assets/css/style.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(gulp.dest('assets/css'));
	done();
};

/* Gulp Tasks: */

gulp.task('css:compile', css_compile);

gulp.task('css:watch', () => {
	return gulp.watch('assets/css/**/*.scss', css_compile);
});

// call this one
gulp.task('css', gulp.series('css:compile', 'css:watch'));