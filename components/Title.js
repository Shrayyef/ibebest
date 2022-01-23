/** @format */

import React from "react";

const Title = ({ title, end }) => {
  return (
    <div className="title d-flex flex-row align-center justify-space-between">
      <h2>{title}</h2>
      {end}
    </div>
  );
};

export default Title;
