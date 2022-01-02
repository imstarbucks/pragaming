/* ---- Import NPM Modules --------- */
import browsersync from 'browser-sync';

/* ---- Import Configs ------------ */
import { baseDir, configs } from './configs';
import { path } from './utils';

// Define File Paths
const config = configs.browsersync;
const watchFiles = [];

// Define default options
let options = {
  files: watchFiles,
};

// merge options
options = Object.assign({}, options, config.options);

// generate array of file paths to watch
if (typeof config.watch === 'string') watchFiles.push(path.join(baseDir.dist, config.watch));
else if (typeof config.watch === 'object') config.watch.forEach(p => watchFiles.push(path.join(baseDir.dist, p)));

// create proxy or static server
if (config.proxy) options.proxy = config.proxy;
else options.server = baseDir.dist;

export default function server() {
  browsersync.init(options);
}
