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
    name: "gender",
    label: "Gender",
    type: "select",
    options:["male","female"]
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
