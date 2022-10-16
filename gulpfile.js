//Main module
import gulp from "gulp";
//Import paths
import { path } from "./gulp/config/path.js";
//Import general plugins
import { plugins } from "./gulp/config/plugins.js";

//Global variable
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
};

//Import tasks
import { copy } from "./gulp/tasks/copy.js";
import { html } from "./gulp/tasks/html.js";
import { reset } from "./gulp/tasks/reset.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";

//Спостереження за зміною файлів
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
}
const mainTasks = gulp.parallel(copy, html, scss);

//Побудова сценарію виконання завдань
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// Execute senary by default
gulp.task("default", dev);
