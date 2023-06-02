export const getTax = (amount, percentage) => {
  return (amount * (percentage / 100)).toPrecision(3);
};
