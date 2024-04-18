<style lang="scss">
.overlay {
	background-color: rgba(0 0 0 / 0.1);
}

.someStyle {
	display: flex;
	justify-content: center;
	align-items: center;
	font: var(--font-default);
}
</style>

<template>
	<BaseLayoutUi>
		<OverlayUi :show="true" class="someStyle">
			I am an overlay and use {{'<TeleportUi>'}} inside, and should be wrapped in a BaseLayoutUi
		</OverlayUi>
	</BaseLayoutUi>
</template>

<script lang="ts" setup>
import {BaseLayoutUi} from '~/ui';
import {OverlayUi} from './index';
</script>
