import { src, lastRun } from "gulp";
import eslint from "gulp-eslint";
import { paths } from "../config/paths";
import plumber from "gulp-plumber";
import debug from "gulp-debug";
import log from "fancy-log";

// JavaScript Linting
const jsLint = () => {
  return src(paths.src.jsFiles, { since: lastRun(jsLint) })
    .pipe(plumber())
    .pipe(eslint())
    .pipe(debug({ title: "jsLint : " }))
    .pipe(
      eslint.results((results) => {
        log.info(`Total Results: ${results.length}`);
        log.info(`Total Warnings: ${results.warningCount}`);
        log.info(`Total Errors: ${results.errorCount}`);
      })
    )
    .pipe(eslint.format());
};

exports.jsLint = jsLint;
