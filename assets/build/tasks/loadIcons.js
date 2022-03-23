import { src, dest } from "gulp";
import plumber from "gulp-plumber";
import size from 'gulp-size';

const iconEntries = "../assets/icons/*";
const iconDistDir = "../core/dist/app/assets/icons";

export const loadIcons = () => {
  return src(iconEntries)
    .pipe(plumber())
    .pipe(size({
      title: 'DEPLOYED : ',
      showFiles: true,
      showTotal: true
    }))
    .pipe(dest(iconDistDir));
};