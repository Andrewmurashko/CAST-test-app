import React from 'react';

function Input({ name, value, onChange }) {

  return (
    <input
      className="input-currency-value"
      type="number"
      placeholder="Please input value"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
