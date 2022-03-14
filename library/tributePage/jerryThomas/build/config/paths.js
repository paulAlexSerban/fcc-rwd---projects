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
      `${DIST_DIR}/styles/dev/*.page.css`,
      `${DIST_DIR}/styles/dev/*.template.css`,
      `${DIST_DIR}/styles/dev/*.theme.css`,
    ],
    cssCriticalEntries: `${DIST_DIR}/styles/dev/critical/*.css`,
    cssAsyncEntries: `${DIST_DIR}/styles/dev/async/*.css`,
    jsDevEntries: [`./${DIST_DIR}/javascript/dev/*.js`],
    imageEntries: `./${SRC_DIR}/assets/images/*`,
    compiledProject: [`${DIST_DIR}/*`,`${DIST_DIR}/*/*`,`${DIST_DIR}/*/*/*`,`${DIST_DIR}/*/*/*/*`]
  },
  dist: {
    distDir: `./${DIST_DIR}`,
    cssDistDir: `./${DIST_DIR}/styles`,
    cssDistDirDev: `./${DIST_DIR}/styles/dev`,
    cssCriticalDistDir: `./${DIST_DIR}/styles/dev/critical`,
    cssAsyncDistDir: `./${DIST_DIR}/styles/dev/async`,
    jsDistDir: `./${DIST_DIR}/javascript`,
    jsDistDirDev: `./${DIST_DIR}/javascript/dev`,
    jsDistDirProd: `./${DIST_DIR}/javascript/prod`,
    imagesDistDir: `./${DIST_DIR}/images`,
  },
  core: `../../../core/dist/library/tributePage/jerryThomas`
};
