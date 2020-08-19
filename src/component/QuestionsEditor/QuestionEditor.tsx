import React from 'react';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import {
  IconButton, Paper, Typography, AppBar,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { selectData } from '../../store/slice/formSlice';

import EmptyQuestionDueRisposteEditor from '../EmptyQuestionDueRisposteEditor/EmptyQuestionDueRisposteEditor';
import {
  modifyDomandaAction, stateTextField, isDisable, colDisable, disableAll, enableAll,
} from '../../store/slice/editFormSlice';
import { initialID } from '../../store/slice/initialStateSlice';
import useStyles from './style';

const QuestionsEditor = () => {
  const dispatch = useDispatch();
  const iniID = useSelector(initialID);
  const domande = useSelector(selectData);
  const textFieldState = useSelector(stateTextField);
  const disableActive = useSelector(isDisable);
  const colorButton = useSelector(colDisable);
  const classes = useStyles();

  if (iniID !== 0) {
    const listItems = domande.map((domanda : any) => (

      <div key={domanda.ID}>
        <Paper className={classes.bordiCard} elevation={3}>
          <div className={classes.bordi}>
            <span className={classes.bordi} />
            <Grid container spacing={3}>
              {textFieldState[domanda.ID]
                ? (
                  < >
                    <Grid item xs={12} sm={1}>
                      <IconButton
                        disabled={disableActive}
                        onClick={() => {
                          dispatch(modifyDomandaAction(domanda.ID));
                          dispatch(disableAll());
                        }}
                      >
                        <CreateIcon color={colorButton} />
                      </IconButton>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                      <IconButton disabled={disableActive}>
                        <DeleteIcon color={colorButton} />
                      </IconButton>
                    </Grid>
                  </ >
                ) : (
                  < >
                    <Grid item xs={12} sm={1}>
                      <IconButton onClick={() => {
                        dispatch(modifyDomandaAction(domanda.ID));
                        dispatch(enableAll());
                      }}
                      >
                        <CheckCircleOutlineIcon color="primary" />
                      </IconButton>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                      <IconButton onClick={() => {
                        dispatch(modifyDomandaAction(domanda.ID));
                        dispatch(enableAll());
                      }}
                      >
                        <HighlightOffIcon color="primary" />
                      </IconButton>
                    </Grid>
                  </ >
                ) }

              <Grid item xs={12} sm={10}>
                <TextField
                  disabled={textFieldState[domanda.ID]}
                  value={domanda.Domanda}
                  fullWidth
                />
              </Grid>
            </Grid>
          </div>
        </Paper>
      </div>

    ));
    return (

      <div>
        <AppBar position="static" className={classes.NavColor}>
          <Typography variant="h5" align="center">
            Domande
          </Typography>
        </AppBar>
        <div className={classes.padding}>
          <div className={classes.marginDivider} />
          {listItems}
          <EmptyQuestionDueRisposteEditor />
        </div>
      </div>
    );
  }
  return (
    <div>
      <AppBar position="static" className={classes.NavColor}>
        <Typography variant="h5" align="center">
          Domande
        </Typography>
      </AppBar>
      <div className={classes.padding}>
        <div className={classes.marginDivider} />
        <EmptyQuestionDueRisposteEditor />
      </div>
    </div>
  );
};

export default QuestionsEditor;
