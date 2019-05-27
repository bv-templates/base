/**
 * 这些选项能设置模块如何被解析
 * 
 */
const resolve = require('path').resolve
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const webpack = require('webpack')
const manifest = require(resolve('dist', 'dll.manifest.json'))

const DllReferencePlugins = []

module.exports = [
		// dll入引
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require(resolve('dist', 'vendor.manifest.json'))
		}),
		/**
		 * 生成多个DllReferencePlugin
		 * 这里数量取决与 ./webpack.dll.config.js 的 entry数量
		 */
		...Object.keys(manifest).map(key => new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require(resolve(`dist/${key.replace(/\.js$/g, '')}.manifest.json`))
		})),

		// 在html增加dll的script标签
		new HtmlWebpackIncludeAssetsPlugin({
			assets: Object.values(manifest),
			append: false,
		})
]