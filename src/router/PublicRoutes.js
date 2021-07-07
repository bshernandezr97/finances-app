import React from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { LoginScreen } from "../pages/LoginScreen";
import { PublicRoute } from "./PublicRoute";

export const PublicRoutes = () => {
  const { isLogged } = useSelector((state) => state.auth);

  return (
      <Switch>
        <PublicRoute
          exact
          path="/auth/login"
          isAuth={isLogged}
          component={LoginScreen}
        />
      </Switch>
  );
};
