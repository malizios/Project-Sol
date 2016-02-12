var gulp = require('gulp')
,   eslint = require('gulp-eslint')
,   exec = require('child_process').exec;

var paths = {
  "client_js": "client/src/**/*.js",
  "client_test": "client/test/*.js",
  "client_test_helper": "client/test/test_helper.js"
};

// Install client and server dependencies
gulp.task('install', function (cb) {
  exec('cd client & npm install', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

// Test the client code
gulp.task('test-client', function (cb) {
  exec('cd client & mocha --compilers js:babel/register --recursive --require ./test/test-config.js --recursive', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

// Lint the client code
gulp.task('lint-client', function () {
  return gulp.src([paths.client_js])
    .pipe(eslint())
    .pipe(eslint.format())
});

// TEST EVERYTHING
gulp.task('test', ['test-client']);

// LINT EVERYTHING
gulp.task('lint', ['lint-client']);

// Default task
gulp.task('default', []);
