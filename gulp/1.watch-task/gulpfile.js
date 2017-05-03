var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass_task', function () {
	return gulp.src('scss/styles.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
})

gulp.task('watch', function () {
	gulp.watch('scss/styles.scss', ['sass_task']) // 检测scss/styles.scss文件，如果改变了执行sass_task任务
})