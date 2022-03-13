import { src, dest } from "gulp";
import { paths } from "../config/paths";
import plumber from "gulp-plumber";

export const getImages = () => {
  return src(paths.src.imageEntries)
    .pipe(plumber())
    .pipe(dest(paths.dist.imagesDistDir));
};
