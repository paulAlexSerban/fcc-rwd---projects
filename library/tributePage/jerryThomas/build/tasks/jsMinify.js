import {src, dest, lastRun } from 'gulp';
import terser from 'terser';
import gulpTerser from 'gulp-terser';
import { paths } from '../config/paths';

export const jsMinify = () => {
  return src(paths.src.jsDevEntries)
  .pipe(gulpTerser({
    keep_fnames: true,
    mangle: false,
    compress: {
      drop_console: true
    }
  }))
  .pipe(dest(`${paths.dist.jsDistDir}/prod`))
;
}