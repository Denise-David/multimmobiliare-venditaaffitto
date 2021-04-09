import React, { ReactElement, useEffect } from 'react';
import { IconButton, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
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
import CampoTesto from '../CampoTesto/CampoTesto';
import CampoData from '../CampoData/CampoData';
import CheckboxForm from '../CheckBox/CheckBox';
import {
  initForm, listCountries, setWork, work, setTipeWork,
  tipeWork, setMarried, married, setCountry, country,
} from '../../../store/slice/FormSlice';
import UploadItem from '../UploadItem/UploadItem';
import useStyles from '../style';
import AddPerson from '../AddPerson/AddPerson';

const DatiRichiedente = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const countrys = useSelector(listCountries);
  const count = useSelector(country);
  const marry = useSelector(married);
  const menuCountry = countrys.map((elem) => (
    <MenuItem
      value={elem.name}
      key={elem.name}
    >
      {elem.name}
    </MenuItem>
  ));
  return (
    <div className={classes.div}>
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
            <div style={{
              margin: '0.5em',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
            >
              <Typography variant="h5" style={{ margin: '0.5em', color: 'white' }}>Richiedente</Typography>
              <PersonIcon style={{ color: 'white', fontSize: '30px' }} />
            </div>
            <CampoTesto nome="Nome" />
            <CampoTesto nome="Cognome" />

            <CampoData nome="Data di nascita" />
            <CampoTesto nome="Luogo di nascita" />
            <FormControl variant="outlined" style={{ margin: '0.5em', width: '20em' }}>
              <InputLabel id="demo-simple-select-outlined-label" />
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={(event) => dispatch(setMarried(event.target.value))}
              >
                <MenuItem value="Celibe/Nubile">Celibe/Nubile</MenuItem>
                <MenuItem value="Coniugato/a">Coniugato/a</MenuItem>
                <MenuItem value="Divorziato/a">Divorziato/a</MenuItem>
                <MenuItem value="In via di separazione">In via di separazione</MenuItem>
                <MenuItem value="Vedovo/a">Vedovo/a</MenuItem>
              </Select>
            </FormControl>

            <CampoTesto nome="Nome del padre" />
            <CampoTesto nome="Nome della madre" />
            <CampoTesto nome="Attinenza" />
            <FormControl variant="outlined" style={{ margin: '0.5em', width: '20em' }}>
              <InputLabel id="demo-simple-select-outlined-label" />
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={(event) => dispatch(setCountry(event.target.value))}
              >
                {menuCountry}
              </Select>
            </FormControl>
            {count === 'Switzerland' ? <UploadItem nome="Carta d'identità" />
              : (
                <>
                  <UploadItem nome="Permesso di soggiorno" />
                  <UploadItem nome="polizza RCP" />
                </>
              ) }

            <CampoTesto nome="Telefono cellulare" />
            <CampoTesto nome="Indirizzo email" />
            <div style={{
              margin: '0.5em',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
            >
              <Typography variant="h5" style={{ margin: '0.5em', color: 'white' }}>Altri componenti della comunità domestica</Typography>
              <GroupIcon style={{ color: 'white', fontSize: '30px' }} />
            </div>
            {marry === 'Coniugato/a' ? <></> : <AddPerson nome="Coniuge/Partner registrato" />}

            <AddPerson nome="Figlio/a" />
            <AddPerson nome="Altri richiedenti" />
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
              <div style={{
                margin: '0.5em',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
              >
                <Typography variant="h5" style={{ marginBottom: '0.5em', color: 'white' }}>Coniuge/Partner registrato</Typography>
                <PersonIcon style={{ color: 'white', fontSize: '30px' }} />
              </div>
              <CampoTesto nome="Nome" />
              <CampoTesto nome="Cognome" />

              <CampoData nome="Data di nascita" />
              <CampoTesto nome="Luogo di nascita" />

              <CampoTesto nome="Nome del padre" />
              <CampoTesto nome="Nome della madre" />
              <CampoTesto nome="Attinenza" />
              <FormControl variant="outlined" style={{ margin: '0.5em', width: '20em' }}>
                <InputLabel id="demo-simple-select-outlined-label" />
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                >
                  {menuCountry}
                </Select>
              </FormControl>
              {count === 'Switzerland' ? <UploadItem nome="Carta d'identità" />
                : (
                  <>
                    <UploadItem nome="Permesso di soggiorno" />
                    <UploadItem nome="polizza RCP" />
                  </>
                ) }
              <CampoTesto nome="Telefono cellulare" />
              <CampoTesto nome="Indirizzo email" />

            </Grid>
          </div>
        ) : <></> }
      </Grid>
    </div>
  );
};
export default DatiRichiedente;
