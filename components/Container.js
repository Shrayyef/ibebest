/** @format */

import React from "react";

const Container = ({ className = "", children }) => {
  return (
    <div
      style={{ paddingLeft: 15, paddingRight: 15 }}
      className={`page-container ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
