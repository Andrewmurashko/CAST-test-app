export const calcCurrencyValue = (originalRate, originalValue, receivedRate) => {
  return Number((originalRate * originalValue) / receivedRate).toFixed(2);
};
