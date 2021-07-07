import React, { useMemo } from "react";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { getIndicators } from "../../helpers/getBalance";

export const PieChart = () => {
  const { items } = useSelector((state) => state.balance);
  const { ingress, egress } = useMemo(
    () => getIndicators(items),
    [items]
  );
  const data = {
    labels: ["Ingresos", "Egresos"],
    datasets: [
      {
        label: "$ Pesos",
        data: [ingress, egress],
        backgroundColor: ["rgba(55, 218, 19, 0.801)", "rgba(218, 19, 19, 0.781)"],
        borderColor: ["rgba(55, 218, 19, 0.801)", "rgba(218, 19, 19, 0.781)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart__container">
      <div style={{textAlign: 'center'}}>
        <h1 className="title">Ingresos vs Egresos</h1>        
      </div>
      {(!ingress && !egress) && (<p>No hay registros, ve a Ingresos/Egresos y añade registros para alimentar el gráfico</p>)}
      <div>
        <Pie data={data} />
      </div>
    </div>
  );
};
