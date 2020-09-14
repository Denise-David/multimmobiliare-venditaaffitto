import React, { useState } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {
  addRisultatoClicked,
  resetRisultato,
} from '../../store/slice/risultatiAddFormSlice';
import { isBConfirmAddFormClicked } from '../../store/slice/addFormSlice';
import { haveRepModifyRight } from '../../store/slice/rightsSlice';
import { setBCheckDisabled, isBCheckDisabled } from '../../store/slice/domandeAddFormSlice';
import {
  isBModifyDelAddReturnDisabled, enableAll, disableAll,
} from '../../store/slice/disableEnableSlice';
import TextFieldEmptyResultLine from '../TextFieldEmptyResultLine/TextFieldEmptyResultLine';

const EmptyResultLineEditor = () => {
  const iconsDisabled = useSelector(isBModifyDelAddReturnDisabled);
  const dispatch = useDispatch();
  const rightRepModify = useSelector(haveRepModifyRight);
  const confirmAddForm = useSelector(isBConfirmAddFormClicked);
  const bCheckDisabled = useSelector(isBCheckDisabled);
  const [textFieldDisabled, setTextField] = useState(true);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={1}>
          {rightRepModify || confirmAddForm
            ? (
              <>
                {' '}
                {textFieldDisabled
                  ? (
                    <IconButton
                      onClick={() => {
                        dispatch(disableAll());
                        dispatch(setBCheckDisabled());
                        setTextField(!textFieldDisabled);
                      }}
                      disabled={iconsDisabled}
                      color="primary"
                    >
                      <AddCircleOutlineIcon />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() => {
                        dispatch(addRisultatoClicked());
                        dispatch(enableAll());
                        dispatch(resetRisultato());
                        setTextField(textFieldDisabled);
                      }}
                      disabled={bCheckDisabled}
                      color="primary"

                    >
                      <CheckCircleOutlineIcon />
                    </IconButton>
                  ) }
                {' '}

              </>
            ) : <></>}
        </Grid>
        <TextFieldEmptyResultLine textFieldDisabled={textFieldDisabled} />
      </Grid>
    </div>
  );
};

export default EmptyResultLineEditor;
