import React from 'react';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { selectData } from '../../store/slice/formSlice';
import RigaRisposta from '../AnswerLineEditor/AnswerLineEditor';
import RigaRispostaVuota from '../EmptyAnswerLineEditor/EmptyAnswerLineEditor';
import RigaDomandaVuota from '../EmptyQuestionLineEditor/EmptyQuestionLineEditor';
import {
  modifyDomandaAction, stateTextField, isDisable, colDisable, disableAll, enableAll,
} from '../../store/slice/editFormSlice';
import { initialID } from '../../store/slice/initialStateSlice';

const RigaRisulato = () => {
  const dispatch = useDispatch();
  const iniID = useSelector(initialID);
  const domande = useSelector(selectData);
  const textFieldState = useSelector(stateTextField);
  const disableActive = useSelector(isDisable);
  const colorButton = useSelector(colDisable);

  if (iniID !== 0) {
    const listItems = domande.map((domanda : any) => (
      <div key={domanda.ID}>
        <Grid container spacing={3}>

          {textFieldState[domanda.ID]
            ? (
              < >
                <Grid item xs={12} sm={1}>
                  <IconButton
                    disabled={disableActive}
                    onClick={() => {
                      dispatch(modifyDomandaAction(domanda.ID));
                      dispatch(disableAll());
                    }}
                  >
                    <CreateIcon color={colorButton} />
                  </IconButton>
                </Grid>
                <Grid item xs={12} sm={1}>
                  <IconButton disabled={disableActive}>
                    <DeleteIcon color={colorButton} />
                  </IconButton>
                </Grid>
              </ >
            ) : (
              < >
                <Grid item xs={12} sm={1}>
                  <IconButton onClick={() => {
                    dispatch(modifyDomandaAction(domanda.ID));
                    dispatch(enableAll());
                  }}
                  >
                    <CheckCircleOutlineIcon color="primary" />
                  </IconButton>
                </Grid>
                <Grid item xs={12} sm={1}>
                  <IconButton onClick={() => {
                    dispatch(modifyDomandaAction(domanda.ID));
                    dispatch(enableAll());
                  }}
                  >
                    <HighlightOffIcon color="primary" />
                  </IconButton>
                </Grid>
              </ >
            ) }

          <Grid item xs={12} sm={10}>
            <TextField disabled={textFieldState[domanda.ID]} value={domanda.Domanda} fullWidth />
          </Grid>
        </Grid>
        <RigaRisposta id={domanda.ID} />
        <RigaRispostaVuota />
      </div>
    ));
    return (

      <div>
        {listItems}
        <RigaDomandaVuota />
      </div>
    );
  }
  return (
    <div>
      <RigaDomandaVuota />
    </div>
  );
};

export default RigaRisulato;
