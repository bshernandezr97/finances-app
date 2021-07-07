import React, { useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { customStyles } from "../../fixtures/customStyles";
import { useForm } from "../../hooks/useForm";
import { hideItemFormModal} from "../../redux/actions/ui";
import {
  clearActiveItem,
  startAddItem,
  startUpdateItem,
} from "../../redux/actions/balance";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import validator from "validator";
import Swal from "sweetalert2";
import Currency from "react-currency-input-field";

Modal.setAppElement("#root");

export const ItemFormModal = () => {
  const { isShowItemFormModal } = useSelector((state) => state.ui);
  const { active } = useSelector((state) => state.balance);
  const dispatch = useDispatch();
  const [itemValues, handleChange, setValues] = useForm({
    date: new Date(),
    type: "Ingreso",
    value: 0,
    description: "",
  });

  const { date, type, value, description } = itemValues;

 
  useEffect(() => {
    const loadActive =  () => {
      if (active) {
        setValues({
          date: new Date(active.date),
          type: active.type,
          value: active.value,
          description: active.description,
        });
      }
    };
    loadActive();
  }, []);

  const handleCloseModal = () => {
    dispatch(hideItemFormModal());
    dispatch(clearActiveItem());
  };

  const handleDateChange = (value) => {
    handleChange({
      target: {
        name: "date",
        value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (active) {
        dispatch(
          startUpdateItem({
            ...itemValues,
            _id: active._id,
          })
        );
      } else {
        dispatch(startAddItem(itemValues));
      }
      handleCloseModal();
    }
  };

  const handleCurrencyChange = (value) => {
    handleChange({
      target: {
        name: "value",
        value: value,
      },
    });
  };

  const validateForm = () => {
    if (value <= 0 || value === undefined) {
      Swal.fire(
        "Información",
        "El valor no puede ser vacio y debe ser mayor a 0",
        "warning"
      );
      return false;
    } else if (validator.isEmpty(description)) {
      Swal.fire("Información", "La descripción no puede ser vacia", "warning");
      return false;
    }
    return true;
  };

  return (
    <div>
      <Modal
        isOpen={isShowItemFormModal}
        style={customStyles}
        contentLabel="Nuevo Registro"
      >
        <div className="balance__modal">
          <h2>Nuevo Registro</h2>
          <button
            className="balance__close-button btn btn-danger"
            onClick={handleCloseModal}
          >
            Cerrar
          </button>
          <form onSubmit={handleSubmit}>
            <label className="mt-1">Fecha</label>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={date}
              onChange={handleDateChange}
            />
            <label className="mt-1">Tipo de registro</label>
            <select
              value={type}
              name="type"
              onChange={handleChange}
              placeholder="Ingreso/Egreso"
            >
              <option value="Ingreso">Ingreso</option>
              <option value="Egreso">Egreso</option>
            </select>
            <label className="mt-1">Valor*</label>
            <Currency
              value={value}
              name="value"
              prefix="$"
              defaultValue={50000}
              decimalsLimit={0}
              onValueChange={handleCurrencyChange}
            />
            <label className="mt-1">Descripción*</label>
            <textarea
              name="description"
              value={description}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary mt-5">
              Guardar
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};
