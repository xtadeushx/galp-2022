import webpack from 'webpack-stream';
import pkg from "gulp";
const { dest, src } = pkg;

export const js = () => {
    return (
        src(app.path.src.js, { sourcemaps: true })
        .pipe(
          app.plugins.plumber(
            app.plugins.notify.onError({
              title: "JS",
              message: "Error: <%= error.message %>",
            })
          )
        )
// webpack
        .pipe(webpack({
            mode: "development",
            output: {
                filename: "app.min.js",
            }
        }))
        // Розкоментувати якщо потріьен не сжатий дубль фуйлу стилей
        // .pipe(dest(app.path.build.js))
        
        .pipe(dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream())
    );
  };