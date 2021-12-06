<template>
	<div class='my_table'>
		<n-h3 prefix='bar'>{{ title }}</n-h3>
		<div class='my_table_body'>
			<vxe-grid auto-resize ref='xGrid' v-bind='gridOptions' v-on='gridEvents'>
				<template v-for='item in Object.keys(slots)' v-slot:[item]='{row,rowIndex}'>
					<n-space>
						<slot :name='item' :row='row' :row-index='rowIndex' />
					</n-space>
				</template>
				<template #top>
					<div class='my_table_tip' v-show='multiple && checkedRows?.length > 0'>
						<n-alert :title='topTip' type='info'></n-alert>
					</div>
				</template>
			</vxe-grid>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { computed, PropType, ref, useSlots, watch, watchPostEffect } from 'vue'
import { MyTableOptions } from '@/components/commons/MyTable'
import { VxeGridInstance, VxeGridListeners, VxeGridProps } from 'vxe-table'
import { merge } from 'lodash'
import { Size } from '#/naive'

const slots = useSlots()
const emit = defineEmits<{
	(event: 'radio-change', value: any): void
	(event: 'checkbox-change', value: any): void
}>()
const props = defineProps({
	options: {
		required: true,
		type: Object as PropType<MyTableOptions>
	},
	showOrder: {
		type: Boolean,
		default: false
	},
	showOprate: {
		type: Boolean,
		default: true
	},
	showButton: {
		type: Boolean,
		default: true
	},
	size: {
		type: String as PropType<Size>,
		default: 'medium'
	},
	title: {
		required: true,
		type: String
	}
})

// 表格实例
const xGrid = ref<VxeGridInstance>()
// 表格事件及属性
const reloadData = (data) => {
	xGrid.value.reloadData(data)
}
const getFormItems = (index?: number) => {
	return xGrid.value.getFormItems(index)
}
const getColumnByField = (field: string) => {
	return xGrid.value.getColumnByField(field)
}
const getTableData = () => {
	return xGrid.value.getTableData()
}
const getProxyInfo = () => {
	return xGrid.value.getProxyInfo()
}
const checkedRows = ref<any[]>()
watchPostEffect(() => {
	checkedRows.value = xGrid.value.getCheckboxRecords(true)
})
// 导出
defineExpose({ reloadData, getFormItems, getColumnByField, getTableData, getProxyInfo, checkedRows })

// 表格默认配置
const gridOptions = ref<VxeGridProps>({
	emptyRender: { name: 'Empty' },
	autoResize: true,
	size: props.size === 'small' ? 'mini' : props.size === 'medium' ? 'small' : props.size === 'large' ? 'medium' : null,
	toolbarConfig: {
		zoom: {
			iconIn: 'iconfont icon-fullscreen',
			iconOut: 'iconfont icon-fullscreen-exit'
		},
		custom: true,
		slots: {
			buttons: props.showButton ? 'toolbar-buttons' : null
		}
	},
	pagerConfig: {}
})

// 合并配置
watch(
	() => props.options,
	() => {
		merge(gridOptions.value, props.options)
	},
	{ immediate: true, deep: true }
)
props.showOrder && gridOptions.value.columns.unshift({ type: 'seq', title: '序号' })
props.showOprate && gridOptions.value.columns.push({
	title: '操作',
	fixed: 'right',
	slots: { default: 'operate' },
	minWidth: '200px'
})
// 是否多选状态
const multiple = computed(() => gridOptions.value.columns.some(item => item.type === 'checkbox'))

// 表格顶部多选提示
const topTip = computed(() => `您已选择${checkedRows.value?.length}项`)

// 表格事件
watch(
	() => checkedRows.value,
	(newValue) => {
		emit('checkbox-change', newValue)
	}
)
const gridEvents: VxeGridListeners = {
	radioChange({ newValue }) {
		emit('radio-change', newValue)
	}
}
</script>

<style scoped lang='less'>
@import "style";
</style>