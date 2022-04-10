import { src, lastRun } from "gulp";
import eslint from "gulp-eslint";
import { paths } from "../../../../../fcc-rwd---projects/library/build/config/paths";
import plumber from "gulp-plumber";
// import debug from "gulp-debug";
import log from "fancy-log";

// JavaScript Linting
export const lintJs = () => {
  return src(paths.src.js.jsFiles, { since: lastRun(lintJs) })
    .pipe(plumber())
    .pipe(eslint())
    // .pipe(debug({ title: "lintJs : " }))
    .pipe(
      eslint.results((results) => {
        log.info(`Total Results: ${results.length}`);
        log.info(`Total Warnings: ${results.warningCount}`);
        log.info(`Total Errors: ${results.errorCount}`);
      })
    )
    .pipe(eslint.format());
};
