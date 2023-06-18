import React, { SyntheticEvent } from "react";
import { FormConfig } from "../Form";
import useForm from "../hooks/use-form";

type Props = {
  formConfig: FormConfig;
  onSubmit: (values: any) => void;
};

const FormRender = ({ formConfig, onSubmit }: Props) => {

  const { values } = useForm({
    formConfig,
  });

  const onSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    onSubmit?.(values);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        {formConfig.map((formInput, index: numnber) => {
            const {type ,name,label,placeholder} = formInput
          if (type === "select") {
            return (
              <div>
                <label htmlFor={name}>{label}</label>
                <select name={name} id={name}></select>
              </div>
            );
          }
          return (
            <div>
                <label htmlFor={name}>{label}</label>
                <input placeholder={placeholder} name={name} id={name} type={type}/>
              </div>
          )
        })}
      </form>
    </>
  );
};

export default FormRender;
