import { src, dest, lastRun } from "gulp";
import { paths } from "../../config/paths";
import dartSass from "dart-sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
// import debug from "gulp-debug";
import plumber from "gulp-plumber";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
// import size from 'gulp-size';

const sass = gulpSass(dartSass);
const plugins = [autoprefixer()];

/**
 * 1. Removes the last parent directory of the relative file path
 */

export const cssTranspile = () => {
  return src(paths.src.css.scssEntries, { since: lastRun(cssTranspile) })
    .pipe(plumber())
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(postcss(plugins))
    .pipe(rename((file) => {
        const themeDir = file.dirname.split('/')[0];
        const projectDir = file.dirname.split('/')[1];
        file.dirname = `${themeDir}/${projectDir}/styles/.tmp`;
    }))
    // .pipe(debug({ title: "cssTranspile : " }))
    // .pipe(size({
    //   title: 'DEPLOYED : ',
    //   showFiles: true,
    //   showTotal: true
    // }))
    .pipe(dest(paths.dist.distDir));
};
