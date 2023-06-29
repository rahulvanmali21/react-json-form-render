import "./App.css";
import { FormConfig } from "./Form";
import FormRender from "./components/FormRender";

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

function App() {
  const onSubmit = (values: any) => {
    console.log(values)
    //
  };

  return <FormRender formConfig={formConfig} onSubmit={onSubmit} />;
}

export default App;
