import React, { ReactElement } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';

import {
  addRisultatoClicked,
  buttonDisabled,
  resetRisultato,
} from '../../../../store/slice/risultatiAddFormSlice';
import { isBConfirmAddFormClicked } from '../../../../store/slice/addFormSlice';
import { haveRepModifyRight } from '../../../../store/slice/rightsSlice';
import { setBCheckDisabled } from '../../../../store/slice/domandeAddFormSlice';
import TextFieldEmptyResultLine from './TextFieldEmptyResultLine/TextFieldEmptyResultLine';

// Riga di aggiunta risultato
const EmptyResultLineEditor = ():ReactElement => {
  const dispatch = useDispatch();
  const rightRepModify = useSelector(haveRepModifyRight);
  const confirmAddForm = useSelector(isBConfirmAddFormClicked);
  const bCheckDisabled = useSelector(buttonDisabled);

  return (
    <div>
      <Grid container spacing={3}>

        {rightRepModify || confirmAddForm
          ? (
            <>
              <TextFieldEmptyResultLine />

              <Grid item xs={12} sm={1}>
                <IconButton
                  onClick={() => {
                    dispatch(addRisultatoClicked());
                    dispatch(resetRisultato());
                    dispatch(setBCheckDisabled());
                  }}
                  disabled={bCheckDisabled}
                  color="primary"
                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </Grid>

            </>
          ) : <></>}

      </Grid>
    </div>
  );
};

export default EmptyResultLineEditor;
