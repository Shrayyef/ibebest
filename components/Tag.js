/** @format */

import React from "react";
import Card from "./Card";

const Tag = ({ title }) => {
  return (
    <Card className={"tag"}>
      <span>{title}</span>
    </Card>
  );
};

export default Tag;
