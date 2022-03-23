const SRC_DIR = "*/*/source";
const DIST_DIR = "../core/dist/app/library";

export const paths = {
  src: {
    html: {
      htmlFiles: `${SRC_DIR}/app/html/*/*.html`,
    },
    css: {
      scssFiles: `${SRC_DIR}/frontend/scss/*/*/*.scss`,
      scssEntries: [
        `${SRC_DIR}/frontend/scss/layout/pages/*.scss`,
        `${SRC_DIR}/frontend/scss/layout/templates/*.scss`,
      ],
      cssEntries: [
        `${DIST_DIR}/*/*/styles/.tmp/*.page.css`,
        `${DIST_DIR}/*/*/styles/.tmp/*.template.css`,
      ],
      rawCssEntries: `${DIST_DIR}/*/*/styles/.tmp/split/*.css`,
    },
    js: {
      jsFiles: [
        `${SRC_DIR}/frontend/javascript/commons/*.js`,
        `${SRC_DIR}/frontend/javascript/components/*/*.js`,
        `${SRC_DIR}/frontend/javascript/layout/*/*.js`,
      ],
      jsEntries: [
        `${SRC_DIR}/frontend/javascript/layout/*/*.js`,
        `${SRC_DIR}/frontend/javascript/components/*/*.js`,
      ]
    },
  },
  dist: {
    distDir: `${DIST_DIR}`,
  },
};
