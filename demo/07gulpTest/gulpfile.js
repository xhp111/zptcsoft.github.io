var gulp = require('gulp'),
    cssbeautify = require('gulp-cssbeautify'),
    cleanCSS = require('gulp-clean-css');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});

gulp.task('cssB', function() {
    return gulp.src('./css/*.css')
        .pipe(cssbeautify())
        .pipe(gulp.dest('./css/'));;
});

gulp.task('cssM', function() {
  return gulp.src('./css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css/'));
});

var watcher = gulp.watch('css/**/*.css', ['cssB','cssM']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});