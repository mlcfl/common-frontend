<style lang="scss">
.app {
	// When using modals, set them to "position: absolute" instead of "position: fixed".
	// This allows to attach modals to the .app and resize them if the .app size changes.
	position: relative;
	width: 100%;
	height: 100%;
}
</style>

<style lang="scss" module>
// The main entry wrapper that provides a scrollbar and proper display of modals
.appBox {
	width: 100%;
	height: 100%;
	overflow-y: auto;
}

// The main entry to content
.appEntry {
	width: 100%;
	min-height: 100%;
}
</style>

<template>
	<div :class="$style.appBox">
		<div :class="$style.appEntry">
			<slot></slot>
		</div>
	</div>
	<div ref="overlays"></div>
</template>

<script lang="ts" setup>
import {ref, provide, onMounted, onUnmounted} from 'vue';
import {BaseLayoutUiKeys} from './BaseLayoutUiKeys';

const mounted = ref(false);
const overlays = ref<HTMLElement | null>(null);// teleport ref to overlays container

onMounted(() => mounted.value = true);
onUnmounted(() => mounted.value = false);

provide(BaseLayoutUiKeys.AppMounted, mounted);
provide(BaseLayoutUiKeys.OverlaysRef, overlays);
</script>
