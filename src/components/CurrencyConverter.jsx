import React from 'react';
import { useSelector } from 'react-redux';

import { calcCurrencyValue } from '../utils/calcCurrencyValue';
import Input from './Input';
import SelectLabel from './SelectLabel';

function CurrencyConverter() {
  const {isLoaded} = useSelector(({ currenciesState }) => currenciesState);
  const [currenciesValues, setCurrenciesValues] = React.useState({
    myCurrencyRate: '',
    myCurrencyInputValue: '',
    wantToInputValue: '',
    wantToCurrencyRate: '',
  });

  const onChangeSlectLabel = (e) => {
    const { name, value } = e.target;
    setCurrenciesValues({
      ...currenciesValues,
      [name]: Number(value),
      myCurrencyInputValue: '',
      wantToInputValue: '',
    });
  };

  const onChangeInputValue = (e, anotherCurrencyName, thisCurrencyRate, anotherCurrencyRate) => {
    const { name, value } = e.target;
    const currentValue = Number(value);

    setCurrenciesValues({
      ...currenciesValues,
      [name]: currentValue,
      [anotherCurrencyName]: calcCurrencyValue(thisCurrencyRate, currentValue, anotherCurrencyRate),
    });
  };

  return (
    <div className="wrapper">
      <div className="content">
        <h2 className="content__title">Currencies converter</h2>
        <div className="content__currency-converter">
          {isLoaded ? <>
          <SelectLabel
            inputLabel={'i have'}
            selectValue={currenciesValues.myCurrencyRate}
            selectName={'myCurrencyRate'}
            onChange={onChangeSlectLabel}
          />
          <Input
            name={'myCurrencyInputValue'}
            value={String(currenciesValues.myCurrencyInputValue)}
            onChange={(e) =>
              onChangeInputValue(
                e,
                'wantToInputValue',
                currenciesValues.myCurrencyRate,
                currenciesValues.wantToCurrencyRate,
              )
            }
          />
          <Input
            name={'wantToInputValue'}
            value={String(currenciesValues.wantToInputValue)}
            onChange={(e) =>
              onChangeInputValue(
                e,
                'myCurrencyInputValue',
                currenciesValues.wantToCurrencyRate,
                currenciesValues.myCurrencyRate,
              )
            }
          />
          <SelectLabel
            inputLabel={'i want to buy'}
            selectValue={currenciesValues.wantToCurrencyRate}
            selectName={'wantToCurrencyRate'}
            onChange={onChangeSlectLabel}
          /> </> : <div>Loading data</div>}
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
