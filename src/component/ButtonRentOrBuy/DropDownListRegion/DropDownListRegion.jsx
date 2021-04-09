/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-restricted-globals */
/* eslint-disable global-require */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ReactElement, useEffect } from 'react';
import {
  useDispatch, useSelector,
} from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { defaultProps } from 'qrcode.react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import useStyles from './style';

import {
  setIdRegionSelected, idRegionSelecter, immo, rentOrSell,
} from '../../../store/slice/ImmoSlice';

const ButtonSendCode = ({ actionClick, name }) => {
  const classes = useStyles();
  const allImmo = useSelector(immo);
  const queryString = require('query-string');
  const dispatch = useDispatch();
  const regionSelected = useSelector(idRegionSelecter);

  const parsed = queryString.parse(location.search);

  const regione = useSelector(idRegionSelecter);

  if (document.URL.includes('?') && regione === 0) {
    dispatch(setIdRegionSelected(Number(parsed.idRegion)));
  }
  const regionDouble = allImmo.map((element) => {
    const region = { nome: element.regione.nome, id: element.regione.id, tipo: 'regione' };
    return region;
  });

  const cityDouble = allImmo.map((element) => {
    const region = {
      nome: element.citta, id: element.cittaId, tipo: 'città', cap: element.cap,
    };
    return region;
  });
  const uniqueArray = regionDouble.reduce((acc, current) => {
    const x = acc.find((item) => item.id === current.id);
    if (!x) {
      return acc.concat([current]);
    }
    return acc;
  }, []);

  const uniqueCity = cityDouble.reduce((acc, current) => {
    const x = acc.find((item) => item.id === current.id);
    if (!x) {
      return acc.concat([current]);
    }
    return acc;
  }, []);
  const concatenati = uniqueArray.concat(uniqueCity);

  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState('');

  if (regionSelected.id === 0 && regionSelected.value === '') {
    setInputValue('');
    setValue('');
  }

  return (
    <>
      <div>
        <FormControl
          className={classes.ddl}
        >

          <InputLabel style={{ marginTop: '-2.6em' }} id="demo-simple-select-outlined-label">
            <Typography className={classes.whiteColor}>
              Regione, città
            </Typography>
          </InputLabel>
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              dispatch(setIdRegionSelected({ id: newValue.id, tipo: newValue.tipo }));
            }}
            inputValue={inputValue}
            classes={classes}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            options={concatenati}
            style={{ width: 300, color: 'white' }}
            className={classes.prova}
            color="secondary"
            getOptionLabel={(option) => `${option.cap ? option.cap : ''} ${option.nome} (${option.tipo})`}
            renderInput={(params) => (
              <TextField
                {...params}
                inputProps={{
                  ...params.inputProps,
                }}
              />
            )}
          />

        </FormControl>
      </div>
    </>
  );
};

export default ButtonSendCode;
