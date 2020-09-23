import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import { useSelector, useDispatch } from 'react-redux';
import { MobileDatePicker } from '@material-ui/pickers';
import {
  Divider, FormControlLabel, Radio, RadioGroup, TextField,
} from '@material-ui/core';
import { parseISO } from 'date-fns';
import useStyles from './style';
import DropDownListAnswersPatientForm,
{ Risposta } from '../DropDownListAnswersPatientForm/DropDownListAnswersPatientForm';
import {
  repartoDomande, setNormalTypePresent, resDate, setDate, intestazioneMoreAns,
  groups, setRisposta, boolAnswers, setRispostaLibera, setDomandaNoFacoltativa,
} from '../../store/slice/patientFormSlice';

const MultipleChoiceLinePatient = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const dateAnswer = useSelector(resDate);
  const intestazione = useSelector(intestazioneMoreAns);
  const gruppi = useSelector(groups);
  const booleanAnswers = useSelector(boolAnswers);
  const domande = useSelector(repartoDomande);

  if (!domande) {
    return <div />;
  }

  const listItems = domande.map((question: any, index) => {
    const dividerPresent = index !== 0 ? domande[index - 1].group !== question.group : false;

    const { risposte } = question;
    const idDomanda = question.IDDomanda;
    const domanda = question.Domanda;
    if (question.facoltativa === false || question.facoltativa === undefined) {
      dispatch(setDomandaNoFacoltativa(question.IDDomanda));
    }

    const groupSelected = gruppi ? gruppi.find((ID) => ID.id === question.group) : {};
    if (!risposte) {
      return (
        <div key={idDomanda}>

          {dividerPresent && groupSelected !== undefined
            ? (
              <>
                {' '}
                <Divider />
                <Typography variant="body1" align="center" className={classes.group}>
                  {groupSelected.name}
                </Typography>
                {' '}
              </>
            ) : (
              <>
                {index === 0 && gruppi && groupSelected !== undefined
                  ? (
                    <>
                      <Typography variant="body1" align="center" className={classes.group}>
                        {groupSelected.name}
                      </Typography>
                    </>
                  ) : (<></>) }

              </>
            ) }

          <ListItem
            divider
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={8}>
                <div className={classes.marginTop}>
                  <Typography variant="subtitle1">
                    {question.Domanda}
                    {(!question.facoltativa || question.facoltativa === false) ? '*' : <></>}
                    {!question.libera || question.libera === false
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
              <Grid item xs={12} sm={4}>
                <form className={classes.risposta}>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="quiz"
                      name="quiz"
                      onChange={(event) => {
                        const { value } = event.target;
                        const valore = value;
                        dispatch(setRisposta({
                          idDomanda, valore, domanda,
                        }));
                      }}
                    >
                      <FormControlLabel
                        value={booleanAnswers.risposta1}
                        control={<Radio />}
                        label={booleanAnswers.risposta1}
                      />
                      <FormControlLabel
                        value={booleanAnswers.risposta2}
                        control={<Radio />}
                        label={booleanAnswers.risposta2}
                      />
                    </RadioGroup>
                  </FormControl>
                </form>
              </Grid>
            </Grid>

          </ListItem>
        </div>
      );
    }
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
      if (risposta.type === 'normal' && question.normalType !== true) {
        dispatch(setNormalTypePresent(index));
      }
      return <></>;
    });
    return (
      <div key={question.IDDomanda}>
        {dividerPresent && groupSelected !== undefined
          ? (
            <>
              <Typography variant="body1" align="center" className={classes.group}>
                {groupSelected.name}
              </Typography>
              {' '}
            </>
          ) : (
            <>
              {index === 0 && gruppi && groupSelected !== undefined
                ? (
                  <>
                    <Typography variant="body1" align="center" className={classes.group}>
                      {groupSelected.name}
                    </Typography>
                  </>
                ) : (<></>) }

            </>
          ) }
        <ListItem divider>
          <Grid container>
            <Grid item xs={12} sm={7}>
              <div className={classes.marginTop}>
                <Typography variant="subtitle1">
                  {question.Domanda}
                  {(!question.facoltativa || question.facoltativa === false) ? '*' : <></>}
                  {' '}

                  {!question.libera || question.libera === false
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
                      domanda={question.Domanda}
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
  });

  return (
    <div>
      {intestazione
        ? (
          <Typography variant="body1" align="center" className={classes.Intestazione}>
            {intestazione}
          </Typography>
        ) : <></>}
      {listItems}
    </div>
  );
};

export default MultipleChoiceLinePatient;
