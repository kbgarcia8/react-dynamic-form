# react-dynamic-form
Reusable React dynamic form showcasing editable, expandable and flexible inputs
---

[![npm version](https://img.shields.io/npm/v/%40kbgarcia8%2Freact-dynamic-form
)](https://www.npmjs.com/package/@kbgarcia8/react-dynamic-form)
[![downloads](https://img.shields.io/npm/d18m/%40kbgarcia8%2Freact-dynamic-form
)](https://www.npmjs.com/package/@kbgarcia8/react-dynamic-form)
---

## Table of Contents
<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
   * [Case 1: Using fieldsets prop](#case-1-using-fieldsets-prop)
      + [Supports multi-section forms that allows multiple groups of related inputs](#supports-multi-section-forms-that-allows-multiple-groups-of-related-inputs)
         - [<u>Example Scenario:</u>](#example-scenario)
   * [Case 2: Using formInputs prop](#case-2-using-forminputs-prop)
      + [Supports single-section form that only needs one group of information](#supports-single-section-form-that-only-needs-one-group-of-information)
         - [<u>Example Scenario:</u>](#example-scenario-1)
- [API](#api)
   * [Dynamic Form Props](#dynamic-form-props)
   * [Additional Props information](#additional-props-information)
      + [For editable input element of formInputs or inputs if fieldsets is used. Declared via inputEntryShape[] as NestedEditableOptionProps](#for-editable-input-element-of-forminputs-or-inputs-if-fieldsets-is-used-declared-via-inputentryshape-as-nestededitableoptionprops)
      + [For editableInformation object inside editable input. Declared as EditableInformation interface. Below is the properties needed:](#for-editableinformation-object-inside-editable-input-declared-as-editableinformation-interface-below-is-the-properties-needed)
      + [For more information on props types see:](#for-more-information-on-props-types-see)
- [Customization](#customization)
   * [Theme Support via styled components](#theme-support-via-styled-components)
      + [Option 1: Users want theming via default Theme provided](#option-1-users-want-theming-via-default-theme-provided)
      + [Option 2: Users want custom theme](#option-2-users-want-custom-theme)
         - [Reminder for custom theme override:](#reminder-for-custom-theme-override)
      + [Example usage of theme using styled-components](#example-usage-of-theme-using-styled-components)
      + [Example usage of theme toggle inside component](#example-usage-of-theme-toggle-inside-component)
   * [Styling components via styled-components](#styling-components-via-styled-components)
      + [Available Default Class Names](#available-default-class-names)
- [Local Development](#local-development)
   * [License](#license)

<!-- TOC end -->


<!-- TOC --><a name="features"></a>
## Features
- 🖌️ Themeing support via styled components
- 🆗 Typescript support
- ↔️ Expandable and editable via nested form structure
- 🧩 Ease of integration in any React project
---
<!-- TOC --><a name="installation"></a>
## Installation
```bash
npm install @kbgarcia8/react-dynamic-form
# or
yarn add @kbgarcia8/react-dynamic-form
```
---
<!-- TOC --><a name="usage"></a>
## Usage

<!-- TOC --><a name="case-1-using-fieldsets-prop"></a>
### Case 1: Using fieldsets prop
<!-- TOC --><a name="supports-multi-section-forms-that-allows-multiple-groups-of-related-inputs"></a>
#### Supports multi-section forms that allows multiple groups of related inputs

This is designed for scenarios where your for needs to be split into <b>multiple groups of input</b> each representing <b>different types of information</b>

<!-- TOC --><a name="example-scenario"></a>
##### <u>Example Scenario:</u>
Cart Logic

- Payment method information
- Billing address
- Shipping address
- Contact details

Each of these becomes its own fieldset inside a single DynamicForm.


```tsx
import { DynamicForm } from '@kbgarcia8/react-dynamic-form'
import type { FieldsetShape } from '@kbgarcia8/react-dynamic-form'

const addressInputsArray = [
    {
      //Input Props
      type: ... as const, id: ..., isRequired: ...,
      //dataAttributes is obtained through map
      disabled: ..., name: ..., value: ..., placeholderText: ...,
      //Start of Label Props
      textLabel: ..., additionalInfo: ..., $labelFlexDirection: ... as const, svg: <.../>,
      //Start of EditableInputProps
      labelClass: ..., inputClass: ..., isEditable: ...,
      //Additional in inputEntryShape
      editIcon: <.../>, //=>editIcon in EditableInputProps
      deleteIcon: <.../>,
      editing: ...,
      //These are informations editable within radio input acting as selection
      editableInformation: [
          {
              name: ...,
              info: ...,
              type: ... as const
          }
      ],
      //onClick functions obtained through map
    }
];

const fieldsets:FieldsetShape[] = [
	{
        legend: "Address Informations",
        inputs: addressInputsArray.map((address, index) => ({
            ...address,
            id: `${address.id}-${index}`,
            onChange: ...,
            onClickEdit: ...,
            onClickDelete: ...,
            onClickSave: ...,
            onClickCancel: ...,
            dataAttributes: {
                "data-index": index
            }
        })),
        isExpandable: true
    },
];

function App() {
  return (
    <DynamicForm
        className={'with-fieldsets'}
        fieldsets={fieldsets}
        id="address"
        isExpandable={true}
        {...props}
    />
  )
}

```

<!-- TOC --><a name="case-2-using-forminputs-prop"></a>
### Case 2: Using formInputs prop
<!-- TOC --><a name="supports-single-section-form-that-only-needs-one-group-of-information"></a>
#### Supports single-section form that only needs one group of information

A legend text is optional in this part. This is a common/basic form scenario. It only needs an array of inputs which is rendered as a single form

<!-- TOC --><a name="example-scenario-1"></a>
##### <u>Example Scenario:</u>
- Profile information
- Login form
- Address form
- Single purpose editable section

```tsx
import { DynamicForm } from '@kbgarcia8/react-dynamic-form'
import type { FieldsetShape } from '@kbgarcia8/react-dynamic-form'

const addressInputsArray = [
    {
      //Input Props
      type: ... as const, id: ..., isRequired: ...,
      //dataAttributes is obtained through map
      disabled: ..., name: ..., value: ..., placeholderText: ...,
      //Start of Label Props
      textLabel: ..., additionalInfo: ..., $labelFlexDirection: ... as const, svg: <.../>,
      //Start of EditableInputProps
      labelClass: ..., inputClass: ..., isEditable: ...,
      //Additional in inputEntryShape
      editIcon: <.../>, //=>editIcon in EditableInputProps
      deleteIcon: <.../>,
      editing: ...,
      //These are informations editable within radio input acting as selection
      editableInformation: [
          {
              name: ...,
              info: ...,
              type: ... as const
          }
      ],
      //onClick functions obtained through map
    }
];

const addressInputs = addressInputsArray.map((address, index) => ({
    ...address,
    id: `${address.id}-${index}`,
    onChange: ...,
    onClickEdit: ...,
    onClickDelete: ...,
    onClickSave: ...,
    onClickCancel: ...,
    dataAttributes: {
        "data-index": index
    }
})),

function App() {
  return (
    <DynamicForm
        className={'with-fieldsets'}
        legendText={'Address Information'}
        formInputs={addressInputs}
        id="address"
        isExpandable={true}
        {...props}
    />
  )
}
```

<!-- TOC --><a name="api"></a>
## API
<!-- TOC --><a name="dynamic-form-props"></a>
### Dynamic Form Props
| Prop      | Type         | Default  | Description                     |
| --------- | ------------ | -------- | ------------------------------- |
| `fieldsets` | `FieldsetShape[]`     | `null`   | Used in multi-section form containing inputs divided into information groups<br><br>If used, legendText and formInputs is no longer needed  |
| `legendText`   | `string`     | — |  |
| `formInputs` | `inputEntryShape[]` | —  |  If no fieldsets is provided, this is an object containing information for label and inputs of a single-section form              |
| `isExpandable`   | `boolean`     | `false` | If inputs are used as options commonly in type: checkbox/radio, this is to enabale a button for entry adding. If fieldset is null this is default to false  |
| `id`   | `string`     | — | Form tag id  |
| `labelAndInputContainerClass`   | `string`     | — | className for `<LabeledInput/>` component inside `<DynamicForm/>` |
| `labelClass`   | `string`     | — | className for `<Label/>` component inside `<LabeledInput/>` component inside `<DynamicForm/>` |
| `inputClass`   | `string`     | — | className for `<Input/>` component inside `<LabeledInput/>` component inside `<DynamicForm/>` |
| `handleEditableInputEntryChange`   | `(e:React.ChangeEvent<HTMLInputElement\|HTMLTextAreaElement>) => void` | — | Function to handle onChange of editable inputs |
| `handleAddingInputEntry`   | `(e:React.MouseEvent<HTMLButtonElement>) => void` | — | Function to add input entry. If isExpandable is false this is not enabled |
| `hasSubmit`   | `boolean`     | `false` | This is to enable submit button for `<DynamicForm/>` |
| `submitText`   | `string`     | `Submit` | Text inside submit button for `<DynamicForm/>` |
| `handleSubmit`   | `(e:React.MouseEvent<HTMLButtonElement>) => void`     | — | Function to handle submit logic for `<DynamicForm/>` |
| `hasReset`   | `boolean`     | `false` | This is to enable reset button for `<DynamicForm/>` |
| `resetText`   | `string`     | `Reset` | Text inside reset button for `<DynamicForm/>` |
| `handleReset`   | `(e:React.MouseEvent<HTMLButtonElement>) => void`     | — | Function to handle reset logic for `<DynamicForm/>` |
| `hasCancel`   | `boolean`     | `false` | This is to cancel submit button for `<DynamicForm/>` |
| `cancelText`   | `string`     | `Cancel` | Text inside cancel button for `<DynamicForm/>` |
| `handleCancel`   | `(e:React.MouseEvent<HTMLButtonElement>) => void`     | — | Function to handle cancel logic for `<DynamicForm/>` |
| `handleSubmitForm`   | `(e:React.FormEvent<HTMLFormElement>) => void`     | — | Function to handle form submit logic for `<DynamicForm/>` |
| `className`   | `string`     | — | className for `<DynamicForm/>` |
| `children`   | `React.ReactNode`     | — | React node/s or component placed after `<FormActionButtons/>` inside `<DynamicForm/>` |

<!-- TOC --><a name="additional-props-information"></a>
### Additional Props information
<!-- TOC --><a name="for-editable-input-element-of-forminputs-or-inputs-if-fieldsets-is-used-declared-via-inputentryshape-as-nestededitableoptionprops"></a>
#### For editable input element of formInputs or inputs if fieldsets is used. Declared via inputEntryShape[] as NestedEditableOptionProps
| Prop      | Type         | Default  | Description                     |
| --------- | ------------ | -------- | ------------------------------- |
| `uniqueClass`   | `string`     | — | className to uniquely select/distinguish a LabeledInput container |
| `isEditable`   | `boolean`     | — | To determine if an input is editable or not<br>If false, all props below are automatically not needed |
| `editing`   | `boolean`     | — | To identify if an editable input is being modified<br>Can be used in open/close dialogs |
| `onClickEdit`   | `(e:React.MouseEvent<HTMLButtonElement>) => void`     | — | Function to handle edit logic of editable input |
| `editIcon`   | `React.ReactNode`     | — | TSX/JSX svg component that will serve as an icon for edit button of editable input |
| `onClickDelete`   | `(e:React.MouseEvent<HTMLButtonElement>) => void`     | — | Function to handle delete logic of editable input |
| `deleteIcon`   | `React.ReactNode`     | — | TSX/JSX svg component that will serve as an icon for delete button of editable input |
| `onClickSave`   | `(e:React.MouseEvent<HTMLButtonElement>) => void`     | — | Function to handle save logic of editable input |
| `onClickCancel`   | `(e:React.MouseEvent<HTMLButtonElement>) => void`     | — | Function to handle cancel logic of editable input |

<!-- TOC --><a name="for-editableinformation-object-inside-editable-input-declared-as-editableinformation-interface-below-is-the-properties-needed"></a>
#### For editableInformation object inside editable input. Declared as EditableInformation interface. Below is the properties needed:
| Property      | Type         | Description                     |
| --------- | ------------ | ------------------------------- |
| `name`   | `string`     | Serves as placeholder text for editable input |
| `info`   | `string`     | Serves as value for editable input |
| `type`   | `string`     | Input type of editable input |


<!-- TOC --><a name="for-more-information-on-props-types-see"></a>
#### For more information on props types see:
[![propTypes](https://img.shields.io/badge/dist%2Ftype%2FpropTypes.d.ts-blue?link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40kbgarcia8%2Freact-dynamic-form%3FactiveTab%3Dcode
)](https://www.npmjs.com/package/@kbgarcia8/react-dynamic-form?activeTab=code)

Note that types/interfaces are also exported via npm package and can be imported as shown below:

```tsx
import type { FieldsetShape, inputEntryShape } from '@kbgarcia8/react-dynamic-form'
```

<!-- TOC --><a name="customization"></a>
## Customization
<!-- TOC --><a name="theme-support-via-styled-components"></a>
### Theme Support via styled components

<!-- TOC --><a name="option-1-users-want-theming-via-default-theme-provided"></a>
#### Option 1: Users want theming via default Theme provided
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeContextProvider } from '@kbgarcia8/react-dynamic-form'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>,
)
```
<!-- TOC --><a name="option-2-users-want-custom-theme"></a>
#### Option 2: Users want custom theme
You allow overriding currentTheme:
```tsx
<ThemeContextProvider initialTheme={myCustomLightTheme} secondTheme={myCustomDarkTheme}>
  <DynamicForm />
</ThemeContextProvider>
```

<!-- TOC --><a name="reminder-for-custom-theme-override"></a>
##### Reminder for custom theme override:

Below is the supported format for creating a theme object. Usually consisting of light and dark theme

asColor function is used to ensure that color to be supplied in color properties are colors (e.g. hexcode and rgb code). Note that keys of colors are changeable since it has type ``

```tsx
import { asColor } from '@kbgarcia8/react-dynamic-form'

export const lightTheme:Theme = {
    name: 'light',
    colors: {
        text: asColor('#333446'),
        bg: asColor('#EEEEEE'),
        ...
    }
}

export const darkTheme:Theme = {
    name: 'dark',
    colors: {
        bg: asColor('#333446'),
        text: asColor('#EEEEEE'),
        ...
    }
}
```

<!-- TOC --><a name="example-usage-of-theme-using-styled-components"></a>
#### Example usage of theme using styled-components
Inside \<Component\>.styles.[ts | js]
```tsx
export const DefaultButton = styled.button`
  color: ${({theme})=> theme.colors.bg || 'white'};
`
```

<!-- TOC --><a name="example-usage-of-theme-toggle-inside-component"></a>
#### Example usage of theme toggle inside component
```tsx
import useTheme from '@kbgarcia8/react-dynamic-form'

const ThemeToggleButton = () => {
  const { currentTheme, toggleTheme } = useTheme();

  const isDark = currentTheme.name === 'dark' ? true : false;

  return (
    <Styled.Root
      checked={isDark}
      onCheckedChange={toggleTheme}
    >
      <Styled.Thumb $isDark={isDark}>
        {isDark ? <Moon size={20} /> : <Sun size={20} />}
      </Styled.Thumb>
    </Styled.Root>
  );
}
```

<!-- TOC --><a name="styling-components-via-styled-components"></a>
### Styling components via styled-components
<!-- TOC --><a name="available-default-class-names"></a>
#### Available Default Class Names
Every renderable part of the form receives predictable classes or id:
| Component                    | Default class name                                    | Notes                       |
| ---------------------------- | ----------------------------------------------------- | --------------------------- |
| **Form**                     | `${id}-form`                                          | Root form container         |
| **Fieldset Wrapper**         | `${id}-fieldset-wrapper`                              | One per fieldset            |
| **Fieldset**                 | `${legend}-fieldset`                                  | Based on fieldset legend    |
| **Legend**                   | `${legend}-legend`                                    | Based on fieldset legend    |
| **LabeledInput container**   | `${labelAndInputContainerClass} ${input.uniqueClass}` | User-controlled             |
| **Label**                    | `${inputClass}`                                       | User-controlled (inside LabeledInput)             |
| **Input**                    | `${labelAndInputContainerClass} ${input.uniqueClass}` | User-controlled (inside LabeledInput)             |
| **Add Entry Button**         | `add-input-entry`                                     | Used when `isExpandable`    |
| **Add Entry Button Wrapper** | `add-input-button-space`                              |                             |
| **No Entry Message**         | *default styled component*                            | Target using parent wrapper |
| **Children Container**       | `children-container`                                  |                             |

```ts
import styled from "styled-components";
import { DynamicForm } from "@kbgarcia8/react-dynamic-form";

const StyledMyForm = styled(DynamicForm)`
  &.address-form {...}

  .address-fieldset-wrapper {...}

  .add-input-entry {...}

  .children-container {...}

  .<labelInputContainerClass> {...}

  .<inputClass> {...}

  .<labelClass> {...}
`;
```

<!-- TOC --><a name="local-development"></a>
## Local Development
```bash
git clone https://github.com/kbgarcia8/react-dynamic-form
cd react-dynamic-form
npm install
npm run dev
```
<!-- TOC --><a name="license"></a>
### License
[![license](https://img.shields.io/github/license/kbgarcia8/react-dynamic-form
)](https://github.com/kbgarcia8/react-dynamic-form/blob/main/LICENSE)