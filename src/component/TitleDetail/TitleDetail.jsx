/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import RoomIcon from '@material-ui/icons/Room';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { Divider } from '@material-ui/core';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import { format } from 'date-fns';
import NumberFormat from 'react-number-format';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import CardMedia from '@material-ui/core/CardMedia';

import LocalParkingIcon from '@material-ui/icons/LocalParking';

import WcIcon from '@material-ui/icons/Wc';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import parseJSON from 'date-fns/parseJSON';
import useStyles from './style';

const TitleDetail = (selectedImmo) => {
  const classes = useStyles();
  const date = parseJSON(selectedImmo.selectedImmo.disponibilita);
  const dateFormat = format(new Date(date), 'dd.MM.yyyy');
  let count = 0;

  const parking = selectedImmo.selectedImmo.immobiliCaratteristiche.map((car) => {
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
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Typography variant="h4" color="secondary" style={{ marginTop: '82px', marginBottom: '82px' }}>

          {selectedImmo.selectedImmo ? selectedImmo.selectedImmo.titolo : ''}
        </Typography>
        <div className={classes.div}>
          <Typography align="right" variant="h4" color="secondary" style={{ marginTop: '82px', marginBottom: '82px', marginRight: '10px' }}>
            CHF
          </Typography>
          <Typography align="right" variant="h4" color="secondary" style={{ marginTop: '82px', marginBottom: '82px' }}>
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
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"

      >
        <div>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            className={classes.padding}
            style={{ marginBottom: '2em' }}
          >
            <span className={classes.div}>
              <MeetingRoomIcon
                style={{
                  fontSize: '40px', color: 'red', borderStyle: 'solid', borderColor: 'red', borderRadius: '5px', marginRight: '5px',
                }}
                color="secondary"
              />
              <Typography style={{ fontSize: '20px' }} color="secondary">

                {selectedImmo.selectedImmo.locali.numero}
                {' '}
                {selectedImmo.selectedImmo.locali.numero === 1 || selectedImmo.selectedImmo.locali.numero === 1.5 ? 'locale' : 'locali'}
              </Typography>
            </span>
            <span className={classes.div}>
              <SquareFootIcon
                style={{
                  fontSize: '40px', color: 'red', borderStyle: 'solid', borderColor: 'red', borderRadius: '5px', marginRight: '5px', marginLeft: '20px',
                }}
                color="secondary"
              />
              <Typography style={{ fontSize: '20px' }} color="secondary">

                {selectedImmo.selectedImmo.metratura}
                {' '}
                m²
              </Typography>
            </span>
            {' '}
            <span className={classes.div}>
              <HomeWorkIcon
                style={{
                  fontSize: '40px', color: 'red', borderStyle: 'solid', borderColor: 'red', borderRadius: '5px', marginRight: '5px', marginLeft: '20px',
                }}
                color="secondary"
              />
              <Typography style={{ fontSize: '20px' }} color="secondary">

                {selectedImmo.selectedImmo.piano === 0 ? 'PT' : `${selectedImmo.selectedImmo.piano}°Piano`}
              </Typography>
            </span>
            <span className={classes.div}>
              <LocalParkingIcon
                style={{
                  fontSize: '40px', color: 'red', borderStyle: 'solid', borderColor: 'red', borderRadius: '5px', marginRight: '5px', marginLeft: '20px',
                }}
                color="secondary"
              />
              {' '}
              {getSingleParking.length === 0
                ? <Typography style={{ fontSize: '20px' }} color="secondary">Nessun parcheggio</Typography>
                : <Typography className={classes.div1} color="secondary">{parking}</Typography>}
            </span>

            <div className={classes.div}>
              <WcIcon style={{
                fontSize: '40px', color: 'red', borderStyle: 'solid', borderColor: 'red', borderRadius: '5px', marginRight: '5px', marginLeft: '20px',
              }}
              />
              {' '}

              <Typography style={{ fontSize: '20px' }} color="secondary">

                1 bagno
              </Typography>
            </div>
            {selectedImmo.selectedImmo.contratto === 0
              ? (
                <div className={classes.div}>
                  <EventAvailableIcon
                    style={{
                      fontSize: '40px', color: 'red', borderStyle: 'solid', borderColor: 'red', borderRadius: '5px', marginRight: '5px', marginLeft: '20px',
                    }}
                    color="red"
                  />
                  {' '}
                  <Typography style={{ fontSize: '20px' }} color="secondary">
                    {' '}
                    libero da
                    {' '}
                    {dateFormat}
                  </Typography>
                </div>
              ) : <></>}
          </Grid>
        </div>
        {!selectedImmo.selectedImmo.spese ? <></>
          : (
            <div className={classes.div} style={{ marginBottom: '2em' }}>
              <AttachMoneyIcon
                style={{
                  fontSize: '40px', color: 'red', borderStyle: 'solid', borderColor: 'red', borderRadius: '5px', marginRight: '5px', marginLeft: '20px',
                }}
                color="red"
              />
              {' '}
              <Typography style={{ fontSize: '20px' }} color="secondary">
                spese:
                {' '}
                {selectedImmo.selectedImmo.spese ? selectedImmo.selectedImmo.spese : ''}
                .-
              </Typography>
            </div>
          )}
      </Grid>
      <Typography style={{ marginBottom: '2em' }} color="secondary">

        {selectedImmo.selectedImmo ? selectedImmo.selectedImmo.descrizione : ''}
      </Typography>
    </>
  );
};
export default TitleDetail;
