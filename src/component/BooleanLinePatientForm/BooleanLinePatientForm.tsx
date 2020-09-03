import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import { Typography, ListItem, Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from './style';
import { repartoDomande, boolAnswers, setRisposta } from '../../store/slice/patientFormSlice';

const BooleanLinePatientForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const domande = useSelector(repartoDomande);
  const booleanAnswers = useSelector(boolAnswers);

  const listItems = domande.map((question: any) => {
    const domanda : string = question.Domanda;
    const idDomanda : string = question.IDDomanda;
    return (
      <div key={idDomanda}>
        {question.Tipo === 'a due risposte'
          ? (
            <ListItem divider>

              <Grid container>
                <Grid item xs={12} sm={8}>
                  <div className={classes.marginTop}>
                    <Typography variant="subtitle1">{question.Domanda}</Typography>
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
                          dispatch(setRisposta({ idDomanda, valore, domanda }));
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
          ) : <></>}
      </div>
    );
  });

  return (

    <>
      { listItems }
    </>

  );
};

export default BooleanLinePatientForm;
