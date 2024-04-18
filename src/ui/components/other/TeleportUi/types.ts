import type {TeleportProps} from 'vue';
import TeleportUi from './TeleportUi.vue';

export type TeleportUiRef = InstanceType<typeof TeleportUi> | null;

export type TeleportUiProps = {
	readonly target?: TeleportProps['to'];
	readonly disabled?: TeleportProps['disabled'];
};
