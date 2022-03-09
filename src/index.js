/**
 * See the webpack docs for more information about loaders:
 * https://webpack.js.org/contribute/writing-a-loader
 */

module.exports = function loader(source) {
	const { loaders, resource, request, version, webpack } = this;
	console.log('y-loader', this);
	const newSource = `
	/**
	 * y-loader
	 *
	 * Resource Location: ${resource}
	 * Loaders chained to module: ${JSON.stringify(loaders)}
	 * Loader API Version: ${version}
	 * Is this in "webpack mode": ${webpack}
	 * This is the users request for the module: ${request}
	 */
	/**
	 * Original Source From Loader
	 */
	${source}`;
	console.log('这里是自定义loader')

	return newSource;
}
