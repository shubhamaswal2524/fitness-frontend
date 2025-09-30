import React, { ChangeEvent } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  name?: string;
  id?: string;
  error?: string;
  disabled?: boolean;
  options: SelectOption[];
  required?: boolean;
}

const Select: React.FC<SelectProps> = ({
  label,
  placeholder = "Select an option",
  onChange,
  onBlur,
  value = "",
  id,
  name,
  error,
  disabled,
  options,
  required = false,
}) => {
  return (
    <div className="common_select">
      {label && (
        <label htmlFor={id}>
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <select
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        id={id}
        disabled={disabled}
        required={required}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="error_message">{error}</span>}
    </div>
  );
};

export default Select;
