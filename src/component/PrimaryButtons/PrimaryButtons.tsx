import React from 'react';
import {
  Grid, IconButton, Fab,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import SaveIcon from '@material-ui/icons/Save';
import {
  isButtonAddFormClicked, buttonConfirmAddFormClicked,
  isConfirmDisabled, buttonCancelAddFormClicked,
  isBConfirmAddFormClicked,
  buttonSaveFormClicked,
} from '../../store/slice/addFormSlice';
import {
  rightsUserAUTAN, setUserCreateRight, setUserDeleteRight,
  setUserModifyRight, repartiDelete,
  setRepartoDeleteRight, setRepartoModifyRight, repartiModify,
} from '../../store/slice/rightsSlice';
import { IDRepartoSelected } from '../../store/slice/ddlEditorFormAndRepartiSlice';
import { isBSaveDisabled, isBModifyDelAddReturnDisabled } from '../../store/slice/disableEnableSlice';
import PrimaryButtonsControlRep from '../PrimaryButtonsControlRep/PrimaryButtonsControlRep';

const PrimaryButtons = () => {
  const addReparto = useSelector(isButtonAddFormClicked);
  const dispatch = useDispatch();
  const confirmDisabled = useSelector(isConfirmDisabled);
  const bConfirmAddFormClicked = useSelector(isBConfirmAddFormClicked);
  const isSaveDisabled = useSelector(isBSaveDisabled);
  const iconsDisabled = useSelector(isBModifyDelAddReturnDisabled);
  const rightUser = useSelector(rightsUserAUTAN);
  const IDRepSelected = useSelector(IDRepartoSelected);
  const repDelete = useSelector(repartiDelete);
  const repModify = useSelector(repartiModify);

  // controllo i diritti che ha l'utente
  // eslint-disable-next-line array-callback-return
  rightUser.map((scope: any) => {
    if (scope.id === 6856) {
      dispatch(setUserCreateRight());
    } // diritto delete
    if (scope.id === 6876) {
      dispatch(setUserDeleteRight());
      // eslint-disable-next-line array-callback-return
      repDelete.map((reparto:any) => {
        if (IDRepSelected === reparto.unitid || IDRepSelected === reparto.sermednodeid) {
          dispatch(setRepartoDeleteRight());
        }
      });
    }
    if (scope.id === 6916) {
      dispatch(setUserModifyRight());
      // eslint-disable-next-line array-callback-return
      repModify.map((reparto:any) => {
        if (IDRepSelected === reparto.unitid || IDRepSelected === reparto.sermednodeid) {
          dispatch(setRepartoModifyRight());
        }
      });
    }
  });

  return (
    <Grid item xs={12} sm={2}>
      {/* Pulsanti accanto al dropDownList scelta reparto */}
      {addReparto
        ? (
          <div>
            {/* se il pulsante add è attivo */}
            <IconButton
              onClick={() => {
                dispatch(buttonConfirmAddFormClicked());
              }}
              disabled={confirmDisabled}
              color="primary"
            >
              <CheckCircleOutlineIcon fontSize="large" />
            </IconButton>
            <IconButton

              onClick={() => dispatch(buttonCancelAddFormClicked())}
            >
              <KeyboardReturnIcon fontSize="large" color="primary" />
            </IconButton>
          </div>
        )
        : (
          <>
            {' '}
            {bConfirmAddFormClicked
              ? (
                <div>
                  {/* Se add è non è attivo ed è stato cliccato il confirm add Form */}

                  <IconButton
                    disabled={isSaveDisabled}
                    onClick={() => dispatch(buttonSaveFormClicked())}
                    color="primary"
                  >
                    <SaveIcon fontSize="large" />
                  </IconButton>

                  <IconButton
                    disabled={iconsDisabled}
                    onClick={
                        () => dispatch(buttonCancelAddFormClicked())
                        }
                    color="primary"
                  >
                    <KeyboardReturnIcon fontSize="large" />
                  </IconButton>
                </div>
              ) : (

                <PrimaryButtonsControlRep />

              )}
          </>

        )}
    </Grid>

  );
};

export default PrimaryButtons;
