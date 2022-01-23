/** @format */

import React from "react";

const Wrapper = ({ className, children }) => {
  return (
    <div className={`page-wrapper ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default Wrapper;
