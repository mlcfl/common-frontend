<template>
	<BaseLayoutUi>
		<TeleportUi>
			I am in an overlay container, and should be wrapped in a BaseLayoutUi
		</TeleportUi>
		<TeleportUi target="body">
			I am in {{'<body>'}} and can be used anywhere
		</TeleportUi>
		<TeleportUi :disabled="true">
			I am disabled teleport
		</TeleportUi>
	</BaseLayoutUi>
	<TeleportUi target="body">
		I am in {{'<body>'}} and can be used anywhere
	</TeleportUi>
</template>

<script lang="ts" setup>
import {BaseLayoutUi} from '~/ui';
import {TeleportUi} from './index';
</script>
