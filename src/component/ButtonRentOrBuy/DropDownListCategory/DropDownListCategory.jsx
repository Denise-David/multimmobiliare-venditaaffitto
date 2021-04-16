/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect } from 'react';
import {
  useDispatch, useSelector,
} from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import {
  setIdCategorySelected, idCategorySelected, immo, rentOrSell,
} from '../../../store/slice/ImmoSlice';
import useStyles from './style';

const MuiOutlinedInput = withStyles((theme) => ({
  notchedOutline: {
    borderColor: '#ECECEC !important',
  },

}))(OutlinedInput);

const DropDownListCategory = ({ actionClick, name }) => {
  const classes = useStyles();
  const allImmo = useSelector(immo);
  const dispatch = useDispatch();

  const queryString = require('query-string');

  const parsed = queryString.parse(location.search);
  const category = useSelector(idCategorySelected);
  if (document.URL.includes('?') && category === 0) {
    dispatch(setIdCategorySelected(Number(parsed.idCategory)));
  }

  const localDouble = allImmo.map((element) => {
    const local = { nome: element.tipologia.nome, id: element.tipologia.id };
    return local;
  });
  const uniqueArray = localDouble.reduce((acc, current) => {
    const x = acc.find((item) => item.id === current.id);
    if (!x) {
      return acc.concat([current]);
    }
    return acc;
  }, []);

  const itemUniqueRegion = uniqueArray.map((element) => (
    <MenuItem key={element.id} value={element.id}>
      <Typography>
        {element.nome}
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
            Categoria
          </Typography>
        </InputLabel>
        <Select
          variant="outlined"
          value={category}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={(ev) => dispatch(setIdCategorySelected(ev.target.value))}
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

export default DropDownListCategory;
