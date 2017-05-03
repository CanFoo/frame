var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('browserSync-task', function () {
	browserSync({
		server: {
			baseDir: 'app'
		}
	})
});

gulp.task('sass-task', function () {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

//第二个参数['browserSync-task', 'sass-task']表示在watch任务之前告知Gulp，
//先把browserSync和Sass任务执行了
gulp.task('watch', ['browserSync-task', 'sass-task'], function () {
	gulp.watch('app/scss/**/*.scss', ['sass-task']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
})

