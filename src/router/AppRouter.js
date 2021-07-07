import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Swal from "sweetalert2";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  const { loading } = useSelector((state) => state.ui);
  const { isLogged } = useSelector((state) => state.auth);

  useEffect(() => {
    if (loading) {
      console.log(loading)
      Swal.showLoading(Swal.getDenyButton());
    } else {  
      if(isLogged) {
        Swal.hideLoading();
      } else {
        Swal.close();
      }
    }
  }, [loading, isLogged]);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={PublicRoutes} />
          <Route path="/" component={PrivateRoutes} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
