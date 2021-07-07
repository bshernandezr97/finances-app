import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveItem, startDeleteTaxItem } from "../../redux/actions/tax";
import { showTaxFormModal } from "../../redux/actions/ui";

export const TaxesList = () => {
  const { items } = useSelector((state) => state.tax);
  const dispatch = useDispatch();

  const handleEditItem = (item) => {
    dispatch(setActiveItem(item));
    dispatch(showTaxFormModal());
  };

  const handleDeleteItem = (itemId) => {
    dispatch(startDeleteTaxItem(itemId));
  };

  const itemsList = items.map((i) => {
    const date = moment(i.paymentDate).format("DD/MM/YYYY");
    return (
      <tr key={i._id}>
        <td>{i.name}</td>
        <td>{i.type}</td>
        <td>{date}</td>
        <td>${i.value}</td>
        <td>
          <span
            onClick={() => handleEditItem(i)}
            className="mr-1 balance__green_col balance__actions-icons"
          >
            <i className="fas fa-edit"></i>
          </span>
          <span
            onClick={() => handleDeleteItem(i._id)}
            className="mr-1 balance__red_col balance__actions-icons"
          >
            <i className="fas fa-trash-alt"></i>
          </span>
        </td>
      </tr>
    );
  });

  return (
    <div className="balance__table_div">
      <table className="balance__table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Fecha de pago</th>
            <th>Valor</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>{itemsList}</tbody>
      </table>
    </div>
  );
};
