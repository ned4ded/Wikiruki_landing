var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        open: false,
        ui: false,
        server: "./",
        host: '192.168.1.130',
        port: 3002,
    });

    gulp.watch("./css/*.css").on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
