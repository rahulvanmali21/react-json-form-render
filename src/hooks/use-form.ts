import { useState } from "react";
import { FormConfig, FormInput } from "../Form";

type Arg = {
  formConfig: FormConfig;
};

const getVaribles = (formConfig: FormConfig) => {
  const variables: any = {};
  formConfig.forEach((inputs: FormInput) => {
    variables[inputs.name] = inputs.defaultValue ?? null;
  });
  return variables;
};
const useForm = (arg: Arg) => {
  const [formValues, setFormValues] = useState(getVaribles(arg.formConfig));
  return {
    values: formValues,
  };
  //
};

export default useForm;
