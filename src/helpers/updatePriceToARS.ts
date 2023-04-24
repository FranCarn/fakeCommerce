export const updatePriceToARS = (price: number): string => {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "ARS",
  }).format(price * 398);
};
