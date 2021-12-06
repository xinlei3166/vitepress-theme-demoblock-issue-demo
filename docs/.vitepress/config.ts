module.exports = {
	title: '开发手册',
	lang: 'zh-CN',
	themeConfig: {
		nav: [
			{ text: '组件', link: '/components/MyTable' },
		],
		sidebar: {
			'/components/': getComponentsSidebar(),
		}
	},
	markdown: {
		lineNumbers: true,
		config: (md) => {
			const { demoBlockPlugin } = require('vitepress-theme-demoblock')
			md.use(demoBlockPlugin)
		}
	}
}

function getComponentsSidebar() {
	return [
		{
			text: '组件',
			children: [
				{ text: '表单容器', link: '/components/FormWrapper' },
			]
		}
	]
}