let gulp = require("gulp");
let ts = require("gulp-typescript");
let del = require('del');
let nodemon = require('nodemon');
const shell = require('gulp-shell')

gulp.task('clean', function (error) {
    return del.sync('dist', error);
});

gulp.task('build:www', function () {
    let tsProject = ts.createProject('tsconfig.json');
    console.log('Compiling www!');
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist/js"));
});

gulp.task('assets', function () {
    gulp.src('src/assets/**/*')
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('robots', function () {
    gulp.src('src/robots.txt')
        .pipe(gulp.dest('dist'));
});

gulp.task('sitemap', function () {
    gulp.src('src/sitemap.xml')
        .pipe(gulp.dest('dist'));
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

gulp.task('firebase', shell.task([
    'firebase serve'
]))

/**
 * Import front end libs from node_modules
 */

gulp.task('libs', function () {
    //    gulp.src('node_modules/firebase/firebase.js')
    //        .pipe(gulp.dest('dist/libs'));
    gulp.src('src/libs/**/*.js')
        .pipe(gulp.dest('dist/libs'));
});

/**
*Start the node app
*/
gulp.task('start', ['libs', 'assets', 'styles', 'pages', 'build:www', 'watch'
], function () {
    let stream = nodemon(
        {
            ext: '*',
            watch: 'src',
            tasks: ['firebase']
        });
    return stream;
});

// All custom gulp tasks should be added before watch task!!!
gulp.task('default', ['start']);

