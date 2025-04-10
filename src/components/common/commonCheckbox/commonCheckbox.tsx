import React from "react";
import { Form } from "react-bootstrap";

interface CommonCheckboxProps {
  className: string;
  id: string;
  label: string;
}

const CommonCheckbox: React.FC<CommonCheckboxProps> = ({
  className,
  id,
  label,
}) => {
  return (
    <div className={`common_checkbox ${className}`}>
      <Form.Check
        type="checkbox"
        id={`default-${id}`}
        label={label}
      />
    </div>
  );
};

export default CommonCheckbox;