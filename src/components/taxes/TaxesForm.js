import React, { useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { customStyles } from "../../fixtures/customStyles";
import { useForm } from "../../hooks/useForm";
import {
  clearActiveItem,
  startAddTaxItem,
  startUpdateTaxItem,
} from "../../redux/actions/tax";
import { hideTaxFormModal } from "../../redux/actions/ui";
import validator from "validator";
import Currency from "react-currency-input-field";

export const TaxesForm = () => {
  const { isShowTaxFormModal } = useSelector((state) => state.ui);
  const { active } = useSelector((state) => state.tax);
  const dispatch = useDispatch();
  const [itemValues, handleChange, setValues] = useForm({
    day: 0,
    month: "Enero",
    type: "Impuesto",
    name: "",
    value: 0
  });

  const { name, type, day, month, value } = itemValues;

  useEffect(() => {
    if (active) {
      setValues({
        name: active.name,
        type: active.type,
        day: active.day,
        month: active.month,
        value: active.value
      });
    }
  }, []);

  const handleCloseModal = () => {
    dispatch(hideTaxFormModal());
    dispatch(clearActiveItem());
  };

  const handleCurrencyChange = (value) => {
    handleChange({
      target: {
        name: "value",
        value: value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (active) {
        dispatch(
          startUpdateTaxItem({
            ...itemValues,
            _id: active._id,
          })
        );
      } else {
        dispatch(startAddTaxItem(itemValues));
      }
      handleCloseModal();
    }
  };

  const validateForm = () => {
    if (day <= 0 || day === undefined || day > 25) {
      Swal.fire(
        "Información",
        "El dia no puede ser vacio y debe ser mayor a 0 y menor a 25",
        "warning"
      );
      return false;
    } else if (validator.isEmpty(name)) {
      Swal.fire("Información", "El nombre no puede ser vacio", "warning");
      return false;
    } else if (type === "Impuesto" && validator.isEmpty(month)) {
      Swal.fire("Información", "El mes no puede ser vacio", "warning");
      return false;
    }
    return true;
  };

  return (
    <Modal
      isOpen={isShowTaxFormModal}
      style={customStyles}
      contentLabel="Nuevo Registro"
    >
      <div className="balance__modal">
        <h2>Servicios/Impuestos</h2>
        <button
          className="balance__close-button btn btn-danger"
          onClick={handleCloseModal}
        >
          Cerrar
        </button>
        <form onSubmit={handleSubmit}>
          <label className="mt-1">Dia*</label>
          <input
            placeholder="nombre"
            type="text"
            name="day"
            value={day}
            onChange={handleChange}
          />
          {type === "Impuesto" && (
            <>
              <label className="mt-1">Mes en el que pagas el impuesto*</label>
              <select name="month" value={month} onChange={handleChange}>
                <option value="Enero">Enero</option>
                <option value="Febrero">Febrero</option>
                <option value="Marzo">Marzo</option>
                <option value="Abril">Abril</option>
                <option value="Mayo">Mayo</option>
                <option value="Junio">Junio</option>
                <option value="Julio">Julio</option>
                <option value="Agosto">Agosto</option>
                <option value="Septiembre">Septiembre</option>
                <option value="Octubre">Octubre</option>
                <option value="Noviembre">Noviembre</option>
                <option value="Diciembre">Diciembre</option>
              </select>
            </>
          )}
          <label className="mt-1">Tipo de registro</label>
          <select value={type} name="type" onChange={handleChange}>
            <option value="Impuesto">Impuesto</option>
            <option value="Servicio">Servicio</option>
          </select>
          <label className="mt-1">Nombre*</label>
          <input
            placeholder="Nombre"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <label className="mt-1">Valor*</label>
          <Currency
            value={value}
            name="value"
            prefix="$"
            defaultValue={50000}
            decimalsLimit={0}
            onValueChange={handleCurrencyChange}
          />
          <button type="submit" className="btn btn-primary mt-5">
            Guardar
          </button>
        </form>
      </div>
    </Modal>
  );
};
