var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('sass/style.scss')
     .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest(''))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: {
            target: "http://localhost:8888/untitled/"}
    });
});

gulp.task('build', ['browser-sync', 'sass'], function () {
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('*.php', browserSync.reload);
    gulp.watch('scripts/*.js', browserSync.reload);
});

gulp.task('default', ['build']);