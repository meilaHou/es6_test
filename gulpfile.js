// 载入外挂
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),//处理sass样式表
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),//- 压缩CSS为一行；
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),//重命名一个文件
    clean = require('gulp-clean'),//清理生成的文件
    concat = require('gulp-concat'),//- 多个文件合并为一个；
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    rev = require('gulp-rev'),//- 对文件名加MD5后缀
    revCollector = require('gulp-rev-collector'), //- 路径替换
babel = require('gulp-babel'),//使用babel
    babelify = require('babelify'),
livereload = require('gulp-livereload');


// 样式
gulp.task('styles', function() {
    return gulp.src('styles/main.css')
       // .pipe(sass({ style: 'expanded', }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('dist/styles'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/styles'))
        .pipe(notify({ message: 'Styles task complete' }));
});

// 脚本
gulp.task('scripts', function() {
    return gulp.src('scripts/**/*-compiled.js')
       // .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('index.js'))
        .pipe(gulp.dest('dist/scripts'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'))
        .pipe(notify({ message: 'Scripts task complete' }));
});

// 图片
gulp.task('images', function() {
    return gulp.src('images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/images'))
        .pipe(notify({ message: 'Images task complete' }));
});

// 清理
gulp.task('clean', function() {
    return gulp.src(['dist/styles', 'dist/scripts', 'dist/images'], {read: false})
        .pipe(clean());
});


gulp.task('babeltask', () => {
    return gulp.src('index.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});
// 看守
gulp.task('watch', function() {

    // 看守所有.scss档
    gulp.watch('src/styles/**/*.css', ['styles']);

    // 看守所有.js档
    gulp.watch('src/scripts/**/*.js', ['scripts']);

    // 看守所有图片档
    gulp.watch('src/images/**/*', ['images']);

    // 建立即时重整伺服器
    var server = livereload();

    // 看守所有位在 dist/  目录下的档案，一旦有更动，便进行重整
    gulp.watch(['dist/**']).on('change', function(file) {
        server.changed(file.path);
    });

});

var gulpLoadPlugins = require('gulp-load-plugins');

var plugins = gulpLoadPlugins();
plugins.jshint = require('gulp-jshint');
plugins.concat = require('gulp-concat');

gulp.task('concat', function() {                                //- 创建一个名为 concat 的 task
    gulp.src(['./css/wap_v3.1.css', './css/wap_v3.1.3.css'])    //- 需要处理的css文件，放到一个字符串数组里
        .pipe(concat('wap.min.css'))                            //- 合并后的文件名
        .pipe(minifyCss())                                      //- 压缩处理成一行
        .pipe(rev())                                            //- 文件名加MD5后缀
        .pipe(gulp.dest('./css'))                               //- 输出文件本地
        .pipe(rev.manifest())                                   //- 生成一个rev-manifest.json
        .pipe(gulp.dest('./rev'));                              //- 将 rev-manifest.json 保存到 rev 目录内
});

gulp.task('rev', function() {
    gulp.src(['./rev/*.json', './application/**/header.php'])   //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
        .pipe(revCollector())                                   //- 执行文件内css名的替换
        .pipe(gulp.dest('./application/'));                     //- 替换后的文件输出的目录
});

//gulp.task('default', ['concat', 'rev']);


gulp.task('browserify', ['browserify-vendor'], () =>
    browserify('app/main.js')
        .external(dependencies)
        .transform(babelify,{ presets: ["es2015"]}) //注意这里，只有加上presets配置才能正常编译
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps:true }))
        .pipe(gulpif(production, uglify({ mangle: false })))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/scripts'))
);

// 预设任务
gulp.task('default', ['clean','babeltask'], function() {
    gulp.start('styles', 'scripts', 'images');
});
