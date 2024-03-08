<template>
	<label
		:class="[
			'checkbox',
			textPositionStyle,
			size ? `checkbox_size${size[0].toUpperCase() + size.slice(1)}` : '',
			disabled ? 'checkbox_disabled' : '',
		]"
		:tabindex="disabled ? -1 : 0"
		role="checkbox"
		:aria-checked="ariaChecked"
		:aria-required="required"
		:aria-disabled="disabled"
		ref="label"
		v-bind="options.labelAttrs"
		@keyup="onKeyup"
	>
		<input
			class="checkboxInput"
			type="checkbox"
			ref="input"
			v-bind="options.inputAttrs"
			:name
			:value
			:checked="inputChecked"
			:indeterminate="inputIndeterminate"
			:disabled
			:required
			@change="onChange"
		>
		<slot name="checkbox">
			<div class="checkboxBox" v-bind="options.boxAttrs">
				<Transition name="checkbox">
					<div v-if="inputChecked" class="checkboxMark" v-bind="options.markAttrs"></div>
				</Transition>
				<Transition name="checkbox-mixed">
					<div v-if="inputIndeterminate" class="checkboxMarkMixed" v-bind="options.markAttrs"></div>
				</Transition>
			</div>
		</slot>
		<slot>
			<span
				v-if="text"
				:class="['checkboxText', `checkboxText_${textPosition}`]"
				v-bind="options.textAttrs"
			>
				{{text}}
			</span>
		</slot>
	</label>
</template>

<script lang="ts" setup>
import {ref, computed, onMounted} from 'vue';
import {isUndefined, isBoolean} from 'common/all/utils';
import {createFocusMethod} from '~/utils';
import type {CheckboxUiProps, CheckboxUiModel} from './types';

const props = withDefaults(defineProps<CheckboxUiProps>(), {
	textPosition: 'right',
	checked: undefined,// Important! Otherwise, the default value is the boolean false
	disabled: undefined,
	required: undefined,
	options: () => ({}),
});
const model = defineModel<CheckboxUiModel>({
	default: undefined,// Important! Otherwise, the default value is the boolean false
});

// A key for a model as plain object
// Use the "name" property if "value" is omitted
const key = props.value ?? props.name;

/**
 * Warning if both props.checked and v-model are used
 */
onMounted(() => {
	if (!isUndefined(props.checked) && !isUndefined(model.value)) {
		console.warn('The CheckboxUi component uses both props.checked and v-model. Please remove the "checked" property or v-model.');
	}
});

/**
 * Create checkbox states
 */
// Main state: input is checked or not
const inputChecked = computed<boolean>(() => {
	// If no model
	// props.checked could be undefined | boolean | null
	//
	// false <- [undefined, null]
	// boolean <- [boolean]
	if (isUndefined(model.value)) {
		return props.checked ?? false;
	}

	// If model
	// model could be boolean | null | Record<string, boolean | null>
	//
	// false <- [null]
	// boolean <- [boolean]
	// false <- [Record<string, null>]
	// boolean <- [Record<string, boolean>]
	if (isBoolean(model.value) || model.value === null) {
		return model.value ?? false;
	}

	return model.value[key] ?? false;
});

// Mixed state: input in mixed or normal state
const inputIndeterminate = computed<boolean>(() => {
	// If no model
	// props.checked could be undefined | boolean | null
	//
	// true <- [null]
	if (isUndefined(model.value)) {
		return props.checked === null;
	}

	// If model
	// model could be boolean | null | Record<string, boolean | null>
	//
	// true <- [null]
	// true <- [Record<string, null>]
	if (model.value === null) {
		return true;
	}

	return isBoolean(model.value)
		? false
		: model.value[key] === null;
});

// Aria state: aria-checked state
const ariaChecked = computed<'true' | 'false' | 'mixed'>(() => {
	return inputIndeterminate.value ? 'mixed' : (inputChecked.value ? 'true' : 'false');
});

// Updating states via the model
const onChange = ({target}: Event) => {
	if (!(target instanceof HTMLInputElement) || props.disabled) {
		return;
	}

	const newModelValue = target.indeterminate ? null : target.checked;
	const {value} = model;

	model.value = isUndefined(value) || isBoolean(value) || value === null
		? newModelValue
		: {...value, [key]: newModelValue};
};

/**
 * Text position styles
 */
const textPositionStyle = {
	top: 'checkbox_textTop',
	right: '',
	bottom: 'checkbox_textBottom',
	left: 'checkbox_textLeft',
}[props.textPosition];

/**
 * Component methods
 */
const input = ref<HTMLInputElement | null>(null);

// Focus
const {element: label, focus} = createFocusMethod<HTMLElement>();

// Toggle
const toggle = (checked?: boolean | null, dispatchEvent: boolean = true) => {
	if (!input.value || props.disabled) {
		return;
	}

	if (isBoolean(checked)) {
		input.value.checked = checked;
		input.value.indeterminate = false;
	} else if (isUndefined(checked)) {
		input.value.checked = !input.value.checked;
		input.value.indeterminate = false;
	} else if (checked === null) {
		input.value.checked = false;
		input.value.indeterminate = true;
	}

	if (dispatchEvent) {
		input.value.dispatchEvent(new Event('change', {bubbles: true}));
	}
};

// Check
const check = (dispatchEvent: boolean = true) => toggle(true, dispatchEvent);

// Uncheck
const uncheck = (dispatchEvent: boolean = true) => toggle(false, dispatchEvent);

defineExpose({
	focus,
	toggle,
	check,
	uncheck,
});

/**
 * Toggle checkbox on keyboard press
 */
const onKeyup = (e: Event) => {
	if (e instanceof KeyboardEvent && ['Enter', ' '].includes(e.key)) {
		toggle();
	}
};
</script>
