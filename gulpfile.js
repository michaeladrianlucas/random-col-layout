const gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass');

const paths = {
    sass: [
        'src/styles/app.scss'
    ]
};

gulp.task('default', ['styles', 'watch']);

gulp.task('styles', () => {
    return gulp.src(paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', () => {
    gulp.watch('./src/styles/*.scss', ['styles']);
});
