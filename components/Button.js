/** @format */

import { Button as AntButton } from "antd";
import React from "react";

const Button = ({ className = "primary", type, children, ...props }) => {
  return (
    <AntButton type={type} className={`custom-button ${className}`} {...props}>
      {children}
    </AntButton>
  );
};

export default Button;
