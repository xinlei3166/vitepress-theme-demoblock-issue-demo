import VXETable from 'vxe-table'
import { NEmpty } from 'naive-ui'
import { h } from 'vue'

export let VxeTableGlobalConfig = {}

// 全局配置
export function setupVxeTableConfig() {
	VxeTableGlobalConfig = VXETable.setup({
		table: {
			showOverflow: 'tooltip',
			showHeaderOverflow: 'tooltip',
			stripe: true,
			round: true,
			resizable: true,
			columnConfig: {
				minWidth: '80px'
			}
		},
		input: {
			clearable: true
		},
		grid: {
			border: false,
			pagerConfig: {
				pageSize: 10,
				pageSizes: [10, 20, 50, 100]
			},
			proxyConfig: {
				form: true,
				seq: true,
				props: {
					result: 'data',
					total: 'total'
				}
			}
		}
	})

	// 空数据自定义渲染
	VXETable.renderer.add('Empty', {
		renderEmpty(renderOpts, params) {
			return [h(NEmpty, { style: { margin: '10px 0' } })]
		}
	})
}