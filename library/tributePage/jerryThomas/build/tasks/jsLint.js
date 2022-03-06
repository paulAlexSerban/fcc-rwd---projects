import { src, lastRun } from 'gulp';
import eslint from 'gulp-eslint';
import { paths } from '../config/paths';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';

// JavaScript Linting
const jsLint = () => {
  return src(paths.js, { since: lastRun(jsLint) })
  .pipe(plumber())
  .pipe(eslint())
  .pipe(debug({title: 'jsLint : '}))
  .pipe(eslint.results(results => {
    // Called once for all ESLint results.
      console.log(`Total Results: ${results.length}`);
      console.log(`Total Warnings: ${results.warningCount}`);
      console.log(`Total Errors: ${results.errorCount}`);
  }))
  .pipe(eslint.format());
};

exports.jsLint = jsLint;