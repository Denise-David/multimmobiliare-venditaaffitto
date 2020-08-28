import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { DialogContent, MenuItem } from '@material-ui/core';
import Nav from '../../component/Navbar/Navbar';
import useStyles from './style';
import HeaderEditor from '../../component/HeaderEditor/HeaderEditor';
import QuestionsAndAnswersEditor from '../../component/QuestionsAndAnswersEditor/QuestionsAndAnswersEditor';
import {
  isButtonAddFormClicked, formType, setSelectedReparto, setConfirmEnabled,
} from '../../store/slice/addFormSlice';

import QuestionsEditor from '../../component/QuestionsEditor/QuestionEditor';
import ResultTableEditor from '../../component/ResultTable/ResultTableEditor';
import AnswersTableEditor from '../../component/AnswersTableEditor/AnswersTableEditor';
import { user, repartiCreate } from '../../store/slice/rightsSlice';
import { IDRepartoSelected, IDForm } from '../../store/slice/repartoDDLSlice';

const FormPaziente = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'INIT' });
    dispatch({ type: 'initUserRightsAUTAN' });
  }, [dispatch]);
  const IDFormSelected = useSelector(IDForm);

  const addReparto = useSelector(isButtonAddFormClicked);
  const username = useSelector(user);
  // Estraggo i reparti e li unisco in un unico array (da spostare nel saga magari)
  const doppiArrayRepartiCreate = useSelector(repartiCreate);

  const listRepartiCreate = doppiArrayRepartiCreate.map((Reparto : any) => {
    const nomeReparto = Reparto.longname;
    const idReparto = Reparto.unitid || Reparto.sermednodeid;
    return (
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

      <Nav />
      <div className={classes.root}>
        <Typography
          variant="subtitle1"
          align="right"
          color="primary"
        >
          {username}
        </Typography>
        <HeaderEditor />
        {IDFormSelected !== '-1'
          ? (
            <>
              {' '}
              {addReparto
                ? (
                  <>
                    <Typography className={classes.background} variant="h5">Scegli il reparto</Typography>
                    <br />
                    <DialogContent dividers>{listRepartiCreate}</DialogContent>
                  </>

                ) : (
                  <>
                    {/* Tabelle Domande e risposte */}
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={8}>
                        <Paper className={classes.marginTable}>

                          <QuestionsAndAnswersEditor />
                        </Paper>
                        <Paper>
                          <QuestionsEditor />
                        </Paper>

                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <div className={classes.marginTable}>
                          <ResultTableEditor />
                        </div>
                        <AnswersTableEditor />

                      </Grid>

                    </Grid>
                  </>

                )}
            </>
          ) : <></>}
      </div>
    </div>

  );
};
export default FormPaziente;
