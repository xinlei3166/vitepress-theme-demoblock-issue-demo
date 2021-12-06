<template>
	<n-radio-group v-model:value='value' @update:value='radioUpdate'>
		<n-space>
			<n-radio value='0'>女</n-radio>
			<n-radio value='1'>男</n-radio>
		</n-space>
	</n-radio-group>
</template>

<script setup lang='ts'>
const emits = defineEmits<{
	(event: 'update:value', value: string): void
}>()
const props = defineProps({
	value: String
})

const radioUpdate = (value: string) => {
	emits('update:value', value)
}
</script>

<style scoped lang='less'>

</style>