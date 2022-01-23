/** @format */

import { Input as AntInput, InputProps } from "antd";
import React from "react";
import Icon from "./Icon";

const TextArea = AntInput.TextArea;

const Input = ({
  textarea,
  className = "",
  iconBefore,
  iconAfter,
  ...props
}) => {
  return (
    <div
      className={`custom-input ${className} ${textarea ? "textarea" : "input"}`}
    >
      {iconBefore && <Icon {...iconBefore} />}
      {textarea ? <TextArea {...props} /> : <AntInput {...props} />}
      {iconAfter && <Icon {...iconAfter} />}
    </div>
  );
};

export default Input;
