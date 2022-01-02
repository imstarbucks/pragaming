import fs from 'fs';

/* ---- Import NPM Modules --------- */
import webpack from 'webpack';
import stream from 'webpack-stream';

/* ---- Import Gulp Modules -------- */
import gulp from 'gulp';

/* ---- Import Configs ------------ */
import webpackConfig from '../webpack.config';
import { baseDir, production } from './configs';
import { path, log } from './utils';

// Define File Paths
const source = path.join(baseDir.src, baseDir.scripts.src);
const dest = path.join(baseDir.dist, baseDir.scripts.dest);

export default function scripts(cb) {
  // directory of source js
  const sourceJsDirectory = path.join(baseDir.src, baseDir.scripts.dest.split('/')[0]);

  // check for files
  fs.access(sourceJsDirectory, (err) => {
    // tell gulp task is done
    cb();

    // if it doesnt exist, exit early
    if (err != null) {
      log.print('Skipping scripts bundling...', 'red');
      return null;
    }

    // check if watching is needed
    if (process.argv.indexOf('dev') !== -1 || process.argv.indexOf('watcher') !== -1) webpackConfig.watch = true;
    if (production) webpackConfig.devtool = false;

    return gulp
      .src(source)
      .pipe(stream(webpackConfig, webpack))
      .pipe(gulp.dest(dest));
  });
}
