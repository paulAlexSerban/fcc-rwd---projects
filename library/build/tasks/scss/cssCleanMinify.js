import { src, dest, lastRun } from "gulp";
import minifyCSS from "gulp-clean-css";
import { paths } from "../../config/paths";
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import log from "fancy-log";
// import debug from "gulp-debug";
import size from 'gulp-size';

export const cssCleanMinify = () => {
  return src(paths.src.css.rawCssEntries, { since: lastRun(cssCleanMinify) })
    .pipe(plumber())
    // .pipe(debug({ title: "cssCleanMinify :" }))
    .pipe(
      minifyCSS({ 
        debug: true
      }, (details) => {
        // const originalSize = (details.stats.originalSize / 1024).toFixed(2);
        // const minifiedSize = (details.stats.minifiedSize / 1024).toFixed(2);
        // log.info(`${details.name} - ${originalSize} Kb to ${minifiedSize} Kb`);
      })
    )
    .pipe(
      rename((file) => {
        const themeDir = file.dirname.split('/')[0];
        const projectDir = file.dirname.split('/')[1];
        file.basename = `${file.basename}.min`;
        file.dirname = `${themeDir}/${projectDir}/styles`;
      })
    )
    .pipe(size({
      title: 'DEPLOYED : ',
      showFiles: true,
      showTotal: true
    }))
    .pipe(dest(`${paths.dist.distDir}`));
};
