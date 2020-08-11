import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useDispatch } from 'react-redux';
import Nav from '../../component/Navbar/Navbar';
import useStyles from './style';
import DepartmentChoiceEditor from '../../component/DepartmentChoiceEditor/DepartmentChoiceEditor';
import ResultLineEditor from '../../component/ResultLineEditor/ResultLineEditor';
import QuestionsAndAnswersEditor from '../../component/QuestionsAndAnswersEditor/QuestionsAndAnswersEditor';

const FormPaziente = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'INIT' });
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
          NomeUtente
        </Typography>
        <DepartmentChoiceEditor />
        {/* Tabella Domande e risposte */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <Paper>
              <AppBar position="static" className={classes.NavColor}>
                <Typography variant="h5" align="center">
                  Domande e risposte
                </Typography>
              </AppBar>
              <div className={classes.padding}>

                <div className={classes.marginDivider} />
                <QuestionsAndAnswersEditor />

              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            {/* Tabella Risultati */}
            <Paper>
              <AppBar position="static" className={classes.NavColor}>
                <Typography variant="h5" align="center">
                  Risultati
                </Typography>
              </AppBar>
              <div className={classes.padding}>
                <div className={classes.marginDivider}>
                  <Grid container>
                    <Grid item xs={12} sm={1} />
                    <Grid item xs={12} sm={1} />
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle1" align="center">
                        Testo anamnesi
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <Typography variant="subtitle1" align="center">
                        Valore min
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <Typography variant="subtitle1" align="center">
                        Valore max
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                </div>
                <ResultLineEditor />
              </div>
            </Paper>
          </Grid>

        </Grid>
      </div>
    </div>

  );
};
export default FormPaziente;
