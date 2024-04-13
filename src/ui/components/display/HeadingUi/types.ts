import HeadingUi from './HeadingUi.vue';

export type HeadingUiRef = InstanceType<typeof HeadingUi> | null;

export type HeadingUiProps = {
	readonly type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	readonly text?: string;
};
