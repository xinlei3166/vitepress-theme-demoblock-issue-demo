# FormWrapper

项目为统一表单等二级页面的显示方式，基于 Naive UI 的 [模态框](https://www.naiveui.com/zh-CN/light/components/modal) 和 [抽屉](https://www.naiveui.com/zh-CN/light/components/drawer) 进行了封装。

本组件基本功能如下：

- 可切换展示形式
- 可配置标题
- 可配置底部操作栏
- 优化后的滚动

## 基本使用

::: demo 默认展示形式为抽屉

```vue

<template>
	<n-button @click='open()'>打开试试</n-button>
	<FormWrapper title='demo' v-model:show='show'>
		<h1 v-for='item in 50'>content</h1>
		<template #footer>
			<n-button>按钮</n-button>
		</template>
	</FormWrapper>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

// 显隐状态
const show = ref(false)
// 打开容器
const open = () => {
	show.value = true
}
</script>
```

:::

## 弹窗形式

::: demo 客户可能会想要弹窗形式

```vue

<template>
	<n-button @click='open()'>打开试试</n-button>
	<FormWrapper title='demo' mode='modal' v-model:show='show'>
		<h1>content</h1>
		<template #footer>
			<n-button>按钮</n-button>
		</template>
	</FormWrapper>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

// 显隐状态
const show = ref(false)
// 打开容器
const open = () => {
	show.value = true
}
</script>
```

:::

## 弹窗方向

::: demo 从下往上比较像像抽屉

```vue

<template>
	<n-button @click='open()'>打开试试</n-button>
	<FormWrapper title='demo' placement='bottom' v-model:show='show'>
		<h1 v-for='item in 50'>content</h1>
		<template #footer>
			<n-button>按钮</n-button>
		</template>
	</FormWrapper>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

// 显隐状态
const show = ref(false)
// 打开容器
const open = () => {
	show.value = true
}
</script>
```

:::

## API

### FormWrapper Props

| 名称         | 说明                                                    | 类型                    | 可选值                                   | 默认值     |
| ------------ | ------------------------------------------------------- | ----------------------- | ---------------------------------------- | ---------- |
| placement    | 抽屉弹出方向                                            | string                  | `'top'`、`'bottom'`、`'left'`、`'right'` | `'right'`  |
| width        | 抽屉（placement 为 `'left'` 或 `'right'` 时）及弹窗宽度 | string                  | -                                        | `'50%'`    |
| height       | 抽屉高度（placement 为 `'top'` 或 `'bottom'` 时）       | string                  | -                                        | `'50%'`    |
| title        | 标题                                                    | string                  | -                                        | -          |
| mode         | 展示形式                                                | string                  | `'modal'`、`'drawer'`                    | `'drawer'` |
| v-model:show | 是否显示                                                | boolean                 | -                                        | `false`    |
| @update:show | 关闭时的回调                                            | (show: boolean) => void | -                                        | -          |

### FormWrapper Slots

| 名称    | 参数 | 说明     |
| ------- | ---- | -------- |
| default | -    | 默认插槽 |
| footer  | -    | 底部插槽 |

