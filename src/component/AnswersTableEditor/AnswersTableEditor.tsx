import React, { useState } from 'react';
import {
  Paper, AppBar, Typography, Grid, TextField, IconButton, Collapse,
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import { useDispatch, useSelector } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import useStyles from './style';
import {
  getRisposta1, setBModifyRis1Clicked, ris1, ris2,
  setBModifyRis2Clicked, isBModifyRis1Clicked,
  setBModifyRis1Unclicked, setBModifyRis2Unclicked,
  isBModifyRis2Clicked, getRisposta2, isBCheckRis1Disabled,
  colorBCheckRis1, setBCheckRisposta1Disabled,
  setBCheckRisposta1Enabled, setBCheckRisposta2Disabled, setBCheckRisposta2Enabled,
  colorBCheckRis2, isBCheckRis2Disabled,
} from '../../store/slice/risposteAddFormSlice';
import {
} from '../../store/slice/domandeAddFormSlice';
import {
  unsetIcons, setIcons, isIconsDisabled, colorIcons, setBSaveDisabled, setBSaveEnabled,
} from '../../store/slice/addFormSlice';
import { haveRepModifyRight, unsetDDLFormDisabled, setDDLFormDisabled } from '../../store/slice/rightsSlice';
import confirmAddForm from '../../store/sagas/departmentChoiceEditorSagas';
import { enableAll, disableAll } from '../../store/slice/risultatiAddFormSlice';

const AnswersTableEditor = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const ans1 = useSelector(ris1);
  const ans2 = useSelector(ris2);
  const isIconEnabled = useSelector(isIconsDisabled);
  const colButton = useSelector(colorIcons);
  const bModifyRis1Clicked = useSelector(isBModifyRis1Clicked);
  const bModifyRis2Clicked = useSelector(isBModifyRis2Clicked);
  const colBCheckRis1 = useSelector(colorBCheckRis1);
  const bCheckRis1Disabled = useSelector(isBCheckRis1Disabled);
  const colBCheckRis2 = useSelector(colorBCheckRis2);
  const bCheckRis2Disabled = useSelector(isBCheckRis2Disabled);
  const rightRepModify = useSelector(haveRepModifyRight);
  const [expanded, setExpanded] = useState(true);
  const addFormConfirm = useSelector(confirmAddForm);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>

      <Paper>
        <AppBar position="static" className={classes.NavColor}>
          {expanded
            ? (
              <Typography variant="h5" align="left">
                <IconButton onClick={handleExpandClick} className={classes.space}>
                  <ExpandLessIcon fontSize="large" color="secondary" />
                </IconButton>

                Risposte
              </Typography>
            )
            : (
              <Typography variant="h5" align="left">
                <IconButton onClick={handleExpandClick} className={classes.space}>
                  <ExpandMoreIcon fontSize="large" color="secondary" />
                </IconButton>

                Risposte
              </Typography>
            )}

        </AppBar>
        <Collapse in={expanded}>
          <div className={classes.padding}>
            <div className={classes.marginDivider}>
              <Grid container>
                <Grid item xs={12} sm={1} />
                <Grid item xs={12} sm={1} />
                <Grid item xs={12} sm={10}>
                  <Typography variant="subtitle1">
                    Risposta di riferimento*
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  {rightRepModify || addFormConfirm
                    ? (
                      <>
                        {' '}
                        {!bModifyRis1Clicked
                          ? (
                            <IconButton
                              disabled={isIconEnabled}
                              color={colButton}
                              onClick={() => {
                                dispatch(setBModifyRis1Clicked());
                                dispatch(unsetIcons());
                                dispatch(setBSaveDisabled());
                                dispatch(disableAll());
                                dispatch(setDDLFormDisabled());
                              }}
                            >
                              <CreateIcon />
                            </IconButton>
                          ) : (
                            <IconButton
                              disabled={bCheckRis1Disabled}
                              color={colBCheckRis1}
                              onClick={() => {
                                dispatch(setBModifyRis1Unclicked());
                                dispatch(setIcons());
                                dispatch(enableAll());
                                dispatch(setBSaveEnabled());
                                dispatch(unsetDDLFormDisabled());
                              }}
                            >
                              <CheckCircleOutlineIcon />
                            </IconButton>
                          )}

                      </>
                    ) : <></>}
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    value={ans1.risposta1}
                    disabled={ans1.stateText}
                    onChange={
                  (event) => {
                    const res1 = event.target.value;
                    dispatch(getRisposta1(res1));
                    if (res1 === '') {
                      dispatch(setBCheckRisposta1Disabled());
                    } else if (bCheckRis1Disabled === true) {
                      dispatch(setBCheckRisposta1Enabled());
                    }
                  }
                }
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={1} />
                <Grid item xs={12} sm={1} />
                <Grid item xs={12} sm={10}>
                  <Typography variant="subtitle1">
                    Risposta secondaria
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  {rightRepModify || addFormConfirm
                    ? (
                      <>
                        {' '}
                        {!bModifyRis2Clicked
                          ? (
                            <IconButton
                              disabled={isIconEnabled}
                              color={colButton}
                              onClick={() => {
                                dispatch(setBModifyRis2Clicked());
                                dispatch(unsetIcons());
                                dispatch(disableAll());
                                dispatch(setBSaveDisabled());
                                dispatch(setDDLFormDisabled());
                              }}
                            >
                              <CreateIcon />
                            </IconButton>
                          ) : (
                            <IconButton
                              disabled={bCheckRis2Disabled}
                              color={colBCheckRis2}
                              onClick={() => {
                                dispatch(setBModifyRis2Unclicked());
                                dispatch(setIcons());
                                dispatch(enableAll());
                                dispatch(setBSaveEnabled());
                                dispatch(unsetDDLFormDisabled());
                              }}
                            >
                              <CheckCircleOutlineIcon />
                            </IconButton>
                          )}

                      </>
                    ) : <></>}
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    value={ans2.risposta2}
                    disabled={ans2.stateText}
                    defaultValue="No"
                    onChange={
                  (event) => {
                    const res2 = event.target.value;
                    dispatch(getRisposta2(res2));
                    if (res2 === '') {
                      dispatch(setBCheckRisposta2Disabled());
                    } else if (bCheckRis2Disabled === true) {
                      dispatch(setBCheckRisposta2Enabled());
                    }
                  }
                }
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Typography variant="body1" className={classes.marginTop}>
                * La risposta di riferimento è la risposta interessata, cioè
                la risposta di cui si visualizzerà la domanda, sotto forma di
                affermazione.
              </Typography>
            </div>

          </div>
        </Collapse>
      </Paper>
    </div>
  );
};

export default AnswersTableEditor;
