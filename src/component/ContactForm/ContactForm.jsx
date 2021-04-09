/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
import React, { ReactElement, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import CardMedia from '@material-ui/core/CardMedia';
import { Button, SvgIcon, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import useStyles from './style';
import { loaded } from '../../store/slice/LoadingSlice';

const ContactForm = () => {
  const classes = useStyles();
  const load = useSelector(loaded);
  if (load === false) {
    return (<></>);
  } return (
    <div style={{
      marginBottom: '82px', marginRight: '82px', marginTop: '60px', marginLeft: '5%',
    }}
    >
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"

      >
        <Grid item xs={12} sm={4}>
          <Typography variant="h2" color="secondary">
            Richiedi una visita
          </Typography>
          <Typography variant="h2" color="secondary">
            oppure
          </Typography>
          <Button
            variant="contained"
            style={{
              backgroundColor: 'red', color: 'white', fontSize: '30px', marginTop: '1em',
            }}
            onClick={() => window.location.href = 'https://multimmobiliare.webflow.io/RiservazioniForm'}
          >
            {' '}
            Riserva

          </Button>

        </Grid>
        <Grid item xs={12} sm={12} xl={8}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <div className={classes.priceText}>

              <TextField
                fullWidth
                label="Nome"
                color="secondary"
                variant="outlined"
                className={classes.prova}
                InputProps={{
                  className: classes.text,
                }}
                InputLabelProps={{
                  className: classes.prova,
                }}
              />

            </div>
            <div className={classes.priceText}>

              <TextField
                label="Cognome"
                fullWidth
                color="secondary"
                variant="outlined"
                className={classes.prova}
                InputProps={{
                  className: classes.text,
                }}
                InputLabelProps={{
                  className: classes.prova,
                }}
              />
            </div>
            <div className={classes.priceText}>

              <TextField
                label="Email"
                fullWidth
                variant="outlined"
                color="secondary"
                className={classes.prova}
                InputProps={{
                  className: classes.text,
                }}
                InputLabelProps={{
                  className: classes.prova,
                }}
              />
            </div>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} xl={9}>
              <div>

                <Typography
                  className={classes.lab}
                >
                  Messaggio
                </Typography>

                <TextField
                  rows={19}
                  fullWidth
                  color="secondary"
                  multiline
                  variant="outlined"
                  className={classes.message}
                  InputProps={{
                    className: classes.text,

                  }}
                />
              </div>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
              >
                {' '}
                Invia messaggio

              </Button>

            </Grid>

          </Grid>

        </Grid>

      </Grid>
    </div>
  );
};
export default ContactForm;
