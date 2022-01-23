/** @format */

import { Spin } from "antd";
import React from "react";

const Loading = ({ size, type = "full" }) => {
  if (type !== "full") {
    return (
      <div className="load-normal">
        <Spin size={size} />
      </div>
    );
  }
  return (
    <div className="load">
      <Spin size={size} />
    </div>
  );
};

export default Loading;
