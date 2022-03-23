import {src, dest, lastRun } from 'gulp';
import gulpWebpack from 'webpack-stream';
import webpack from 'webpack';
import { webpackDevConfig } from '../../config/webpack.dev';
import { webpackProdConfig } from '../../config/webpack.prod';
import { paths } from '../../config/paths';
import plumber from 'gulp-plumber';
import rename from "gulp-rename";
import through from 'through';
import path from "path";
import size from 'gulp-size';
// import debug from 'gulp-debug';

export const jsTranspileProd = () => {
  return src(paths.src.js.jsEntries, { since: lastRun(jsTranspileProd) })
    // .pipe(debug({title: 'jsTranspile :'}))
    .pipe(plumber())
    .pipe(through(function(file) {
      const relative = path.relative('.', file.path);
      file.named = relative;
      this.queue(file);
    }))
    .pipe(gulpWebpack( webpackProdConfig, webpack))
    .pipe(rename((file) => {
      const themeDir = file.dirname.split('/')[0];
      const projectDir = file.dirname.split('/')[1];
      file.dirname = `${themeDir}/${projectDir}/javascript`;
      const filename = file.basename.split('.');
      filename.pop();
      file.basename =filename.join('.');
    }))
    .pipe(size({
      title: 'DEPLOYED : ',
      showFiles: true,
      showTotal: true
    }))
    .pipe(dest(paths.dist.distDir));
};
