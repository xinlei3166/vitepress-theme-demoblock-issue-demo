<template>
	<n-drawer v-model:show='show'
						@update:show='showUpdate'
						:placement='placement'
						:width='width'
						:height='height'
						v-if="mode === 'drawer'">
		<n-drawer-content :title='title' closable :native-scrollbar='false'>
			<slot name='default' />
			<template #footer v-if='slots.footer'>
				<n-space>
					<slot name='footer' />
				</n-space>
			</template>
		</n-drawer-content>
	</n-drawer>
	<n-modal v-else
					 preset='card'
					 :header-style="{paddingBottom:'0'}"
					 :style="{width: width, overflow:'hidden'}"
					 v-model:show='show'
					 @update:show='showUpdate'>
		<template #header>
			<n-h3 prefix='bar'>{{ title }}</n-h3>
		</template>
		<slot name='default' />
		<template #action v-if='slots.footer'>
			<n-space>
				<slot name='footer' />
			</n-space>
		</template>
	</n-modal>
</template>

<script setup lang='ts'>
import { PropType, useSlots } from 'vue'

const slots = useSlots()

const emits = defineEmits<{
	(event: 'update:show', value: boolean)
}>()
const props = defineProps({
	placement: {
		type: String as PropType<'top' | 'right' | 'bottom' | 'left'>,
		default: 'right'
	},
	width: {
		type: String,
		default: '50%'
	},
	height: String,
	title: String,
	mode: {
		type: String as PropType<'drawer' | 'modal'>,
		default: 'drawer'
	},
	show: {
		type: Boolean,
		default: false
	}
})

// 显示隐藏改变事件
const showUpdate = (value: boolean) => {
	emits('update:show', value)
}
</script>

<style scoped lang='less'>
:deep(.n-drawer-footer) {
	justify-content: flex-start !important;
}
</style>