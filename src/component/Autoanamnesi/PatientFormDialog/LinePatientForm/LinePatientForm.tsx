import React, { ReactElement, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import { useSelector, useDispatch } from 'react-redux';
import {
  FormControlLabel, Radio, RadioGroup, TextField,
} from '@material-ui/core';
import useStyles from './style';
import {
  repartoDomande, intestazioneMoreAns,
  groups, setRisposta, boolAnswers, setRispostaLibera, setDomandaNoFacoltativa,
} from '../../../../store/slice/patientFormSlice';
import LineMoreAnswers from './LineMoreAnswers/LineMoreAnswers';
import { domandaType } from '../../../../store/slice/domandeAddFormSlice';

const MultipleChoiceLinePatient = ():ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const intestazione = useSelector(intestazioneMoreAns);
  const gruppi = useSelector(groups);
  const booleanAnswers = useSelector(boolAnswers);
  const domande = useSelector(repartoDomande);

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    domande.forEach((question:domandaType) => {
    // controllo se la domanda è facoltativa
      if (question.facoltativa === false || question.facoltativa === undefined) {
        dispatch(setDomandaNoFacoltativa(question.IDDomanda));
      }
    });
  }, [dispatch, domande]);

  if (!domande) {
    return <div />;
  }

  // crea lista domande e eseguo controlli
  const listItems = domande.map((question: domandaType, index) => {
    // controllo se la domanda precendente ha lo stesso gruppo o no
    const gruppoDiverso = index !== 0 ? domande[index - 1].group !== question.group : false;

    const { risposte } = question;
    const idDomanda = question.IDDomanda;
    const domanda = question.Domanda;

    // setto il gruppo attuale
    const groupSelected = gruppi ? gruppi.find((ID) => ID.id === question.group) : { id: '', name: '' };
    // controllo se è una domanda a più risposte, se non lo è
    if (!risposte) {
      return (
        <div key={idDomanda}>
          {/* Se la domanda ha un gruppo diverso, e il gruppo è presente  */}
          { (gruppoDiverso && groupSelected !== undefined)
          || (index === 0 && groupSelected !== undefined)
            ? (
              <>
                <Typography variant="body1" align="center" className={classes.group}>
                  {groupSelected.name}
                </Typography>
                {' '}
              </>
            )
            : ( // Se la domanda ha lo stesso gruppo o no ha un gruppo
              <></>) }
          {/* Domanda */}
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
                    {/* Controllo se la domanda è facoltativa */}
                    {!question.facoltativa ? '*' : <></>}
                    {/* Controllo se la domanda è di tipo libera */}
                    {!question.libera
                      ? <></>
                      : (
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
              {/* Risposte */}
              <Grid item xs={12} sm={4}>
                <form className={classes.risposta}>
                  {/* Radio group con risposta 1 e 2 */}
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
    // Se la domanda è di tipo a più risposte
    return (
      <LineMoreAnswers
        key={idDomanda}
        idDomanda={idDomanda}
        domanda={domanda}
        risposte={risposte}
        question={question}
        index={index}
        groupSelected={groupSelected}
      />
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
