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
  isBModifyRis2Clicked, getRisposta2,
} from '../../store/slice/risposteAddFormSlice';
import {
} from '../../store/slice/domandeAddFormSlice';
import { haveRepModifyRight } from '../../store/slice/rightsSlice';
import confirmAddForm from '../../store/sagas/departmentChoiceEditorSagas';

import {
  isBModifyDelAddReturnDisabled, disableAll, enableAll,
} from '../../store/slice/disableEnableSlice';

const AnswersTableEditor = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const ans1 = useSelector(ris1);
  const ans2 = useSelector(ris2);
  const iconsDisabled = useSelector(isBModifyDelAddReturnDisabled);
  const bModifyRis1Clicked = useSelector(isBModifyRis1Clicked);
  const bModifyRis2Clicked = useSelector(isBModifyRis2Clicked);
  const rightRepModify = useSelector(haveRepModifyRight);
  const [expanded, setExpanded] = useState(true);
  const addFormConfirm = useSelector(confirmAddForm);
  const [bCheck1Disabled, setBCheck1] = useState(false);
  const [bCheck2Disabled, setBCheck2] = useState(false);

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
                              disabled={iconsDisabled}
                              color="primary"
                              onClick={() => {
                                dispatch(setBModifyRis1Clicked());
                                dispatch(disableAll());
                              }}
                            >
                              <CreateIcon />
                            </IconButton>
                          ) : (
                            <IconButton
                              disabled={bCheck1Disabled}
                              color="primary"
                              onClick={() => {
                                dispatch(setBModifyRis1Unclicked());
                                dispatch(enableAll());
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
                      setBCheck1(!bCheck1Disabled);
                    } else if (bCheck1Disabled === true) {
                      setBCheck1(!bCheck1Disabled);
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
                              disabled={iconsDisabled}
                              color="primary"
                              onClick={() => {
                                dispatch(setBModifyRis2Clicked());
                                dispatch(disableAll());
                              }}
                            >
                              <CreateIcon />
                            </IconButton>
                          ) : (
                            <IconButton
                              disabled={bCheck2Disabled}
                              color="primary"
                              onClick={() => {
                                dispatch(setBModifyRis2Unclicked());
                                dispatch(enableAll());
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
                      setBCheck2(!bCheck2Disabled);
                    } else if (bCheck2Disabled === true) {
                      setBCheck2(!bCheck2Disabled);
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
