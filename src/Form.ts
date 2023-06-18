type HTMLInputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "select"
  | "week";

export interface FormInput {
  label: string;
  name:string
  type: HTMLInputType;
  value?: string | number;
  defaultValue?: string | number;
  placeholder?: string;
}

export type FormConfig = Array<FormInput>
