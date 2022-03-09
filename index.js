/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
const aaa = require("./src/index.js");
console.log(require(aaa), '8888888')
module.exports = (source) => {
	console.log(source ,' jjjjjjjjjjj')
	return source
};
