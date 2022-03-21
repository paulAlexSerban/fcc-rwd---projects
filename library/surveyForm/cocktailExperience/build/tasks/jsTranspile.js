import {src, dest, lastRun } from 'gulp';
import gulpWebpack from 'webpack-stream';
import webpack from 'webpack';
import named from 'vinyl-named';
import { webpackDevConfig } from '../config/webpack.dev';
import { webpackProdConfig } from '../config/webpack.prod';
import { paths } from '../config/paths';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';

export const jsTranspileDev = () => {
  return src(paths.src.jsEntries, { since: lastRun(jsTranspileDev) })
    .pipe(debug({title: 'jsTranspile :'}))
    .pipe(plumber())
    .pipe(named())
    .pipe(gulpWebpack( webpackDevConfig, webpack))
    .pipe(dest(paths.dist.jsDistDir))
}

export const jsTranspileProd = () => {
  return src(paths.src.jsEntries)
    .pipe(debug({title: 'jsTranspile :'}))
    .pipe(plumber())
    .pipe(named())
    .pipe(gulpWebpack( webpackProdConfig, webpack))
    .pipe(dest(paths.dist.jsDistDir))
}