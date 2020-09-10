import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Fab, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { haveRepDeleteRight, haveRepModifyRight, haveUserCreateRight } from '../../store/slice/rightsSlice';
import {
  buttonAddClicked, buttonDeleteOrSaveClicked, saveModifyForm, buttonCancelAddFormClicked,
} from '../../store/slice/addFormSlice';
import { isBModifyDelAddReturnDisabled } from '../../store/slice/disableEnableSlice';
import useStyles from './style';
import { IDForm } from '../../store/slice/ddlEditorFormAndRepartiSlice';

const PrimaryButtonsControlRep = () => {
  const classes = useStyles();
  const rightRepDelete = useSelector(haveRepDeleteRight);
  const rightRepModify = useSelector(haveRepModifyRight);
  const rightCreate = useSelector(haveUserCreateRight);
  const dispatch = useDispatch();
  const iconsDisabled = useSelector(isBModifyDelAddReturnDisabled);
  const noRep = useSelector(IDForm);

  return (
    <div>
      {noRep === '-1'
        ? (
          <>
            {rightCreate
              ? (
                <Fab
                  className={classes.buttonAdd}
                  onClick={() => dispatch(buttonAddClicked())}
                  color="primary"
                  disabled={iconsDisabled}
                >
                  <AddIcon />

                </Fab>
              ) : <></>}

          </>
        )
        : (
          <div>
            <div>
              {/* se add non è attivo ed è selezionato il reparto */}
              {rightCreate
                ? (
                  <Fab
                    className={classes.buttonAdd}
                    onClick={() => dispatch(buttonAddClicked())}
                    color="primary"
                    disabled={iconsDisabled}
                  >
                    <AddIcon />
                  </Fab>
                ) : <></>}
            </div>
            <div className={classes.ButtonDelSaveCanc}>
              {rightRepDelete
                ? (
                  <IconButton
                    disabled={iconsDisabled}
                    onClick={() => dispatch(buttonDeleteOrSaveClicked())}
                    color="primary"
                  >
                    <DeleteIcon
                      fontSize="large"
                    />
                  </IconButton>
                ) : <></>}
              {rightRepModify

                ? (
                  <IconButton
                    disabled={iconsDisabled}
                    onClick={() => dispatch(saveModifyForm())}
                    color="primary"
                  >
                    <SaveIcon fontSize="large" />
                  </IconButton>
                ) : <></>}
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
          </div>
        )}
    </div>
  );
};

export default PrimaryButtonsControlRep;
