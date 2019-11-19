
import gulp, { series, parallel } from 'gulp';
import sass from 'gulp-sass';
import nodeSass from 'node-sass';
import autoprefixer from 'gulp-autoprefixer';

import sourcemaps from 'gulp-sourcemaps';
import ts from 'gulp-typescript';
import babel from 'gulp-babel';

import renameFile from 'gulp-rename';
import deleteFile from 'del';

sass.compiler = nodeSass;

const tsProject = ts.createProject('./tsconfig.json');

export function compileSass() {
    return gulp.src('./miniprogram/**/**/*.scss')
        .pipe(sourcemaps.init())
        // .pipe(sass.sync().on('error', sass.logError))
        .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(renameFile((path) => {
            if (path.extname === '.css') {
                path.extname = '.wxss';
            }
        }))
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

/** 删除源文件中生成的目标文件*/
export function removeExtraFilesInSource() {
    return deleteFile([
        './miniprogram/**/**/*.css.wxss',
        './miniprogram/**/**/*.js',
        './miniprogram/**/**/*.js.map',
        './miniprogram/**/**/*.wxss',
        './miniprogram/**/**/*.wxss.map',
    ]);
}
/** 删除dist目录*/
export function removeDist() {
    return deleteFile([
        './dist',
    ]);
}
/** 复制源文件到目标路径*/
export function copyFiles() {
    return gulp.src([
        './miniprogram/**/**/*.json',
        './miniprogram/**/**/*.wxml',
        './miniprogram/**/**/*.png',
    ])
        // .pipe(copyFile('.'))
        .pipe(gulp.dest('./dist', { overwrite: true }))
}

const coreTask = parallel(copyFiles, compileTS, compileSass);

export default series(removeDist, coreTask);
