/* ---- Import NPM Modules --------- */
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

/* ---- Import Gulp Modules -------- */
import gulp from 'gulp'
import newer from 'gulp-newer'
import plumber from 'gulp-plumber'

import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass)
import postcss from 'gulp-postcss'
import sourcemaps from 'gulp-sourcemaps'

/* ---- Import Configs ------------ */
import { production, baseDir, configs } from './configs'
import { size, path, log } from './utils'

// Define File Paths
const config = configs.styles
const source = path.generate(baseDir.src, baseDir.styles.src)
const dest = path.join(baseDir.dist, baseDir.styles.dest)

// Define Plugins
const pluginsDevelop = [autoprefixer(config.autoprefixer)]

const pluginsProduction = [cssnano(config.cssnano), autoprefixer(config.autoprefixer)]

// Main Exported Task
function stylesDevelop() {
  return gulp
    .src(source)
    .pipe(newer(dest))
    .pipe(
      plumber((error) => {
        log.print(`\n \n ${error.formatted}`, 'red')
        this.emit('end')
      })
    )
    .pipe(sourcemaps.init())
    .pipe(sass.sync(config.sass))
    .pipe(postcss(pluginsDevelop))
    .pipe(sourcemaps.write('.'))
    .pipe(size())
    .pipe(plumber.stop())
    .pipe(gulp.dest(dest))
}

function stylesProduction() {
  return gulp
    .src(source)
    .pipe(newer(dest))
    .pipe(
      plumber((error) => {
        log.print(`\n \n ${error.formatted}`, 'red')
        this.emit('end')
      })
    )
    .pipe(sass.sync(config.sass))
    .pipe(postcss(pluginsProduction))
    .pipe(size())
    .pipe(plumber.stop())
    .pipe(gulp.dest(dest))
}

const styles = production ? stylesProduction : stylesDevelop

export default styles
