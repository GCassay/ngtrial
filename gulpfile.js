var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;


// Watch Task
gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: "public/"
    }
  })

  // html changes
  gulp.watch('public/*').on("change", reload)
  // javascript changes
  gulp.watch('public/js/**/*').on("change", reload)
  gulp.watch('public/components/**/*').on("change", reload)
  // css changes
  //gulp.watch('public/css/**/*').on("change", reload);
});

gulp.task('default', ['watch']);
