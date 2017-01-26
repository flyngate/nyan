'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

const paths = {
    html: './src/index.html',
    sass: './src/sass/**/*.scss',
    js: './src/js/**/*.js',
    audio: './src/audio/**/*'
};
const outputDir = './dist';

gulp.task('default', ['build']);

gulp.task('build', ['sass', 'static']);

gulp.task('watch', ['build'], () => {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch([paths.html, paths.js], ['static']);
});

gulp.task('sass', () => {
    const sassOptions = { outputStyle: 'compressed' };
    return gulp.src(paths.sass)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(gulp.dest(outputDir + '/css'));
});

gulp.task('static', () => {
    gulp.src(paths.html).pipe(gulp.dest(outputDir));
    gulp.src(paths.js).pipe(gulp.dest(outputDir + '/js'));
    gulp.src(paths.audio).pipe(gulp.dest(outputDir + '/audio'));
});

gulp.task('clean', () => {
    return del('dist/**/*');
});
