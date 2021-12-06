<style>
    .demo-block th{
        border: none;
    }

    .demo-block table {
        margin: 0;
        overflow-x: hidden;
    }
    
    .demo-block td {
        border: none;
    }
</style>

# MyTable

项目为了统一表格样式和功能，基于 [Vxe-Table](https://xuliangzhan_admin.gitee.io/vxe-table/v4/table/start/install) 的高级表格进行了封装。

本组件基本功能如下：

- 数据代理
- 树形表格
- 筛选排序
- 懒加载
- 自动分页

- 全屏展示

- 可选列展示

- 主题适配
- 更多功能请查阅 [Vxe-Table官方文档](https://xuliangzhan_admin.gitee.io/vxe-table/v4/table/start/install)

## 基础使用

::: demo 此示例仅供参考，具体用法请查看项目中的实际用法

```vue

<template>
	<n-element tag='div' class='demo'>
		<MyTable ref='table' :options='gridOptions' title='表格'>
			<template #toolbar-buttons>
				<n-button type='primary'>新增</n-button>
			</template>
			<template #operate='{row}'>
				<n-button type='primary' text>新增</n-button>
				<n-button type='error' text>删除</n-button>
			</template>
		</MyTable>
	</n-element>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

// 表格实例
const table = ref()
// 表格配置
const gridOptions = ref({
	columns: [
		{ 
			field: 'hallName',
            title: '所属大厅',
            filters: [
			  { label: '惠州市行政服务大厅',value: '惠州市行政服务大厅' },
			  { label: '龙岗行政服务大厅',value: '龙岗行政服务大厅' },
            ],
            filterMultiple: false 
        },
		{ field: 'floor', title: '楼层', sortable: true },
		{ field: 'liablerName', title: '负责人' },
		{ field: 'phone', title: '联系电话' },
		{ field: 'introduction', title: '介绍' }
	],
	formConfig: {
		items: [
			{
				field: 'liablerName',
				title: '负责人',
				itemRender: { name: '$input' }
			},
			{ itemRender: { name: '$button', props: { content: '查询', type: 'submit', status: 'primary' } } },
			{ itemRender: { name: '$button', props: { content: '重置', type: 'reset' } } }
		]
	},
	proxyConfig: {
		ajax: {
			query: ({ page, form }) => {
				return new Promise(resolve => {
					const data = [
                      { id: "35f0544f042ce804c93ada4ab2874589", floor: "1", liablerName: "姜勇", phone: null, introduction: null, hallName: "惠州市行政服务大厅" },
                      { id: "d5d4b19522f52f5559d6b7ba1d1df7e4", floor: "2", liablerName: "龙叔祥", phone: "15773004156", hallName: "龙岗行政服务大厅" }
                    ]
					const res = {
						code: 200,
						msg: '请求成功',
						total: data.length,
						data: data.filter(item => item.liablerName.includes(form?.liablerName ?? '') )
					}
					setTimeout(() => resolve(res), 100)
				})
			}
		}
	}
})
</script>
```

:::

## 树形表格

::: demo 此示例仅供参考，具体用法请查看项目中的实际用法

```vue
<template>
	<n-element tag='div' class='demo'>
		<MyTable ref='table' :options='gridOptions' title='表格'>
			<template #toolbar-buttons>
				<n-button type='primary'>新增</n-button>
			</template>
			<template #operate='{row}'>
				<n-button type='primary' text>新增</n-button>
				<n-button type='error' text>删除</n-button>
			</template>
		</MyTable>
	</n-element>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

// 表格实例
const table = ref()
// 表格配置
const gridOptions = ref({
	stripe: false,
	columns: [
		{ field: 'dictName', title: '字典名称', treeNode: true },
		{ field: 'dictType', title: '字典类型' }
	],
	treeConfig: {
		transform: true,
		rowField: 'unid',
		parentField: 'punid',
		accordion: true,
		lazy: true,
		hasChild: 'hasChild',
		loadMethod: async ({ $table, row }) => {
			return new Promise(resolve => {
                const res = [ { unid: '333', dictName: `${row.dictName}-1`, dictType: `${row.dictType}-1`, punid: '111'} ]
				resolve(res)
            })
		}
	},
	proxyConfig: {
		ajax: {
			query: () => {
				const data = [
					{ unid: '111', dictName: '111', dictType: '111type', punid: '0', hasChild: true },
                    { unid: '222', dictName: '222', dictType: '222type', punid: '0', hasChild: false },
                ]
				const res = {
					code: 200,
                    msg: '请求成功',
                    total: data.length,
                    data: data
                }
                return new Promise(resolve => resolve(res))
			}
		}
	}
})
</script>
```

:::

## API

### MyTable Props

| 属性             | 说明                                                         | 类型                | 可选值                             | 默认值     |
| ---------------- | ------------------------------------------------------------ | ------------------- | ---------------------------------- | ---------- |
| options          | 表格配置，详情见 [vxe-table-v4 API](https://xuliangzhan_admin.gitee.io/vxe-table/v4/grid/api) | MyTableOptions      | -                                  | -          |
| showOrder        | 是否展示序列号                                               | boolean             | -                                  | `false`    |
| showOprate       | 是否展示行操作列                                             | boolean             | -                                  | `true`     |
| showButton       | 是否展示按钮栏                                               | boolean             | -                                  | `true`     |
| size             | 表格大小                                                     | Size                | `'small'` , `'medium'` , `'large'` | `'medium'` |
| title            | 表格标题                                                     | string              | -                                  | -          |
| @radio-change    | 单选框选中时的回调                                           | (row: any) => void  | -                                  | -          |
| @checkbox-change | 复选框选中时的回调                                           | (rows: any) => void | -                                  | -          |

### MyTable Slots

| 名称            | 参数                                                         | 说明         |
| --------------- | ------------------------------------------------------------ | ------------ |
| toolbar-buttons | -                                                            | 操作栏插槽   |
| operate         | `{row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, _columnIndex}` | 行操作栏插槽 |
