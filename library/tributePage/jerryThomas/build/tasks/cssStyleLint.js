import { src, lastRun } from 'gulp';
import gulpStylelint from 'gulp-stylelint';
import { paths } from '../config/paths';
import debug from 'gulp-debug';

export const cssStyleLint = () => {
  return src(paths.css, { since: lastRun(cssStyleLint) })
  .pipe(debug({title: 'cssStyleLint : '}))
  .pipe(gulpStylelint({
    reporters: [
      {formatter: 'string', console: true}
    ]
  }))
}