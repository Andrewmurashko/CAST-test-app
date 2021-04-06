const initialState = {
  currencies: [],
  isLoaded: false,
};

const currencies = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENCIES': {
      const currenciesArr = action.payload;
      return {
        ...state,
        currencies: currenciesArr,
        isLoaded: true,
      };
    }
    case 'SET_LOADED_CURRENCIES':
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default currencies;
