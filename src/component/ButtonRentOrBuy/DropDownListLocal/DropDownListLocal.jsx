/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-restricted-globals */
/* eslint-disable global-require */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ReactElement, useEffect } from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import {
  useDispatch, useSelector,
} from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import useStyles from './style';

import {
  setIdLocalSelected, idRegionSelecter, immo, rentOrSell, idLocalSelected,
} from '../../../store/slice/ImmoSlice';

const MuiOutlinedInput = withStyles((theme) => ({
  notchedOutline: {
    borderColor: '#ECECEC !important',
  },

}))(OutlinedInput);

const DropDownListLocal = ({ actionClick, name }) => {
  const classes = useStyles();
  const allImmo = useSelector(immo);
  const dispatch = useDispatch();
  const queryString = require('query-string');

  const parsed = queryString.parse(location.search);

  const locali = useSelector(idLocalSelected);

  if (document.URL.includes('?') && locali === 0) {
    dispatch(setIdLocalSelected(Number(parsed.idLocal)));
  }
  const localDouble = allImmo.map((element) => {
    const local = { nome: element.locali.numero, id: element.locali.id };
    return local;
  });
  const uniqueArray = localDouble.reduce((acc, current) => {
    const x = acc.find((item) => item.id === current.id);
    if (!x) {
      return acc.concat([current]);
    }
    return acc;
  }, []);

  const uniqueNumber = uniqueArray.map((element) => (Number(element.nome)));

  const orderedNumber = uniqueNumber.sort((a, b) => a - b);

  const itemUniqueRegion = orderedNumber.map((element) => (
    <MenuItem key={element} value={element}>
      <Typography>
        {element}
      </Typography>

    </MenuItem>

  ));

  return (
    <>
      <FormControl
        className={classes.ddl}
        variant="filled"
      >
        <InputLabel id="demo-simple-select-outlined-label">
          <Typography className={classes.whiteColor}>
            Locali
          </Typography>
        </InputLabel>
        <Select
          variant="outlined"
          value={locali}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={(ev) => dispatch(setIdLocalSelected(ev.target.value))}
          className={classes.prova}
          classes={{ icon: classes.icon }}
          label="age"
          input={<MuiOutlinedInput />}
          inputProps={{
            name: 'Age',
            id: 'age-simple',
          }}
        >
          {itemUniqueRegion}
        </Select>
      </FormControl>
    </>
  );
};

export default DropDownListLocal;
