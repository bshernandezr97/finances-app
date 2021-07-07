import Swal from "sweetalert2";
import { types } from "../types/types";
import { hideLoading, showLoading } from "./ui";

export const addTaxItem = (item) => ({
  type: types.addTaxItem,
  payload: item,
});

export const deleteTaxItem = (itemId) => ({
  type: types.deleteTaxItem,
  payload: itemId,
});

export const updateTaxItem = (item) => ({
    type: types.updateTaxItem,
    payload: item,
});

export const setActiveItem = (item) => ({
  type: types.setActiveTaxItem,
  payload: item,
});

export const clearActiveItem = () => ({
  type: types.clearActiveTaxItem,
});

export const startAddTaxItem = (item) => {
  return (dispatch) => {
    dispatch(showLoading());
    setTimeout(() => {
      dispatch(
        addTaxItem({
          ...item,
          _id: new Date().getTime(),
        })
      );
      Swal.fire(
        "Información",
        "Impuesto/Servicio añadido exitosamente",
        "success"
      );
      dispatch(hideLoading());
    }, 1000);
  };
};

export const startDeleteTaxItem = (itemId) => {
  return (dispatch) => {
    dispatch(showLoading());
    setTimeout(() => {
      dispatch(deleteTaxItem(itemId));
      Swal.fire(
        "Información",
        "Impuesto/Servicio eliminado exitosamente",
        "success"
      );
      dispatch(hideLoading());
    }, 1000);
  };
};

export const startUpdateTaxItem = (item) => {
    return (dispatch) => {
      dispatch(showLoading());
      setTimeout(() => {
        dispatch(updateTaxItem(item));
        Swal.fire(
          "Información",
          "Impuesto/Servicio actualizado exitosamente",
          "success"
        );
        dispatch(hideLoading());
      }, 1000);
    };
  };
  
