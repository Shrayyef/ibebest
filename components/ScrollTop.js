/** @format */

import React, { useEffect } from "react";
import { useHistory } from "react-router";

const ScrollTop = ({ children }) => {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return children;
};

export default ScrollTop;
