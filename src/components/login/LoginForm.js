import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import pepe from "../../assets/pepe.png";
import { useForm } from "../../hooks/useForm";
import { startLogin } from "../../redux/actions/auth";
import validator from "validator";
import Swal from "sweetalert2";

export const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loginValues, handleChange, reset] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = loginValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(startLogin());
      reset();
      history.replace('/');
    }
  };
  
  const handleLogAsGuest = () => {
    dispatch(startLogin());
  }

  const validateForm = () => {
    if (!validator.isEmail(email)) {
      Swal.fire("Information", "Enter a valid user email", "error");
      return false;
    } else if (!validator.isLength(password, { min: 6 })) {
      Swal.fire(
        "Information",
        "Password has to have 6 o more characters",
        "error"
      );
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="login__form_div">
      <img src={pepe} alt="logo" width="80" height="80" />
      <h3>Finances App</h3>
      <form onSubmit={handleSubmit} className="login__form">
        <input
          name="email"
          value={email}
          onChange={handleChange}
          type="text"
          placeholder="Nombre de usuario"
        />
        <input
          name="password"
          value={password}
          onChange={handleChange}
          type="password"
          placeholder="Contraseña"
        />
        <button className="btn btn-primary mt-5">Login</button>
        <span onClick={handleLogAsGuest} className="login__form_link" to="/">
          {" "}
          Ingresar como invitado{" "}
        </span>
      </form>
    </div>
  );
};
