import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
  Paper, Typography, Collapse,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';

import useStyles from './style';
import {
  domandeObject, modifyDomandaInObjectDomande,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setBCheckDisabled, isBCheckDisabled, setBCheckEnabled, domandaAddForm, expandedTableQuestion,
} from '../../store/slice/domandeAddFormSlice';
import { objectToArray } from '../../util';
import {
  isBConfirmAddFormClicked,
} from '../../store/slice/addFormSlice';
import { haveRepModifyRight } from '../../store/slice/rightsSlice';
import EmptyAddQuestion2Answers from '../EmptyAddQuestion2Answers/EmptyAddQuestion2Answers';
import ButtonsQuestion from '../ButtonsQuestion/ButtonsQuestion';
import NavQuestions from '../NavQuestions/NavQuestions';
import { intestazioneAttiva, raggruppaAttivo } from '../../store/slice/menuDomandeSlice';
import DropDownListGroup from '../DropDownListGroup/DropDownListGroup';
import TextFieldIntestazioneQuesMoreAnswers from '../TextFieldIntestazioneQuesMoreAnswers/TextFieldIntestazioneQuesMoreAnsw';

const QuestionsEditor = () => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const DomandeAddFormObj = useSelector(domandeObject);
  const domandeAddFormArray = objectToArray(DomandeAddFormObj);
  const bCheckDisabled = useSelector(isBCheckDisabled);
  const rightRepModify = useSelector(haveRepModifyRight);
  const confirmAddReparto = useSelector(isBConfirmAddFormClicked);
  const expanded = useSelector(expandedTableQuestion);
  const intAttiva = useSelector(intestazioneAttiva);
  const group = useSelector(raggruppaAttivo);

  // eslint-disable-next-line no-shadow
  const listNewDomande = domandeAddFormArray.map((domandaAddForm : domandaAddForm, index : any) => {
    const { IDDomanda } = domandaAddForm;
    const { Tipo } = domandaAddForm;

    return (

      <div key={domandaAddForm.IDDomanda}>
        { Tipo === 'a due risposte'
          ? (
            <Paper className={classes.bordiCard} elevation={3}>
              <div className={classes.bordi}>
                <span className={classes.bordi} />
                <Grid container spacing={3}>

                  <Grid item xs={12} sm={10}>

                    <TextField
                      disabled={domandaAddForm.stateText}
                      value={domandaAddForm.Domanda}
                      fullWidth
                      onChange={(event) => {
                        const Domanda = event.target.value;
                        dispatch(modifyDomandaInObjectDomande({ IDDomanda, Domanda }));
                        if (Domanda === '') {
                          dispatch(setBCheckDisabled());
                        } else if (bCheckDisabled === true) {
                          dispatch(setBCheckEnabled());
                        }
                      }}
                    />

                  </Grid>
                  <ButtonsQuestion domandaAddForm={domandaAddForm} />
                </Grid>
              </div>

              {group
                ? (
                  <div className={classes.bordi}>
                    {' '}
                    <DropDownListGroup IDDomanda={domandaAddForm.IDDomanda} />
                  </div>
                ) : <></>}

            </Paper>
          ) : (
            <>
              {' '}
              <Grid item xs={12} sm={2} />
            </>
          )}
      </div>
    );
  });

  return (

    <div>
      <NavQuestions />
      <Collapse in={expanded}>
        <div className={classes.padding}>
          <div className={classes.marginDivider} />
          {intAttiva
            ? <TextFieldIntestazioneQuesMoreAnswers /> : <></>}
          {rightRepModify || confirmAddReparto
            ? <EmptyAddQuestion2Answers /> : <></>}

          {listNewDomande}

          {intAttiva
            ? (
              <Typography className={classes.marginGenerico} variant="body1">
                * L&apos;intestazione è quella porzione di testo che viene messa
                all&apos;inizio di ogni domanda.
              </Typography>
            ) : <></>}
        </div>
      </Collapse>
    </div>

  );
};

export default QuestionsEditor;
