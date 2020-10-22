import React, { ReactElement } from 'react';
import TextField from '@material-ui/core/TextField';
import {
  Typography, Collapse,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';

import Card from '@material-ui/core/Card/Card';
import useStyles from './style';
import {
  domandeObject, modifyDomandaInObjectDomande,

  setBCheckDisabled, isBCheckDisabled, setBCheckEnabled,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  domandaType, expandedTableQuestion, setBModifyDomandaUnclicked,
} from '../../../store/slice/domandeAddFormSlice';
import { objectToArray } from '../../../util';
import {
  isBConfirmAddFormClicked, setUnsavedChanges,
} from '../../../store/slice/addFormSlice';
import { haveRepModifyRight } from '../../../store/slice/rightsSlice';
import EmptyAddQuestion2Answers from './EmptyAddQuestion2Answers/EmptyAddQuestion2Answers';
import ButtonsQuestion from './ButtonsQuestion/ButtonsQuestion';
import NavQuestions from './NavQuestions/NavQuestions';
import { intestazioneAttiva, raggruppaAttivo } from '../../../store/slice/menuDomandeSlice';
import DropDownListGroup from '../DropDownListGroup/DropDownListGroup';
import TextFieldIntestazione from '../TextFieldIntestazione/TextFieldIntestazione';
import { enableAll } from '../../../store/slice/disableEnableSlice';

/**
 * Tabella domande
 */
const QuestionsEditor = ():ReactElement => {
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
  const listNewDomande = domandeAddFormArray.map((domandaAddForm : domandaType) => {
    const { IDDomanda } = domandaAddForm;
    const { tipo } = domandaAddForm;

    return (

      <div key={domandaAddForm.IDDomanda}>
        { tipo === 'a due risposte'
          ? (
            <Card className={classes.bordiCard} elevation={3}>
              <div className={classes.bordi}>
                <span className={classes.bordi} />
                <Grid container spacing={3}>

                  <Grid item xs={12} sm={8}>

                    <TextField
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !bCheckDisabled) {
                          dispatch(setBModifyDomandaUnclicked(domandaAddForm.IDDomanda));
                          dispatch(enableAll());
                          dispatch(setUnsavedChanges());
                        }
                      }}
                      disabled={domandaAddForm.stateText}
                      value={domandaAddForm.domanda}
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

              <div className={classes.bordi}>
                {group
                  ? (<DropDownListGroup IDDomanda={domandaAddForm.IDDomanda} />
                  ) : <></>}
              </div>

            </Card>
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
            ? <TextFieldIntestazione /> : <></>}
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
