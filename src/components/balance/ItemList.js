import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveItem, startDeleteItem } from "../../redux/actions/balance";
import { showItemFormModal } from "../../redux/actions/ui";

export const ItemList = () => {
  const { items } = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  const handleDeleteItem = (id) => {
    dispatch(startDeleteItem(id));
  }
  const handleEditItem = (item) => {
    dispatch(setActiveItem(item));
    dispatch(showItemFormModal());
  }

  const itemsList = items.map((i) => {
    const date = moment(i.date).format("YYYY/MM/DD");
    return (
      <tr key={i.date.getTime() * Math.random()}>
        <td>{date}</td>
        <td>{i.type}</td>
        <td>{i.description}</td>
        <td
          className={
            i.type === "Ingreso" ? "balance__green_col" : "balance__red_col"
          }
        >
          {i.type === "Ingreso" ? (
            <i className="fas fa-arrow-up"></i>
          ) : (
            <i className="fas fa-arrow-down"></i>
          )}

          {`$ ${i.value}`}
        </td>
        <td>
          <span onClick={() => handleEditItem(i)} className="mr-1 balance__green_col balance__actions-icons">
            <i className="fas fa-edit"></i>
          </span>
          <span onClick={() => handleDeleteItem(i._id)} className="mr-1 balance__red_col balance__actions-icons">
            <i className="fas fa-trash-alt"></i>
          </span>
        </td>
      </tr>
    );
  });
  console.log(itemsList);
  return (
    <table className="balance__table">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Tipo</th>
          <th>Descripción</th>
          <th>Valor</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>{itemsList}</tbody>
    </table>
  );
};
