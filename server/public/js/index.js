/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	//ES5 用settimeout模拟 与后端通讯
	{
		var ajax = function ajax(callback) {
			setTimeout(function () {
				callback && callback();
			}, 1000);
		};

		ajax(function () {
			console.log('timeout1');
		});
	}

	//ES6
	{
		var _ajax = function _ajax() {
			console.log('执行');
			return new Promise(function (resolve, reject) {
				setTimeout(function () {
					resolve();
				}, 1000);
			});
		};

		//上边返回一个promise实例 这个实例有then方法
		_ajax().then(function () {
			console.log('Promise', 'timeout2');
		}, function () {
			//reject
		});
	}

	//执行顺序
	{
		var _ajax2 = function _ajax2() {
			console.log('执行2');
			return new Promise(function (resolve, reject) {
				setTimeout(function () {
					resolve();
				}, 1000);
			});
		};

		_ajax2().then(function () {
			return new Promise(function (resolve, reject) {
				setTimeout(function () {
					resolve();
				}, 1000);
			});
		}).then(function () {
			console.log('timeout3');
		});
	}

	//捕获错误

	{
		var _ajax3 = function _ajax3(num) {
			console.log('执行4');
			return new Promise(function (resolve, reject) {
				if (num > 5) {
					resolve();
				} else {
					throw new Error('不能小于5');
				}
			});
		};

		_ajax3(6).then(function () {
			console.log('log', 6); //正常执行
		}).catch(function (err) {
			console.log('catch', err);
		});

		_ajax3(3).then(function () {
			console.log('log', 3);
		}).catch(function (err) {
			console.log('catch', err); //报错
		});
	}

	//所有图片都加载完成再加载页面
	{
		var loadImg = function loadImg(src) {
			return new Promise(function (resolve, reject) {
				var img = document.createElement('img');
				img.src = src;
				img.onload = function () {
					resolve(img);
				};
				img.onerror = function (err) {
					reject(err);
				};
			});
		};

		var showImgs = function showImgs(imgs) {
			imgs.forEach(function (img) {
				document.body.appendChild(img);
			});
		};
		//把多个promise实例合并成一个，必须所有实列都触发了，才会继续执行then方法


		Promise.all([loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'), loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'), loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png')]).then(showImgs);
	}

	//有一个图加载完就添加到页面 race
	{
		var _loadImg = function _loadImg(src) {
			return new Promise(function (resolve, reject) {
				var img = document.createElement('img');
				img.src = src;
				img.onload = function () {
					resolve(img);
				};
				img.onerror = function (err) {
					reject(err);
				};
			});
		};

		var _showImgs = function _showImgs(img) {
			var p = document.createElement('p');
			p.appendChild(img);
			document.body.appendChild(p);
		};

		Promise.race([_loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'), _loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'), _loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png')]).then(_showImgs);
	}

	//执行顺序
	{
		var _ajax4 = function _ajax4() {
			console.log('执行');
			return new Promise(function (resolve, reject) {
				var data = 123;
				setTimeout(function () {
					resolve(data);
				}, 1000);
			});
		};

		_ajax4().then(function (data) {
			return new Promise(function (resolve, reject) {
				setTimeout(function () {
					console.log(data);
					resolve(data);
				}, 1000);
			});
		}).then(function (data) {
			console.log(data);
		});
	}

/***/ })
/******/ ]);