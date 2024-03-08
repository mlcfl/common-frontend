<style lang="scss">
// Basic styles
h2 {
	width: 100%;
	margin: 0 0 10px;
	font-size: 20px;
}

button,
span {
	font-size: 16px;
}

.block {
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	margin-bottom: 10px;
	padding: 10px;
	border: 1px solid black;

	&:first-of-type {
		margin-top: 10px;
	}

	& &:first-of-type {
		margin-top: 0;
	}
}
</style>

<style lang="scss">
// Some checkbox styles
.checkboxInput:checked + .svg {
	color: green;
}

.checkbox_size-big .checkboxBox {
	width: 30px;
	height: 30px;
}
</style>

<template>
	<form class="block" @submit.prevent="(e) => onFormSubmit(e, 'Form 1 submit')">
		<h2>Checkboxes with nothing in 3 states</h2>
		<CheckboxUi name="checkbox1" text="Unchecked" />
		<CheckboxUi name="checkbox2" text="Unchecked with prop" :checked="false" />
		<CheckboxUi name="checkbox3" text="Checked" :checked="true" />
		<CheckboxUi name="checkbox4" text="Mixed" :checked="null" />
		<button type="submit">Submit row 1</button>
	</form>

	<form class="block" @submit.prevent="(e) => onFormSubmit(e, 'Form 2 submit')">
		<h2>Checkboxes with the different text position</h2>
		<CheckboxUi name="checkbox5" text="Text right" text-position="right" />
		<CheckboxUi name="checkbox6" text="Text left" text-position="left" />
		<CheckboxUi name="checkbox7" text="Text top" text-position="top" />
		<CheckboxUi name="checkbox8" text="Text bottom" text-position="bottom" />
		<button type="submit">Submit row 2</button>
	</form>

	<div class="block">
		<h2>Checkboxes with v-model</h2>
		<CheckboxUi name="checkbox9" text="V-model" v-model="checkbox9Model" @change="on9Change" />
		<CheckboxUi name="checkbox10" text="V-model initial true" v-model="checkbox10Model" @change="on10Change" />
		<CheckboxUi name="checkbox11" text="V-model initial mixed" v-model="checkbox11Model" @change="on11Change" />
	</div>

	<form class="block" @submit.prevent="(e) => onFormSubmit(e, 'Form 4 submit')">
		<h2>Disabled checkboxes</h2>
		<CheckboxUi name="checkbox12" text="Disabled unchecked" :disabled="true" />
		<CheckboxUi name="checkbox13" text="Disabled checked" :checked="true" :disabled="true" />
		<CheckboxUi name="checkbox14" text="Disabled mixed" :checked="null" :disabled="true" />
		<button type="submit">Submit row 4</button>
	</form>

	<div class="block">
		<h2>Checkboxes with the initial state and v-model (do not use this approach)</h2>
		<CheckboxUi name="checkbox15" text="Initial state and v-model" :checked="true" v-model="checkbox15Model" @change="on15Change" />
	</div>

	<form class="block" @submit.prevent="(e) => onFormSubmit(e, 'Form 6 submit')">
		<h2>Checkboxes with "size", "required" and "options" properties</h2>
		<CheckboxUi name="checkbox16" text="Resized checkbox" size="big" />
		<CheckboxUi name="checkbox17" text="Checkbox with options" :options="{
			labelAttrs: {style: {outline: '1px solid red'}},
			textAttrs: {title: 'I am text'},
		}" />
		<CheckboxUi name="checkbox25" :options="{boxAttrs: {title: 'Checkbox without text'}}" />
		<CheckboxUi name="checkbox26" text="Required checkbox" :required="true" />
		<button type="submit">Submit row 6</button>
	</form>

	<form class="block" @submit.prevent="(e) => onFormSubmit(e, 'Form 7 submit')">
		<h2>Using slots</h2>
		<CheckboxUi name="checkbox18">
			<span>Slot with a text</span>
		</CheckboxUi>
		<CheckboxUi name="checkbox19" text="Slot with a custom checkbox">
			<template #checkbox>
				<svg class="svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<path d="M18.25,3 C19.7687831,3 21,4.23121694 21,5.75 L21,18.25 C21,19.7687831 19.7687831,21 18.25,21 L5.75,21 C4.23121694,21 3,19.7687831 3,18.25 L3,5.75 C3,4.23121694 4.23121694,3 5.75,3 L18.25,3 Z M18.25,4.5 L5.75,4.5 C5.05964406,4.5 4.5,5.05964406 4.5,5.75 L4.5,18.25 C4.5,18.9403559 5.05964406,19.5 5.75,19.5 L18.25,19.5 C18.9403559,19.5 19.5,18.9403559 19.5,18.25 L19.5,5.75 C19.5,5.05964406 18.9403559,4.5 18.25,4.5 Z M10,14.4393398 L16.4696699,7.96966991 C16.7625631,7.6767767 17.2374369,7.6767767 17.5303301,7.96966991 C17.7965966,8.23593648 17.8208027,8.65260016 17.6029482,8.94621165 L17.5303301,9.03033009 L10.5303301,16.0303301 C10.2640635,16.2965966 9.84739984,16.3208027 9.55378835,16.1029482 L9.46966991,16.0303301 L6.46966991,13.0303301 C6.1767767,12.7374369 6.1767767,12.2625631 6.46966991,11.9696699 C6.73593648,11.7034034 7.15260016,11.6791973 7.44621165,11.8970518 L7.53033009,11.9696699 L10,14.4393398 L16.4696699,7.96966991 L10,14.4393398 Z" fill="currentColor"></path>
				</svg>
			</template>
		</CheckboxUi>
		<CheckboxUi name="checkbox20">
			<template #checkbox>
				<svg class="svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<path d="M18.25,3 C19.7687831,3 21,4.23121694 21,5.75 L21,18.25 C21,19.7687831 19.7687831,21 18.25,21 L5.75,21 C4.23121694,21 3,19.7687831 3,18.25 L3,5.75 C3,4.23121694 4.23121694,3 5.75,3 L18.25,3 Z M18.25,4.5 L5.75,4.5 C5.05964406,4.5 4.5,5.05964406 4.5,5.75 L4.5,18.25 C4.5,18.9403559 5.05964406,19.5 5.75,19.5 L18.25,19.5 C18.9403559,19.5 19.5,18.9403559 19.5,18.25 L19.5,5.75 C19.5,5.05964406 18.9403559,4.5 18.25,4.5 Z M10,14.4393398 L16.4696699,7.96966991 C16.7625631,7.6767767 17.2374369,7.6767767 17.5303301,7.96966991 C17.7965966,8.23593648 17.8208027,8.65260016 17.6029482,8.94621165 L17.5303301,9.03033009 L10.5303301,16.0303301 C10.2640635,16.2965966 9.84739984,16.3208027 9.55378835,16.1029482 L9.46966991,16.0303301 L6.46966991,13.0303301 C6.1767767,12.7374369 6.1767767,12.2625631 6.46966991,11.9696699 C6.73593648,11.7034034 7.15260016,11.6791973 7.44621165,11.8970518 L7.53033009,11.9696699 L10,14.4393398 L16.4696699,7.96966991 L10,14.4393398 Z" fill="currentColor"></path>
				</svg>
			</template>
			<span>
				Slot with a custom checkbox and text <a href="#">(click to nothing)</a>
			</span>
		</CheckboxUi>
		<button type="submit">Submit row 7</button>
	</form>

	<form class="block" @submit.prevent="(e) => onFormSubmit(e, 'Form 8 submit')">
		<h2>Checkboxes with the same "name"</h2>
		<CheckboxUi name="checkbox21" value="value1" text="Unchecked" />
		<CheckboxUi name="checkbox21" value="value2" text="Checked" :checked="true" />
		<CheckboxUi name="checkbox21" value="value3" text="Mixed" :checked="null" />
		<button type="submit">Submit row 8</button>
	</form>

	<div class="block">
		<h2>Checkboxes with the same "name" and v-model</h2>
		<CheckboxUi name="checkbox22" value="value1" text="Unchecked" v-model="checkbox22Model" />
		<CheckboxUi name="checkbox22" value="value2" text="Checked" v-model="checkbox22Model" />
		<CheckboxUi name="checkbox22" value="value3" text="Mixed" v-model="checkbox22Model" />
		<button type="button" @click="on22Click">Submit row 9</button>
	</div>

	<form class="block" @submit.prevent="(e) => onFormSubmit(e, 'Form 10 submit')">
		<h2>Checkbox public methods</h2>
		<div class="block">
			<CheckboxUi name="checkbox23" text="Unchecked without model" ref="checkbox23" />
			<button type="button" @click="focusOn23">Focus</button>
			<button type="button" @click="toggle23">Toggle</button>
			<button type="button" @click="check23">Check</button>
			<button type="button" @click="uncheck23">Uncheck</button>
			<button type="button" @click="setMixed23">Set mixed</button>
		</div>
		<div class="block">
			<CheckboxUi name="checkbox24" text="Unchecked with model" ref="checkbox24" v-model="checkbox24Model" @change="on24Change" />
			<button type="button" @click="focusOn24">Focus</button>
			<button type="button" @click="toggle24">Toggle</button>
			<button type="button" @click="check24">Check</button>
			<button type="button" @click="uncheck24">Uncheck</button>
			<button type="button" @click="setMixed24">Set mixed</button>
		</div>
		<button type="submit">Submit row 10</button>
	</form>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {CheckboxUi, type CheckboxUiRef, type CheckboxUiValue} from './index';

/**
 * Form submit without models
 */
const onFormSubmit = ({target}: Event, text: string) => {
	if (!(target instanceof HTMLFormElement)) {
		return;
	}

	const form = new FormData(target);
	const data = [...form.entries()];
	console.log(text, data);
};

/**
 * Models
 */
const checkbox9Model = ref<CheckboxUiValue>(false);
const checkbox10Model = ref<CheckboxUiValue>(true);
const checkbox11Model = ref<CheckboxUiValue>(null);

const on9Change = () => console.log('Model 9 changed, new value is', checkbox9Model.value);
const on10Change = () => console.log('Model 10 changed, new value is', checkbox10Model.value);
const on11Change = () => console.log('Model 11 changed, new value is', checkbox11Model.value);

/**
 * Bad model
 */
const checkbox15Model = ref<CheckboxUiValue>(false);
const on15Change = () => console.log('Model 15 changed, new value is', checkbox15Model.value);

/**
 * Model as object
 */
const checkbox22Model = ref<Record<string, CheckboxUiValue>>({
	value1: false,
	value2: true,
	value3: null,
});

const on22Click = () => console.log(
	'Model 22 changed, new value is',
	checkbox22Model.value,
	checkbox22Model.value.value1,
	checkbox22Model.value.value2,
	checkbox22Model.value.value3
);

/**
 * Public methods
 */
const checkbox23 = ref<CheckboxUiRef>(null);
const focusOn23 = () => checkbox23.value?.focus();
const toggle23 = () => checkbox23.value?.toggle();
const check23 = () => checkbox23.value?.check();
const uncheck23 = () => checkbox23.value?.uncheck();
const setMixed23 = () => checkbox23.value?.toggle(null);

const checkbox24 = ref<CheckboxUiRef>(null);
const checkbox24Model = ref<CheckboxUiValue>(false);
const focusOn24 = () => checkbox24.value?.focus();
const toggle24 = () => checkbox24.value?.toggle();
const check24 = () => checkbox24.value?.check();
const uncheck24 = () => checkbox24.value?.uncheck();
const setMixed24 = () => checkbox24.value?.toggle(null);
const on24Change = () => console.log('Model 24 changed, new value is', checkbox24Model.value);
</script>
