const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

gulp.task("compile-ts", () => {
  return tsProject.src()
          .pipe(tsProject())  // ts into js -> create js property
          .js  // refer ./js property
          .pipe(gulp.dest("./dist"));  // output each js file into ./dist
});
