import gulp from 'gulp';

import path from './gulp/config/path.js';
import plugins from './gulp/config/plugins.js';

import { copyWoff } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { icons } from './gulp/tasks/icons.js';
import { otfToTtf, ttfToWoff } from './gulp/tasks/fonts.js';
import { svgSprite } from './gulp/tasks/svgSprite.js';

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path,
  gulp,
  plugins,
};

function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.icons, icons);
}

const fonts = gulp.series(otfToTtf, ttfToWoff, copyWoff);

const mainTasks = gulp.series(svgSprite, gulp.parallel(html, scss, js, images, icons));

const dev = gulp.series(reset, mainTasks, fonts, gulp.parallel(watcher, server));

const build = gulp.series(reset, fonts, mainTasks);

export { dev };
export { build };
export { svgSprite };
export { fonts };

gulp.task('default', dev);
