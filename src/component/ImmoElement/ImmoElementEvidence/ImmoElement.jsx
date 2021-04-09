/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-return-assign */
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
import Carousel from 'react-material-ui-carousel';

import {
  Divider, Button, SvgIcon,
} from '@material-ui/core';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import SimpleImageSlider from 'react-simple-image-slider';
import NumberFormat from 'react-number-format';
import useStyles from './style';

const ImmoElementEvidence = (elemento) => {
  const classes = useStyles();
  const element = elemento.elemento ? elemento.elemento : <></>;

  const listLargeImage = !element.immagini ? <></>
    : element.immagini.map((elem, index) => (

      <CardMedia
        key={elem.id}
        className={classes.media}
        image={`https://api.fideconto.ch/img/immobili/${elem.fileName}`}
        title="foto immobile principale"
      />

    ));

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {!element.immagini ? <></>
          : (
            <Grid item md={4} m={12} xl={4} xs={12}>
              <Paper
                onClick={() => window.location.href = `https://multimmobiliare.webflow.io/dettaglio?id=${element.id}`}
                className={classes.paper}
              >
                {element?.immagini[0]
                  ? (
                    <>
                      <Carousel
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
                  <Typography key={element.id}>
                    <RoomIcon />
                    {' '}
                    {element.citta}
                  </Typography>
                  <span className={classes.div}>
                    <Typography style={{ fontSize: '15px', marginRight: '10px' }}>
                      CHF
                    </Typography>
                    <Typography variant="h6">

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
                <Typography variant="h6" className={classes.padding}>
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
                  <MeetingRoomIcon />
                  <Typography>

                    {element.locali.numero}
                    {' '}
                    {element.locali.numero === 1 || element.locali.numero === 1.5 ? 'locale' : 'locali'}
                  </Typography>
                  <SquareFootIcon />
                  <Typography>

                    {element.metratura}
                    {' '}
                    m²
                  </Typography>
                  {' '}
                  <HomeWorkIcon />
                  <Typography>

                    {element.piano === 0 ? 'PT' : `${element.piano}°Piano`}
                  </Typography>
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
                  <Typography>
                    {element.tipologia.nome}
                  </Typography>

                </Grid>
              </Paper>
            </Grid>
          )}
        <Grid item xs={12} sm={6}>
          <Typography color="secondary">
            {element.descrizione}
          </Typography>
        </Grid>

      </Grid>
    </>
  );
};

export default ImmoElementEvidence;
