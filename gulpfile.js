const del = require('del');
const gulp = require('gulp');
const exec = require('child_process').exec
const chalk = require('chalk');
const _ = require('lodash');
const nodemon = require('gulp-nodemon');

const globs = {
    src: './src/**/*.*',
    build: './build/**/*.*'
}

/** Change the colors of standard log messages if you want to. */
const LOG_MSG_COLOR = chalk.green; 

/** Change the colors of standard log messages if you want to. */
const LOG_ERR_COLOR = chalk.red;  

gulp.task('clean', (done) => {
    return del([globs.build]);
})

gulp.task('copy', (done) => {
    return gulp.src('./src/public/*.*')
    .pipe(gulp.dest('./build/public'));
    
})

gulp.task('watch', (done) => {
    return gulp.watch(['./src/**/*.*'], ['build'])
});

gulp.task('build', ['copy'], (done) => {
    exec('tsc --version', (err, stdout, stderr) => {
        __log(`Compiling using TypeScript ${stdout}`);
        if (stderr) __error(stderr);  
    });

    return exec('tsc', (err, stdout, stderr) => {
        __log(stdout);
        if (stderr) __error(stderr);  
        done(err);
    });
});

/**
 * Utility function for standard log messages.
 * @param {String} message
 */
function __log(message) {
    console.log(LOG_MSG_COLOR(_.trim(message)));
}

/**
 * Utility function for error log messages.
 * @param {String} message
 */
function __error(message) {
    console.log(LOG_ERR_COLOR(_.trim(message)));
}