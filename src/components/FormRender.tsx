import React, { SyntheticEvent } from "react";
import { FormConfig } from "../Form";
import useForm from "../hooks/use-form";
import { SelectFeild, TextFeild } from "./FormInput";

type Props = {
  formConfig: FormConfig;
  onSubmit: (values: any) => void;
};

const FormRender = ({ formConfig, onSubmit }: Props) => {
  const { values,handleChange } = useForm({
    formConfig,
  });

  const onSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    onSubmit?.(values);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        {formConfig.map((formInput, index: number) => {
          const { type, name, label, placeholder, defaultValue, options } =
            formInput;
          if (type === "select") {
            return (
              <SelectFeild
                key={name}
                name={name}
                label={label}
                defaultValue={defaultValue}
                type={placeholder}
                options={options}
                value={values[name]}
                onChange={(e:any)=>handleChange(name,e.target.value)}
              />
            );
          }
          return (
            <TextFeild
              key={name}
              name={name}
              label={label}
              defaultValue={defaultValue}
              placeholder={placeholder}
              type={type}
              value={values[name]}
              onChange={(e:any)=>handleChange(name,e.target.value)}
            />
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormRender;
