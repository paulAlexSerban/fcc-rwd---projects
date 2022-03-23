import { task, series, parallel, watch } from "gulp";
import { lintHtml } from "./tasks/html/lintHtml";
import { buildHtml } from "./tasks/html/buildHtml";
import { lintScss } from "./tasks/scss/lintScss";
import { cssTranspile } from "./tasks/scss/cssTranspile";
import { cssCriticalSplit, cssAsyncSplit } from "./tasks/scss/splitCss";
import { cssCleanMinify } from "./tasks/scss/cssCleanMinify";
import { lintJs } from "./tasks/javascript/lintJs";
import { jsTranspileProd } from "./tasks/javascript/jsTranspile";
import { paths } from "./config/paths";

task("lint:markup", lintHtml);
task("lint:styles", lintScss);
task("lint:scripts", lintJs);

task("build:markup", buildHtml);
task(
  "build:styles",
  series(cssTranspile, parallel(cssCriticalSplit, cssAsyncSplit))
);
task("build:scripts", jsTranspileProd);

task("minify:styles", cssCleanMinify);

task("lint", parallel("lint:markup", "lint:styles", "lint:scripts"));
task("build", parallel("build:markup", "build:styles", "build:scripts"));
task("minify", parallel("minify:styles"));

task("watch", () => {
  watch(paths.src.js.jsFiles, series("lint:scripts", "build:scripts"));
  watch([paths.src.css.scssFiles,
  `*/*/source/frontend/scss/*/*/*/*.scss`,
  `*/*/source/frontend/scss/*/*/*/*/*.scss`,
  `*/*/source/frontend/scss/*/*/*/*/*/*.scss`], series("lint:styles", "build:styles", "minify:styles"));
  watch(paths.src.html.htmlFiles, series("lint:markup", "build:markup"));
});

task("default", series("lint", "build", "minify"));

task(
  "deploy",
  series(
    "lint:markup",
    "lint:styles",
    "build:markup",
    "build:styles",
    "minify:styles"
  )
);
