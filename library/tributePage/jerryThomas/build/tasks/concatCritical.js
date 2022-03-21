import { src, dest } from "gulp";
import concat from "gulp-concat";
import { pageTemplateGroups } from "../config/pageTemplateGrouping";

const concatGroup = (group) => {
  src([
    `dist/styles/.tmp/${group.page}.page.critical.css`,
    `dist/styles/.tmp/${group.page}.page.async.css`,
    `dist/styles/.tmp/${group.template}.template.critical.css`,
  ])
    .pipe(concat(`index.page.critical.css`))
    .pipe(dest(`./dist/styles/`));

  src([
    `dist/styles/.tmp/${group.template}.template.async.css`,
    `dist/styles/.tmp/grid.template.async.css`,
  ]).pipe(dest(`./dist/styles/`));
};

export const concatCritical = (cb) => {
  pageTemplateGroups.map((key) => {
    concatGroup(key);
  });
  cb();
};
