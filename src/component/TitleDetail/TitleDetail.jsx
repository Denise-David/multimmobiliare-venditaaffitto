/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ReactElement, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import RoomIcon from '@material-ui/icons/Room';
import {
  Divider, Button, SvgIcon,
  IconButton,
} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { useSpring, animated } from 'react-spring';
import {
  useDispatch, useSelector,
} from 'react-redux';
import Icon from '@material-ui/core/Icon';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import Card from '@material-ui/core/Card';
import { format } from 'date-fns';
import NumberFormat from 'react-number-format';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import TextField from '@material-ui/core/TextField';

import CardMedia from '@material-ui/core/CardMedia';

import LocalParkingIcon from '@material-ui/icons/LocalParking';
import WcIcon from '@material-ui/icons/Wc';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import parseJSON from 'date-fns/parseJSON';
import CheckIcon from '@material-ui/icons/Check';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import Link from '@material-ui/core/Link';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import GoogleMapReact from 'google-map-react';
import Geocode from 'react-geocode';

import fb from '../../img/fbShare.png';
import link from '../../img/link.png';
import pdfD from '../../img/pdfDownload.png';
import stefania from '../../img/stefania.png';
import vasca from '../../img/vasca.png';
import park from '../../img/parking.png';
import scala from '../../img/scala.png';
import met from '../../img/metratura.png';
import locali from '../../img/Locali.png';
import useStyles from './style';
import calendar from '../../img/calendar.png';
import { loaded } from '../../store/slice/LoadingSlice';
import {
  immo, latitude, longitude, setLat, setLng,
} from '../../store/slice/ImmoSlice';
import arr from '../../img/arrowBack.png';

const open360 = () => {
  window.open(selectedImmo[0]?.tour360Url);
};

const trans13 = (x, y, z) => `translate(${x}px, ${y}px)`;
const TitleDetail = (selectedImmo) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const date = parseJSON(selectedImmo.selectedImmo.disponibilita);
  const dateFormat = format(new Date(date), 'dd.MM.yyyy');
  const load = useSelector(loaded);
  const lt = useSelector(latitude);
  const lg = useSelector(longitude);
  const queryString = require('query-string');
  const [props13, set13] = useSpring(() => ({ xys: [0, 0, -1] }));
  const parsed = queryString.parse(location.search);

  let count = 0;

  Geocode.setApiKey('AIzaSyDoqKjf0F9Y2vaVUBGTqLs7JxM3PQMMp_A');
  Geocode.setLanguage('it');

  const completeAdress = `${selectedImmo.selectedImmo.indirizzo} ${selectedImmo.selectedImmo.cap} ${selectedImmo.selectedImmo.citta}`;

  if (load === true) {
    Geocode.fromAddress(completeAdress).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        dispatch(setLat(lat));
        dispatch(setLng(lng));
      },
      (error) => {
        console.error(error);
      },
    );
  }

  const reg = selectedImmo.selectedImmo.regione.nome.toUpperCase();
  const tip = selectedImmo.selectedImmo.tipologia.nome.toUpperCase();
  const doc = selectedImmo.selectedImmo.documenti?.map((d) => (
    <>
      <div nome="dettaglio">
        <Link
          className={classes.div2}
          color="secondary"
          href="#"
          onClick={() => window.location.href = `https://api.multimmobiliare.apton.ch/doc/immobili/${d.fileName}`}
        >
          <PictureAsPdfIcon style={{ color: '#CF291d', marginRight: '20px', fontSize: '40px' }} />
          <Typography style={{ fontSize: '25px', marginRight: '1em' }} key={d.id}>
            {' '}
            {d.fileName}
          </Typography>

        </Link>
      </div>
    </>
  ));
  const caratt = selectedImmo.selectedImmo.immobiliCaratteristiche?.map((car) => (
    <>

      <List>
        <Divider fullWidth style={{ background: '#CF291d' }} />
        <ListItem alignItems="flex-start">
          <ListItemIcon style={{ marginRight: '10%' }}>
            <CheckIcon style={{ color: 'red', fontSize: '40px' }} />
          </ListItemIcon>
          <ListItemText
            primary=""
            secondary={(
              <>
                <Typography style={{ fontSize: '25px' }} color="secondary">
                  {car.caratteristica.nome}
                </Typography>
              </>
  )}
          />
        </ListItem>
      </List>
    </>
  )
  );

  const parking = selectedImmo.selectedImmo.immobiliCaratteristiche.map((car) => {
    if (car.caratteristicaId === 18 || car.caratteristicaId === 3) {
      count += 1;
      if (count >= 2) {
        return (
          <Typography style={{ fontSize: '25px' }}>
            /
            {' '}
            {car.caratteristica.nome}
          </Typography>
        );
      }
      return (
        <Typography style={{ fontSize: '25px' }}>
          {car.caratteristica.nome}
        </Typography>
      );
    }
    return ('');
  });
  const getSingleParking = parking.filter((value) => value !== '');

  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid container item xl={8} xs={8}>
          <div>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              style={{ marginTop: '20px', marginBottom: '20px' }}
            >

              <animated.img
                onMouseMove={() => set13({ xys: [-20, 0, 0] })}
                onMouseLeave={() => set13({ xys: [0, 0, 0] })}
                src={arr}
                alt="copertina"
                style={{
                  width: '30px', transform: props13.xys.interpolate(trans13), marginRight: '20px',
                }}
              />
              <Typography
                onMouseMove={() => set13({ xys: [-20, 0, 0] })}
                onMouseLeave={() => set13({ xys: [0, 0, 0] })}
                align="left"
                color="secondary"
                style={{ fontSize: '25px' }}
              >
                Ritorna alla ricerca

              </Typography>

            </Grid>
            <Typography align="left" color="secondary" style={{ marginTop: '20 px', fontSize: '44px' }}>
              {selectedImmo.selectedImmo.contratto === 0 ? 'AFFITTO' : 'VENDITA'}
              {' '}
              /
              {reg}
              {' '}
              /
              {' '}
              {tip}
            </Typography>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
            >

              <Typography
                color="secondary"
                style={{
                  fontSize: '44px',
                }}
              >

                {selectedImmo.selectedImmo ? selectedImmo.selectedImmo.titolo : ''}
              </Typography>
              <div className={classes.div}>
                <Typography
                  align="right"
                  variant="h4"
                  color="secondary"
                  style={{
                    marginRight: '10px', fontSize: '44px', color: '#CF291d',
                  }}
                >
                  CHF
                </Typography>
                <Typography
                  align="right"
                  variant="h4"
                  color="secondary"
                  style={{
                    fontSize: '44px', color: '#CF291d',
                  }}
                >
                  <NumberFormat
                    value={selectedImmo.selectedImmo ? selectedImmo.selectedImmo.pigione : ''}
                    className="foo"
                    displayType="text"
                    thousandSeparator
                    renderText={(value, props) => <div {...props}>{value}</div>}
                  />

                </Typography>
              </div>
            </Grid>
            <Typography
              variant="h4"
              color="secondary"
              style={{
                marginTop: '20px', fontSize: '44px',
              }}
            >
              {selectedImmo.selectedImmo ? selectedImmo.selectedImmo.indirizzo : ''}

            </Typography>
            <Typography
              variant="h4"
              color="secondary"
              style={{
                fontSize: '44px',
              }}
            >
              {selectedImmo.selectedImmo ? selectedImmo.selectedImmo.citta : ''}

            </Typography>
            <div className={classes.container} style={{ marginTop: '40px' }}>
              <CardMedia
                onClick={open360}
                className={classes.media2}
                image={`https://api.multimmobiliare.apton.ch/img/immobili/${selectedImmo.selectedImmo?.immagini[0]?.fileName}`}
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
            <Typography
              color="secondary"
              style={{
                fontSize: '44px',
                marginBottom: '1em',
                marginTop: '50px',
              }}
            >
              Descrizione

            </Typography>
            <Typography style={{ marginBottom: '2em', fontSize: '25px' }} color="secondary">

              {selectedImmo.selectedImmo ? selectedImmo.selectedImmo.descrizione : ''}
            </Typography>
            <div>
              <Typography
                color="secondary"
                style={{
                  fontSize: '44px',
                  marginBottom: '1em',
                  marginTop: '50px',
                }}
              >
                Costi

              </Typography>
              <Divider fullWidth style={{ background: '#CF291d' }} />
              <List>

                <ListItem alignItems="flex-start">

                  <Typography style={{ fontSize: '25px', marginRight: '9%' }} color="secondary">
                    Affitto:

                  </Typography>

                  <ListItemText
                    secondary={(
                      <>
                        <Typography style={{ fontSize: '25px' }} color="secondary">
                          <NumberFormat
                            value={selectedImmo.selectedImmo ? selectedImmo.selectedImmo.pigione : ''}
                            className="foo"
                            displayType="text"
                            thousandSeparator
                            renderText={(value, props) => <div {...props}>{value}</div>}
                          />

                        </Typography>
                      </>
)}
                  />

                </ListItem>
              </List>
              <Divider fullWidth style={{ background: '#CF291d' }} />
              <List>

                <ListItem alignItems="flex-start">
                  <Typography style={{ fontAlign: 'left', fontSize: '25px', marginRight: '9%' }} color="secondary">
                    Spese:

                  </Typography>

                  <ListItemText
                    secondary={(
                      <>
                        <Typography style={{ fontSize: '25px' }} color="secondary">
                          <NumberFormat
                            value={selectedImmo.selectedImmo ? selectedImmo.selectedImmo.spese : ''}
                            className="foo"
                            displayType="text"
                            thousandSeparator
                            renderText={(value, props) => <div {...props}>{value}</div>}
                          />

                        </Typography>
                      </>
)}
                  />
                </ListItem>
              </List>
              <Divider fullWidth style={{ background: '#CF291d' }} />

              <Typography
                color="secondary"
                style={{
                  fontSize: '44px',
                  marginBottom: '1em',
                  marginTop: '50px',
                }}
              >
                Dettagli

              </Typography>
              <Divider fullWidth style={{ background: '#CF291d' }} />
              <List>

                <ListItem alignItems="flex-start">
                  <ListItemIcon style={{ marginRight: '10%' }}>
                    <img alt="logo" src={locali} style={{ maxHeight: '50px', maxWidth: '50px' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary=""
                    secondary={(
                      <>
                        <Typography style={{ fontSize: '25px' }} color="secondary">

                          {selectedImmo.selectedImmo.locali.numero}
                          {' '}
                          {selectedImmo.selectedImmo.locali.numero === 1 || selectedImmo.selectedImmo.locali.numero === 1.5 ? 'locale' : 'locali'}
                        </Typography>
                      </>
          )}
                  />
                </ListItem>
              </List>
              <Divider fullWidth style={{ background: '#CF291d' }} />
              <List>

                <ListItem alignItems="flex-start">
                  <ListItemIcon style={{ marginRight: '10%' }}>
                    <img alt="logo" src={met} style={{ maxHeight: '50px', maxWidth: '50px' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary=""
                    secondary={(
                      <>
                        <Typography style={{ fontSize: '25px' }} color="secondary">

                          {selectedImmo.selectedImmo.metratura}
                          {' '}
                          m²
                        </Typography>
                      </>
          )}
                  />
                </ListItem>
              </List>
              <List>
                <Divider fullWidth style={{ background: '#CF291d' }} />
                <ListItem alignItems="flex-start">
                  <ListItemIcon style={{ marginRight: '10%' }}>
                    <img alt="logo" src={scala} style={{ maxHeight: '50px', maxWidth: '50px' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary=""
                    secondary={(
                      <>
                        <Typography style={{ fontSize: '25px' }} color="secondary">

                          {selectedImmo.selectedImmo.piano === 0 ? 'PT' : `${selectedImmo.selectedImmo.piano}°Piano`}
                        </Typography>
                      </>
)}
                  />
                </ListItem>
              </List>
              <List>
                <Divider fullWidth style={{ background: '#CF291d' }} />
                <ListItem alignItems="flex-start">
                  <ListItemIcon style={{ marginRight: '10%' }}>
                    <img alt="logo" src={park} style={{ maxHeight: '50px', maxWidth: '50px' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary=""
                    secondary={(
                      <>
                        {getSingleParking.length === 0
                          ? <Typography style={{ fontSize: '25px' }} color="secondary">Nessun parcheggio</Typography>
                          : <Typography className={classes.div1} color="secondary">{parking}</Typography>}
                      </>
)}
                  />
                </ListItem>
              </List>
              <List>
                <Divider fullWidth style={{ background: '#CF291d' }} />
                <ListItem alignItems="flex-start">
                  <ListItemIcon style={{ marginRight: '10%' }}>
                    <img alt="logo" src={vasca} style={{ maxHeight: '50px', maxWidth: '50px' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary=""
                    secondary={(
                      <>
                        <Typography style={{ fontSize: '25px' }} color="secondary">

                          1 bagno
                        </Typography>
                      </>
)}
                  />
                </ListItem>
              </List>

              {selectedImmo.selectedImmo.contratto === 0
                ? (
                  <List>
                    <Divider fullWidth style={{ background: '#CF291d' }} />
                    <ListItem alignItems="flex-start">
                      <ListItemIcon style={{ marginRight: '10%' }}>
                        <img alt="logo" src={calendar} style={{ maxHeight: '50px', maxWidth: '50px' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary=""
                        secondary={(
                          <>
                            <Typography style={{ fontSize: '25px' }} color="secondary">
                              {' '}
                              libero da
                              {' '}
                              {dateFormat}
                            </Typography>
                          </>
  )}
                      />
                    </ListItem>
                  </List>

                ) : <></>}
              <Typography
                color="secondary"
                style={{
                  fontSize: '44px',
                  marginBottom: '1em',
                  marginTop: '50px',
                }}
              >
                Caratteristiche

              </Typography>

              {caratt}

              <Typography
                color="secondary"
                style={{
                  fontSize: '44px',
                  marginBottom: '50px',
                  marginTop: '50px',
                }}
              >
                Documenti e planimetrie

              </Typography>
              {doc}
              <div style={{
                width: 'Auto', height: '20em', marginTop: '50px',
              }}
              >
                {lt === 0 && lg === 0 ? <></>

                  : (
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: 'AIzaSyDoqKjf0F9Y2vaVUBGTqLs7JxM3PQMMp_A' }}
                      defaultZoom={15}
                      yesIWantToUseGoogleMapApiInternals
                      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                      defaultCenter={{ lat: lt, lng: lg }}
                    >
                      <LocalOfferIcon
                        lat={lt}
                        lng={lg}
                        text=" My Marker "
                        style={{ color: 'red' }}
                      />

                    </GoogleMapReact>
                  )}

              </div>
            </div>

          </div>

        </Grid>

        <Grid
          container
          item
          xl={3}
          xs={3}
          style={{
            padding: '1em', position: 'sticky', top: '200px', backgroundColor: '#1d1d1d', marginTop: '0px', overflowX: 'none',
          }}
        >
          <Card style={{}}>
            <CardContent style={{ backgroundColor: '#1d1d1d' }}>
              <div>
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                  <IconButton onClick={() => window.open(`https://multimmobiliare.webflow.io/pdf?id=${parsed.id}`)}>
                    <img
                      alt="pdf"
                      src={pdfD}
                      style={{
                        width: '40px', height: 'auto',
                      }}
                    />
                  </IconButton>
                  <div>
                    <FacebookShareButton
                      url={window.location.href}
                      className="Demo__some-network__share-button"
                      style={{
                        width: '100%',
                      }}
                    >
                      <IconButton>
                        <img
                          alt="pdf"
                          src={fb}
                          style={{
                            width: '30px', height: 'auto',
                          }}
                        />
                      </IconButton>
                    </FacebookShareButton>
                  </div>
                  <IconButton onClick={() => {
                    const dummy = document.createElement('input');
                    const text = window.location.href;

                    document.body.appendChild(dummy);
                    dummy.value = text;
                    dummy.select();
                    document.execCommand('copy');
                    document.body.removeChild(dummy);
                  }}
                  >
                    <img
                      alt="pdf"
                      src={link}
                      style={{
                        width: '30px', height: '30px',
                      }}
                    />
                  </IconButton>

                </Grid>
                <Typography color="secondary" style={{ marginBottom: '20px', fontSize: '44px' }}>
                  Responsabile
                </Typography>

                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <span className={classes.margin}>
                    <Typography color="secondary" style={{ marginBottom: '20px', fontSize: '25px' }}>
                      Stefania Auciello
                    </Typography>

                    <Typography color="secondary" style={{ marginBottom: '20px', marginRight: '20px', fontSize: '25px' }}>
                      Direzione
                    </Typography>
                    <div className={classes.div3}>
                      <RoomIcon color="secondary" />
                      <Typography color="secondary" style={{ marginBottom: '20px', fontSize: '25px' }}>

                        Lugano
                      </Typography>
                    </div>
                    <LinkedInIcon color="secondary" style={{ marginRight: '10px', fontSize: '35px' }} />
                    <PhoneIcon color="secondary" style={{ marginRight: '10px', fontSize: '35px' }} />
                    <MailIcon color="secondary" style={{ marginRight: '10px', fontSize: '35px' }} />
                  </span>

                  <CardMedia
                    component="img"
                    alt="Stefania"
                    image={stefania}
                    title="stefania"
                    style={{ width: '200px', height: '200px', marginLeft: '2em' }}
                  />
                </Grid>
                <Divider fullWidth style={{ background: '#CF291d', marginTop: '20px', marginBottom: '20px' }} />
                <Typography color="secondary" style={{ marginBottom: '20px', fontSize: '44px' }}>
                  Richiedi una visita
                </Typography>

                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  InputLabelProps={{
                    classes: {
                      root: classes.labelRoot,
                      focused: classes.labelFocused,
                    },
                  }}
                  style={{ marginTop: '20px', marginRight: '10px', color: '#ECECEC' }}
                />

                <TextField
                  fullWidth
                  label="Nome e Cognome"
                  variant="outlined"
                  InputLabelProps={{
                    classes: {
                      root: classes.labelRoot,
                      focused: classes.labelFocused,
                    },
                  }}
                  style={{
                    marginTop: '20px',
                    overrides: {
                      MuiInputBase: {
                        root: {
                          color: '#ECECEC',

                        },
                        outlined: {
                          color: '#1d1d1d',

                        },
                        MuiInputLabel: {
                          root: {
                            color: '#1d1d1d',
                            fontSize: '25',

                          },
                        },
                      },
                    },
                  }}
                />

                <TextField
                  multiline
                  fullWidth
                  label="Messaggio"
                  variant="outlined"
                  InputLabelProps={{
                    classes: {
                      root: classes.labelRoot,
                      focused: classes.labelFocused,
                    },
                  }}
                  style={{ marginTop: '20px', color: '#ECECEC' }}
                />
                <Button
                  className={classes.button}
                  style={{ marginTop: '20px' }}
                  fullWidth
                  variant="contained"
                >
                  Invia

                </Button>
                <Divider fullWidth style={{ background: '#CF291d', marginTop: '20px', marginBottom: '20px' }} />
                <Typography color="secondary" style={{ marginBottom: '20px', fontSize: '44px' }}>
                  Riserva
                </Typography>
                <Button
                  className={classes.button}
                  fullWidth
                  variant="contained"
                >
                  Riservazione online

                </Button>

              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </>
  );
};
export default TitleDetail;
