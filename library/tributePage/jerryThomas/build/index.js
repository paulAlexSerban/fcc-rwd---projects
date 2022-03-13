import { task, parallel, series, watch } from "gulp";
import { htmlMinify } from "./tasks/htmlMinify";
import { cssTranspile } from "./tasks/cssTranspile";
import { cssCleanMinify } from "./tasks/cssCleanMinify";
import { jsTranspileDev, jsTranspileProd } from "./tasks/jsTranspile";
import { cssCriticalSplit, cssAsyncSplit } from "./tasks/cssCriticalSplit";
import { htmlLint } from "./tasks/htmlLint";
import { cssStyleLint } from "./tasks/cssStyleLint";
import { jsLint } from "./tasks/jsLint";
import { paths } from "./config/paths"

const PROJECT = "jerryThomas";

task(`watch:${PROJECT}`, ()=> {
  watch(paths.src.jsFiles, series(jsLint, jsTranspileDev));
  watch(paths.src.scssFiles, series(cssStyleLint, cssTranspile, cssCriticalSplit, cssAsyncSplit));
  watch(paths.src.htmlFiles, series(htmlLint, htmlMinify));
})

// Lifecycles
task(
  `build:static:${PROJECT}`,
  series(
    parallel(htmlLint, cssStyleLint, jsLint),
    parallel(cssTranspile, jsTranspileDev),
    parallel(cssCriticalSplit, cssAsyncSplit),
    htmlMinify
  )
);

task(
  `build:static:production:${PROJECT}`,
  series(
    parallel(htmlLint, cssStyleLint, jsLint),
    parallel(cssTranspile, jsTranspileProd),
    parallel(cssCriticalSplit, cssAsyncSplit),
    parallel(htmlMinify, cssCleanMinify)
  )
);
