webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//将css文件加载进来，不需要引用到html文件中
	__webpack_require__(1);
	__webpack_require__(6);

	var a = __webpack_require__(8); 
	var b = __webpack_require__(9); 

	document.write('<h1>' + a.add(b[0], b[1]) + '</h1>');

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./about.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./about.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".about {\n\twidth: 100px;\n\theight: 100px;\n\tbackground: red;\n}", ""]);

	// exports


/***/ }
]);