import { src, lastRun } from 'gulp';
import gulpStylelint from 'gulp-stylelint';
import { paths } from '../config/paths';
import debug from 'gulp-debug';
import plumber from 'gulp-plumber';

export const cssStyleLint = () => {
  return src(paths.src.scssFiles, { since: lastRun(cssStyleLint) })
  .pipe(plumber())
  .pipe(debug({title: 'cssStyleLint : '}))
  .pipe(gulpStylelint({
    reporters: [
      {formatter: 'string', console: true}
    ]
  }))
}