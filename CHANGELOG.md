# Changelog

## [1.0.1] - 2025-11-29
- Test Run of NPM Publish

## [1.0.2] - [1.0.7] - 2025-11-30
### Summary of Changes
### Added/Fixed
- Bug and alignment fixes

## [1.0.9] - 2025-11-30
### Summary of Changes
### Added/Fixed
- Added conditional typing via union discrminitation to DynamicFormProps
- Export of types
- Made ref optional in inputs

## [1.1.0] - [1.1.3] - 2025-12-01
### Summary of Changes
### Fixed
- Passing of dataAttributes on molecule component above must not be spread

### [1.1.4] - 2025-12-02
### Summary of Changes
### Removed
- Removed never type for labelAndInputContainerClass if fieldset not null

### Added
- Added labelAndInputContainerClass as conditional prop in DynamicFormProps
- Added className FieldsetWrapper for distinct selector when styling using styled-components

### [1.1.6] - 2025-12-03
### Summary of Changes
### Removed
- delete logics for DynamicForm

### Added
- Changed edit logics to reset logics for DynamicForm
- initialTheme and secondTheme props in ThemecontextProvider to allow override of theme

### [1.1.7] - [1.0.13] - 2025-12-03
### Summary of Changes
### Fixes
- Enclosed text information of label in a container to improve flex direction styling
- Fixed augmentation to override of DefaultTheme of styled components

### [1.1.14] - [1.0.24] - 2025-12-03
### Summary of Changes
### Fixes/Adjustments
- Used to fix redundant numbering in legend text of editable input options
- Restricted editable/editing properties and props to radio and checkbox input types since it is only expected scenario
- Fixed custom hook's (useTheme) context type declaration