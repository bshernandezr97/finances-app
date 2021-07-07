import Swal from "sweetalert2";
import { types } from "../types/types";
import { hideLoading, showLoading } from "./ui";

export const addItem = (item) => ({
  type: types.addBalanceItem,
  payload: item,
});

export const deleteItem = (itemId) => ({
  type: types.deleteBalanceItem,
  payload: itemId,
});

export const updateItem = (item) => ({
  type: types.updateBalanceItem,
  payload: item,
});

export const setActiveItem = (item) => ({
  type: types.setActiveBalanceItem,
  payload: item,
});

export const clearActiveItem = () => ({
  type: types.clearActiveBalanceItem,
});

export const startAddItem = (item) => {
  return (dispatch) => {
    dispatch(showLoading());
    setTimeout(() => {
      dispatch(
        addItem({
          ...item,
          _id: new Date().getTime(),
        })
      );
      Swal.fire("Información", "Registro añadido exitosamente", "success");
      dispatch(hideLoading());
    }, 1000);
  };
};

export const startDeleteItem = (itemId) => {
  return (dispatch) => {
    dispatch(showLoading());
    setTimeout(() => {
      dispatch(deleteItem(itemId));
      Swal.fire("Información", "Registro eliminado exitosamente", "error");
      dispatch(hideLoading());
    }, 1000);
  };
};

export const startUpdateItem = (item) => {
  return (dispatch) => {
    dispatch(showLoading());
    setTimeout(() => {
      dispatch(updateItem(item));
      Swal.fire("Información", "Registro actualizado exitosamente", "success");
      dispatch(hideLoading());
    }, 1000);
  };
};
