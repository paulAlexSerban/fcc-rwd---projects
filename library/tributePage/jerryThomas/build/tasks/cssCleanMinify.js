import { src, dest, lastRun } from "gulp";
import minifyCSS from "gulp-clean-css";
import { paths } from "../config/paths";
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import log from "fancy-log";
import { dirname } from "path";
import debug from "gulp-debug";

export const cssCleanMinify = () => {
  return src(paths.src.rawCssEntries)
    .pipe(plumber())
    .pipe(debug({ title: "cssCleanMinify :" }))
    .pipe(
      minifyCSS({ 
        debug: true
      }, (details) => {
        const originalSize = (details.stats.originalSize / 1024).toFixed(2);
        const minifiedSize = (details.stats.minifiedSize / 1024).toFixed(2);
        log.info(`${details.name} - ${originalSize} Kb to ${minifiedSize} Kb`);
      })
    )
    .pipe(
      rename((file) => {
        file.dirname = dirname("/");
      })
    )
    .pipe(dest(`${paths.dist.cssDistDir}`));
};
