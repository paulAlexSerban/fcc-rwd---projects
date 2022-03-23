import { src, lastRun } from "gulp";
import lint from "gulp-htmllint";
import { paths } from "../../config/paths";
import log from "fancy-log";
import colors from "ansi-colors";
import plumber from "gulp-plumber";
// import debug from "gulp-debug";

export const lintHtml = () => {
  return src(paths.src.html.htmlFiles, { since: lastRun(lintHtml) })
    .pipe(plumber())
    // .pipe(debug({ title: "htmlLint : " }))
    .pipe(lint({}, htmlLintReporter));
};

function htmlLintReporter(filepath, issues) {
  if (issues.length > 0) {
    issues.forEach(function (issue) {
      log(`${colors.cyan("[gulp-htmllint] ")}
${colors.white(`${filepath} [${issue.line},${issue.column}]`)}
${colors.red(`(${issue.code}) ${issue.msg}`)}`);
    });
    process.exitCode = 1;
  }
}
