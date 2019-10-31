
import gulp, { series, parallel } from 'gulp';
import sass from 'gulp-sass';
import nodeSass from 'node-sass';
import rename from 'gulp-rename';

sass.compiler = nodeSass;

export function compileSass() {
  return gulp.src('./miniprogram/**/**/*.scss')
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ extname: '.wxss' }))
    .pipe(gulp.dest('./miniprogram/', { overwrite: true }))
}

export default compileSass;