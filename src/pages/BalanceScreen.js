import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemFormModal } from "../components/balance/ItemFormModal";
import { ItemList } from "../components/balance/ItemList";
import { getIndicators } from "../helpers/getBalance";
import { showItemFormModal } from "../redux/actions/ui";

export const BalanceScreen = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.balance);

  const handleOpenModal = () => {
    dispatch(showItemFormModal());
  };



  const { ingress, egress, balance } = useMemo(() => getIndicators(items), [items]);

  return (
    <div className="balance__container">
      <ItemFormModal />
      <span className="mt-5 mb-5 screen-title">Balance</span>
      <div className="balance__indicator-flexgroup">
        <div className="balance__indicator_ingress balance__green_col mb-5">
          <span className="mb-1">
            {" "}
            <i className="fas fa-arrow-up"></i> Ingresos
          </span>
          <span>{`$ ${ingress}`}</span>
        </div>
        <div className="balance__indicator_egress balance__red_col mb-5">
          <span className="mb-1">
            {" "}
            <i className="fas fa-arrow-down"></i> Egresos
          </span>
          <span>{`$ ${egress}`}</span>
        </div>
        <div className="balance__indicator_balance mb-5">
          <span className="mb-1">
            <i className="fas fa-balance-scale"></i> Saldo
          </span>
          <span
            className={balance > 0 ? "balance__green_col" : "balance__red_col"}
          >{`$ ${balance}`}</span>
        </div>
      </div>
      <div className="balance__table_div">
        <ItemList />
      </div>
      <button onClick={handleOpenModal} className="btn btn-primary mt-5">
        Agregar Registro
      </button>
    </div>
  );
};
