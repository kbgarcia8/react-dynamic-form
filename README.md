# react-dynamic-form
Reusable React dynamic form showcasing editable, expandable and flexible inputs
---

[![npm version](https://img.shields.io/npm/v/%40kbgarcia8%2Freact-dynamic-form
)](https://www.npmjs.com/package/@kbgarcia8/react-dynamic-form)
[![downloads](https://img.shields.io/npm/d18m/%40kbgarcia8%2Freact-dynamic-form
)](https://www.npmjs.com/package/@kbgarcia8/react-dynamic-form)
[![license](https://img.shields.io/github/license/kbgarcia8/react-dynamic-form
)](https://github.com/kbgarcia8/react-dynamic-form/blob/main/LICENSE)
---
## 🛠️ Features
- 🖌️ Themeing support via styled components
- 🆗 Typescript support
- ↔️ Expandable and editable via nested form structure
- 🧩 Ease of integration in any React project
---
## 📦 Installation
```bash
npm install @kbgarcia8/react-dynamic-form
# or
yarn add @kbgarcia8/react-dynamic-form
```
---
## ⚙️ Usage

### Case 1: Using fieldsets prop
#### Supports multi-section forms that allows multiple groups of related inputs

This is designed for scenarios where your for needs to be split into <b>multiple groups of input</b> each representing <b>different types of information</b>

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

### Case 2: Using formInputs prop
#### Supports single-section form that only needs one group of information

A legend text is optional in this part. This is a common/basic form scenario. It only needs an array of inputs which is rendered as a single form

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

## 📚 API
### Dynamic Form Props
| Prop      | Type         | Default  | Description                     |
| --------- | ------------ | -------- | ------------------------------- |
| `message` | `string`     | `"Hi"`   | Text displayed by the component |
| `color`   | `string`     | `"blue"` | Text color                      |
| `onClick` | `() => void` | —        | Click event handler             |

#### For more information on props types see:
[![propTypes](https://img.shields.io/badge/propTypes-dist%2Ftype%2FpropTypes.d.ts-blue?link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40kbgarcia8%2Freact-dynamic-form%3FactiveTab%3Dcode
)](https://www.npmjs.com/package/@kbgarcia8/react-dynamic-form?activeTab=code)
