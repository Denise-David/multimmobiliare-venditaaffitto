import React from 'react';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import {
  IconButton, FormControlLabel, Checkbox,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import {
  colDisable, isDisable, disableAll, enableAll,
} from '../../store/slice/risultatiAddFormSlice';
import {
  risposteOfDomandaObject, deleteRisposta, setModifyRispostaClicked,
  setModifyRispostaUnclicked, modifyRisposta, setRispostaTipoData,
} from '../../store/slice/risposteAddFormSlice';
import { objectToArray } from '../../util';
import { unsetIcons, setIcons, isBConfirmAddFormClicked } from '../../store/slice/addFormSlice';
import { haveRepModifyRight, unsetDDLFormDisabled, setDDLFormDisabled } from '../../store/slice/rightsSlice';
import { setBCheckEnabled, setBCheckDisabled, isBCheckDisabled } from '../../store/slice/domandeAddFormSlice';

interface Props {id : string}

const AnswerLineEditor = ({ id }: Props) => {
  const dispatch = useDispatch();
  const colorButton = useSelector(colDisable);
  const disableActive = useSelector(isDisable);
  const risposteOFDomandeObj = useSelector(risposteOfDomandaObject);
  const IDDomanda = id;
  const NON_DIGIT = '/[^d]/g';
  const rightRepModify = useSelector(haveRepModifyRight);
  const risposteOfDomanda = risposteOFDomandeObj[id] ? risposteOFDomandeObj[id] : {};
  const risposteArray = objectToArray(risposteOfDomanda);
  const confirmAddForm = useSelector(isBConfirmAddFormClicked);
  const bCheckDisabled = useSelector(isBCheckDisabled);

  const listItems = risposteArray ? risposteArray.map((rispostaArray : any) => {
    const { IDRisposta } = rispostaArray;

    return (
      <Grid key={rispostaArray.IDRisposta} container spacing={3}>
        {rightRepModify || confirmAddForm
          ? (
            <>
              {' '}
              {!rispostaArray.stateModify
                ? (
                  <>

                    <Grid item xs={12} sm={1}>
                      <IconButton
                        onClick={() => {
                          dispatch(unsetIcons());
                          dispatch(disableAll());
                          dispatch(setDDLFormDisabled());
                          dispatch(setModifyRispostaClicked({ IDDomanda, IDRisposta }));
                        }}
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
                        onClick={() => {
                          dispatch(setIcons());
                          dispatch(enableAll());
                          dispatch(unsetDDLFormDisabled());
                          dispatch(setModifyRispostaUnclicked({ IDDomanda, IDRisposta }));
                        }}
                        disabled={bCheckDisabled}
                        color="primary"
                      >
                        <CheckCircleOutlineIcon />
                      </IconButton>
                    </Grid>
                    <Grid item xs={12} sm={1} />
                  </>
                )}

            </>
          ) : (
            <>
              {' '}
              <Grid item xs={12} sm={2} />
            </>
          )}

        <Grid item xs={12} sm={3} />
        {rispostaArray.type !== 'data'
          ? (
            <>
              {' '}
              <Grid item xs={12} sm={4}>
                <TextField
                  onChange={(event) => {
                    const risposta = event.target.value;
                    if (risposta === '') {
                      dispatch(setBCheckDisabled());
                    } else if (bCheckDisabled === true) {
                      dispatch(setBCheckEnabled());
                    }

                    dispatch(modifyRisposta({ IDDomanda, IDRisposta, risposta }));
                  }}
                  disabled={!rispostaArray.stateModify}
                  id="standard-basic"
                  value={rispostaArray.Risposta}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={1}>
                <TextField
                  onChange={(event) => {
                    const { value } = event.target;
                    if (value !== '') {
                    // eslint-disable-next-line radix
                      const valore = parseInt(value.toString().replace(NON_DIGIT, ''));
                      dispatch(modifyRisposta({
                        IDDomanda, IDRisposta, valore,
                      }));
                    } else {
                      const valore = '0';
                      dispatch(modifyRisposta({
                        IDDomanda, IDRisposta, valore,
                      }));
                    }
                  }}
                  disabled={!rispostaArray.stateModify}
                  id="standard-basic"
                  value={rispostaArray.Valore}
                  fullWidth
                />
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12} sm={4}>
                <TextField
                  onChange={(event) => {
                    const risposta = event.target.value;
                    dispatch(modifyRisposta({ IDDomanda, IDRisposta, risposta }));
                  }}
                  disabled={!rispostaArray.stateModify}
                  id="standard-basic"
                  value={rispostaArray.Risposta}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={1} />

            </>
          )}
        {rightRepModify || confirmAddForm
          ? (
            <>

              {' '}
              {' '}
              <Grid item xs={12} sm={1}>

                {rispostaArray.type === 'data'
                  ? (
                    <FormControlLabel
                      control={(
                        <Checkbox
                          checked
                          onClick={() => dispatch(setRispostaTipoData({ IDDomanda, IDRisposta }))}
                        />
)}
                      label="data"
                    />
                  )
                  : (
                    <FormControlLabel
                      control={(
                        <Checkbox
                          checked={false}
                          onClick={() => dispatch(setRispostaTipoData({ IDDomanda, IDRisposta }))}
                        />
)}
                      label="data"
                    />
                  )}
              </Grid>
              <Grid item xs={12} sm={1}>
                <FormControlLabel
                  control={<Checkbox name="checkedA" />}
                  label="libera"
                />

              </Grid>
            </>
          ) : <></>}

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
