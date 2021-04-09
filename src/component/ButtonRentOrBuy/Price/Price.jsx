/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ReactElement, useState } from 'react';
import {
  useDispatch, useSelector,
} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import useStyles from './style';
import {
  setPriceLimits, priceLimits, setPriceLimitsMin, setPriceLimitsMax, immo, rentOrSell,
} from '../../../store/slice/ImmoSlice';

const Price = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [change, setChange] = useState(false);

  const allImmo = useSelector(immo);
  const contract = useSelector(rentOrSell);
  const queryString = require('query-string');

  const parsed = queryString.parse(location.search);
  const prices = useSelector(priceLimits);
  if (document.URL.includes('?') && change === false) {
    dispatch(setPriceLimits([Number(parsed.priceMin), Number(parsed.priceMax)]));
    setChange(true);
  }

  const allPriceRent = allImmo.map((element) => {
    if (element.contratto === 0) {
      return element.pigione;
    } return 0;
  });

  const maxPriceRent = Math.max.apply(null, allPriceRent);
  const minPriceRent = Math.min.apply(null, allPriceRent);

  const allPriceSell = allImmo.map((element) => {
    if (element.contratto === 1) {
      return element.pigione;
    } return 0;
  });

  const maxPriceSell = Math.max.apply(null, allPriceSell);
  const minPriceSell = Math.min.apply(null, allPriceSell);

  return (
    <>

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h6" color="secondary">
          CHF
        </Typography>
        <Slider
          value={prices}
          aria-labelledby="range-slider"
          color="secondary"
          onChange={(event, newValue) => {
            dispatch(setPriceLimits(newValue));
            setChange(true);
          }}
          className={classes.slider}
          min={contract === 0 ? minPriceRent : minPriceSell}
          max={contract === 0 ? maxPriceRent : maxPriceSell}
        />

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <div className={classes.priceText}>
            <InputLabel
              id="demo-simple-select-outlined-label"
            >
              <Typography
                className={classes.whiteColor}
              >
                Prezzo Min
              </Typography>

            </InputLabel>
            <TextField
              color="secondary"
              className={classes.prova}
              value={
                prices[0]
              }
              InputProps={{
                className: classes.text,
              }}
              onChange={(event) => dispatch(setPriceLimitsMin(event.target.value))}
            />
          </div>

          <div className={classes.priceText}>
            <InputLabel
              id="demo-simple-select-outlined-label"

            >
              <Typography
                className={classes.whiteColor}
              >
                Prezzo Max
              </Typography>

            </InputLabel>
            <TextField
              value={prices[1]}
              InputProps={{
                className: classes.text,
              }}
              color="secondary"
              className={classes.prova}
              onChange={(event) => dispatch(setPriceLimitsMax(event.target.value))}
            />

          </div>
        </Grid>

      </Grid>

    </>
  );
};

export default Price;
