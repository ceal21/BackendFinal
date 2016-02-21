var gulp = require('gulp'),
	jade = require('gulp-jade'),
	browserify = require('gulp-browserify'),
	sass = require('gulp-sass');

gulp.task('jade',function(){
	return gulp.src('node_modules/src/templates/**/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('builds/development/views'));
});

gulp.task('js',function(){
	return gulp.src('node_modules/src/js/**/*.js')
	.pipe(browserify({ debug:true }))
	.pipe(gulp.dest('builds/development/js'));
});

//El módulo sass no es permitido por github por no contener archivos con nombres demasiado largos.
gulp.task('sass',function(){
	return gulp.src('node_modules/src/sass/main.scss')
	.pipe(sass({ sourceComments: 'map' }))
	.pipe(gulp.dest('builds/development/css'));
});