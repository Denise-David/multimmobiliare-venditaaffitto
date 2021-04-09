/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import React, { ReactElement, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import CardMedia from '@material-ui/core/CardMedia';
import { SvgIcon, Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Icon from '@material-ui/core/Icon';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import Grid from '@material-ui/core/Grid';
import {
  immo, rentOrSell, idRegionSelecter, idLocalSelected, idCategorySelected, priceLimits,
} from '../../store/slice/ImmoSlice';
import TitleDetail from '../TitleDetail/TitleDetail';
import ImageSlide from '../ImageSlide/ImageSlide';
import useStyles from './style';
import { loaded } from '../../store/slice/LoadingSlice';

const DetailPage = () => {
  const queryString = require('query-string');
  const classes = useStyles();
  const load = useSelector(loaded);

  const parsed = queryString.parse(location.search);
  const idImmo = parsed.id;

  const dispatch = useDispatch();
  const allImmo = useSelector(immo);

  useEffect(() => {
    dispatch({ type: 'INIT' });
  }, []);

  const selectedImmo = allImmo.filter((elem) => elem.id === Number(idImmo));

  const open360 = () => {
    window.open(selectedImmo[0]?.tour360Url);
  };

  const reg = selectedImmo[0]?.regione.nome.toUpperCase();
  const tip = selectedImmo[0]?.tipologia.nome.toUpperCase();
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
  } return (
    <>
      <Typography align="center" variant="h3" color="secondary" style={{ marginTop: '10px' }}>
        {selectedImmo[0]?.contratto === 0 ? 'AFFITTO' : 'VENDITA'}
        {' '}
        /
        {reg}
        {' '}
        /
        {' '}
        {tip}
      </Typography>
      <ImageSlide selectedImmo={selectedImmo[0] ? selectedImmo[0] : []} />
      ;
      {selectedImmo[0]?.tour360Visibility === false ? <></>
        : (
          <div className={classes.container}>
            <CardMedia
              onClick={open360}
              className={classes.media}
              image={`https://api.fideconto.ch/img/immobili/${selectedImmo[0]?.immagini[0]?.fileName}`}
              title="foto immobile"
            />

            <div className={classes.centered}>
              <Typography
                onClick={open360}
                variant="h2"
                style={{ fontWeight: 'bold' }}
              >
                Virtual tour
              </Typography>
              <ThreeSixtyIcon onClick={open360} style={{ fontSize: '200px' }} />
              <Icon onClick={open360} classes={{ root: classes.iconRoot }} />
            </div>
          </div>
)}

    </>
  );
};
export default DetailPage;
