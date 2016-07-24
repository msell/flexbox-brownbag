var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('opn'),
    autoprefixer = require('gulp-autoprefixer');;

gulp.task('connect', function () {
    connect.server({
        root: 'build',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('src/index.html')
    .pipe(gulp.dest('build'));

    gulp.src('./build/index.html')
        .pipe(connect.reload());
});

gulp.task('styles', function(){
    gulp.src('src/style.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});

gulp.task('watch', function () {
    gulp.watch(['./src/*.*'], ['html']);
    open('http://localhost:8080');
});

gulp.task('default', ['html', 'styles', 'connect', 'watch']);