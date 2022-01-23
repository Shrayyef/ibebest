/** @format */

import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, location, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const token = localStorage.getItem("token");
        if (!token) localStorage.setItem("location", location.pathname);
        if (token) {
          return <Component {...props} />;
        }

        return (
          <Redirect
            href={{
              pathname: "/login",
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;
