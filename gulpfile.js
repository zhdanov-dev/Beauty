const { src, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const include = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');

const sync = require('browser-sync').create();

function html() {
	return src('src/**.html').pipe(include()).pipe(htmlmin({
		collapseWhitespace: true
	})).pipe(dest('dist'));
}

function scss() {
	return src('src/scss/**.scss').pipe(sass()).pipe(csso()).pipe(dest('dist'));
}

function imgs() {
	return src('src/static/imgs/**.png').pipe(dest('dist/images'));
}

exports.build = series(imgs, scss, html)