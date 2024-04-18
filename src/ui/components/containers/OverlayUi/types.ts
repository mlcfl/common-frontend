import OverlayUi from './OverlayUi.vue';

export type OverlayUiRef = InstanceType<typeof OverlayUi> | null;

export type OverlayUiProps = {
	readonly show: boolean;
	readonly animationName?: string;
};
