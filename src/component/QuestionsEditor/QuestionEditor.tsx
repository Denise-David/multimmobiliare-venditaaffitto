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

import {
  domandeView, setModifyClicked, setModifyUnclicked, deleteObjectDomanda, modifyDomanda,
} from '../../store/slice/domandeModifySlice';

import EmptyAddQuestionEditor from '../EmptyAddQuestionEditor/EmptyAddQuestionEditor';
import {
  isDisable,
  disableAll, enableAll,
} from '../../store/slice/editFormSlice';
import { initialID } from '../../store/slice/initialStateSlice';
import useStyles from './style';
import {
  domandeObject, setBModifyDomandaClicked, setBModifyDomandaUnclicked,
  modifyDomandaInObjectDomande, deleteDomandaInObjectDomande,
  setBCheckDisabled, isBCheckDisabled, setBCheckEnabled, colorBCheck,
} from '../../store/slice/domandeAddFormSlice';
import { objectToArray } from '../../util';
import {
  isIconsDisabled, unsetIcons, colorIcons, setIcons,
} from '../../store/slice/addFormSlice';

const QuestionsEditor = () => {
  const dispatch = useDispatch();
  const iniID = useSelector(initialID);
  const domande = useSelector(domandeView);
  const disableActive = useSelector(isDisable);
  const classes = useStyles();
  const DomandeAddFormObj = useSelector(domandeObject);
  const domandeAddFormArray = objectToArray(DomandeAddFormObj);
  const iconsModifyAndDeleteDisabled = useSelector(isIconsDisabled);
  const colButton = useSelector(colorIcons);
  const bCheckDisabled = useSelector(isBCheckDisabled);
  const colBCheck = useSelector(colorBCheck);

  if (iniID !== 0) {
    const listItems = domande.map((domanda : any, index: any) => (

      <div key={domanda.ID}>
        <Paper className={classes.bordiCard} elevation={3}>
          <div className={classes.bordi}>
            <span className={classes.bordi} />
            <Grid container spacing={3}>
              {!domanda.stateModify
                ? (
                  < >
                    <Grid item xs={12} sm={1}>
                      <IconButton
                        disabled={disableActive}
                        color={colButton}
                        onClick={() => {
                          dispatch(disableAll());
                          dispatch(setModifyClicked(index));
                          dispatch(unsetIcons());
                        }}
                      >
                        <CreateIcon />
                      </IconButton>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                      <IconButton
                        onClick={() => dispatch(deleteObjectDomanda(index))}
                        color="primary"
                        disabled={disableActive}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </ >
                ) : (
                  < >
                    <Grid item xs={12} sm={1}>
                      <IconButton onClick={() => {
                        dispatch(enableAll());
                        dispatch(setModifyUnclicked(index));
                        dispatch(setIcons());
                      }}
                      >
                        <CheckCircleOutlineIcon color="primary" />
                      </IconButton>
                    </Grid>
                    <Grid item xs={12} sm={1} />
                  </ >
                ) }

              <Grid item xs={12} sm={10}>
                <TextField
                  disabled={!domanda.stateModify}
                  value={domanda.Domanda}
                  fullWidth
                  onChange={(event) => {
                    const { value } = event.target;
                    dispatch(modifyDomanda({ index, value }));
                  }}
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
          <EmptyAddQuestionEditor />
        </div>
      </div>
    );
  }

  // Riga Domanda per Add form a due Risposte

  const listNewDomande = domandeAddFormArray.map((domandaAddForm : any, index : any) => {
    const { IDDomanda } = domandaAddForm;

    return (

      <div key={domandaAddForm.IDDomanda}>
        <Paper className={classes.bordiCard} elevation={3}>
          <div className={classes.bordi}>
            <span className={classes.bordi} />
            <Grid container spacing={3}>
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
        <EmptyAddQuestionEditor />
        <Typography className={classes.marginGenerico} variant="body1">
          * L&apos;intestazione è quella porzione di testo che viene messa
          all&apos;inizio di ogni domanda.
        </Typography>
      </div>
    </div>
  );
};

export default QuestionsEditor;
