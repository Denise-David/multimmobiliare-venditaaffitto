/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Switch from '@material-ui/core/Switch';
import {
  IconButton, Button, SvgIcon,
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import DropDownListRegion from './DropDownListRegion/DropDownListRegion';
import {
  rentOrSell, setRentOrSell, resetAll, idRegionSelecter, idLocalSelected, priceLimits,
  idCategorySelected, setIdRegionSelected, ammobiliato, setAmmobiliato, setTrueAmmobiliato,
} from '../../store/slice/ImmoSlice';
import DropDownListLocal from './DropDownListLocal/DropDownListLocal';
import DropDownListCategory from './DropDownListCategory/DropDownListCategory';
import useStyles from './style';
import Price from './Price/Price';
import About from './About/About';
import { loaded } from '../../store/slice/LoadingSlice';

const ButtonSendCode = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const queryString = require('query-string');
  const region = useSelector(idRegionSelecter);
  const localita = useSelector(idLocalSelected);
  const categoria = useSelector(idCategorySelected);
  const prezzi = useSelector(priceLimits);
  const ammo = useSelector(ammobiliato);

  const parsed = queryString.parse(location.search);
  const [change, setChange] = useState(false);
  const [iscrizione, setIscrizione] = useState(false);

  const contract = useSelector(rentOrSell);

  if (document.URL.includes('?') && change === false) {
    dispatch(setRentOrSell(Number(parsed.rentOrSell)));
  }

  if (document.URL.includes('?')) {
    dispatch(setTrueAmmobiliato(parsed.ammobiliato === 'true'));
  }

  useEffect(() => {
    dispatch({ type: 'INIT' });
  }, []);

  const PurpleSwitch = withStyles({
    switchBase: {
      color: '#CF291D',
      '&$checked': {
        color: '#CF291D',
      },
      '&$checked + $track': {
        backgroundColor: '#CF291D',
      },
    },
    track: {
      border: '1px solid #BFBFBF',
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: '#BFBFBF',
    },
    checked: {},
  })(Switch);

  const load = useSelector(loaded);

  if (load === false) {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <CircularProgress disableShrink style={{ color: 'red', margin: '3em' }} />
      </Grid>
    );
  }
  return (
    <>
      <div className={classes.nav}>

        <Tabs
          value={contract}
          indicatorColor="secondary"
          aria-label="disabled tabs example"
          onChange={(event, value) => {
            dispatch(setRentOrSell(value));
            setChange(true);
          }}
          centered
          style={{ paddingTop: '1em', marginBottom: '1em' }}
        >
          <Tab
            className={classes.text}
            label={(
              <>
                <HomeWorkIcon />
                <Typography variant="body1">

                  Affitto
                </Typography>
              </>
          )}
          />
          <Tab
            className={classes.text}
            label={(
              <>
                <AttachMoneyIcon />
                <Typography variant="body1">
                  Vendita
                </Typography>
              </>
          )}
          />

        </Tabs>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-end"
        >
          <div>
            <DropDownListRegion />
          </div>
          <div>
            <DropDownListLocal />
          </div>
          <div>
            <DropDownListCategory />
          </div>
          <div>
            <Price />
          </div>

          <div style={{ marginBottom: '35px', marginRight: '30px' }}>
            <Typography color="secondary" variant="h6" style={{ marginLeft: '10px' }}>
              Ammobiliato
            </Typography>
            <FormControlLabel
              control={<PurpleSwitch checked={ammo} onChange={() => dispatch(setAmmobiliato())} name="checkedA" />}
              style={{ marginLeft: '35px' }}
            />
          </div>
          <div>
            <IconButton
              color="secondary"
              style={{ marginBottom: '35px' }}
              onClick={() => dispatch(resetAll())}
            >
              <BackspaceIcon />
              <Typography variant="body1" style={{ marginLeft: '10px' }}>
                Azzera
              </Typography>
            </IconButton>
          </div>

        </Grid>
        { region.id === 0
&& localita === 0
&& categoria === 0
&& prezzi[0] === 0
&& prezzi[1] === 0
          ? <></> : (
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Typography align="center" variant="body1" style={{ color: 'white' }}>
                Non hai trovato quello che cercavi? Iscriviti per
                ricevere gli annunci di questa tua ricerca
              </Typography>
              <TextField
                variant="outlined"
                label="Email"
                InputProps={{
                  className: classes.text2,
                  classes: {
                    root: classes.inputRoot,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
                InputLabelProps={{
                  className: classes.prova,
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused,
                  },
                }}
                style={{ marginTop: '20px' }}
              />
              <Button
                className={classes.button}
                variant="contained"
                style={{
                  marginTop: '20px',
                }}
                onClick={() => {
                  if (region.id !== 0 && region.tipo === 'regione') {
                    regione = region.id;
                  } else if (region.id !== 0 && region.tipo === 'città') {
                    citta = region.id;
                  }
                  dispatch({
                    type: 'SET_CLIENTE',
                    payload: [{ Email: email }, {
                      PrezzoMin: prezzi[0],
                      PrezzoMax: prezzi[1],
                      Contratto: contract,
                      Regione: regione,
                      Citta: citta,
                      Locali: localita,
                      Categoria: categoria,
                      ClienteId: 0,

                    }],
                  });

                  setEmail('');
                  dispatch(setIscrizione(true));
                }}
              >
                Iscriviti
              </Button>
            </Grid>
          ) }

      </div>
    </>
  );
};

export default ButtonSendCode;
