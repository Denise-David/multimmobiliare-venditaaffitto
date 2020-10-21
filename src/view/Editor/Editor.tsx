import React, { ReactElement, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import {
  CircularProgress, DialogContent, MenuItem, TextField,
} from '@material-ui/core';
import Nav from '../../component/Navbar/Navbar';
import useStyles from './style';
import HeaderEditor from '../../component/Editor/HeaderEditor/HeaderEditor';
import QuestionsAndAnswersEditor from '../../component/Editor/QuestionsAndAnswersEditor/QuestionsAndAnswersEditor';
import {
  isButtonAddFormClicked, setSelectedReparto, setConfirmEnabled,
  isBConfirmAddFormClicked, nomeFormulario, setNomeFormulario, setUnsavedChanges,
} from '../../store/slice/addFormSlice';
import QuestionsEditor from '../../component/Editor/QuestionsEditor/QuestionEditor';
import ResultTableEditor from '../../component/Editor/ResultTable/ResultTableEditor';
import AnswersTableEditor from '../../component/Editor/AnswersTableEditor/AnswersTableEditor';
import { user, repartiCreate, haveRepModifyRight } from '../../store/slice/rightsSlice';
import { IDForm } from '../../store/slice/ddlEditorFormAndRepartiSlice';
import GroupDialog from '../../component/Editor/GroupDialog/GroupDialog';
import { isLoaded, isLoading } from '../../store/slice/loadingSlice';
import { isBModifyDelAddReturnDisabled } from '../../store/slice/disableEnableSlice';

// Vista editor principale
const Editor = ():ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'INIT' });
    dispatch({ type: 'initUserRightsAUTAN' });
  }, [dispatch]);
  const IDFormSelected = useSelector(IDForm);
  const loaded = useSelector(isLoaded);
  const loading = useSelector(isLoading);
  const modifyRight = useSelector(haveRepModifyRight);
  const IDFormulario = useSelector(IDForm);
  const nomeForm = useSelector(nomeFormulario);
  const iconsDisabled = useSelector(isBModifyDelAddReturnDisabled);
  const addReparto = useSelector(isButtonAddFormClicked);
  const username = useSelector(user);
  const confirmAddForm = useSelector(isBConfirmAddFormClicked);
  const doppiArrayRepartiCreate = useSelector(repartiCreate);

  const listRepartiCreate = doppiArrayRepartiCreate.map((Reparto : any) => {
    const nomeReparto = Reparto.longname;
    const idReparto = Reparto.unitid || Reparto.sermednodeid;
    return (
      // Item reparto dei diritti create
      <MenuItem
        onClick={() => {
          dispatch(setSelectedReparto({ nomeReparto, idReparto }));
          dispatch(setConfirmEnabled());
        }}
        key={Reparto.unitid || Reparto.sermednodeid}
      >
        {Reparto.longname}
      </MenuItem>
    );
  });
  return (
    <div>
      {/* Header */}
      <Nav />
      <div className={classes.root}>
        <Typography
          variant="subtitle1"
          align="left"
          color="primary"
        >
          {username}
        </Typography>
        <HeaderEditor />
        {/* Dialog */}
        <GroupDialog />
        {/* Loading */}
        {!loaded && loading && IDFormSelected !== '-1'
          ? (
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.marginTop}
            >
              <CircularProgress disableShrink />
            </Grid>
          )
          : (
            <>
              {/* Tabelle */}
              {IDFormSelected !== '-1' || confirmAddForm
                ? (

                  <>
                    {modifyRight && IDFormulario !== '-1'
                      ? (
                        // Campo nome formulario
                        <div className={classes.tfNomeForm}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            value={nomeForm}
                            onChange={(event) => {
                              const { value } = event.target;
                              dispatch(setNomeFormulario(value));
                              dispatch(setUnsavedChanges());
                            }}
                            disabled={iconsDisabled}
                          />
                        </div>
                      ) : <></>}
                    {/* Tabella Domande e risposte */}
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={8}>
                        <Paper className={classes.marginTable}>
                          <QuestionsAndAnswersEditor />
                        </Paper>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <div className={classes.marginTable}>
                          <ResultTableEditor />
                        </div>

                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <Paper>
                          <QuestionsEditor />
                        </Paper>
                      </Grid>
                      <Grid item xs={12} sm={4}>

                        <AnswersTableEditor />

                      </Grid>

                    </Grid>
                  </>
                ) : (
                  <>
                    {addReparto
                      ? (
                        <>
                          {/* scelta reparto per aggiunta formulario */}
                          <Typography className={classes.background} variant="h5">Scegli il reparto</Typography>
                          <br />
                          <DialogContent dividers>{listRepartiCreate}</DialogContent>
                        </>
                      ) : <></> }
                  </>
                )}
            </>
          )}
      </div>
    </div>
  );
};
export default Editor;
