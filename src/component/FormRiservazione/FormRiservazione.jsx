import React, { ReactElement, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useDispatch, useSelector } from 'react-redux';
import PublishIcon from '@material-ui/icons/Publish';
import InputAdornment from '@material-ui/core/InputAdornment';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import HouseIcon from '@material-ui/icons/House';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import CampoData from './CampoData/CampoData';
import CampoTesto from './CampoTesto/CampoTesto';
import CheckboxForm from './CheckBox/CheckBox';
import {
  initForm, listCountries, setWork, work, setTipeWork,
  tipeWork, setMarried, married, setCountry, country,
} from '../../store/slice/FormSlice';
import UploadItem from './UploadItem/UploadItem';
import useStyles from './style';
import AddPerson from './AddPerson/AddPerson';
import DatiRichiedente from './DatiRichiedente/DatiRichiedente';

const FormRiservazione = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(initForm());
  }, [dispatch]);

  const job = useSelector(work);
  const tipeJob = useSelector(tipeWork);
  const marry = useSelector(married);

  return (
    <>

      {' '}
      <DatiRichiedente />
      {/* Ulteriori info */}

      <div className={classes.div}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >

          <Typography variant="h5" style={{ margin: '0.5em', color: 'white' }}>Ulteriori informazioni</Typography>
          <UploadItem nome="Estratto esecuzione e fallimenti" />
          <UploadItem nome="Ultime tre buste paghe" />
          <CheckboxForm nome="Avete impegni finanziari?" />
          <CheckboxForm nome="Avete animali domestici?" />
          <CheckboxForm nome="Avete un'assicurazione di responsabilità civile (RC)?" />
          <UploadItem nome="Assicurazione RC" />
          <CheckboxForm nome="Avete ricevuto un attestato di carenza beni (ACB) negli ultimi 5 anni?" />
        </Grid>
      </div>

      {/* Lavoro */}

      <div className={classes.div}>
        <div style={{
          margin: '0.5em',
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
        >
          <Typography variant="h5" style={{ margin: '0.5em', color: 'white' }}>Attività</Typography>
          <WorkOutlineIcon style={{ color: 'white', fontSize: '30px' }} />
        </div>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div>
            <RadioGroup value={job} aria-label="gender" name="gender1" style={{ margin: '0.5em', color: 'white' }} onChange={(event) => dispatch(setWork(event.target.value))}>
              <FormControlLabel value="Lavoro" control={<Radio />} label="Lavoro" />
              <FormControlLabel value="Non lavoro" control={<Radio />} label="Non lavoro" />
            </RadioGroup>
            {job === 'Lavoro' ? (
              <>
                <RadioGroup value={tipeJob} aria-label="gender" name="gender1" style={{ margin: '0.5em', color: 'white' }} onChange={(event) => dispatch(setTipeWork(event.target.value))}>
                  <FormControlLabel value="Dipendente" control={<Radio />} label="Dipendente" />
                  <FormControlLabel value="Indipendente" control={<Radio />} label="Indipendente" />
                </RadioGroup>
                {tipeJob === 'Dipendente' ? (
                  <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <CampoTesto nome="Professione" />
                    <CampoTesto nome="Salario netto" />
                    <UploadItem nome="Contratto di lavoro" />
                    <UploadItem nome="Certificato di salario" />
                  </Grid>
                ) : (

                  <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <CampoTesto nome="Ragione sociale" />
                    <CampoTesto nome="Indirizzo" />
                    <CampoTesto nome="Ramo di attività" />
                    <CampoTesto nome="Iscrizione registro di commercio" />
                    <CampoTesto nome="Utile aziendale" />

                  </Grid>
                ) }

              </>
            ) : (

              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
              >
                <CheckboxForm nome="Percepite una rendita AVS?" />
                <CheckboxForm nome="Percepite una rendita AI?" />
                <CheckboxForm nome="Percepite una rendita disoccupazione?" />
                <CheckboxForm nome="Percepite una rendita d'assistenza?" />
                <UploadItem nome="Attestati della rendita" />
              </Grid>
            )}
          </div>
          {marry === 'Coniugato/a' ? (
            <div>
              <RadioGroup value={job} aria-label="gender" name="gender1" style={{ margin: '0.5em', color: 'white' }} onChange={(event) => dispatch(setWork(event.target.value))}>
                <FormControlLabel value="Lavoro" control={<Radio />} label="Lavoro" />
                <FormControlLabel value="Non lavoro" control={<Radio />} label="Non lavoro" />
              </RadioGroup>
              {job === 'Lavoro' ? (
                <>
                  <RadioGroup value={tipeJob} aria-label="gender" name="gender1" style={{ margin: '0.5em', color: 'white' }} onChange={(event) => dispatch(setTipeWork(event.target.value))}>
                    <FormControlLabel value="Dipendente" control={<Radio />} label="Dipendente" />
                    <FormControlLabel value="Indipendente" control={<Radio />} label="Indipendente" />
                  </RadioGroup>
                  {tipeJob === 'Dipendente' ? (
                    <Grid
                      container
                      direction="column"
                      justify="flex-start"
                      alignItems="flex-start"
                    >
                      <CampoTesto nome="Professione" />
                      <CampoTesto nome="Salario netto" />
                      <UploadItem nome="Contratto di lavoro" />
                      <UploadItem nome="Certificato di salario" />
                    </Grid>
                  ) : (

                    <Grid
                      container
                      direction="column"
                      justify="flex-start"
                      alignItems="flex-start"
                    >
                      <CampoTesto nome="Ragione sociale" />
                      <CampoTesto nome="Indirizzo" />
                      <CampoTesto nome="Ramo di attività" />
                      <CampoTesto nome="Iscrizione registro di commercio" />
                      <CampoTesto nome="Utile aziendale" />

                    </Grid>
                  ) }

                </>
              ) : (

                <Grid
                  container
                  direction="column"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  <CheckboxForm nome="Percepite una rendita AVS?" />
                  <CheckboxForm nome="Percepite una rendita AI?" />
                  <CheckboxForm nome="Percepite una rendita disoccupazione?" />
                  <CheckboxForm nome="Percepite una rendita d'assistenza?" />
                  <UploadItem nome="Attestati della rendita" />
                </Grid>
              )}
            </div>
          ) : <></> }
        </Grid>
      </div>
      <div className={classes.div}>
        <div style={{
          margin: '0.5em',
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
        >

          {/* Locazione attuale */}

          <Typography variant="h5" style={{ margin: '0.5em', color: 'white' }}>Stato locazione attuale</Typography>
          <HouseIcon style={{ color: 'white', fontSize: '30px' }} />
        </div>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <CampoTesto nome="Locatore/amministratore attuale" />
              <CampoTesto nome="Numero di telefono del locatore" />
              <CampoTesto nome="Indirizzo attuale" />
              <CampoData nome="Da quando" />
              <CampoTesto nome="Motivo del cambiamento" />
            </Grid>
          </div>
          {marry === 'Coniugato/a' ? (
            <div>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
              >
                <CampoTesto nome="Locatore/amministratore attuale" />
                <CampoTesto nome="Numero di telefono del locatore" />
                <CampoTesto nome="Indirizzo attuale" />
                <CampoData nome="Da quando" />
                <CampoTesto nome="Motivo del cambiamento" />
              </Grid>
            </div>
          ) : <></>}
        </Grid>
      </div>

    </>
  );
};
export default FormRiservazione;
