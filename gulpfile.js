'use strict';

var gulp = require('gulp');
var b4bcoreTasks = require('b4bcore-build');

b4bcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
