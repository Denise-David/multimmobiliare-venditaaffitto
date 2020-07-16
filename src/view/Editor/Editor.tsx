import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Nav from '../../component/Navbar/Nav';
import useStyles from './style';
import SceltaReparto from '../../component/SceltaReparto/SceltaReparto';
import RigaRisultato from '../../component/RigaRisultato/RigaRisulato';
import RigaRisultatoVuota from '../../component/RigaRisultatoVuota/RigaRisultatoVuota';
import RigaDomanda from '../../component/RigaDomanda/RigaDomanda';
import RigaRisposta from '../../component/RigaRisposta/RigaRisposta';
import RigaRispostaVuota from '../../component/RigaRispostaVuota/RigaRispostaVuota';
import RigaDomandaVuota from '../../component/RigaDomandaVuota/RigaDomandaVuota';

const FormPaziente = () => {
  const classes = useStyles();
  return (

    <div>
      <Nav />
      <div className={classes.root}>
        <SceltaReparto />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={7}>
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
                <RigaRisposta />
                <RigaRisposta />
                <RigaRisposta />
                <RigaRispostaVuota />
                <RigaDomanda />
                <RigaRisposta />
                <RigaRisposta />
                <RigaRispostaVuota />
                <RigaDomandaVuota />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={5}>
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
                <RigaRisultato />
                <RigaRisultato />
                <RigaRisultato />
                <RigaRisultato />
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
