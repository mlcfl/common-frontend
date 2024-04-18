<template>
	<Teleport
		v-if="isMounted === null ? true : isMounted"
		:to="target ?? overlays"
		:disabled
	>
		<slot></slot>
	</Teleport>
</template>

<script lang="ts" setup>
import {inject} from 'vue';
import {BaseLayoutUiKeys} from '~/ui';
import type {TeleportUiProps} from './types';

defineProps<TeleportUiProps>();

const isMounted = inject(BaseLayoutUiKeys.AppMounted, null);
const overlays = inject(BaseLayoutUiKeys.OverlaysRef, null);
</script>
