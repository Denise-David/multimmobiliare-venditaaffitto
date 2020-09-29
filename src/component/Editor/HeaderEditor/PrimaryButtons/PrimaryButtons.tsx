import React from 'react';
import { IconButton } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import SaveIcon from '@material-ui/icons/Save';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {
  isButtonAddFormClicked, buttonConfirmAddFormClicked,
  isConfirmDisabled, buttonCancelAddFormClicked,
  isBConfirmAddFormClicked, buttonSaveFormClicked,
} from '../../../../store/slice/addFormSlice';
import {
  rightsUserAUTAN, setUserCreateRight, setUserDeleteRight,
  setUserModifyRight, repartiDelete,
  setRepartoDeleteRight, setRepartoModifyRight, repartiModify,
} from '../../../../store/slice/rightsSlice';
import { IDRepartoSelected } from '../../../../store/slice/ddlEditorFormAndRepartiSlice';
import { isBSaveDisabled, isBModifyDelAddReturnDisabled, setBSaveDisabled } from '../../../../store/slice/disableEnableSlice';
import PrimaryButtonsControlRep from './PrimaryButtonsControlRep/PrimaryButtonsControlRep';

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

  // eslint-disable-next-line array-callback-return
  rightUser.map((scope: any) => {
    if (scope.code === 'AUTAN_ALL') {
      dispatch(setRepartoModifyRight());
      // eslint-disable-next-line array-callback-return
      repModify.map((reparto:any) => {
        if (IDRepSelected === reparto.unitid || IDRepSelected === reparto.sermednodeid) {
          dispatch(setRepartoModifyRight());
        }
      });
      dispatch(setRepartoDeleteRight());
      // eslint-disable-next-line array-callback-return
      repDelete.map((reparto:any) => {
        if (IDRepSelected === reparto.unitid || IDRepSelected === reparto.sermednodeid) {
          dispatch(setRepartoDeleteRight());
        }
      });
      dispatch(setUserCreateRight());
    }
    if (scope.code === 'AUTAN_CREATE') {
      dispatch(setUserCreateRight());
    } // diritto delete
    if (scope.code === 'AUTAN_DELETE') {
      dispatch(setUserDeleteRight());
      // eslint-disable-next-line array-callback-return
      repDelete.map((reparto:any) => {
        if (IDRepSelected === reparto.unitid || IDRepSelected === reparto.sermednodeid) {
          dispatch(setRepartoDeleteRight());
        }
      });
    }
    if (scope.id === 'AUTAN_MODIFY') {
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
    <>
      {/* Pulsanti accanto al dropDownList scelta reparto */}
      {addReparto
        ? (
          <div>
            {/* se il pulsante add è attivo */}
            <IconButton
              onClick={() => {
                dispatch(buttonConfirmAddFormClicked());
                dispatch(setBSaveDisabled());
              }}
              disabled={confirmDisabled}
              color="primary"
            >
              <CheckCircleOutlineIcon fontSize="large" />
            </IconButton>
            <IconButton

              onClick={() => dispatch(buttonCancelAddFormClicked())}
            >
              <HighlightOffIcon fontSize="large" color="primary" />
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
                    <HighlightOffIcon fontSize="large" />
                  </IconButton>
                </div>
              ) : (

                <PrimaryButtonsControlRep />

              )}
          </>

        )}
    </>

  );
};

export default PrimaryButtons;
