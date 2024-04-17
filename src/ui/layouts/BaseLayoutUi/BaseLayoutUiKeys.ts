import type {Ref, InjectionKey} from 'vue';

export const BaseLayoutUiKeys = {
	AppMounted: Symbol() as InjectionKey<Ref<boolean>>,
	OverlaysRef: Symbol() as InjectionKey<Ref<HTMLElement | null>>,
};
