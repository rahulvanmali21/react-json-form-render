import "./App.css";
import { FormConfig } from "./Form";
import FormRender from "./components/FormRender";

const formConfig: FormConfig = [
  {
    name: "username",
    label: "Username",
    type: "text",
    defaultValue: "rahul",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
];

function App() {
  const onSubmit = (values: any) => {
    //
  };

  return <FormRender formConfig={formConfig} onSubmit={onSubmit} />;
}

export default App;
