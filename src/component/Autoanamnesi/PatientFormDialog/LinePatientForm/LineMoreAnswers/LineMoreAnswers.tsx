import {
  FormControl, Grid, InputLabel, ListItem, TextField, Typography,
} from '@material-ui/core';
import { MobileDatePicker } from '@material-ui/pickers';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { parseISO } from 'date-fns';
import useStyles from './style';
import {
  repartoDomande, resDate, setDate, setNormalTypePresent, setRispostaLibera,
} from '../../../../../store/slice/patientFormSlice';
import DropDownListAnswersPatientForm from './DropDownListAnswersPatientForm/DropDownListAnswersPatientForm';
import { rispostaType } from '../../../../../store/slice/risposteAddFormSlice';
import { domandaType } from '../../../../../store/slice/domandeAddFormSlice';

interface Props {idDomanda : string, domanda : string, risposte : rispostaType[],
    question : domandaType, index : number, groupSelected : {id:string, name:string} | undefined}

const LineMoreAnswers = ({
  idDomanda, domanda, risposte, question, index, groupSelected,
} : Props):ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const dateAnswer = useSelector(resDate);
  const domande = useSelector(repartoDomande);
  // controllo se sono presenti gruppi
  const dividerPresent = index !== 0 ? domande[index - 1].group !== question.group : false;

  const listDatePicker = risposte.map((risposta: rispostaType) => {
    if (risposta.type === 'data') {
      const idRisposta = risposta.IDRisposta;
      const testoData = risposta.risposta;
      return (
        <div key={idRisposta} className={classes.datePicker}>
          <MobileDatePicker
            label={risposta.risposta}
            mask="__/__/____"
            value={dateAnswer[idDomanda] && dateAnswer[idDomanda][idRisposta]
              ? parseISO(dateAnswer[idDomanda][idRisposta].dataFormattata) : null}
            onChange={(data) => {
              const dataFormattata = data !== null ? data.toISOString() : '';
              dispatch(setDate({
                idRisposta, idDomanda, testoData, dataFormattata, domanda,
              }));
            }}
                    // eslint-disable-next-line react/jsx-props-no-spreading
            renderInput={(props) => <TextField {...props} />}
          />
        </div>
      );
    }
    if (risposta.type === 'normal' && question.normalType !== true) {
      dispatch(setNormalTypePresent(index));
    }
    return <></>;
  });
  return (
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
              {question.normalType === true
                ? (
                  <DropDownListAnswersPatientForm
                    idDomanda={question.IDDomanda}
                    domanda={question.domanda}
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
