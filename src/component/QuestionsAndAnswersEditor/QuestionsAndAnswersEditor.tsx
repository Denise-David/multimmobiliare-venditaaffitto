import React from 'react';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import {
  IconButton, Paper, Typography, Divider, AppBar,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import AnswerLineEditor from '../AnswerLineEditor/AnswerLineEditor';
import EmptyAnswerLineEditor from '../EmptyAnswerLineEditor/EmptyAnswerLineEditor';
import EmptyAddQuestionEditor from '../EmptyAddQuestionEditor/EmptyAddQuestionEditor';
import {
  isDisable, colDisable, disableAll, enableAll,
} from '../../store/slice/risultatiAddFormSlice';

import useStyles from './style';
import {
  domandeObject, deleteDomandaFormPiuRes,
  setBModifyDomandaClicked, setBModifyDomandaUnclicked, modifyDomandaInObjectDomande,
} from '../../store/slice/domandeAddFormSlice';
import { objectToArray } from '../../util';
import { unsetIcons, setIcons } from '../../store/slice/addFormSlice';
import { haveRepModifyRight } from '../../store/slice/rightsSlice';

const QuestionsAndAnswersEditor = () => {
  const dispatch = useDispatch();

  const disableActive = useSelector(isDisable);
  const colorButton = useSelector(colDisable);
  const classes = useStyles();
  const domandeAddedObject = useSelector(domandeObject);

  const arrayDomandeAdded = objectToArray(domandeAddedObject);
  const rightRepModify = useSelector(haveRepModifyRight);

  // vista domande da aggiunta nuovo form
  const listDomandeAdded = arrayDomandeAdded.map((domanda : any) => {
    const { IDDomanda } = domanda;
    const question = domanda.Domanda;
    return (

      <div key={domanda.ID}>
        <Paper className={classes.bordiCard} elevation={3}>
          <div className={classes.bordi}>
            <span className={classes.bordi}>
              <Grid container>
                <Grid item xs={12} sm={1} />
                <Grid item xs={12} sm={1} />

                <Grid item xs={12} sm={5}>
                  <Typography variant="subtitle1" align="center">
                    Domanda
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="subtitle1" align="center">
                    Risposte
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={1}>
                  <Typography variant="subtitle1" align="center">
                    Valore
                  </Typography>
                </Grid>

              </Grid>

              <Divider />
            </span>
            <Grid container spacing={3}>
              {domanda.stateText
                ? (
                  < >
                    <Grid item xs={12} sm={1}>
                      <IconButton
                        disabled={disableActive}
                        onClick={() => {
                          dispatch(disableAll());
                          dispatch(setBModifyDomandaClicked(domanda.IDDomanda));
                          dispatch(unsetIcons());
                        }}
                      >
                        <CreateIcon color={colorButton} />
                      </IconButton>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                      <IconButton
                        onClick={() => dispatch(deleteDomandaFormPiuRes(domanda.IDDomanda))}
                        disabled={disableActive}
                      >
                        <DeleteIcon color={colorButton} />
                      </IconButton>
                    </Grid>
                  </ >
                ) : (
                  < >
                    <Grid item xs={12} sm={1}>
                      <IconButton onClick={() => {
                        dispatch(enableAll());
                        dispatch(setBModifyDomandaUnclicked(domanda.IDDomanda));
                        dispatch(setIcons());
                      }}
                      >
                        <CheckCircleOutlineIcon color="primary" />
                      </IconButton>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                      <IconButton onClick={() => {
                        dispatch(enableAll());
                        dispatch(setBModifyDomandaUnclicked(domanda.IDDomanda));
                        dispatch(setIcons());
                      }}
                      >
                        <HighlightOffIcon color="primary" />
                      </IconButton>
                    </Grid>
                  </ >
                ) }

              <Grid item xs={12} sm={10}>
                <TextField
                  disabled={domanda.stateText}
                  value={domanda.Domanda}
                  fullWidth
                  onChange={() => dispatch(modifyDomandaInObjectDomande({ IDDomanda, question }))}
                />
              </Grid>
            </Grid>
            <AnswerLineEditor id={domanda.IDDomanda} />
            <EmptyAnswerLineEditor IDDomanda={domanda.IDDomanda} />
          </div>
        </Paper>
      </div>

    );
  });

  return (
    <div>
      <AppBar position="static" className={classes.NavColor}>
        <Typography variant="h5" align="center">
          Domande e risposte
        </Typography>
      </AppBar>
      <div className={classes.padding}>
        <div className={classes.marginDivider} />
        {listDomandeAdded}
        <EmptyAddQuestionEditor />
      </div>
    </div>
  );
};

export default QuestionsAndAnswersEditor;
