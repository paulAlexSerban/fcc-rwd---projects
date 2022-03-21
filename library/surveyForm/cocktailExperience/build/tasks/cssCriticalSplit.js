import { src, dest, lastRun } from "gulp";
import { paths } from "../config/paths";
import debug from "gulp-debug";
import plumber from "gulp-plumber";
import postcss from "gulp-postcss";
import criticalSplit from "postcss-critical-split";
import rename from "gulp-rename";
import { dirname } from "path";

export const cssCriticalSplit = () => {
  return src(paths.src.cssEntries, { since: lastRun(cssCriticalSplit) })
    .pipe(plumber())
    .pipe(
      postcss([
        criticalSplit({
          startTag: "critical:start",
          endTag: "critical:end",
          output: "critical",
        }),
      ])
    )
    .pipe(
      rename((file) => {
        file.basename = `${file.basename}.critical`;
        file.dirname = dirname("/");
      })
    )
    .pipe(debug({ title: "cssCriticalSplit : " }))
    .pipe(dest(paths.dist.cssDistTemp));
};

export const cssAsyncSplit = () => {
  return src(paths.src.cssEntries, { since: lastRun(cssAsyncSplit) })
    .pipe(plumber())
    .pipe(
      postcss([
        criticalSplit({
          startTag: "critical:start",
          endTag: "critical:end",
          output: "rest",
        }),
      ])
    )
    .pipe(
      rename((file) => {
        file.basename = `${file.basename}.async`;
        file.dirname = dirname("/");
      })
    )
    .pipe(debug({ title: "cssCriticalSplit : " }))
    .pipe(dest(paths.dist.cssDistTemp));
};
