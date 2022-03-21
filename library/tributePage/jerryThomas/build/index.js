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
import { getImages, getIcons } from "./tasks/getAssets";
import { deployProject } from "./tasks/deployProject";
import { cleanDist } from "./tasks/cleanDist";
import { concatCritical } from "./tasks/concatCritical";

const PROJECT = "jerryThomas";

task(`watch:${PROJECT}`, ()=> {
  watch(paths.src.jsFiles, series(jsLint, jsTranspileDev));
  watch([paths.src.scssFiles,
  `source/frontend/scss/*/*/*/*.scss`,
  `source/frontend/scss/*/*/*/*/*.scss`,
  `source/frontend/scss/*/*/*/*/*/*.scss`], series(cssStyleLint, cssTranspile, cssCriticalSplit, cssAsyncSplit, concatCritical));
  watch(paths.src.htmlFiles, series(htmlLint, htmlMinify));
  watch(paths.src.compiledProject, { depth: 3 }, deployProject);
})

// Lifecycles
task(
  `build:static:${PROJECT}`,
  series(
    cleanDist,
    parallel(htmlLint, cssStyleLint, jsLint),
    parallel(cssTranspile, jsTranspileDev),
    parallel(cssCriticalSplit, cssAsyncSplit),
    parallel(htmlMinify, concatCritical),
    parallel(getImages, getIcons),
    deployProject
  )
);

task(
  `build:static:production:${PROJECT}`,
  series(
    cleanDist,
    parallel(htmlLint, cssStyleLint, jsLint),
    parallel(cssTranspile, jsTranspileProd),
    parallel(cssCriticalSplit, cssAsyncSplit),
    concatCritical,
    parallel(htmlMinify, cssCleanMinify),
    parallel(getImages, getIcons),
    deployProject
  )
);
