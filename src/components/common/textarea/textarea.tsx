import React, { ChangeEvent, KeyboardEvent, WheelEvent } from "react";

interface InputProps {
  label?: string;
  type?: "text" | "password" | "email" | "number" | "tel" | "url";
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  name?: string;
  id?: string;
  error?: string;
  maxLength?: number;
  cols?:number;
  rows?:number;
}

const Textarea: React.FC<InputProps> = ({
  label,
  placeholder = "",
  value = "",
  id,
  name,
  error,
  onChange,
  onBlur,
  cols,
  rows,
}) => {

  return (
    <div className="common_textarea">
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        placeholder={placeholder}
        value={value}
        name={name}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        cols={cols}
        rows={rows}
      />
      {error && <span className="error_message">{error}</span>}
    </div>
  );
};

export default Textarea;