/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable array-callback-return */
/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import CardMedia from '@material-ui/core/CardMedia';
import { SvgIcon, Typography, Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import RoomIcon from '@material-ui/icons/Room';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import Carousel from 'react-material-ui-carousel';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import WcIcon from '@material-ui/icons/Wc';
import { format } from 'date-fns';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import NumberFormat from 'react-number-format';
import parseJSON from 'date-fns/parseJSON';
import useStyles from './style';
import metratura from '../../img/metratura.png';
import locali from '../../img/Locali.png';
import scala from '../../img/scala.png';
import {
  immo, rentOrSell, idRegionSelecter, idLocalSelected, idCategorySelected, priceLimits,
} from '../../store/slice/ImmoSlice';
import { loaded } from '../../store/slice/LoadingSlice';

const CorrObject = () => {
  const classes = useStyles();
  const allImmo = useSelector(immo);
  const queryString = require('query-string');
  const parsed = queryString.parse(location.search);
  const load = useSelector(loaded);

  const immoSel = allImmo.filter((val) => val.id === Number(parsed.id));

  let countElement = 0;
  if (load === false) {
    return (<></>);
  // eslint-disable-next-line consistent-return
  } const listImmo = allImmo.map((element) => {
    const listLargeImage = !element.immagini ? <></>
      : element.immagini.map((elem, index) => (

        <CardMedia
          key={elem.id}
          className={classes.media}
          image={`https://api.multimmobiliare.apton.ch/img/immobili/${elem.fileName}`}
          title="foto immobile principale"
        />

      ));

    if (element.contratto === immoSel[0]?.contratto
      && countElement < 3
      && (element.regioneId === immoSel[0]?.regioneId)
      && (element.locali.id === immoSel[0]?.locali.id)
      && (element.tipologia.id === immoSel[0]?.tipologia.id)
      && element.id !== immoSel[0].id
    ) {
      countElement += 1;

      const date = parseJSON(element.disponibilita);
      const dateFormat = format(new Date(date), 'dd.MM.yyyy');
      let count = 0;
      const parking = element.immobiliCaratteristiche.map((car) => {
        if (car.caratteristicaId === 18 || car.caratteristicaId === 3) {
          count += 1;
          if (count >= 2) {
            return (
              <Typography style={{ fontSize: '20px' }}>
                /
                {' '}
                {car.caratteristica.nome}
              </Typography>
            );
          }
          return (
            <Typography style={{ fontSize: '20px' }}>
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
              <Typography style={{ fontSize: '20px' }} key={element.id}>
                <RoomIcon />
                {' '}
                {element.citta}
              </Typography>
              <span className={classes.div}>
                <Typography style={{ fontSize: '30px', marginRight: '10px' }}>
                  CHF
                </Typography>
                <Typography style={{ fontSize: '30px' }}>

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
            <Typography style={{ fontSize: '30px' }} className={classes.padding}>
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
                  <img src={locali} alt="met" style={{ width: '30px', marginRight: '10px' }} />
                  {' '}
                  <Typography style={{ fontSize: '20px' }}>

                    {element.locali.numero}
                    {' '}
                    {element.locali.numero === 1 || element.locali.numero === 1.5 ? 'locale' : 'locali'}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={2}>
                <span className={classes.div}>
                  <img src={metratura} alt="met" style={{ width: '30px', marginRight: '10px' }} />
                  {' '}
                  <Typography style={{ fontSize: '20px' }}>

                    {element.metratura}
                    {' '}
                    m²
                  </Typography>
                  {' '}
                </span>
              </Grid>
              <Grid item xs={12} sm={3}>
                <div className={classes.div}>
                  <img src={scala} alt="met" style={{ width: '30px', marginRight: '10px' }} />
                  {' '}
                  <Typography style={{ fontSize: '20px' }}>
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
                    ? <Typography style={{ fontSize: '20px' }}>Nessun parcheggio</Typography> : parking}
                </span>
              </Grid>
              <Grid item xs={12} sm={2}>
                <div className={classes.div}>
                  <WcIcon style={{ marginRight: '10px' }} />
                  {' '}

                  <Typography style={{ fontSize: '20px' }}>

                    1 bagno
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={3}>
                <div className={classes.div}>
                  <EventAvailableIcon style={{ marginRight: '10px' }} />
                  {' '}
                  <Typography style={{ fontSize: '20px' }}>
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
              justify="flex-start"
              alignItems="center"
              className={classes.padding}
            >
              {' '}
              <Typography style={{ fontSize: '20px' }}>
                {element.tipologia.nome}
              </Typography>

            </Grid>

          </Paper>
        </Grid>
      );
    }
  });

  const filteredImmo = [...new Set(listImmo)];
  if (filteredImmo.length === 1 && filteredImmo[0] === undefined) {
    return (<></>);
  } return (
    <>
      <div>
        <Divider fullWidth style={{ background: '#CF291d', margin: '4em' }} />
        <Typography variant="h4" color="secondary" align="center" style={{ margin: '1em', fontSize: '60px', color: 'white' }}>
          OGGETTI CORRELATI
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {listImmo}
        </Grid>
      </div>
    </>
  );
};
export default CorrObject;
