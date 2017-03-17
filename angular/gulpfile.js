var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');
//压缩JS
gulp.task('minify', function() {
    gulp.src('./js/*.js')
        .pipe(rename({suffix: '.min'}))  //rename压缩后的文件名 让main.js变成main.min.js
        .pipe(uglify())                  //执行压缩
        .pipe(gulp.dest('./build'))
});
// //压缩CSS
// gulp.task('minifycss', function() {
//     return gulp.src('./src/css/*.css')  //压缩的文件
//         .pipe(gulp.dest('./build/css')) //输出文件夹
//         .pipe(minifycss());
// });
//执行压缩前，先删除文件夹里的内容
//执行删除的时候不要把目录定在build的子目录中，windows删除目录的同时会报错
gulp.task('clean', function(cb) {
    del(['build/css', 'build/js'], cb)
});
//在任务数组中放上面要执行的任务
gulp.task('default', ['clean', 'minify']);
