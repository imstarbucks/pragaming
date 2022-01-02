/* ---- Import NPM Modules --------- */
import del from 'del';

/* ---- Import Configs ------------ */
import { baseDir } from './configs';
import { log, path } from './utils';

class Clean {
  constructor() {
    this.all = () => this.delete(baseDir.dist);
    this.images = () => this.delete(path.join(baseDir.dist, baseDir.images.dest));
    this.css = () => this.delete(path.join(baseDir.dist, baseDir.styles.dest));
    this.js = () => this.delete(path.join(baseDir.dist, baseDir.scripts.dest));

    this.pages = (cb) => {
      baseDir.pages.src.forEach((src) => {
        const toDelete = path.join(baseDir.dist, baseDir.pages.dest, src);
        this.delete(toDelete);
      });

      cb();
    };
  }

  delete(toDelete = baseDir.dist) {
    return del(toDelete).then(() => {
      log.print(`Removed  '${log.string(toDelete, 'magenta')}'`, 'yellow');
    });
  }
}

const clean = new Clean();
export default clean;
