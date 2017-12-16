var gulp = require('gulp'),
uglify = require('gulp-uglify'),
serve = require('gulp-webserver');
//minify task
gulp.task('minify',function(){
    gulp.src('src/deviceCapabilities.js')
        .pipe(uglify())
        .pipe(gulp.dest('release'));
});
//watch task to watch the source and minif it everytime it changes
gulp.task('watch', function(){
    gulp.watch('*.js',['minify']);
});
/**
 * Set up webserver to debug the code
 */
gulp.task('serveLocally',function(){
    return gulp.src("./docs")
    .pipe(serve({
        port:3000,
        liveReload: true
    }));
});