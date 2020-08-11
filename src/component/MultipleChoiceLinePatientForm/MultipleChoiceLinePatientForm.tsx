import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import { useSelector } from 'react-redux';
import useStyles from './style';

import DropDownListAnswersPatientForm from '../DropDownListAnswersPatientForm/DropDownListAnswersPatientForm';

import { repartoDomande } from '../../store/slice/patientFormSlice';

const MultipleChoiceLinePatient = () => {
  const classes = useStyles();

  const domande = useSelector(repartoDomande);
  if (domande !== null) {
    const listItems = domande.map((domanda : any) => (

    /* eslint-disable */
    <ListItem divider key={domanda.ID}>
      <Grid container>
        <Grid item xs={12} sm={8}>
          <div className={classes.marginTop}>
            <Typography variant="subtitle1">{domanda.Domanda}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl variant="outlined" fullWidth className={classes.margin}>
            <InputLabel id="demo-simple-select-outlined-label"> </InputLabel>
             
            <DropDownListAnswersPatientForm idDomanda={domanda.ID} domanda={domanda.Domanda} />
          </FormControl>
        </Grid>
      </Grid>
    </ListItem>
    
  ));
  return (

    <div>{listItems}</div>

  );
  } else{
  
    return (

      <div>
        
      </div>
  
    );

  }
};

export default MultipleChoiceLinePatient;
