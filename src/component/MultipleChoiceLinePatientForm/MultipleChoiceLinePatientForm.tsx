import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import { useSelector, useDispatch } from 'react-redux';
import { MobileDatePicker } from '@material-ui/pickers';
import { TextField } from '@material-ui/core';
import { parseISO } from 'date-fns';
import useStyles from './style';
import DropDownListAnswersPatientForm,
{ Risposta } from '../DropDownListAnswersPatientForm/DropDownListAnswersPatientForm';
import {
  repartoDomande, setNormalTypePresent, resDate, setDate,
} from '../../store/slice/patientFormSlice';

const MultipleChoiceLinePatient = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const dateAnswer = useSelector(resDate);

  const domande = useSelector(repartoDomande);
  if (!domande) {
    return <div />;
  }

  const listItems = domande.map((question: any, index) => {
    const { risposte } = question;
    const idDomanda = question.IDDomanda;
    const domanda = question.Domanda;
    if (!risposte) { return <></>; }
    // mappo le risposte con una data
    const listDatePicker = risposte.map((risposta: Risposta) => {
      if (risposta.type === 'data') {
        const idRisposta = risposta.IDRisposta;
        const testoData = risposta.Risposta;
        return (
          <div key={idRisposta} className={classes.datePicker}>
            <MobileDatePicker
              label={risposta.Risposta}
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
      dispatch(setNormalTypePresent(index));
      return <></>;
    });

    return (
      <div key={question.IDDomanda}>
        <ListItem divider>
          <Grid container>
            <Grid item xs={12} sm={7}>
              <div className={classes.marginTop}>
                <Typography variant="subtitle1">{question.Domanda}</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={5}>
              {/* {counter > 0 ? ( */}
              <FormControl
                variant="outlined"
                fullWidth
                className={classes.margin}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  {' '}
                </InputLabel>
                {/* {question.normalType === true
                  ? ( */}
                <DropDownListAnswersPatientForm
                  idDomanda={question.IDDomanda}
                  domanda={question.Domanda}
                />
                {/* )
                  : <></>} */}
              </FormControl>
              {listDatePicker}
            </Grid>

          </Grid>

        </ListItem>

      </div>
    );
  });
  return <div>{listItems}</div>;
};

export default MultipleChoiceLinePatient;
