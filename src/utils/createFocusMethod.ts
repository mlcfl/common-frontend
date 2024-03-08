import {ref} from 'vue';

/**
 * Create a ref and a focus method for vue components
 */
export const createFocusMethod = <T extends HTMLElement = HTMLElement>(options?: FocusOptions) => {
	const element = ref<T | null>(null);
	const focus = () => {
		if (!element.value) {
			return;
		}

		/**
		 * When the focus event is called programmatically, :focus-visible styles are not applied.
		 * To trick the browser, the "contentEditable" is changed if it was not previously provided.
		 * @see https://stackoverflow.com/a/69281866/8165331
		 *
		 * options.focusVisible works only in Firefox
		 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
		 */
		const editable = element.value.contentEditable;

		if (!['inherit', 'false'].includes(editable)) {
			element.value.focus(options);
			return;
		}

		element.value.contentEditable = 'true';
		element.value.focus(options);
		element.value.contentEditable = editable;
	};

	return {
		element,
		focus,
	}
};
