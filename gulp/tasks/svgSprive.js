import pkg from "gulp";
const { dest, src } = pkg;
import svgSprite from "gulp-svg-sprite";

export const svgSprive = () => {
  return src(app.path.src.svgicons)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SVG",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: `../icons/icons.svg`,
            //Створити сторінку з переліком іконок
            example: true,
          },
        },
      })
    )
    .pipe(dest(`${app.path.build.images}`));
};
