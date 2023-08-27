<template>
	<render />
</template>

<script setup>
import { h } from 'vue';

const props = defineProps({
	content: String,
});

//const element = document.querySelector('.typewriter');
//console.log(element);
//const contentStyle = getComputedStyle(element);
const render = () => {
	return h('div', {class: 'typewriter sm:text-4xl text-2xl', innerHTML: props.content, style: {
			'display': 'inline-block',
			'font-style': 'inherit', 
			'width': 'fit-content',
			'height': 'fit-content',
			//'white-space': 'nowrap',
			'font-size': '1.8em',
			'line-height': '2rem',
			//'overflow': 'hidden',
			}
		}
	);
};
</script>