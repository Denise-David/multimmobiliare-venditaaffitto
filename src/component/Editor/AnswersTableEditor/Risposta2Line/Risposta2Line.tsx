import React, { ReactElement, useState } from 'react';
import {
  Grid, Typography, IconButton, TextField,
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import {
  setBModifyRis2Clicked, setBModifyRis2Unclicked,
  getRisposta2, isBModifyRis2Clicked, ris2,
} from '../../../../store/slice/risposteAddFormSlice';
import { disableAll, enableAll, isBModifyDelAddReturnDisabled } from '../../../../store/slice/disableEnableSlice';
import { haveRepModifyRight } from '../../../../store/slice/rightsSlice';
import { isBConfirmAddFormClicked, setUnsavedChanges } from '../../../../store/slice/addFormSlice';

// Riga risposta secondaria
const Risposta2Line = ():ReactElement => {
  const dispatch = useDispatch();
  const [bCheck2Disabled, setBCheck2] = useState(false);
  const rightRepModify = useSelector(haveRepModifyRight);
  const addFormConfirm = useSelector(isBConfirmAddFormClicked);
  const bModifyRis2Clicked = useSelector(isBModifyRis2Clicked);
  const iconsDisabled = useSelector(isBModifyDelAddReturnDisabled);
  const ans2 = useSelector(ris2);
  return (
    <>
      {/* Nome campo */}
      <Grid item xs={12} sm={10}>
        <Typography variant="subtitle1">
          Risposta secondaria
        </Typography>
      </Grid>
      {/* campo */}
      <Grid item xs={12} sm={10}>
        <TextField
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !bCheck2Disabled) {
              dispatch(setBModifyRis2Unclicked());
              dispatch(enableAll());
            }
          }}
          value={ans2.risposta2}
          disabled={ans2.stateText}
          onChange={
    (event) => {
      const res2 = event.target.value;
      dispatch(getRisposta2(res2));
      if (res2 === '') {
        setBCheck2(!bCheck2Disabled);
      } else if (bCheck2Disabled === true) {
        setBCheck2(!bCheck2Disabled);
      }
    }
  }
          fullWidth
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        {/* Bottoni */}
        {rightRepModify || addFormConfirm
          ? (
            <>
              {' '}
              {!bModifyRis2Clicked
                ? (
                  <IconButton
                    disabled={iconsDisabled}
                    color="primary"
                    onClick={() => {
                      dispatch(setBModifyRis2Clicked());
                      dispatch(disableAll());
                      dispatch(setUnsavedChanges());
                    }}
                  >
                    <CreateIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    disabled={bCheck2Disabled}
                    color="primary"
                    onClick={() => {
                      dispatch(setBModifyRis2Unclicked());
                      dispatch(enableAll());
                    }}
                  >
                    <CheckCircleOutlineIcon />
                  </IconButton>
                )}

            </>
          ) : <></>}
      </Grid>
      {/* TextField */}

    </>
  );
};

export default Risposta2Line;
