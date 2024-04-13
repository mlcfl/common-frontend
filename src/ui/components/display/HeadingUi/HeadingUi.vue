<template>
	<component :is="type" :class="['heading', `heading_${type}`]">
		<slot>{{text}}</slot>
	</component>
</template>

<script lang="ts" setup>
import type {HeadingUiProps} from './types';

defineProps<HeadingUiProps>();
</script>
