var gulp = require('gulp');
var Elixir = require('laravel-elixir');
var sasslint = require('gulp-sass-lint');

var config = Elixir.config;

/**
 * Trigger the Gulp task logic.
 *
 * @param {object} paths
 * @param {object} options
 */
var gulpTask = function(paths, options) {
    this.log(paths.src);

    return (
        gulp.src(paths.src.path)
            .pipe(sasslint(options))
            .pipe(sasslint.format())
            .pipe(sasslint.failOnError())
            .on('error', function(e) {
                new Elixir.Notification().error(e, 'Sass Lint failed!');
                this.emit('end');
            })
            .pipe(new Elixir.Notification('Sass Lint succeeded!'))
    );
};

Elixir.extend('sasslint', function(src, options) {
    var source = src || config.get('assets.css.sass.folder') + '/**/*.s+(a|c)ss',
        paths = new Elixir.GulpPaths().src(source);

    new Elixir.Task('sasslint', function() {
        return gulpTask.call(this, paths, options || {});
    })
    .watch(paths.src.path);
});