import React, { SyntheticEvent } from "react";
import { FormConfig, FormInput } from "../Form";
import useForm from "../hooks/use-form";
import { SelectFeild, TextFeild } from "./FormInput";

type Props = {
  formConfig: FormConfig;
  onSubmit: (values: any) => void;
};

const FormRender = ({ formConfig, onSubmit }: Props) => {
  const { values, handleChange } = useForm({
    formConfig,
  });

  const onSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    onSubmit?.(values);
  };

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    handleChange(event.target.name, event.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        {formConfig.map((formInput: FormInput) => {
          const { type, name } = formInput;
          if (type === "select") {
            return (
              <SelectFeild
                formInput={formInput}
                value={values[name]}
                onChange={changeHandler}
              />
            );
          }
          return (
            <TextFeild
              formInput={formInput}
              value={values[name]}
              onChange={changeHandler}
            />
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormRender;
