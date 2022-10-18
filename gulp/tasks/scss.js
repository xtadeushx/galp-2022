import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import pkg from "gulp";
const { dest, src } = pkg;
export const sass = gulpSass(dartSass);

import cleanCss from "gulp-clean-css";
import webpcss from "gulp-webpcss";
import autoprefixer from "gulp-autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";

export const scss = () => {
  return (
    src(app.path.src.scss, { sourcemaps: app.isDev })
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>",
          })
        )
      )
      .pipe(app.plugins.replace(/@img\//g, "../img/"))
      .pipe(
        sass({
          outputStyle: "expanded",
        })
      )

      .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
      .pipe(
        app.plugins.if(
          app.isBuild,
          webpcss({
            webpClass: ".webp",
            noWebpClass: ".na-webp",
          })
        )
      )
      .pipe(
        app.plugins.if(
          app.isBuild,
          autoprefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true,
          })
        )
      )

      // Розкоментувати якщо потріьен не сжатий дубль фуйлу стилей
      .pipe(app.gulp.dest(app.path.build.css))

      .pipe(app.plugins.if(app.isBuild, cleanCss()))

      .pipe(
        rename({
          extname: ".min.css",
        })
      )
      .pipe(dest(app.path.build.css))
      .pipe(app.plugins.browsersync.stream())
  );
};
