import React, { ReactElement } from 'react';
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
import { isBSaveDisabled, isBModifyDelAddReturnDisabled, setBSaveDisabled } from '../../../../store/slice/disableEnableSlice';
import PrimaryButtonsControlRep from './PrimaryButtonsControlRep/PrimaryButtonsControlRep';

// Bottoni primari
const PrimaryButtons = ():ReactElement => {
  const addReparto = useSelector(isButtonAddFormClicked);
  const dispatch = useDispatch();
  const confirmDisabled = useSelector(isConfirmDisabled);
  const bConfirmAddFormClicked = useSelector(isBConfirmAddFormClicked);
  const isSaveDisabled = useSelector(isBSaveDisabled);
  const iconsDisabled = useSelector(isBModifyDelAddReturnDisabled);

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
