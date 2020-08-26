import React from 'react';
import {
  Grid, IconButton, Fab,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './style';
import {
  isButtonAddFormClicked, buttonConfirmAddFormClicked,
  isConfirmDisabled, colButton, buttonCancelAddFormClicked,
  isBConfirmAddFormClicked, isBSaveDisabled,
  buttonSaveFormClicked, buttonDeleteOrSaveClicked, buttonAddClicked,
} from '../../store/slice/addFormSlice';
import { isDisable, colDisable } from '../../store/slice/risultatiAddFormSlice';
import { initialID } from '../../store/slice/initialStateSlice';

const PrimaryButtons = () => {
  const classes = useStyles();
  const addReparto = useSelector(isButtonAddFormClicked);
  const dispatch = useDispatch();
  const confirmDisabled = useSelector(isConfirmDisabled);
  const buttonColor = useSelector(colButton);
  const bConfirmAddFormClicked = useSelector(isBConfirmAddFormClicked);
  const isSaveDisabled = useSelector(isBSaveDisabled);
  const disableActive = useSelector(isDisable);
  const colorButton = useSelector(colDisable);
  const noRep = useSelector(initialID);

  return (
    <Grid item xs={12} sm={2}>
      {/* Pulsanti accanto al dropDownList scelta reparto */}
      {addReparto
        ? (
          <div>
            {/* se il pulsante add è attivo */}
            <IconButton
              onClick={() => dispatch(buttonConfirmAddFormClicked())}
              disabled={confirmDisabled}
            >
              <CheckCircleOutlineIcon fontSize="large" color={buttonColor} />
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
                  {/* se add non è attivo ed è selezionato il reparto */}

                  <IconButton
                    disabled={isSaveDisabled}
                    onClick={() => dispatch(buttonSaveFormClicked())}
                  >
                    <SaveIcon fontSize="large" color={buttonColor} />
                  </IconButton>
                  <IconButton
                    disabled={disableActive}
                    onClick={
                        () => dispatch(buttonCancelAddFormClicked())
                        }
                  >
                    <KeyboardReturnIcon fontSize="large" color={colorButton} />
                  </IconButton>
                </div>
              ) : (
                <div>
                  {/* se add non è attivo e non è selezionato nessun reparto */}
                  {noRep === 0
                    ? (
                      <>
                        <Fab
                          className={classes.buttonAdd}
                          onClick={() => dispatch(buttonAddClicked())}
                          color="primary"
                        >
                          <AddIcon />

                        </Fab>

                      </>
                    )
                    : (
                      <div>
                        <div>
                          {/* se add non è attivo ed è selezionato il reparto */}
                          <Fab className={classes.buttonAdd} onClick={() => dispatch(buttonAddClicked())} color="primary">
                            <AddIcon />
                          </Fab>
                        </div>
                        <div className={classes.ButtonDelSaveCanc}>
                          <IconButton
                            disabled={disableActive}
                            onClick={() => dispatch(buttonDeleteOrSaveClicked())}
                          >
                            <DeleteIcon
                              fontSize="large"
                              color={colorButton}
                            />
                          </IconButton>
                          <IconButton
                            disabled={disableActive}
                            onClick={() => dispatch(buttonDeleteOrSaveClicked())}
                          >
                            <SaveIcon fontSize="large" color={colorButton} />
                          </IconButton>
                          <IconButton
                            disabled={disableActive}
                            onClick={
                        () => dispatch(buttonCancelAddFormClicked())
                        }
                          >
                            <KeyboardReturnIcon fontSize="large" color={colorButton} />
                          </IconButton>
                        </div>
                      </div>
                    )}
                </div>
              )}
          </>

        )}
    </Grid>

  );
};

export default PrimaryButtons;
