/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import {
  FormControl, Grid, IconButton, InputLabel, ListItem, TextField, Typography,
} from '@material-ui/core';
import { LocalizationProvider, MobileDatePicker } from '@material-ui/pickers';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { parseISO } from 'date-fns';
import DeleteIcon from '@material-ui/icons/Delete';
import itLocale from 'date-fns/locale/it';
import DateFnsAdapter from '@material-ui/pickers/adapter/date-fns';
import useStyles from './style';
import {
  deleteDate, domandeDimenticate,
  repartoDomande, resDate, setDate, setNormalTypePresent, setRispostaLibera,
} from '../../../../../store/slice/patientFormSlice';
import DropDownListAnswersPatientForm from './DropDownListAnswersPatientForm/DropDownListAnswersPatientForm';
import { rispostaType } from '../../../../../store/slice/risposteAddFormSlice';
import { domandaType } from '../../../../../store/slice/domandeAddFormSlice';

declare module '@material-ui/pickers/adapter/date-fns' {
  export default class DateFnsUtils {
    getDaysInMonth(value: Date): number;
  }
}

interface Props {idDomanda : string, domanda : string, risposte : rispostaType[],
    question : domandaType, index : number, groupSelected : {id:string, name:string} | undefined}

// Riga domanda a più risposte
const LineMoreAnswers = ({
  idDomanda, domanda, risposte, question, index, groupSelected,
} : Props):ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const dateAnswer = useSelector(resDate);
  const domande = useSelector(repartoDomande);
  const domDimenticate = useSelector(domandeDimenticate);

  // controllo se sono presenti gruppi
  const dividerPresent = index !== 0 ? domande[index - 1].group !== question.group : false;
  let errore = false;
  if (domDimenticate.length === 0) {
    errore = false;
  } else { errore = !domDimenticate[index]; }

  const listDatePicker = risposte.map((risposta: rispostaType) => {
    if (risposta.type === 'data') {
      const idRisposta = risposta.IDRisposta;
      const testoData = risposta.risposta;
      return (
        // campo data
        <div key={idRisposta} className={classes.datePicker}>
          <LocalizationProvider locale={itLocale} dateAdapter={DateFnsAdapter}>
            <MobileDatePicker
              cancelText="CANCELLA"
              label={risposta.risposta}
              mask="__/__/____"
              value={dateAnswer[idDomanda] && dateAnswer[idDomanda][idRisposta]
                ? parseISO(dateAnswer[idDomanda][idRisposta].dataFormattata) : null}
              onChange={(data) => {
                const dataFormattata = data !== null ? data.toISOString() : null;
                dispatch(setDate({
                  idRisposta, idDomanda, testoData, dataFormattata, domanda,
                }));
              }}
              renderInput={(props) => {
                // eslint-disable-next-line no-param-reassign
                props = { ...props, InputProps: { ...props.InputProps, error: errore } };

                return (<TextField {...props} />);
              }}
            />
          </LocalizationProvider>
          {/* elimina data */}
          <IconButton onClick={() => dispatch(deleteDate({ idDomanda, idRisposta }))} color="primary">
            <DeleteIcon />
          </IconButton>
        </div>
      );
    }
    if (risposta.type === 'normal' && question.normalType !== true) {
      dispatch(setNormalTypePresent(index));
    }
    return <></>;
  });
  return (
    // Controllo tipo domande e trasformazione interfaccia in base al tipo
    <div key={question.IDDomanda}>
      { dividerPresent && groupSelected !== undefined
        ? (
          <>
            <Typography variant="body1" align="center" className={classes.group}>
              {groupSelected.name}
            </Typography>
            {' '}
          </>
        ) : (<></>) }

      <ListItem divider>
        <Grid container>
          <Grid item xs={12} sm={7}>
            <div className={classes.marginTop}>
              <Typography variant="subtitle1">
                {question.domanda}
                {!question.facoltativa ? '*' : <></>}
                {' '}

                {!question.libera
                  ? <></> : (
                    <TextField
                      onChange={(event) => {
                        const { value } = event.target;
                        dispatch(setRispostaLibera({ idDomanda, value }));
                      }}
                      className={classes.marginLeft}
                      variant="outlined"
                    />
                  )}
              </Typography>
            </div>

          </Grid>
          <Grid item xs={12} sm={5}>

            <FormControl
              variant="outlined"
              fullWidth
              className={classes.margin}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                {' '}
              </InputLabel>
              {/* Lista a tendina risposte */}
              {question.normalType === true
                ? (
                  <DropDownListAnswersPatientForm
                    idDomanda={question.IDDomanda}
                    domanda={question.domanda}
                    index={index}
                  />
                )
                : <></>}
            </FormControl>
            {listDatePicker}
          </Grid>

        </Grid>

      </ListItem>

    </div>
  );
};

export default LineMoreAnswers;
