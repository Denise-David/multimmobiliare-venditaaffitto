/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import CardMedia from '@material-ui/core/CardMedia';
import { SvgIcon, Typography } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import CheckIcon from '@material-ui/icons/Check';
import { FacebookProvider, Share } from 'react-facebook';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import GoogleMapReact from 'google-map-react';
import Geocode from 'react-geocode';
import CircularProgress from '@material-ui/core/CircularProgress';
import RoomIcon from '@material-ui/icons/Room';
import parseJSON from 'date-fns/parseJSON';
/* eslint-disable jsx-a11y/anchor-is-valid */
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import Link from '@material-ui/core/Link';
import { format } from 'date-fns';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import ShareLink from 'react-facebook-share-link';
import GetAppIcon from '@material-ui/icons/GetApp';

import LinkIcon from '@material-ui/icons/Link';
import {
  immo, latitude, longitude, setLat, setLng,
} from '../../store/slice/ImmoSlice';
import { loaded } from '../../store/slice/LoadingSlice';
import useStyles from './style';
import stefania from '../../img/stefania.png';

const DetailBox = () => {
  const queryString = require('query-string');
  const parsed = queryString.parse(location.search);
  const idImmo = parsed.id;
  const load = useSelector(loaded);
  const classes = useStyles();
  const lt = useSelector(latitude);
  const lg = useSelector(longitude);

  const dispatch = useDispatch();
  const allImmo = useSelector(immo);
  useEffect(() => {
    dispatch({ type: 'INIT' });
  }, []);

  const handleApiLoaded = (map, maps) => {
    //  usa map e map oggetti
  };
  const selectedImmo = allImmo.filter((elem) => elem.id === Number(idImmo));

  Geocode.setApiKey('AIzaSyDoqKjf0F9Y2vaVUBGTqLs7JxM3PQMMp_A');
  Geocode.setLanguage('it');

  const completeAdress = `${selectedImmo[0]?.indirizzo} ${selectedImmo[0]?.cap} ${selectedImmo[0]?.citta}`;

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

  const doc = selectedImmo[0]?.documenti?.map((d) => (
    <>
      <div nome="dettaglio">
        <Link className={classes.div2} color="secondary" href="#" onClick={() => window.location.href = `https://api.fideconto.ch/doc/immobili/${d.fileName}`}>
          <Typography style={{ fontSize: '20px', marginRight: '1em' }} key={d.id}>
            {' '}
            {d.fileName}
          </Typography>
          <OpenInBrowserIcon />
        </Link>
      </div>
    </>
  )
  );
  const caratt = selectedImmo[0]?.immobiliCaratteristiche?.map((car) => (
    <>
      <div className={classes.div2}>
        <CheckIcon style={{ color: 'red' }} />
        <Typography style={{ fontSize: '20px', color: 'white' }} key={car.caratteristica.id}>

          {' '}
          {car.caratteristica.nome}
        </Typography>
      </div>
    </>
  )
  );

  let date;
  let dateFormat;
  if (selectedImmo[0]?.disponibilita) {
    date = parseJSON(selectedImmo[0]?.disponibilita);
    dateFormat = format(new Date(date), 'dd.MM.yyyy');
  }

  if (load === false) {
    return (<></>);
  } return (
    <>
      <div nome="dettaglio" className={classes.div}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {doc.length === 0 ? (
            <>
              {' '}
              {' '}

            </>
          )
            : (
              <Grid item xs={12} xl={4} style={{ padding: '1em' }}>
                <div className={classes.margin}>

                  <Typography variant="h4" style={{ marginBottom: '20px' }}>
                    Documenti e planimetrie
                  </Typography>

                </div>
                {doc}
              </Grid>
            )}

          {caratt.length !== 0 ? (

            <Grid item xs={12} xl={4} style={{ padding: '1em' }}>
              <span className={classes.margin}>
                <Typography variant="h4" style={{ marginBottom: '20px' }}>
                  Caratterestiche
                </Typography>
              </span>
              {caratt}
            </Grid>

          ) : <></>}
          <Grid item xs={12} xl={4} style={{ padding: '1em' }}>

            <span className={classes.margin}>
              <Typography variant="h4" style={{ marginBottom: '20px' }}>
                Responsabile
              </Typography>
            </span>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <span className={classes.margin}>
                <Typography variant="h6" style={{ marginBottom: '20px' }}>
                  Stefania Auciello
                </Typography>
                <div className={classes.div3}>
                  <Typography style={{ marginBottom: '20px', marginRight: '20px' }}>
                    Direzione
                  </Typography>
                  <RoomIcon />
                  <Typography style={{ marginBottom: '20px' }}>

                    Lugano
                  </Typography>
                </div>
                <LinkedInIcon style={{ marginRight: '10px', fontSize: '35px' }} />
                <PhoneIcon style={{ marginRight: '10px', fontSize: '35px' }} />
                <MailIcon style={{ marginRight: '10px', fontSize: '35px' }} />
              </span>

              <CardMedia
                component="img"
                alt="Stefania"
                image={stefania}
                title="stefania"
                style={{ width: '200px', height: '200px', marginLeft: '2em' }}
              />
            </Grid>
          </Grid>

        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} xl={4} style={{ padding: '1em' }}>
            <div className={classes.margin}>

              <div style={{
                width: 'Auto', height: '15em',
              }}
              >
                {lt === 0 && lg === 0 ? <></>

                  : (
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: 'AIzaSyDoqKjf0F9Y2vaVUBGTqLs7JxM3PQMMp_A' }}
                      defaultZoom={14}
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
          </Grid>
          <Grid item xs={12} xl={4} style={{ padding: '1em' }}>
            <div className={classes.margin}>
              <Typography variant="h4" style={{ marginBottom: '20px' }}>
                Indirizzo
              </Typography>
              <Typography style={{ fontSize: '20px' }}>
                {selectedImmo[0]?.indirizzo}
                <br />
                {selectedImmo[0]?.cap}
                {selectedImmo[0]?.citta}

              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} xl={4} style={{ padding: '1em' }}>
            <Button onClick={() => window.open(`https://multimmobiliare.webflow.io/pdf?id=${parsed.id}`)} fullWidth endIcon={<PictureAsPdfIcon />} variant="contained" style={{ marginTop: '1em' }}>Scarica PDF annuncio </Button>
            <FacebookShareButton
              url={window.location.href}
              className="Demo__some-network__share-button"
              style={{
                width: '100%',
              }}

            >
              <Button
                fullWidth
                endIcon={<FacebookIcon />}
                variant="contained"
                style={{ marginTop: '1em' }}

              >
                Condividi
                {' '}

              </Button>
            </FacebookShareButton>

            <Button
              onClick={() => {
                const dummy = document.createElement('input');
                const text = window.location.href;

                document.body.appendChild(dummy);
                dummy.value = text;
                dummy.select();
                document.execCommand('copy');
                document.body.removeChild(dummy);
              }}
              fullWidth
              endIcon={<LinkIcon />}
              variant="contained"
              style={{ marginTop: '1em' }}
            >
              Copia link
              {' '}

            </Button>
          </Grid>
        </Grid>
      </div>

    </>
  );
};
export default DetailBox;
