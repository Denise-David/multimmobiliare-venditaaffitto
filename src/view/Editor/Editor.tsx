import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useDispatch } from 'react-redux';
import Nav from '../../component/Navbar/Nav';
import useStyles from './style';
import SceltaReparto from '../../component/SceltaReparto/SceltaReparto';
import RigaRisultato from '../../component/RigaRisultato/RigaRisulato';
import RigaRisultatoVuota from '../../component/RigaRisultatoVuota/RigaRisultatoVuota';
import RigaDomanda from '../../component/DomandeConRisposte/RigaDomanda';

const FormPaziente = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'INIT' });
  }, []);
  return (
    <div>
      <Nav />
      <div className={classes.root}>
        <SceltaReparto />
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
                <div className={classes.marginDivider}>
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
                </div>
                <RigaDomanda />
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
                <RigaRisultato />
                <RigaRisultatoVuota />
              </div>
            </Paper>
          </Grid>

        </Grid>
      </div>

    </div>

  );
};
export default FormPaziente;
