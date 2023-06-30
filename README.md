# react-json-form-render

SON Form Render is a React library written in TypeScript that allows you to easily render dynamic forms based on JSON data. It provides a convenient way to define form fields and their properties using JSON, and automatically generates the corresponding form components.

## Features
Render forms dynamically based on JSON data.
Support for a variety of form field types, including text inputs, checkboxes, radio buttons, dropdowns, and more.
Customizable form layout and styling.
Built-in validation and error handling.
Ability to handle form submission and data retrieval.

## Installation
You can install JSON Form Render using npm or Yarn:

```bash
git clone https://github.com/rahulvanmali21/kanban-board.git
```

## Usage
To use JSON Form Render in your React TypeScript project, follow these steps:

Import the necessary components from the library:

```typescript
import { FormRender, FormConfig } from 'json-form-render';
```
Define a JSON schema that describes your form fields:

```typescript
const formConfig: FormConfig = [
  {
    name: "username",
    label: "Username",
    type: "text",
    defaultValue: "rahul",
    validation:{
      required:true
    }
  },
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "mobile",
    label: "Mobile No.",
    type: "tel",
  },
  {
    name: "gender",
    label: "Gender",
    type: "select",
    options:["male","female"]
  },
  {
    name: "send notifications",
    label: "enable_notifications",
    type: "checkbox",
  },
];

```
Create a form component and pass the JSON schema as a prop:

```typescript
const MyForm = () => {
  return (
    <FormRender formConfig={formConfig} onSubmit={onSubmit} />
  );
};
```
Render the form component in your application:

```typescript

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<MyForm />, document.getElementById('root'));
```


## License
JSON Form Render is released under the MIT License. See the LICENSE file for more information.

## Contributing
Contributions are welcome! If you have any bug reports, feature requests, or suggestions, please open an issue on the GitHub repository.
