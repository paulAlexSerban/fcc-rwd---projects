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
import { getImages } from "./tasks/getAssets";
import { deployProject } from "./tasks/deployProject";
import { cleanDevFiles } from "./tasks/cleanDev";

const PROJECT = "jerryThomas";

task(`watch:${PROJECT}`, ()=> {
  watch(paths.src.jsFiles, series(jsLint, jsTranspileDev));
  watch(paths.src.scssFiles, series(cssStyleLint, cssTranspile, cssCriticalSplit, cssAsyncSplit));
  watch(paths.src.htmlFiles, series(htmlLint, htmlMinify));
  watch(paths.src.compiledProject, { depth: 3 }, deployProject);
})

// Lifecycles
task(
  `build:static:${PROJECT}`,
  series(
    parallel(htmlLint, cssStyleLint, jsLint),
    parallel(cssTranspile, jsTranspileDev),
    parallel(cssCriticalSplit, cssAsyncSplit),
    htmlMinify,
    parallel(getImages),
    deployProject
  )
);

task(
  `build:static:production:${PROJECT}`,
  series(
    parallel(htmlLint, cssStyleLint, jsLint),
    parallel(cssTranspile, jsTranspileProd),
    parallel(cssCriticalSplit, cssAsyncSplit),
    parallel(htmlMinify, cssCleanMinify),
    parallel(getImages, cleanDevFiles),
    deployProject
  )
);
