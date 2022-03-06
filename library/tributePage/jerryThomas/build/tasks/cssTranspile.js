import {src, dest, lastRun} from 'gulp';
import { paths } from '../config/paths';
import dartSass from 'dart-sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import rename from "gulp-rename";
import { dirname } from "path";
import debug from 'gulp-debug';
import plumber from 'gulp-plumber';

const sass = gulpSass(dartSass);

export const cssTranspile = () => {
  return src(paths.scssEntries)
  .pipe(plumber())
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(rename((file) => {
    // this removes the last parent directory of the relative file path
    file.dirname = dirname('/');
}))
  .pipe(debug({title: 'cssTranspile : '}))
  .pipe(dest([`${paths.distDir}/styles`]))
}

/** Example to be used when splitting css per components
export const cssTranspile = () => {
  return src(paths.scssEntries, {since: lastRun(cssTranspile)})
  .pipe(plumber())
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(rename((file) => {
    // this removes the last parent directory of the relative file path
    file.dirname = dirname('/');
}))
  .pipe(debug({title: 'cssTranspile : '}))
  .pipe(dest([`${paths.distDir}/styles`]))
}
 */