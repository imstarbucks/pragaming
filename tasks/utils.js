/* ---- Import Node.js Fuctions ---- */
import nodePath from 'path';

/* ---- Import NPM Modules --------- */
import fancylog from 'fancy-log';
import chalk from 'chalk';
import through from 'through2';
import filesize from 'filesize';

// Standardized Message Logging
class CustomLog {
  print(message, color = 'white') {
    fancylog(chalk`{${color} ${message}}`);
  }

  string(message, color = 'white') {
    return chalk`{${color} ${message}}`;
  }
}

export const log = new CustomLog();

// Prints out size of streamed files
export function size() {
  return through.obj((file, enc, cb) => {
    if (file.contents === null) {
      cb(null, file);
      return;
    }

    const name = file.relative;
    const s = file.contents.length;

    log.print(
      `Output : '${log.string(name, 'green')}[${log.string(filesize(s), 'magenta')}]'`,
      'yellow',
    );

    cb(null, file);
  });
}

// Path Handler
class CustomPath {
  generate(source, entries) {
    const arr = [];

    if (typeof entries === 'string') return this.join(source, entries);
    entries.forEach(s => arr.push(this.join(source, s)));

    return arr;
  }

  join(...paths) {
    return nodePath.posix.join(...paths);
  }

  native() {
    return nodePath;
  }
}

export const path = new CustomPath();
