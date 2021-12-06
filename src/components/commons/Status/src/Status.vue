<template>
	<n-tag type='success' v-if="status === '1'">{{ validText }}</n-tag>
	<n-tag type='error' v-else>{{ invalidText }}</n-tag>
</template>

<script setup lang='ts'>
import { PropType } from 'vue'

const props = defineProps({
	status: {
		type: String as PropType<'0' | '1'>,
		default: '0'
	},
	validText: {
		type: String,
		default: '有效'
	},
	invalidText: {
		type: String,
		default: '无效'
	}
})
</script>

<style scoped lang='less'>

</style>