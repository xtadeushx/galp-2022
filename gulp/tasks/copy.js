import pkg from "gulp";
const { dest, src } = pkg;

export const copy = () => {
  return src(app.path.src.files).pipe(dest(app.path.build.files));
};
