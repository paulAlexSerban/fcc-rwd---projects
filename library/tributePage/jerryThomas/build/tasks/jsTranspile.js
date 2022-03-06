import {src, dest, lastRun} from 'gulp';
import gulpWebpack from 'webpack-stream';
import webpack from 'webpack';
import named from 'vinyl-named';
import { webpackConfig } from '../config/webpack.config';
import { paths } from '../config/paths';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';

export const jsTranspile = () => {
  return src(paths.jsEntries, { since: lastRun(jsTranspile) })
    .pipe(debug({title: 'jsTranspile :'}))
    .pipe(plumber())
    .pipe(named())
    .pipe(gulpWebpack( webpackConfig, webpack))
    .pipe(dest(`${paths.distDir}/javascript`))
}