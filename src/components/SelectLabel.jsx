import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SelectLabel({ inputLabel, selectValue, selectName, onChange }) {
  const { Valute } = useSelector(({ currenciesState }) => currenciesState.currencies);
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">{inputLabel}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectValue}
        name={selectName}
        onChange={onChange}>
        {Valute &&
          Object.keys(Valute).map((el, i) => (
            <MenuItem value={Valute[el].Value / Valute[el].Nominal} key={i}>
              {el}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

export default SelectLabel;
