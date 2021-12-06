# Status

后端传过来的数据中，状态 `status` 一般都用 `0` 或者 `1` 来表示，但在前端需要展示文字形式的 **有效** 或 **无效**。

## 基本使用

::: demo 用 `Tag` 来包裹会显得更好看

```vue

<template>
	<n-space>
		<n-button @click='toggleStatus()'>切换状态</n-button>
		<Status :status='status' />
	</n-space>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const status = ref('0')
const toggleStatus = () => {
	status.value = status.value === '1' ? '0' : '1'
}
</script>
```

:::

## 修改展示内容

::: demo 有效无效可能听起来不好听

```vue

<template>
	<n-space>
		<n-button @click='toggleStatus()'>切换状态</n-button>
		<Status :status='status' validText='好' invalidText='不好！'/>
	</n-space>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const status = ref('0')
const toggleStatus = () => {
	status.value = status.value === '1' ? '0' : '1'
}
</script>
```

:::

## API

### Status Props

| 名称        | 说明             | 类型   | 可选值       | 默认值 |
| ----------- | ---------------- | ------ | ------------ | ------ |
| status      | 状态值           | string | `'0'`、`'1'` | `'0'`  |
| validText   | 有效时显示的内容 | string | -            | `'有效'` |
| invalidText | 无效时显示的内容 | string | -            | `'无效'` |