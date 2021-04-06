import { combineReducers } from 'redux';

import currenciesState from './currencies';

const rootReducer = combineReducers({
  currenciesState,
});
  export default rootReducer;
