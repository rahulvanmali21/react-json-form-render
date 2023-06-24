import React, { useId } from "react";
import { FormInput } from "../Form";

type Props = {
  formInput: FormInput;
  value?: string | number | null;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export const TextFeild = (props: Props) => {
  const id = useId();
  const { name, label, defaultValue, placeholder, type, value, validation } =
    props.formInput;
  const { onChange } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        placeholder={placeholder}
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        {...validation}
      />
    </div>
  );
};

export const SelectFeild = (props: Props) => {
  const { name, label, defaultValue, value, validation, options } =
    props.formInput;
  const { onChange } = props;
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select
        value={value}
        name={name}
        id={id}
        onChange={onChange}
        defaultValue={defaultValue}
        {...validation}
      >
        {options?.map((option: any, index: number) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
