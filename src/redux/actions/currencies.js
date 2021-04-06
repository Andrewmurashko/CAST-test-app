
export const setLoadedСurrencies = (payload) => ({
  type: 'SET_LOADED_CURRENCIES',
  payload,
});

export const fetchСurrencies = () => (dispatch) => {
  dispatch(setLoadedСurrencies(false));
 fetch('https://www.cbr-xml-daily.ru/daily_json.js').then((res)=>res.json()).then((res) => dispatch(setСurrencies(res)));
};

export const setСurrencies = (items) => ({
  type: 'SET_CURRENCIES',
  payload: items,
});
