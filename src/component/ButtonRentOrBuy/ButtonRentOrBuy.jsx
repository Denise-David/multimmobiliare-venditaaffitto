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
import {
  IconButton, Button, SvgIcon,
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import DropDownListRegion from './DropDownListRegion/DropDownListRegion';
import {
  rentOrSell, setRentOrSell, resetAll, idRegionSelecter, idLocalSelected, priceLimits,
  idCategorySelected, setIdRegionSelected,
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

  const parsed = queryString.parse(location.search);
  const [change, setChange] = useState(false);

  const contract = useSelector(rentOrSell);

  if (document.URL.includes('?') && change === false) {
    dispatch(setRentOrSell(Number(parsed.rentOrSell)));
  }

  useEffect(() => {
    dispatch({ type: 'INIT' });
  }, []);

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
      <div square className={classes.nav}>

        <Tabs
          value={contract}
          indicatorColor="secondary"
          aria-label="disabled tabs example"
          onChange={(event, value) => {
            dispatch(setRentOrSell(value));
          }}
          onClick={() => setChange(true)}
          centered
          style={{ paddingTop: '1em', marginBottom: '1em' }}
        >
          <Tab
            className={classes.text}
            label={(
              <>
                <HomeWorkIcon />
                <Typography variant="h6">

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
                <Typography variant="h6">
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
            <Price />
          </div>
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
            <IconButton
              color="secondary"
              style={{ marginBottom: '35px' }}
              onClick={() => dispatch(resetAll())}
            >
              <BackspaceIcon />
            </IconButton>
          </div>
          {document.URL.includes('vendita-affitto') ? <div /> : (
            <div>
              <About />
            </div>
          ) }
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
              <Typography style={{ fontSize: '20px' }} color="primary">
                Non hai trovato quello che cercavi? Iscriviti per
                ricevere gli annunci di questa tua ricerca
              </Typography>
              <TextField
                variant="outlined"
                label="Email"
                InputProps={{
                  className: classes.text2,
                }}
                InputLabelProps={{
                  className: classes.prova,
                }}
                style={{ marginTop: '20px' }}
              />
              <Button className={classes.button} variant="contained" style={{ marginTop: '20px' }}>
                Iscriviti
              </Button>
            </Grid>
          ) }

      </div>
    </>
  );
};

export default ButtonSendCode;
