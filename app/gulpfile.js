var gulp = require('gulp')
,   eslint = require('gulp-eslint')
,   exec = require('child_process').exec;

var paths = {
  "client_js": "client/src/**/*.js",
  "client_test": "client/test/*.js",
  "client_test_helper": "client/test/test_helper.js",
  "server_js": "server/server.js"
};

// Install client and server dependencies
gulp.task('install', function (cb) {
  exec('cd client & npm install', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
  exec('cd server & npm install', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

// Test the client code
gulp.task('test-client', function (cb) {
  exec('cd client & npm run test', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

// Test the server code
gulp.task('test-server', function (cb) {
  exec('cd server & npm run test', function(err, stdout, stderr) {
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

// Lint the server code
gulp.task('lint-server', function () {
  return gulp.src([paths.server_js])
    .pipe(eslint())
    .pipe(eslint.format())
});

// TEST EVERYTHING
gulp.task('test', ['test-client', 'test-server']);

// LINT EVERYTHING
gulp.task('lint', ['lint-client', 'lint-server']);

// Default task
gulp.task('default', []);
