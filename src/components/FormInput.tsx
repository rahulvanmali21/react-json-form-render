import { useId } from "react";

export const TextFeild = (props: any) => {
  const id = useId();
  const { name, label, defaultValue, placeholder, type, onChange,value } = props;

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
      />
    </div>
  );
};

export const SelectFeild = (props: any) => {
  const { name, label, defaultValue, options = [], onChange,value } = props;
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select value={value} name={name} id={id} onChange={onChange} defaultValue={defaultValue}>
        {options.map((option: any, index: number) => (
          <option value={option} key={index} >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
