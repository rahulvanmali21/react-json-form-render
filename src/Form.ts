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

type Validation ={
  required?:boolean,
  max?:number,
  min?:number,
  pattern?:string,
}
  
export interface FormInput {
  label: string;
  name:string
  type: HTMLInputType;
  value?: string | number;
  defaultValue?: string | number;
  placeholder?: string;
  options?:any[]
  validation?:Validation
}

export type FormConfig = Array<FormInput>
