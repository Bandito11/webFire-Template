let gulp = require("gulp");
let ts = require("gulp-typescript");
let del = require('del');


gulp.task('clean', function (error) {
    return del.sync('dist', error);
});

/**
 * If using github Pages
 */
// gulp.task('gitPages', function () {
//     gulp.src('dist/**/*')
//     .pipe(gulp.dest('docs'));
//     });


/**
 * TODO: Build for the front end
 * WIP :(
//  */

gulp.task('build:www', function () {
    let tsProject = ts.createProject('src/tsconfig.json');
    console.log('Compiling www!');
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist/js"));
});

gulp.task('assets', function () {
    gulp.src('src/assets/**/*')
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('styles', function () {
    gulp.src('src/**/*.css')
        .pipe(gulp.dest('dist'));
});

gulp.task('pages', function () {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('src/assets/**/*', ['assets']);
    gulp.watch('src/**/*.css', ['styles']);
    gulp.watch('src/**/*.html', ['pages']);
    gulp.watch('src/**/*.ts', ['build:www']);
});

/**
 * Import front end libs from node_modules
 */

gulp.task('libs', function () {
    gulp.src('node_modules/lokijs/build/lokijs.min.js')
        .pipe(gulp.dest('dist/www/libs'));

    gulp.src('src/libs/**/*.js')
        .pipe(gulp.dest('dist/www'));
});



gulp.task('default', ['libs', 'watch']);

