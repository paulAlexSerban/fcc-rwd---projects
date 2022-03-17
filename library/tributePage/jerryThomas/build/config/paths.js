const SRC_DIR = "source";
const DIST_DIR = "dist";

export const paths = {
  src: {
    htmlFiles: `${SRC_DIR}/app/components/*/*.html`,
    jsFiles: `${SRC_DIR}/frontend/javascript/*/*/*.js`,
    scssFiles: `${SRC_DIR}/frontend/scss/*/*/*.scss`,
    jsEntries: [
      `${SRC_DIR}/frontend/javascript/layout/*/*.js`,
      `${SRC_DIR}/frontend/javascript/components/*/*.js`,
    ],
    scssEntries: [
      `${SRC_DIR}/frontend/scss/layout/pages/*.scss`,
      `${SRC_DIR}/frontend/scss/layout/templates/*.scss`,
      `${SRC_DIR}/frontend/scss/layout/themes/*.scss`,
    ],
    cssEntries: [
      `${DIST_DIR}/styles/.tmp/*.page.css`,
      `${DIST_DIR}/styles/.tmp/*.template.css`,
    ],
    rawCssEntries: `${DIST_DIR}/styles/*.css`,
    imageEntries: `./${SRC_DIR}/assets/images/*`,
    compiledProject: [
      `${DIST_DIR}/*`,
      `${DIST_DIR}/*/*`,
      `${DIST_DIR}/*/*/*`,
      `${DIST_DIR}/*/*/*/*`,
      `!${DIST_DIR}/*/.tmp`,
    ],
  },
  dist: {
    distDir: `./${DIST_DIR}`,
    cssDistDir: `./${DIST_DIR}/styles`,
    cssDistTemp: `./${DIST_DIR}/styles/.tmp`,
    jsDistDir: `./${DIST_DIR}/javascript`,
    imagesDistDir: `./${DIST_DIR}/images`,
  },
  core: `../../../core/dist/app/library/tributePage/jerryThomas`,
};
