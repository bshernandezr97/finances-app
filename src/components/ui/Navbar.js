import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import pepe from "../../assets/pepe.png";
import { startLogout } from "../../redux/actions/auth";
import { hideSideBar } from "../../redux/actions/ui";

export const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const redirectHome = () => {
    history.push("/");
  };

  const handleHideBar = () => {
    dispatch(hideSideBar());
  }
  return (
    <aside onClick={handleHideBar} className="navbar__container">
      <div onClick={redirectHome} className="navbar__brand">
        <img src={pepe} alt="pepe" />
        <span>Finances App</span>
      </div>
      <NavLink activeClassName="navbar__link_active" className="navbar__link mt-1" to="/home">
        {" "}
        <i className="fas fa-home"></i> Inicio
      </NavLink>
      <NavLink activeClassName="navbar__link_active" className="navbar__link mt-1" to="/balance">
        <i className="fas fa-cash-register"></i> Ingresos/Egresos
      </NavLink>
      <NavLink activeClassName="navbar__link_active" className="navbar__link mt-1" to="/taxes">
        <i className="fas fa-comment-dollar"></i> Impuestos/Servicios
      </NavLink>
      <div onClick={handleLogout} className="navbar__link mt-1">
        <i className="fas fa-sign-out-alt"></i> Logout
      </div>
    </aside>
  );
};
