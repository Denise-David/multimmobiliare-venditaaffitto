import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import {
  IconButton, Paper, Typography, AppBar, Collapse,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './style';
import {
  domandeObject, setBModifyDomandaClicked, setBModifyDomandaUnclicked,
  modifyDomandaInObjectDomande, deleteDomandaInObjectDomande,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setBCheckDisabled, isBCheckDisabled, setBCheckEnabled, domandaAddForm,
} from '../../store/slice/domandeAddFormSlice';
import { objectToArray } from '../../util';
import {
  isBConfirmAddFormClicked,
} from '../../store/slice/addFormSlice';
import { haveRepModifyRight } from '../../store/slice/rightsSlice';
import EmptyAddQuestion2Answers from '../EmptyAddQuestion2Answers/EmptyAddQuestion2Answers';
import TextFieldIntestazione from '../TextFieldIntestazione/TextFieldIntestazione';
import {
  isBModifyDelAddReturnDisabled, disableAll, enableAll,
} from '../../store/slice/disableEnableSlice';

const QuestionsEditor = () => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const DomandeAddFormObj = useSelector(domandeObject);
  const domandeAddFormArray = objectToArray(DomandeAddFormObj);
  const iconsDisabled = useSelector(isBModifyDelAddReturnDisabled);
  const bCheckDisabled = useSelector(isBCheckDisabled);
  const rightRepModify = useSelector(haveRepModifyRight);
  const confirmAddReparto = useSelector(isBConfirmAddFormClicked);

  // eslint-disable-next-line no-shadow
  const listNewDomande = domandeAddFormArray.map((domandaAddForm : domandaAddForm, index : any) => {
    const { IDDomanda } = domandaAddForm;
    const { Tipo } = domandaAddForm;
    console.log('xxDom', domandaAddForm);

    return (

      <div key={domandaAddForm.IDDomanda}>
        { Tipo === 'a due risposte'
          ? (
            <Paper className={classes.bordiCard} elevation={3}>
              <div className={classes.bordi}>
                <span className={classes.bordi} />
                <Grid container spacing={3}>
                  {rightRepModify || confirmAddReparto
                    ? (
                      <>
                        {' '}
                        { domandaAddForm.stateText
                          ? (
                            < >
                              <Grid item xs={12} sm={1}>
                                <IconButton
                                  color="primary"
                                  disabled={iconsDisabled}
                                  onClick={() => {
                                    dispatch(setBModifyDomandaClicked(domandaAddForm.IDDomanda));
                                    dispatch(disableAll());
                                  }}
                                >
                                  <CreateIcon />
                                </IconButton>
                              </Grid>
                              <Grid item xs={12} sm={1}>
                                <IconButton
                                  color="primary"
                                  disabled={iconsDisabled}
                                  onClick={
                        () => dispatch(deleteDomandaInObjectDomande(IDDomanda))
                      }
                                >
                                  <DeleteIcon />
                                </IconButton>
                              </Grid>
                            </ >
                          ) : (
                            <>
                              < >
                                <Grid item xs={12} sm={2}>
                                  <IconButton
                                    disabled={bCheckDisabled}
                                    color="primary"
                                    onClick={
                            () => {
                              dispatch(setBModifyDomandaUnclicked(domandaAddForm.IDDomanda));
                              dispatch(enableAll());
                            }
                          }
                                  >
                                    <CheckCircleOutlineIcon />
                                  </IconButton>
                                </Grid>

                              </ >

                            </>
                          )}

                      </>
                    ) : (
                      <>
                        {' '}
                        <Grid item xs={12} sm={2} />
                      </>
                    )}
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
                </Grid>
              </div>
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
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (

    <div>

      <AppBar position="static" className={classes.NavColor}>
        <Typography variant="h5" align="left">
          {expanded
            ? (
              <IconButton onClick={handleExpandClick} className={classes.space}>
                <ExpandLessIcon fontSize="large" color="secondary" />
              </IconButton>
            ) : (
              <IconButton onClick={handleExpandClick} className={classes.space}>
                <ExpandMoreIcon fontSize="large" color="secondary" />
              </IconButton>
            ) }
          Domande
        </Typography>
      </AppBar>
      <Collapse in={expanded}>
        <div className={classes.padding}>
          <div className={classes.marginDivider} />

          <TextFieldIntestazione />

          {listNewDomande}

          {rightRepModify || confirmAddReparto
            ? <EmptyAddQuestion2Answers /> : <></>}
          <Typography className={classes.marginGenerico} variant="body1">
            * L&apos;intestazione è quella porzione di testo che viene messa
            all&apos;inizio di ogni domanda.
          </Typography>
        </div>
      </Collapse>
    </div>

  );
};

export default QuestionsEditor;
