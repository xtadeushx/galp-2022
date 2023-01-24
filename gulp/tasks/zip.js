import pkg from "gulp";
const { dest, src } = pkg;
import { deleteAsync } from "del";
// import del from "del";
import zipPlugin from "gulp-zip";

export const zip = async () => {
  await deleteAsync(`./${app.path.rootFolder}.zip`);
  return src(`${app.path.buildFolder}/**/*.*`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "ZIP",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(zipPlugin(`/${app.path.rootFolder}.zip`))
    .pipe(dest("./"));
};
