var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var minify = require('gulp-minify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var inject = require('gulp-inject');
var plumber = require('gulp-plumber');
var wiredep = require('wiredep').stream;
var gulpBowerFiles = require('gulp-bower-files');
var browserSync = require('browser-sync');



gulp.task('clean-js',function(){
    return gulp.src('./public/assets/js/*.min.js')
    .pipe(clean());
});

gulp.task('clean-css',function(){
    return gulp.src('./public/assets/css/*.min.css')
    .pipe(clean());
});
// gulp.task('clean-html',function(){
//     return gulp.src('./index.html')
//     .pipe(clean());
// });

gulp.task('styles',['clean-css'],function(){
        return gulp.src('./assets/scss/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('js',['clean-js'],function(){
    return gulp.src(
        [
            './assets/js/*.js'
        ]
    )
    .pipe(plumber())
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./public/assets/js/'));
});

// gulp.task('index',['clean'],function(){
    
//     var target = gulp.src('index.html');
//     // It's not necessary to read the files (will speed up things), we're only after their paths: 
//     var sources = gulp.src(['./public/assets/**/*.js', './public/assets/**/*.css'], {read: false});
   
//     return target.pipe(inject(sources))
//       .pipe(gulp.dest('./public/'));
// });

gulp.task('html',function(){
    return gulp.src('index.html')
    .pipe(wiredep({
        fileTypes: {
            html: {
                replace: {
                    js: '<script src="{{filePath}}"></script>'
                }
            }
        }
    }))
    .pipe(inject(gulp.src(['./public/assets/js/*.js','./public/assets/css/*.css'], {read: false}),{ignorePath:'public'}))
    .pipe(gulp.dest('./public/'));
});

gulp.task('image',function(){
    return gulp.src('assets/images/*')
    .pipe(gulp.dest('./public/assets/images'));
});

gulp.task('font',function(){
    return gulp.src('assets/fonts/*')
    .pipe(gulp.dest('./public/assets/fonts'));
});

gulp.task('watch', function(){
    gulp.watch('index.html',['html']);
    gulp.watch('./assets/js/*.js',['js']);
    gulp.watch('./assets/scss/*.scss',['styles']);
    gulp.watch('./assets/images/*',['image']);
    gulp.watch('./assets/fonts/*',['font']);
});

gulp.task("bower-files", function(){
   gulpBowerFiles().pipe(gulp.dest("./public/vendor"));
});


gulp.task('default',['bower-files','styles','js','html','image','font','watch']);