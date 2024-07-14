import gulp from "gulp";
import gulpSass from "gulp-sass";
import * as dartSass from "sass";
import { deleteAsync } from "del";

const sass = gulpSass(dartSass);

const paths = {
  html: "./src/index.html",
  sass: "./src/sass/**/*.scss",
  js: "./src/js/**/*.js",
  audio: "./src/audio/**/*",
};

const outputDir = "./dist";

function buildSass() {
  const sassOptions = { outputStyle: "compressed" };

  return gulp
    .src(paths.sass)
    .pipe(sass(sassOptions).on("error", sass.logError))
    .pipe(gulp.dest(outputDir + "/css"));
}

function html() {
  return gulp.src(paths.html).pipe(gulp.dest(outputDir));
}

function js() {
  return gulp.src(paths.js).pipe(gulp.dest(outputDir + "/js"));
}

function audio() {
  return gulp.src(paths.audio).pipe(gulp.dest(outputDir + "/audio"));
}

export const buildStatic = gulp.parallel(html, js, audio);

function watchSass() {
  return gulp.watch(paths.sass, buildSass);
}

function watchStatic() {
  return gulp.watch([paths.html, paths.js], buildStatic);
}

export const watch = gulp.parallel(watchSass, watchStatic);

export function clean() {
  return deleteAsync("dist/");
}

export default gulp.parallel(buildSass, buildStatic);
