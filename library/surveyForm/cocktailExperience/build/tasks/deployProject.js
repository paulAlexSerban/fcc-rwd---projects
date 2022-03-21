import { src, dest, lastRun } from "gulp";
import { paths } from "../config/paths";
import plumber from "gulp-plumber";
import size from 'gulp-size';

export const deployProject = () => {
  return src(paths.src.compiledProject, { since: lastRun(deployProject) })
    .pipe(plumber())
    .pipe(size({
      title: 'DEPLOYED : ',
      showFiles: true,
      showTotal: true
    }))
    .pipe(dest(paths.core));
};