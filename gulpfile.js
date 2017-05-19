var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;


// Watch Task
gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: "src/"
    }
  })

  // html changes
  gulp.watch('src/*').on("change", reload)
  // javascript changes
  gulp.watch('src/js/**/*').on("change", reload)
  gulp.watch('src/components/**/*').on("change", reload)
  // css changes
  //gulp.watch('src/css/**/*').on("change", reload);
});

gulp.task('default', ['watch']);
