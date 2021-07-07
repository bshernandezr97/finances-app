import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Switch } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { BalanceScreen } from "../pages/BalanceScreen";
import { HomeScreen } from "../pages/HomeScreen";
import { TaxesScreen } from "../pages/TaxesScreen";
import { showSideBar } from "../redux/actions/ui";
import { PrivateRoute } from "./PrivateRoute";

export const PrivateRoutes = () => {
  const { isShowSideBar } = useSelector((state) => state.ui);
  // const {} = useSelector((state) => state.ui);
  const { isLogged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleShowSideBar = () => {
    dispatch(showSideBar());
  };

  return (
    <div className="dashboard__container">
      <div
        className={`dashboard__navbar ${
          !isShowSideBar ? "dashboard__navbar_hidden" : ""
        }`}
      >
        <Navbar />
      </div>
      {!isShowSideBar && (
        <button
          className="dashboard__navbar_button"
          onClick={handleShowSideBar}
        >
          <i className="fas fa-bars"></i>
        </button>
      )}

      <div
        className={`${
          isShowSideBar ? "dashboard__content_hidden" : "dashboard__content"
        }`}
      >
        <Switch>
          <PrivateRoute
            exact
            isAuth={isLogged}
            path="/home"
            component={HomeScreen}
          />
          <PrivateRoute
            exact
            isAuth={isLogged}
            path="/balance"
            component={BalanceScreen}
          />
          <PrivateRoute
            exact
            isAuth={isLogged}
            path="/taxes"
            component={TaxesScreen}
          />
          <Redirect to="/home" />
        </Switch>
      </div>
    </div>
  );
};
