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
import { couldStartTrivia } from 'typescript';
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

  const regionDouble1 = allImmo.map((element) => {
    let region = { nome: '', id: '', tipo: 'false' };
    if (element.visibilita === true) {
      region = { nome: element.regione.nome, id: element.regione.id, tipo: 'regione' };
    }
    return region;
  });

  const cityDouble1 = allImmo.map((element) => {
    let region = { nome: '', id: '', tipo: 'false' };
    if (element.visibilita === true) {
      region = {
        nome: element.citta, id: element.cittaId, tipo: 'città', cap: element.cap,
      };
    }
    return region;
  });

  const regionDouble = regionDouble1.filter((i) => i.tipo !== 'false');
  const cityDouble = cityDouble1.filter((i) => i.tipo !== 'false');
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
  const [value, setValue] = React.useState('');
  const [change, setChange] = React.useState(false);
  useEffect(() => {
    if (document.URL.includes('?') && regione.id === 0 && parsed.idRegion !== '-1') {
      dispatch(setIdRegionSelected({ id: Number(parsed.idRegion), tipo: 'regione' }));
      const regioneUrl = concatenati.find((x) => x.id === Number(parsed.idRegion));
      setValue(regioneUrl);
    } else if (document.URL.includes('?') && regione.id === 0 && parsed.idCitta !== '-1' && parsed.idCitta !== '0') {
      dispatch(setIdRegionSelected({ id: Number(parsed.idCitta), tipo: 'città' }));
      const regioneUrl = concatenati.find((x) => x.id === Number(parsed.idCitta));
      setValue(regioneUrl);
    }
  }, []);

  const [inputValue, setInputValue] = React.useState({ nome: '', tipo: '' });

  useEffect(() => {
    if (regionSelected.id === 0 && regionSelected.tipo === '' && inputValue !== '') {
      setInputValue('');
      setValue(0);
    }
  }, [regionSelected]);

  return (
    <>
      <div>
        <FormControl
          variant="filled"
          className={classes.ddl}
        >
          <Autocomplete
            selectOnFocus
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              dispatch(setIdRegionSelected({ id: newValue.id, tipo: newValue.tipo }));
            }}
            defaultValue=" "
            classes={{
              inputRoot: {
                root: classes.inputRoot,
                notchedOutline: classes.notchedOutline,
              },
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            options={concatenati}
            style={{ width: 300 }}
            className={classes.prova}
            classes={{ root: classes.option }}
            color="secondary"
            getOptionLabel={(option) => {
              if (option === 0) {
                return (' ');
              }
              return (`${option?.cap ? option?.cap : ''} ${option.nome ? option.nome : ''} ${option.tipo ? `(${option.tipo})` : ''}`);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Regione, città"
                inputProps={{
                  ...params.inputProps,
                }}
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused,
                  },
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
