/**
 * 服务器配置
 * 
 */
const path = require('path')

module.exports = {
	// 告诉服务器从哪里提供内容。
	contentBase: path.resolve('dist'),
	// 文件改动触发页面重新加载，设为true主要是因为html等不在entry中的文件修改需要重新刷新页面。
	// 开启后，热替换会无效。修改css会导致页面刷新。
	// 如果是单页应用，建议关闭此项，如果html修改，手动刷新一下即可。
	watchContentBase: false,
	// 一切服务都启用gzip 压缩
	compress: true,
	// 指定要监听请求的端口号
	// port: 8080,
	// 如果你有单独的后端开发服务器 API，并且希望在同域名下发送 API 请求 ，那么代理某些 URL 会很有用。
	proxy: {},
	// 提供在服务器内部的所有其他中间件之前执行自定义中间件的能力。这可用于定义自定义处理程序，例如：
	before(){},
	// 提供在服务器内部的所有其他中间件之后执行自定义中间件的能力。
	after(){},
	// 应用程序启用内联模式(inline mode)
	inline: true,
	// 指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，指定如下：
	host: "0.0.0.0",
	// 启用 webpack 的模块热替换特性：
	hot: true,
	// 在没有页面刷新的情况下启用热模块替换（请参阅）作为构建失败时的后备。
	// hotOnly: true,
	// 被视为索引文件的文件名
	index: 'index.html',
	// 启用 noInfo 后，诸如「启动时和每次保存之后，那些显示的 webpack 包(bundle)信息」的消息将被隐藏。错误和警告仍然会显示。
	noInfo: false,
	// 启动后打开浏览器
	open: false,
	// 将运行进度输出到控制台。
	progress: true,
	// 允许浏览器使用您的本地IP打开
	useLocalIp: true,
	// 当存在编译器错误或警告时，在浏览器中显示全屏覆盖。
	overlay: {
		warnings: true,
		errors: true
	},
	// 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。通过传入以下启用：
	historyApiFallback: {
		rewrites: [],
	},
	// 检测文件设置
	watchOptions: {
		// 当第一个文件更改，会在重新构建前增加延迟。这个选项允许 webpack 将这段时间内进行的任何其他更改都聚合到一次重新构建里。以毫秒为单位：
		aggregateTimeout: 300,
		// 通过传递 true 开启 polling，或者指定毫秒为单位进行轮询。
		poll: true,
		// 对于某些系统，监听大量文件系统会导致大量的 CPU 或内存占用。这个选项可以排除一些巨大的文件夹，例如 node_modules：
		ignored: /(node_modules|dist|webpack)/,
	},
	// 自定义要显示的日志信息
	stats: {
		// 未定义选项时，stats 选项的备用值(fallback value)（优先级高于 webpack 本地默认值）
		all: undefined,
		// 添加资源信息
		assets: false,
		// 对资源按指定的字段进行排序
		// 你可以使用 `!field` 来反转排序。
		assetsSort: "field",
		// 添加构建日期和构建时间信息
		builtAt: false,
		// 添加缓存（但未构建）模块的信息
		cached: false,
		// 显示缓存的资源（将其设置为 `false` 则仅显示输出的文件）
		cachedAssets: true,
		// 添加 children 信息
		children: false,
		// 添加 chunk 信息（设置为 `false` 能允许较少的冗长输出）
		chunks: false,
		// 将构建模块信息添加到 chunk 信息
		chunkModules: false,
		// 添加 chunk 和 chunk merge 来源的信息
		chunkOrigins: false,
		// 按指定的字段，对 chunk 进行排序
		// 你可以使用 `!field` 来反转排序。默认是按照 `id` 排序。
		chunksSort: "field",
		// 用于缩短 request 的上下文目录
		// context: "../src/",
		// `webpack --colors` 等同于
		colors: true,
		// 显示每个模块到入口起点的距离(distance)
		depth: false,
		// 通过对应的 bundle 显示入口起点
		entrypoints: false,
		// 添加 --env information
		env: false,
		// 添加错误信息
		errors: true,
		// 添加错误的详细信息（就像解析日志一样）
		errorDetails: true,
		// 将资源显示在 stats 中的情况排除
		// 这可以通过 String, RegExp, 获取 assetName 的函数来实现
		// 并返回一个布尔值或如下所述的数组。
		// excludeAssets: "filter" | /filter/,
		// 将模块显示在 stats 中的情况排除
		// 这可以通过 String, RegExp, 获取 moduleSource 的函数来实现
		// 并返回一个布尔值或如下所述的数组。
		// excludeModules: "filter" | /filter/,
		// 和 excludeModules 相同
		// exclude: "filter" | /filter/,
		// 添加 compilation 的哈希值
		hash: false,
		// 设置要显示的模块的最大数量
		maxModules: 15,
		// 添加构建模块信息
		modules: false,
		// 按指定的字段，对模块进行排序
		// 你可以使用 `!field` 来反转排序。默认是按照 `id` 排序。
		modulesSort: "field",
		// 显示警告/错误的依赖和来源（从 webpack 2.5.0 开始）
		moduleTrace: true,
		// 当文件大小超过 `performance.maxAssetSize` 时显示性能提示
		performance: true,
		// 显示模块的导出
		providedExports: false,
		// 添加 public path 的信息
		publicPath: false,
		// 添加模块被引入的原因
		reasons: false,
		// 添加模块的源码
		source: false,
		// 添加时间信息
		timings: false,
		// 显示哪个模块导出被用到
		usedExports: false,
		// 添加 webpack 版本信息
		version: true,
		// 添加警告
		warnings: true,
		// 过滤警告显示（从 webpack 2.4.0 开始），
		// 可以是 String, Regexp, 一个获取 warning 的函数
		// 并返回一个布尔值或上述组合的数组。第一个匹配到的为胜(First match wins.)。
		// warningsFilter: "filter" | /filter/ | ["filter", /filter/]
	},
}