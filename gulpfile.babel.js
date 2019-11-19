
import gulp, { series, parallel } from 'gulp';
import sass from 'gulp-sass';
import nodeSass from 'node-sass';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';

import sourcemaps from 'gulp-sourcemaps';
import ts from 'gulp-typescript';
import babel from 'gulp-babel';
import deleteFile from 'del';

sass.compiler = nodeSass;

const tsProject = ts.createProject('./tsconfig.json');

export function compileSass() {
    return gulp.src('./miniprogram/**/**/*.scss')
        // .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(rename({ extname: '.wxss' }))
        .pipe(gulp.dest('./dist', { overwrite: true }))
}

export function compileTS() {
    return gulp.src('./miniprogram/**/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist', { overwrite: true }))

}

export default parallel(compileTS, compileSass);
// export default compileTS;


export function removeFile() {
    return deleteFile([
        './miniprogram/**/**/*.css.wxss',
        './miniprogram/**/**/*.js',
        './miniprogram/**/**/*.js.map',
        './miniprogram/**/**/*.wxss',
        './miniprogram/**/**/*.wxss.map',
    ]);
}
