# Checkbox

## Description

This is a classic checkbox of square/circular shape, inside which a toggle element switches to reflect its state. There are three states in total: checked, unchecked, mixed. The label can be positioned on any of the four sides of the checkbox or may be absent.

## Properties

```ts
type CheckboxUiOptions = {
  labelAttrs?: Record<string, unknown>;
  inputAttrs?: Record<string, unknown>;
  boxAttrs?: Record<string, unknown>;
  markAttrs?: Record<string, unknown>;
  textAttrs?: Record<string, unknown>;
};

type CheckboxUiProps = {
  name: string;
  value?: string;
  text?: string;
  textPosition?: 'top' | 'right' | 'bottom' | 'left';
  checked?: boolean | null;
  disabled?: boolean;
  required?: boolean;
  size?: string;
  options?: CheckboxUiOptions;
};
```

## Methods

##### `focus(): void`
Set focus to the checkbox

##### `toggle(checked?: boolean | null, dispatchEvent: boolean = true): void`
Check, uncheck or set mixed the checkbox

##### `check(dispatchEvent: boolean = true): void`
Check the checkbox

##### `uncheck(dispatchEvent: boolean = true): void`
Uncheck the checkbox

## Examples

See [examples.vue](examples.vue)
