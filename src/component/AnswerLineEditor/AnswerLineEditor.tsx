import React from 'react';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { colDisable, isDisable } from '../../store/slice/risultatiAddFormSlice';
import {
  risposteOfDomandaObject, deleteRisposta, setModifyRispostaClicked, setModifyRispostaUnclicked,
} from '../../store/slice/risposteAddFormSlice';
import { objectToArray } from '../../util';

interface Props {id : string}

const AnswerLineEditor = ({ id }: Props) => {
  const dispatch = useDispatch();
  const colorButton = useSelector(colDisable);
  const disableActive = useSelector(isDisable);
  const risposteOFDomandeObj = useSelector(risposteOfDomandaObject);
  const IDDomanda = id;

  const risposteOfDomanda = risposteOFDomandeObj[id] ? risposteOFDomandeObj[id] : {};
  const risposteArray = objectToArray(risposteOfDomanda);

  const listItems = risposteArray ? risposteArray.map((risposta : any) => {
    const { IDRisposta } = risposta;
    return (
      <Grid key={risposta.IDRisposta} container spacing={3}>
        {!risposta.stateModify
          ? (
            <>
              <Grid item xs={12} sm={1}>
                <IconButton
                  onClick={() => dispatch(setModifyRispostaClicked({ IDDomanda, IDRisposta }))}
                  disabled={disableActive}
                >
                  <CreateIcon color={colorButton} />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={1}>

                <IconButton
                  onClick={() => dispatch(deleteRisposta({ IDDomanda, IDRisposta }))}
                  disabled={disableActive}
                >
                  <DeleteIcon color={colorButton} />
                </IconButton>
              </Grid>
            </>
          ) : (
            <>

              <Grid item xs={12} sm={1}>
                <IconButton
                  onClick={() => dispatch(setModifyRispostaUnclicked({ IDDomanda, IDRisposta }))}
                >
                  <CheckCircleOutlineIcon color="primary" />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={1} />
            </>
          )}

        <Grid item xs={12} sm={5} />
        <Grid item xs={12} sm={4}>
          <TextField disabled={!risposta.stateModify} id="standard-basic" value={risposta.Risposta} fullWidth />
        </Grid>
        <Grid item xs={12} sm={1}>
          <TextField disabled={!risposta.stateModify} id="standard-basic" value={risposta.Valore} fullWidth />
        </Grid>

      </Grid>
    );
  }) : <></>;

  return (
    <div>
      {listItems}
    </div>

  );
};

export default AnswerLineEditor;
