import React from 'react';
import { useDispatch } from 'react-redux';
import CurrencyConverter from './components/CurrencyConverter';

import { fetchСurrencies } from './redux/actions/currencies';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchСurrencies());
  }, []);

  return (
    <div className="App">
      <CurrencyConverter />
    </div>
  );
}

export default App;
