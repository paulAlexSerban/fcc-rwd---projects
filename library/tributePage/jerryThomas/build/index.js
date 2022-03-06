import { task, parallel, series, watch } from "gulp";
import { htmlLint } from "./tasks/htmlLint";
import { htmlMinify } from "./tasks/htmlMinify";
import { cssTranspile } from "./tasks/cssTranspile";
import { cssStyleLint } from "./tasks/cssStyleLint";
import { cssMinify } from "./tasks/cssMinify";
import { jsLint } from "./tasks/jsLint";
import { jsTranspile } from "./tasks/jsTranspile";
import { paths } from './config/paths';

const project = "tribute-page--jerry-thomas";

// html
task(`html-parse:${project}`, series(htmlLint, htmlMinify))

// css
task(`compile-css:${project}`, series(cssStyleLint, cssTranspile));
task(`minify-css:${project}`, series(cssMinify))

// js
task(`compile-js:${project}`, series(jsLint, jsTranspile))

// theme
task(`compile-theme:${project}`, parallel(`compile-css:${project}`));

task(`minify-theme:${project}`, parallel(`minify-css:${project}`));

// stage tasks
task("develop-compile", series(
    parallel(
      `html-parse:${project}`,
      `compile-theme:${project}`,
      `compile-js:${project}`
      )));

task("production-compile", series(
  `compile-theme:${project}`,
  `minify-theme:${project}`
  ))

task("watch", ()=> {
  watch(paths.jsEntries, series(jsLint, jsTranspile));
  watch(paths.css, series(cssStyleLint, cssTranspile));
  watch(paths.html, series(htmlLint, htmlMinify));
})