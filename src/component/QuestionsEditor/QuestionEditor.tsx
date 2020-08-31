import React from 'react';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import {
  IconButton, Paper, Typography, AppBar, Switch,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import EmptyAddQuestionMoreAnswers from '../EmptyAddQuestionMoreAnswers/EmptyAddQuestionMoreAnswers';
import useStyles from './style';
import {
  domandeObject, setBModifyDomandaClicked, setBModifyDomandaUnclicked,
  modifyDomandaInObjectDomande, deleteDomandaInObjectDomande,
  setBCheckDisabled, isBCheckDisabled, setBCheckEnabled, colorBCheck, domandaAddForm,
} from '../../store/slice/domandeAddFormSlice';
import { objectToArray } from '../../util';
import {
  isIconsDisabled, unsetIcons, colorIcons, setIcons, isBConfirmAddFormClicked,
} from '../../store/slice/addFormSlice';
import { haveRepModifyRight } from '../../store/slice/rightsSlice';
import EmptyAddQuestion2Answers from '../EmptyAddQuestion2Answers/EmptyAddQuestion2Answers';

const QuestionsEditor = () => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const DomandeAddFormObj = useSelector(domandeObject);
  const domandeAddFormArray = objectToArray(DomandeAddFormObj);
  const iconsModifyAndDeleteDisabled = useSelector(isIconsDisabled);
  const colButton = useSelector(colorIcons);
  const bCheckDisabled = useSelector(isBCheckDisabled);
  const colBCheck = useSelector(colorBCheck);
  const rightRepModify = useSelector(haveRepModifyRight);
  const confirmAddReparto = useSelector(isBConfirmAddFormClicked);

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
                  {rightRepModify || confirmAddReparto
                    ? (
                      <>
                        {' '}
                        { domandaAddForm.stateText
                          ? (
                            < >
                              <Grid item xs={12} sm={1}>
                                <IconButton
                                  color={colButton}
                                  disabled={iconsModifyAndDeleteDisabled}
                                  onClick={() => {
                                    dispatch(setBModifyDomandaClicked(domandaAddForm.IDDomanda));
                                    dispatch(unsetIcons());
                                  }}
                                >
                                  <CreateIcon />
                                </IconButton>
                              </Grid>
                              <Grid item xs={12} sm={1}>
                                <IconButton
                                  color={colButton}
                                  disabled={iconsModifyAndDeleteDisabled}
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
                                    color={colBCheck}
                                    onClick={
                            () => {
                              dispatch(setBModifyDomandaUnclicked(domandaAddForm.IDDomanda));
                              dispatch(setIcons());
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
  return (

    <div>
      <AppBar position="static" className={classes.NavColor}>
        <Typography variant="h5" align="center">
          Domande
        </Typography>
      </AppBar>
      <div className={classes.padding}>
        <div className={classes.marginDivider} />

        <Grid container spacing={3}>

          <Grid item xs={12} sm={2}>
            <Typography className={classes.spaceTopIntestazione} variant="body1" align="center">Intestazione*</Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={1}>
            <Switch
              className={classes.spaceTop}
              name="checkedA"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </Grid>

        </Grid>

        {listNewDomande}
        {rightRepModify || confirmAddReparto
          ? <EmptyAddQuestion2Answers /> : <></>}
        <Typography className={classes.marginGenerico} variant="body1">
          * L&apos;intestazione è quella porzione di testo che viene messa
          all&apos;inizio di ogni domanda.
        </Typography>
      </div>
    </div>
  );
};

export default QuestionsEditor;
