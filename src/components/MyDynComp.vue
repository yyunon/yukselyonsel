<template>
	<render />
</template>

<script setup>
import { h } from 'vue';

const props = defineProps({
	content: String,
});


const render = () => {
	return h('div', {class: 'comp', innerHTML: props.content, style: {
			'display': 'block',
			'font-style': 'inherit', 
			'width': 'fit-content',
			'height': 'fit-content',
			//'white-space': 'nowrap',
			//'overflow': 'hidden',
			}
		}
	);
};
</script>