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
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
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
import Carousel from 'react-material-ui-carousel';

import useStyles from './style';
import {
  immo, rentOrSell, idRegionSelecter, idLocalSelected, idCategorySelected, priceLimits, ammobiliato,
} from '../../store/slice/ImmoSlice';

const ImmoElement = () => {
  const classes = useStyles();
  const allImmo = useSelector(immo);
  const contractType = useSelector(rentOrSell);
  const selectedRegion = useSelector(idRegionSelecter);
  const selectedLocal = useSelector(idLocalSelected);
  const selectedCategory = useSelector(idCategorySelected);
  const prices = useSelector(priceLimits);
  const ammo = useSelector(ammobiliato);
  let countElement = 0;
  let countAllElement = 0;

  const listImmo = allImmo.map((element) => {
    const bagni = element.immobiliCaratteristiche?.find(
      (car) => car.caratteristicaId === 29);
    const ammobi = element.immobiliCaratteristiche?.find(
        (car) => car.caratteristicaId === 1);
    if (element.contratto === contractType
      && (((element.regioneId === selectedRegion.id || selectedRegion.id === 0) && (selectedRegion.tipo === 'regione' || selectedRegion.tipo === ''))
      || ((element.cittaId === selectedRegion.id || selectedRegion.id === 0) && (selectedRegion.tipo === 'città' || selectedRegion.tipo === ' ')))
      && (element.locali.numero === selectedLocal || selectedLocal === 0)
      && (element.tipologia.id === selectedCategory || selectedCategory === 0)
      && ((element.pigione <= prices[1] || prices[1] === 0) && (element.pigione >= prices[0] || prices[0] === 0))

      && element.visibilita === true
      && ((ammo === true && ammobi !== undefined) || (ammo === false))) {
      if (document.URL.includes('vendita-affitto')) {
        countElement = 0;
        countAllElement += 1;
      } else countElement += 1;
      const image = element?.immagini?.length < 1 ? false
        : [...element.immagini].sort((a, b) => a.posizione - b.posizione);

      const imageFiltered = image.length > 0 ? image.filter((i) => i.old === false) : [];
      const listLargeImage = !element.immagini || image === false ? <></>
        : imageFiltered.map((elem, index) => (

          <CardMedia
            key={elem.id}
            className={classes.media}
            image={`https://api.multimmobiliare.com/img/immobili/${elem.fileName}`}
            title="foto immobile principale"
          />

        ));

      let date = null;
      if (element.disponibilita !== null) {
        date = parseJSON(element.disponibilita);
      }
      let subito;
      let sub;
      let dateFormat = null;
      if (date !== null) {
        dateFormat = format(new Date(date), 'dd.MM.yyyy');
      }

      if (dateFormat !== null && dateFormat.toString() !== '04.01.1900') {
        sub = new Date(date) <= new Date();

        subito = 'Da subito';
      } else {
        sub = true;
        subito = 'Su richiesta';
      }

      let count = 0;
      const parking = element.immobiliCaratteristiche.map((car) => {
        if (car.caratteristicaId === 18 || car.caratteristicaId === 3
          || car.caratteristicaId === 10 || car.caratteristicaId === 5
           || car.caratteristicaId === 31) {
          count += 1;
          if (count >= 2) {
            return (
              <Typography variant="h4">
                /
                {' '}
                {car.quantita}
                {' '}
                {car.caratteristica.nome}
              </Typography>
            );
          }
          return (
            <Typography variant="h4">
              {car.quantita}
              {' '}
              {car.caratteristica.nome}
            </Typography>
          );
        }
        return ('');
      });
      const getSingleParking = parking.filter((value) => value !== '');
      return (
        <Grid key={element.id} item md={4} m={12} xl={4} xs={12}>
          <Paper
            className={classes.paper}
            onClick={() => window.location.href = `${window.location.href.substring(0, window.location.href.indexOf('/'))}dettaglio?id=${element.id}&tipo=Sito&rentOrSell=${contractType}&idRegion=${selectedRegion.tipo === 'regione' ? selectedRegion.id : -1}&idCitta=${selectedRegion.tipo === 'città' ? selectedRegion.id : -1}&idLocal=${selectedLocal}&idCategory=${selectedCategory}&priceMin=${prices[0]}&priceMax=${prices[1]}&ammobiliato=${ammo}`}
          >
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
                {element.suRichiesta ? <></>

                  : (
                    <Typography variant="h3" style={{ marginRight: '10px' }}>
                      CHF
                    </Typography>
                  )}
                <Typography variant="h3">
                  {element.suRichiesta ? 'Prezzo su richiesta'

                    : (
                      <NumberFormat
                        value={element.pigione}
                        className="foo"
                        displayType="text"
                        thousandSeparator
                        renderText={(value, props) => <div {...props}>{value}</div>}
                      />
                    )}
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

              <div className={classes.div}>
                {element.tipologia.nome === 'Garage' || element.tipologia.nome === 'Parcheggio' ? <></>
                  : (
                    <>
                      <img src="https://api.multimmobiliare.com/img/icons/Locali.png" alt="locali" style={{ width: '30px', marginRight: '10px' }} />
                      {' '}

                      <Typography variant="h4">

                        {element.tipologiaId === 10 ? `${element.numeroAppartamenti} Appartamenti`
                          : (
                            <>
                              {element.locali.numero}
                              {' '}
                              {element.locali.numero === 1 || element.locali.numero === 1.5 ? 'locale' : 'locali'}
                            </>
                          )}

                      </Typography>
                    </>
                  )}
              </div>

              <span className={classes.div}>
                {element.tipologia.nome === 'Garage' || element.tipologia.nome === 'Parcheggio' || element.metratura === 0 ? <></>
                  : (
                    <>
                      <img src="https://api.multimmobiliare.com/img/icons/metratura.png" alt="locali" style={{ width: '30px', marginRight: '10px' }} />
                      {' '}
                      <Typography variant="h4">

                        {element.metratura}
                        {' '}
                        m²
                      </Typography>
                    </>
                  )}
                {' '}
              </span>

              {element.tipologiaId === 8 || (element.tipologiaId === 7
               && element.pianiEdificio === null) ? <></>
                : (
                  <div className={classes.div}>
                    <img src="https://api.multimmobiliare.com/img/icons/scala.png" alt="locali" style={{ width: '30px', marginRight: '10px' }} />
                    {' '}
                    <Typography variant="h4">
                      {(element.tipologiaId === 10 || element.tipologiaId === 7) && element.pianiEdificio !== null ? `${element.pianiEdificio} Piani`
                        : (
                          <>
                            {' '}
                            {element.piano === 0 || element.piano === null ? ' PT' : `  ${element.piano} °Piano`}
                          </>
                        )}
                    </Typography>
                  </div>
                )}
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              className={classes.padding}
            >

              <span className={classes.div}>
                {element.tipologia.nome === 'Garage' || element.tipologia.nome === 'Parcheggio' ? <></>
                  : (
                    <>
                      <LocalParkingIcon style={{ marginRight: '10px' }} />
                      {' '}
                      {getSingleParking.length === 0
                        ? <Typography variant="h4">Nessun parcheggio</Typography> : parking}
                    </>
                  )}
              </span>

              <div className={classes.div}>
                {element.tipologia.nome === 'Garage' || element.tipologia.nome === 'Parcheggio' ? <></>
                  : (
                    <>

                      {element.tipologiaId === 10 ? (
                        <>
                          {' '}
                          <CalendarTodayIcon style={{ marginRight: '10px' }} />
                          {' '}
                          <Typography variant="h4">

                            {element.annoCostruzione}
                            {' '}
                            Anno costruzione
                          </Typography>
                        </>
                      )
                        : (
                          <>
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
                          </>
                        )}

                    </>
                  )}
              </div>

              <div className={classes.div}>
                <EventAvailableIcon style={{ marginRight: '10px' }} />
                {' '}
                <Typography variant="h4">
                  {' '}
                  {sub ? subito : dateFormat}
                </Typography>
              </div>

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
