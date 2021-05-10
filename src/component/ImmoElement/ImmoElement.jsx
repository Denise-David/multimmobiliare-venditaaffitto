/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import RoomIcon from '@material-ui/icons/Room';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import WcIcon from '@material-ui/icons/Wc';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import parseJSON from 'date-fns/parseJSON';
import { format } from 'date-fns';
import SimpleImageSlider from 'react-simple-image-slider';
import NumberFormat from 'react-number-format';
import {
  Divider, Button, SvgIcon,
} from '@material-ui/core';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import LocalParkingIcon from '@material-ui/icons/LocalParking';

import {
  CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext,
} from 'pure-react-carousel';
import Carousel from 'react-material-ui-carousel';

import useStyles from './style';
import {
  immo, rentOrSell, idRegionSelecter, idLocalSelected, idCategorySelected, priceLimits,
} from '../../store/slice/ImmoSlice';
import ImmoElementEvidence from './ImmoElementEvidence/ImmoElement';

const ImmoElement = () => {
  const classes = useStyles();
  const allImmo = useSelector(immo);
  const contractType = useSelector(rentOrSell);
  const selectedRegion = useSelector(idRegionSelecter);
  const selectedLocal = useSelector(idLocalSelected);
  const selectedCategory = useSelector(idCategorySelected);
  const prices = useSelector(priceLimits);
  let countElement = 0;
  let countAllElement = 0;

  const listImmo = allImmo.map((element) => {
    const bagni = element.immobiliCaratteristiche?.find(
      (car) => car.caratteristicaId === 29);
    if (element.contratto === contractType
      && countElement < 6
      && (((element.regioneId === selectedRegion.id || selectedRegion.id === 0) && (selectedRegion.tipo === 'regione' || selectedRegion.tipo === ''))
      || ((element.cittaId === selectedRegion.id || selectedRegion.id === 0) && (selectedRegion.tipo === 'città' || selectedRegion.tipo === ' ')))
      && (element.locali.numero === selectedLocal || selectedLocal === 0)
      && (element.tipologia.id === selectedCategory || selectedCategory === 0)
      && ((element.pigione <= prices[1] && element.pigione >= prices[0])
      || (prices[1] === 0 && prices[0] === 0))
      && element.visibilita === true) {
      if (document.URL.includes('vendita-affitto')) {
        countElement = 0;
        countAllElement += 1;
      } else countElement += 1;
      if (countAllElement === 7 && document.URL.includes('vendita-affitto')) {
        return (<ImmoElementEvidence elemento={element} />);
      }
      const listLargeImage = !element.immagini ? <></>
        : element.immagini.map((elem, index) => (

          <CardMedia
            key={elem.id}
            className={classes.media}
            image={`https://api.multimmobiliare.com/img/immobili/${elem.fileName}`}
            title="foto immobile principale"
          />

        ));
      const date = parseJSON(element.disponibilita);
      const dateFormat = format(new Date(date), 'dd.MM.yyyy');
      let count = 0;
      const parking = element.immobiliCaratteristiche.map((car) => {
        if (car.caratteristicaId === 18 || car.caratteristicaId === 3
          || car.caratteristicaId === 10) {
          count += 1;
          if (count >= 2) {
            return (
              <Typography variant="h4">
                /
                {' '}
                {car.caratteristica.nome}
              </Typography>
            );
          }
          return (
            <Typography variant="h4">
              {car.caratteristica.nome}
            </Typography>
          );
        }
        return ('');
      });
      const getSingleParking = parking.filter((value) => value !== '');
      return (
        <Grid item md={4} m={12} xl={4} xs={12}>
          <Paper className={classes.paper} onClick={() => window.location.href = `https://multimmobiliare.webflow.io/dettaglio?id=${element.id}`}>
            {element.immagini[0]
              ? (
                <>
                  <Carousel
                    navButtonsAlwaysVisible
                    animation="slide"
                    autoPlay={false}
                    navButtonsProps={{
                      padding: '0px',
                      '@media (min-width:600px)': {
                        padding: '12px',
                      },
                    }}
                  >
                    {listLargeImage}
                  </Carousel>
                </>
              ) : <></>}
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              className={classes.padding}
            >
              <Typography key={element.id} variant="h4">
                <RoomIcon />
                {' '}
                {element.citta}
              </Typography>
              <span className={classes.div}>
                <Typography variant="h3" style={{ marginRight: '10px' }}>
                  CHF
                </Typography>
                <Typography variant="h3">

                  <NumberFormat
                    value={element.pigione}
                    className="foo"
                    displayType="text"
                    thousandSeparator
                    renderText={(value, props) => <div {...props}>{value}</div>}
                  />
                </Typography>
              </span>
            </Grid>
            <Typography variant="h3" className={classes.padding}>
              {element.titolo}
            </Typography>
            <Divider classes={{ root: classes.divider }} />
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              className={classes.padding}
            >
              <Grid item xs={12} sm={6}>
                <div className={classes.div}>
                  <img src="https://api.multimmobiliare.com/img/icons/Locali.png" alt="locali" style={{ width: '30px', marginRight: '10px' }} />
                  {' '}
                  <Typography variant="h4">

                    {element.locali.numero}
                    {' '}
                    {element.locali.numero === 1 || element.locali.numero === 1.5 ? 'locale' : 'locali'}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={2}>
                <span className={classes.div}>
                  <img src="https://api.multimmobiliare.com/img/icons/metratura.png" alt="locali" style={{ width: '30px', marginRight: '10px' }} />
                  {' '}
                  <Typography variant="h4">

                    {element.metratura}
                    {' '}
                    m²
                  </Typography>
                  {' '}
                </span>
              </Grid>
              <Grid item xs={12} sm={3}>
                <div className={classes.div}>
                  <img src="https://api.multimmobiliare.com/img/icons/scala.png" alt="locali" style={{ width: '30px', marginRight: '10px' }} />
                  {' '}
                  <Typography variant="h4">
                    {element.piano === 0 ? ' PT' : `  ${element.piano} °Piano`}
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              className={classes.padding}
            >
              <Grid item xs={12} sm={6}>
                <span className={classes.div}>
                  <LocalParkingIcon style={{ marginRight: '10px' }} />
                  {' '}
                  {getSingleParking.length === 0
                    ? <Typography variant="h4">Nessun parcheggio</Typography> : parking}
                </span>
              </Grid>
              <Grid item xs={12} sm={2}>
                <div className={classes.div}>
                  <WcIcon style={{ marginRight: '10px' }} />
                  {' '}
                  {bagni?.quantita > 1
                    ? (
                      <Typography variant="h4">

                        {bagni?.quantita}
                        {' '}
                        bagni
                      </Typography>
                    )
                    : (
                      <Typography variant="h4">

                        Bagno
                      </Typography>
                    )}
                </div>
              </Grid>
              <Grid item xs={12} sm={3}>
                <div className={classes.div}>
                  <EventAvailableIcon style={{ marginRight: '10px' }} />
                  {' '}
                  <Typography variant="h4">
                    {' '}
                    {dateFormat}
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Divider classes={{ root: classes.divider }} />
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              className={classes.padding}
            >
              {' '}
              <Typography variant="h4">
                {element.tipologia.nome}
              </Typography>

            </Grid>

          </Paper>
        </Grid>
      );
    } return (<></>);
  });

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {listImmo}
      </Grid>
    </>
  );
};

export default ImmoElement;
