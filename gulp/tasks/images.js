import pkg from "gulp";
const { dest, src } = pkg;
import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
  return src(app.path.src.images)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "IMAGES",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.plugins.newer(app.path.build.images))

    .pipe(app.plugins.if(app.isBuild, webp()))
    .pipe(app.plugins.if(app.isBuild, dest(app.path.build.images)))
    .pipe(app.plugins.if(app.isBuild, app.plugins.newer(app.path.build.images)))
    .pipe(
      app.plugins.if(
        app.isBuild,
        imagemin({
          progressive: true,
          svgPlugins: [{ renoveViewBox: false }],
          interfaced: true,
          optimizationLevel: 3, // 0 - 7
        })
      )
    )

    .pipe(dest(app.path.build.images))
    .pipe(src(app.path.src.svg))
    .pipe(dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
};
