<style lang="scss" module>
.overlay {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
}
</style>

<template>
	<TeleportUi>
		<Transition :name="animationName ?? 'animation-fade'">
			<div v-if="show" :class="[$style.overlay, 'overlay']" v-bind="$attrs">
				<slot></slot>
			</div>
		</Transition>
	</TeleportUi>
</template>

<script lang="ts" setup>
import {TeleportUi} from '~/ui';
import type {OverlayUiProps} from './types';

defineProps<OverlayUiProps>();
defineOptions({
	inheritAttrs: false,
});
</script>
