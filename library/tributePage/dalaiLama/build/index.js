import {task, parallel, series} from 'gulp';
import { compileThemeCSS } from './tasks/compileThemeCSS';
import { compileThemeJS } from './tasks/compileThemeJS';

const project = 'tribute-page--dalai-lama'

// theme
task(`compile-theme:${project}`, series(compileThemeCSS, compileThemeJS))

// stage tasks
task('develop', series(parallel(`compile-theme:${project}`)))
