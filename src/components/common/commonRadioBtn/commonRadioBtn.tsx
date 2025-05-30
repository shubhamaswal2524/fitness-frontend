import React from "react";
import { Form } from "react-bootstrap";

const CommonRadioBtn = ({ id, name, label }: any) => {
  return (
    <>
      <div className="common_radio">
        <Form>
          <Form.Check
            type={"radio"}
            id={`default-${id}`}
            label={label}
            name={name}
          />
        </Form>
      </div>
    </>
  );
};

export default CommonRadioBtn;
