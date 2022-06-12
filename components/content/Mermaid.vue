<script setup lang="ts">
import {  ref, onMounted, watchEffect, useColorMode } from '#imports'

const mermaid = ref()
const container = ref()
const diagram = ref('')
const loaded = ref(false)
const colorMode = useColorMode()
const props = defineProps<{
	id: string
}>()
const insertSvg = function(svgCode, bindFunctions){
  container.value.innerHTML = svgCode;
  loaded.value = true
};
onMounted(() => {
	diagram.value = container.value.innerText
	import("mermaid/dist/mermaid").then(m => {
		mermaid.value = m
	})
})
watchEffect(() => {
	if (mermaid.value && container.value) {
		mermaid.value.initialize({
			startOnLoad: false, 
			theme: colorMode.value === 'dark' ? 'dark' : 'neutral',
		});
		mermaid.value.render(props.id, diagram.value, insertSvg)
	}
})
</script>

<template>
	<div class="mermaid" ref="container" v-show="loaded">
		<slot></slot>
	</div>
</template>

<style>
.mermaid .actor, 
.mermaid .messageText, 
.mermaid .loopText, 
.mermaid .labelText, 
.mermaid .labelText>span {
  font-family: var(--font-family) !important;
}
html.dark .mermaid .actor-man circle, 
html.dark .mermaid line {
  stroke: #5a586a !important;
}
html.dark .mermaid .note {
  fill: #1f2020 !important;
}
html.dark .mermaid .actor {
  stroke: #5a586a !important;
}
html.dark .mermaid .labelBox {
  stroke: #5a586a !important;
}
</style>