import CheckboxUi from './CheckboxUi.vue';

export type CheckboxUiRef = InstanceType<typeof CheckboxUi> | null;
export type CheckboxUiValue = boolean | null;
export type CheckboxUiModel = CheckboxUiValue | Record<string, CheckboxUiValue>;

export type CheckboxUiOptions = {
	readonly labelAttrs?: Record<string, unknown>;
	readonly inputAttrs?: Record<string, unknown>;
	readonly boxAttrs?: Record<string, unknown>;
	readonly markAttrs?: Record<string, unknown>;
	readonly textAttrs?: Record<string, unknown>;
};

export type CheckboxUiProps = {
	readonly name: string;
	readonly value?: string;
	readonly text?: string;
	readonly textPosition?: 'top' | 'right' | 'bottom' | 'left';
	readonly checked?: CheckboxUiValue;
	readonly disabled?: boolean;
	readonly required?: boolean;
	readonly size?: string;
	readonly options?: CheckboxUiOptions;
};
