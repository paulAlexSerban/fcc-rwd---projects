import gulp from 'gulp';
import minifyCSS from 'gulp-clean-css';
import { paths} from '../config/paths';

export const cssMinify = () => {
  return gulp.src(`${paths.distDir}/styles/*.css`)
  .pipe(minifyCSS({debug: true}, (details) => {
    const originalSize = (details.stats.originalSize / 1024).toFixed(2);
    const minifiedSize = (details.stats.minifiedSize / 1024).toFixed(2);
    console.log(`${details.name} - Minified from: ${originalSize} Kb to ${minifiedSize} Kb`);
  }))
  .pipe(gulp.dest(`${paths.distDir}/min/styles`));
}