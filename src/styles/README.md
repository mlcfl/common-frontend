# General style entities

## Description

Consists of:
1. `config` - configuration file with the basic settings and SCSS variables;
2. `base` - basic styles that do not change from project to project (from application to application) and rely on tag selectors;
3. `mixins` - mixins that can be used in the project.

## Usage

Basic styles are included **once** at the entry point into the project (the application):
```scss
@use 'common-fe/styles/base';
```

Mixins and configuration file can be included **anywhere** in the project:
```scss
@use 'common-fe/styles/config';
@use 'common-fe/styles/mixins';

.element {
  margin: config.$baseMargin;
  padding: config.<parameter name>;
}

.element {
  @include mixins.onHover {
    color: red;
  }
  @include mixins.<mixin name>;
}
```
