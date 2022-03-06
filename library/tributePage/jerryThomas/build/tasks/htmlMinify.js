import { src, dest, lastRun } from 'gulp';
import { paths } from '../config/paths';
import htmlmin from 'gulp-htmlmin';
import rename from "gulp-rename";
import { dirname } from "path";
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';
 
export const htmlMinify = () => {
  return src(paths.html, {since: lastRun(htmlMinify)})
  .pipe(plumber())
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(rename((file) => {
    // this removes the last parent directory of the relative file path
    file.dirname = dirname('/');
}))
.pipe(debug({title: 'htmlMinify : '}))
  .pipe(dest([`${paths.distDir}`]));
}