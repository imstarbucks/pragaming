/**
 * @fileoverview Define a task to build SVG sprites.
 */
import path from 'path';
import gulp from 'gulp';
import svgstore from 'gulp-svgstore';
import rename from 'gulp-rename';
import { baseDir, configs } from './configs';

const source = path.join(baseDir.src, baseDir.svg.src);
const dest = path.join(baseDir.dist, baseDir.svg.dest);

export default function svg() {
  return gulp
    .src(source)
    .pipe(rename({ prefix: configs.svg.prefix }))
    .pipe(svgstore())
    .pipe(rename('sprites.svg'))
    .pipe(gulp.dest(dest));
}
