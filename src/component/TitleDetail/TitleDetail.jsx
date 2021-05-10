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
import { BrowserView, MobileView } from 'react-device-detect';
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
import useStyles from './style';
import { loaded } from '../../store/slice/LoadingSlice';
import {
  immo, latitude, longitude, setLat, setLng,
} from '../../store/slice/ImmoSlice';

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

  const Mailto = ({
    email, subject = '', body = '', children,
  }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
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

  const reg = selectedImmo.selectedImmo?.regione?.nome?.toUpperCase();
  const tip = selectedImmo.selectedImmo?.tipologia?.nome?.toUpperCase();
  const doc = selectedImmo.selectedImmo?.documenti?.map((d) => (
    <>
      <div nome="dettaglio">
        <Link
          className={classes.div2}
          color="secondary"
          href="#"
          onClick={() => window.location.href = `https://api.multimmobiliare.com/doc/immobili/${d.fileName}`}
        >
          <PictureAsPdfIcon style={{
            color: '#CF291d',
            marginRight: '20px',
            fontSize: '20px',
            '@media (min-width:600px)': {
              fontSize: '40px',
            },
          }}
          />
          <Typography variant="body1" style={{ marginRight: '1em', color: 'white' }} key={d.id}>
            {' '}
            {d.fileName}
          </Typography>

        </Link>
      </div>
    </>
  ));
  const caratt = selectedImmo.selectedImmo.immobiliCaratteristiche?.map((car, index) => (
    <>

      <List style={{ padding: '0px' }}>
        <Divider fullWidth style={{ background: '#CF291d' }} />
        <ListItem alignItems="flex-start">
          <ListItemIcon style={{ marginRight: '10%' }}>
            <CheckIcon style={{
              color: 'red',
              fontSize: '20px',
              '@media (min-width:600px)': {
                fontSize: '40px',
              },
            }}
            />
          </ListItemIcon>
          <ListItemText
            primary=""
            secondary={(
              <>
                <Typography variant="body1" style={{ color: 'white' }} color="secondary">
                  {car.caratteristica.nome}
                </Typography>
              </>
  )}
          />
        </ListItem>
        {selectedImmo.selectedImmo.immobiliCaratteristiche.length === index + 1 ? <Divider fullWidth style={{ background: '#CF291d' }} /> : <></> }

      </List>
    </>
  )
  );

  const bagni = selectedImmo?.selectedImmo?.immobiliCaratteristiche?.find(
    (car) => car.caratteristicaId === 29);
  const autorimessa = selectedImmo?.selectedImmo?.immobiliCaratteristiche?.find(
    (car) => car.caratteristicaId === 3);
  const garage = selectedImmo?.selectedImmo?.immobiliCaratteristiche?.find(
    (car) => car.caratteristicaId === 10);
  const posteggio = selectedImmo?.selectedImmo?.immobiliCaratteristiche?.find(
    (car) => car.caratteristicaId === 18);
  const parking = selectedImmo?.selectedImmo?.immobiliCaratteristiche?.map(
    (car) => {
      if (car.caratteristicaId === 18 || car.caratteristicaId === 3
        || car.caratteristicaId === 10) {
        count += 1;
        if (count >= 2) {
          if (car.caratteristicaId === 3 && car?.quantita > 1) {
            return (

              <Typography variant="body1" style={{ color: 'white' }}>
                /
                {car?.quantita}
                {' '}
                Autorimesse
              </Typography>
            );
          } if (car.caratteristicaId === 18 && car?.quantita > 1) {
            return (

              <Typography variant="body1" style={{ color: 'white' }}>
                /
                {car?.quantita}
                {' '}
                Posteggi esterni
              </Typography>
            );
          } return (

            <Typography variant="body1" style={{ color: 'white' }}>
              /
              {' '}
              {car.caratteristica.nome}
            </Typography>
          );
        }
        if (car.caratteristicaId === 3 && car?.quantita > 1) {
          return (

            <Typography variant="body1" style={{ color: 'white' }}>
              {car?.quantita}
              {' '}
              Autorimesse
            </Typography>
          );
        } if (car.caratteristicaId === 18 && car?.quantita > 1) {
          return (

            <Typography variant="body1" style={{ color: 'white' }}>
              {car?.quantita}
              {' '}
              Posteggi esterni
            </Typography>
          );
        } return (

          <Typography variant="body1" style={{ color: 'white' }}>
            {car.caratteristica.nome}
          </Typography>
        );
      }
      return ('');
    },
  );
  const getSingleParking = parking?.filter((value) => value !== '');

  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid container item xl={8} xs={12}>
          <div>
            <Link to={() => window.history.back()}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                style={{
                  marginTop: '20px',
                  marginBottom: '20px',

                }}
                onClick={() => window.history.back()}
              >

                <animated.img
                  onMouseMove={() => set13({ xys: [-20, 0, 0] })}
                  onMouseLeave={() => set13({ xys: [0, 0, 0] })}
                  src="https://api.multimmobiliare.com/img/icons/arrowBack.png"
                  alt="copertina"
                  style={{
                    width: '30px',
                    transform: props13.xys.interpolate(trans13),
                    marginRight: '20px',
                    cursor: 'pointer',
                  }}
                />
                <Typography
                  onMouseMove={() => set13({ xys: [-20, 0, 0] })}
                  onMouseLeave={() => set13({ xys: [0, 0, 0] })}
                  variant="body1"
                  align="left"
                  color="secondary"
                  style={{
                    color: 'white',

                    cursor: 'pointer',
                  }}
                >
                  Ritorna alla ricerca

                </Typography>

              </Grid>
            </Link>
            <Typography
              align="left"
              variant="body1"
              style={{
                marginTop: '20px', color: 'white', marginBottom: '10px',
              }}
            >
              {selectedImmo.selectedImmo.contratto === 0 ? 'AFFITTO' : 'VENDITA'}
              {' '}
              /
              {' '}
              {' '}
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
              alignItems="center"
              style={{
                borderColor: '#CF291d', borderStyle: 'solid', borderWidth: '1px', padding: '1em',
              }}
            >

              <Typography
                color="secondary"
                variant="h2"
                style={{

                  color: 'white',
                }}
              >

                {selectedImmo.selectedImmo ? selectedImmo.selectedImmo.titolo : ''}
              </Typography>
              <div className={classes.div}>
                <Typography
                  variant="h2"
                  align="right"
                  color="secondary"
                  style={{
                    marginRight: '10px', color: '#CF291d',
                  }}
                >
                  CHF
                </Typography>

                <Typography
                  align="right"
                  variant="h2"
                  color="secondary"
                  style={{
                    color: '#CF291d',
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
              variant="body1"
              color="secondary"
              style={{
                color: 'white',
                marginTop: '20px',
                '@media (min-width:600px)': {
                  marginTop: '70px',
                },
              }}
            >
              <RoomIcon style={{ fontSize: '30px', color: '#CF291d' }} />
              {selectedImmo.selectedImmo ? selectedImmo.selectedImmo.indirizzo : ''}

            </Typography>
            <Typography
              variant="body1"
              color="secondary"
              style={{
                color: 'white',
                marginLeft: '30px',
                marginBottom: '20px',
                '@media (min-width:600px)': {
                  marginBottom: '70px',
                },
              }}
            >
              {selectedImmo.selectedImmo ? selectedImmo.selectedImmo.citta : ''}

            </Typography>
            <div className={classes.container} style={{ marginTop: '40px' }}>
              <CardMedia
                onClick={open360}
                className={classes.media2}
                image={`https://api.multimmobiliare.com/img/immobili/${selectedImmo.selectedImmo?.immagini[0]?.fileName}`}
                title="foto immobile"
              />

              <div className={classes.centered}>
                <Typography
                  onClick={open360}
                  variant="h2"
                  style={{ fontWeight: 'bold', color: 'white' }}
                >
                  Virtual tour
                </Typography>
                <ThreeSixtyIcon
                  onClick={open360}
                  style={{
                    fontSize: '80px',
                    '@media (min-width:600px)': {
                      fontSize: '200px',
                    },
                  }}
                />
                <Icon onClick={open360} classes={{ root: classes.iconRoot }} />
              </div>
            </div>
            <Typography
              variant="h2"
              color="secondary"
              style={{
                marginBottom: '1em',
                marginTop: '50px',
                color: 'white',
              }}
            >
              Descrizione

            </Typography>
            <Typography variant="body1" style={{ marginBottom: '2em', color: 'white' }} color="secondary">

              {selectedImmo.selectedImmo ? selectedImmo.selectedImmo.descrizione : ''}
            </Typography>
            <div>
              <Typography
                variant="h2"
                color="secondary"
                style={{
                  marginBottom: '1em',
                  marginTop: '50px',
                  color: 'white',
                }}
              >
                Costi

              </Typography>
              <Divider fullWidth style={{ background: '#CF291d' }} />
              <List>

                <ListItem alignItems="flex-start">

                  <Typography variant="body1" style={{ marginRight: '9%', color: 'white' }} color="secondary">
                    Affitto:

                  </Typography>

                  <ListItemText
                    secondary={(
                      <>
                        <Typography variant="body1" style={{ color: 'white' }} color="secondary">
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

              {selectedImmo.selectedImmo.spese
                ? (
                  <>
                    <Divider fullWidth style={{ background: '#CF291d' }} />
                    <List>
                      <ListItem alignItems="flex-start">
                        <Typography
                          variant="body1"
                          style={{
                            color: 'white', fontAlign: 'left', marginRight: '9%',
                          }}
                          color="secondary"
                        >
                          Spese:

                        </Typography>

                        <ListItemText
                          secondary={(
                            <>
                              <Typography variant="body1" style={{ color: 'white' }} color="secondary">
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
                  </>
                )
                : <></>}

              <Divider fullWidth style={{ background: '#CF291d' }} />
              {autorimessa && autorimessa.prezzo
                ? (
                  <>

                    <List>

                      <ListItem alignItems="flex-start">
                        <Typography
                          variant="body1"
                          style={{
                            color: 'white', fontAlign: 'left', marginRight: '3.8%',
                          }}
                          color="secondary"
                        >
                          {autorimessa.caratteristica.nome}
                          {' '}
                          :

                        </Typography>

                        <ListItemText
                          secondary={(
                            <>
                              <Typography variant="body1" style={{ color: 'white' }} color="secondary">
                                <NumberFormat
                                  value={autorimessa.prezzo ? autorimessa.prezzo : ''}
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

                  </>
                )
                : <></>}
              {garage && garage.prezzo
                ? (
                  <>

                    <List>

                      <ListItem alignItems="flex-start">
                        <Typography
                          variant="body1"
                          style={{
                            color: 'white', fontAlign: 'left', marginRight: '9%',
                          }}
                          color="secondary"
                        >
                          {garage.caratteristica.nome}
                          {' '}
                          :

                        </Typography>

                        <ListItemText
                          secondary={(
                            <>
                              <Typography variant="body1" style={{ color: 'white' }} color="secondary">
                                <NumberFormat
                                  value={garage.prezzo ? garage.prezzo : ''}
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

                  </>
                )
                : <></>}

              {posteggio && posteggio.prezzo
                ? (
                  <>

                    <List>

                      <ListItem alignItems="flex-start">
                        <Typography
                          variant="body1"
                          style={{
                            color: 'white', fontAlign: 'left', marginRight: '9%',
                          }}
                          color="secondary"
                        >
                          {posteggio.caratteristica.nome}
                          {' '}
                          :

                        </Typography>

                        <ListItemText
                          secondary={(
                            <>
                              <Typography
                                variant="body1"
                                style={{ color: 'white' }}
                                color="secondary"
                              >
                                <NumberFormat
                                  value={posteggio.prezzo ? posteggio.prezzo : ''}
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

                  </>
                )
                : <></>}

              <Typography
                variant="h2"
                color="secondary"
                style={{
                  marginBottom: '1em',
                  marginTop: '50px',
                  color: 'white',
                }}
              >
                Dettagli

              </Typography>
              <Divider fullWidth style={{ background: '#CF291d' }} />
              <List>

                <ListItem alignItems="flex-start">
                  <ListItemIcon style={{ marginRight: '10%' }}>
                    <img
                      alt="logo"
                      src="https://api.multimmobiliare.com/img/icons/Locali.png"
                      style={{
                        maxHeight: '30px',
                        maxWidth: '30px',
                        '@media (min-width:600px)': {
                          maxHeight: '50px', maxWidth: '50px',
                        },
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary=""
                    secondary={(
                      <>
                        <Typography variant="body1" style={{ color: 'white' }} color="secondary">

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
                    <img
                      alt="logo"
                      src="https://api.multimmobiliare.com/img/icons/metratura.png"
                      style={{
                        maxHeight: '30px',
                        maxWidth: '30px',
                        '@media (min-width:600px)': {
                          maxHeight: '50px', maxWidth: '50px',
                        },
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary=""
                    secondary={(
                      <>
                        <Typography variant="body1" style={{ color: 'white' }} color="secondary">

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
                    <img
                      alt="logo"
                      src="https://api.multimmobiliare.com/img/icons/scala.png"
                      style={{
                        maxHeight: '30px',
                        maxWidth: '30px',
                        '@media (min-width:600px)': {
                          maxHeight: '50px', maxWidth: '50px',
                        },
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary=""
                    secondary={(
                      <>
                        <Typography variant="body1" style={{ color: 'white' }} color="secondary">

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
                    <img
                      alt="logo"
                      src="https://api.multimmobiliare.com/img/icons/parking.png"
                      style={{
                        maxHeight: '30px',
                        maxWidth: '30px',
                        '@media (min-width:600px)': {
                          maxHeight: '50px', maxWidth: '50px',
                        },
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary=""
                    secondary={(
                      <>
                        {getSingleParking.length === 0
                          ? <Typography variant="body1" style={{ color: 'white' }} color="secondary">Nessun parcheggio</Typography>
                          : <Typography variant="body1" style={{ color: 'white' }} className={classes.div1} color="secondary">{parking}</Typography>}
                      </>
)}
                  />
                </ListItem>
              </List>
              <List>
                {bagni
                  ? (
                    <>
                      <Divider fullWidth style={{ background: '#CF291d' }} />
                      <ListItem alignItems="flex-start">
                        <ListItemIcon style={{ marginRight: '10%' }}>
                          <img
                            alt="logo"
                            src="https://api.multimmobiliare.com/img/icons/vasca.png"
                            style={{
                              maxHeight: '30px',
                              maxWidth: '30px',
                              '@media (min-width:600px)': {
                                maxHeight: '50px', maxWidth: '50px',
                              },
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary=""
                          secondary={(
                            <>
                              {bagni?.quantita > 1 ? (
                                <Typography variant="body1" style={{ color: 'white' }} color="secondary">

                                  {bagni?.quantita}
                                  {' '}
                                  bagni
                                </Typography>
                              )
                                : (
                                  <Typography variant="body1" style={{ color: 'white' }} color="secondary">

                                    1 bagno
                                  </Typography>
                                ) }
                            </>
)}
                        />
                      </ListItem>
                    </>
                  )
                  : <></>}
              </List>

              {selectedImmo.selectedImmo.contratto === 0
                ? (
                  <List>
                    <Divider fullWidth style={{ background: '#CF291d' }} />
                    <ListItem alignItems="flex-start">
                      <ListItemIcon style={{ marginRight: '10%' }}>
                        <img
                          alt="logo"
                          src="https://api.multimmobiliare.com/img/icons/calendar.png"
                          style={{
                            maxHeight: '30px',
                            maxWidth: '30px',
                            '@media (min-width:600px)': {
                              maxHeight: '50px', maxWidth: '50px',
                            },
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary=""
                        secondary={(
                          <>
                            <Typography variant="body1" style={{ color: 'white' }} color="secondary">
                              {' '}
                              libero da
                              {' '}
                              {selectedImmo.selectedImmo.disponibilita ? dateFormat : ''}
                            </Typography>
                          </>
  )}
                      />
                    </ListItem>
                  </List>

                ) : <></>}
              <Divider fullWidth style={{ background: '#CF291d' }} />
              <Typography
                variant="h2"
                color="secondary"
                style={{
                  marginBottom: '1em',
                  marginTop: '50px',
                  color: 'white',
                }}
              >
                Caratteristiche

              </Typography>

              {caratt}

              <Typography
                variant="h2"
                color="secondary"
                style={{
                  marginBottom: '50px',
                  marginTop: '50px',
                  color: 'white',
                }}
              >
                Documenti e planimetrie

              </Typography>
              {doc}

              <Divider fullWidth style={{ background: '#CF291d' }} />
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
          xs={12}
          style={{
            position: 'sticky',
            top: '200px',
            backgroundColor: '#1d1d1d',
            marginTop: '20px',
            padding: '1%',
            '@media (min-width:600px)': {
              marginTop: '0px',
            },
            overflowX: 'none',
          }}
        >
          <Card style={{ }}>
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
                      src="https://api.multimmobiliare.com/img/icons/pdfDownload.png"
                      style={{
                        width: '40px',
                        height: 'auto',
                        marginRight: '20px',
                        '@media (min-width:600px)': {
                          marginRight: '0px',
                        },
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
                          src="https://api.multimmobiliare.com/img/icons/fbShare.png"
                          style={{
                            width: '30px',
                            height: 'auto',
                            marginRight: '20px',
                            '@media (min-width:600px)': {
                              marginRight: '0px',
                            },
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
                      src="https://api.multimmobiliare.com/img/icons/link.png"
                      style={{
                        width: '30px',
                        height: '30px',
                        marginRight: '20px',
                        '@media (min-width:600px)': {
                          marginRight: '0px',
                        },
                      }}
                    />
                  </IconButton>

                </Grid>
                <Typography
                  variant="h2"
                  color="secondary"
                  style={{
                    marginBottom: '20px',
                    color: 'white',
                    marginTop: '20px',
                    '@media (min-width:600px)': {
                      marginTop: '0px',
                    },
                  }}
                >
                  Responsabile
                </Typography>

                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <span className={classes.margin}>
                    <Typography
                      variant="body1"
                      color="secondary"
                      style={{
                        marginBottom: '8px',
                        '@media (min-width:600px)': {
                          marginBottom: '20px',
                        },
                        color: 'white',
                      }}
                    >
                      {selectedImmo.selectedImmo.referente.nome}
                      {' '}
                      {selectedImmo.selectedImmo.referente.cognome}
                    </Typography>

                    <Typography
                      color="secondary"
                      variant="body1"
                      style={{
                        marginBottom: '8px',
                        '@media (min-width:600px)': {
                          marginBottom: '20px',
                        },
                        marginRight: '20px',
                        color: 'white',
                      }}
                    >
                      {selectedImmo.selectedImmo.referente.posizione}
                    </Typography>
                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                    >
                      <RoomIcon color="secondary" />
                      <Typography variant="body1" color="secondary" style={{ color: 'white' }}>

                        {selectedImmo.selectedImmo.referente.citta}
                      </Typography>

                    </Grid>

                    <BrowserView>
                      <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        style={{ marginBottom: '20px' }}
                      >
                        <PhoneIcon color="secondary" />
                        <Typography
                          variant="body1"
                          color="secondary"
                          style={{
                            marginRight: '20px', color: 'white',
                          }}
                        >
                          {' '}
                          {selectedImmo.selectedImmo.referente.numero}
                        </Typography>
                      </Grid>
                    </BrowserView>
                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      style={{ marginTop: '20px' }}
                    >
                      <LinkedInIcon onClick={() => window.open(selectedImmo.selectedImmo.referente.linkedin)} color="secondary" style={{ marginRight: '10px', fontSize: '35px', color: 'white' }} />

                      <MobileView>
                        <a href={`tel:${selectedImmo.selectedImmo.referente.numero}`}>
                          <PhoneIcon color="secondary" style={{ marginRight: '10px', fontSize: '35px', color: 'white' }} />
                        </a>
                      </MobileView>
                      <Mailto email={selectedImmo.selectedImmo.referente.email} subject="" body="">
                        <MailIcon color="secondary" style={{ marginRight: '10px', fontSize: '35px', color: 'white' }} />
                      </Mailto>
                    </Grid>
                  </span>
                  <BrowserView>
                    <CardMedia
                      component="img"
                      alt="Stefania"
                      image={`https://api.multimmobiliare.com/img/referenti/${selectedImmo.selectedImmo.referente.foto}`}
                      title="stefania"
                      style={{
                        width: '200px',
                        height: '200px',
                        marginLeft: '2em',
                      }}
                    />
                  </BrowserView>
                  <MobileView>
                    <CardMedia
                      component="img"
                      alt="Stefania"
                      image={`https://api.multimmobiliare.com/img/referenti/${selectedImmo.selectedImmo.referente.foto}`}
                      title="stefania"
                      style={{
                        width: '100px',
                      }}
                    />
                  </MobileView>
                </Grid>
                <Divider fullWidth style={{ background: '#CF291d', marginTop: '20px', marginBottom: '20px' }} />
                <Typography variant="h2" color="secondary" style={{ marginBottom: '20px', color: 'white' }}>
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
                  style={{ marginTop: '20px', marginRight: '10px', color: 'white' }}
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
                    color: 'white',
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
                  style={{ marginTop: '20px', color: 'white' }}
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
                <Typography variant="h2" color="secondary" style={{ marginBottom: '20px', color: 'white' }}>
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
