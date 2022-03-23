import { src, dest } from "gulp";
import plumber from "gulp-plumber";
import size from 'gulp-size';

const imagesEntries = "../assets/images/renditions/*";
const imagesDistDir = "../core/dist/app/assets/images";

export const loadImages = () => {
  return src(imagesEntries)
    .pipe(plumber())
    .pipe(size({
      title: 'DEPLOYED : ',
      showFiles: true,
      showTotal: true
    }))
    .pipe(dest(imagesDistDir));
};