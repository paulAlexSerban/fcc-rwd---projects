import { src } from "gulp";
import gulpStylelint from "@ronilaukkarinen/gulp-stylelint";
import { paths } from "../../config/paths";
// import debug from "gulp-debug";
import plumber from "gulp-plumber";

export const lintScss = () => {
  return src(paths.src.css.scssFiles)
    .pipe(plumber())
    // .pipe(debug({ title: "lintScss : " }))
    .pipe(
      gulpStylelint({
        reporters: [{ formatter: "string", console: true }],
      })
    );
};
