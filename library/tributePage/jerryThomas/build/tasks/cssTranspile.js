import { src, dest } from "gulp";
import { paths } from "../config/paths";
import dartSass from "dart-sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import { dirname } from "path";
import debug from "gulp-debug";
import plumber from "gulp-plumber";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import stripComments from "gulp-strip-css-comments";

const sass = gulpSass(dartSass);
const plugins = [autoprefixer()];

/**
 * 1. Removes the last parent directory of the relative file path
 */

export const cssTranspile = () => {
  return src(paths.src.scssEntries)
    .pipe(plumber())

    .pipe(sass.sync().on("error", sass.logError))
    .pipe(postcss(plugins))
    .pipe(rename((file) => {
      console.log(file)
      file.dirname = dirname("/")
    })) /* 1 */
    .pipe(debug({ title: "cssTranspile : " }))
    .pipe(stripComments())
    .pipe(dest(paths.dist.cssDistTemp));
};
