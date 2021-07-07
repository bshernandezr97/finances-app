export const getIndicators = (items) => {
    let ingress = 0;
    let egress = 0;
    for (const item of items) {
      if (item.type === "Ingreso") {
        ingress += parseInt(item.value);
      } else {
        egress += parseInt(item.value);
      }
    }
    const balance = ingress - egress;
    return {
      ingress,
      egress,
      balance,
    };
  };