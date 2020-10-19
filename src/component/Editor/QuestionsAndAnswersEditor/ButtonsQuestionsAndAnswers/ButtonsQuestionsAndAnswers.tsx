import React, { ReactElement } from 'react';
import { IconButton, Grid } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {
  openCloseDomandaCard, setBModifyDomandaClicked,
  deleteDomandaFormPiuRes, setBModifyDomandaUnclicked,
  isBCheckDisabled, setBCheckEnabled, domandaType,
} from '../../../../store/slice/domandeAddFormSlice';
import { isBModifyDelAddReturnDisabled, disableAll, enableAll } from '../../../../store/slice/disableEnableSlice';
import { risposteTutteUguali } from '../../../../store/slice/menuDomandeERisposteSlice';
import { haveRepModifyRight } from '../../../../store/slice/rightsSlice';
import { isBConfirmAddFormClicked } from '../../../../store/slice/addFormSlice';

interface Props{domanda : domandaType}

// Bottoni tabella domande a più risposte
const ButtonsQuestionsAndAnswers = ({ domanda } : Props):ReactElement => {
  const dispatch = useDispatch();
  const iconsDisabled = useSelector(isBModifyDelAddReturnDisabled);
  const bCheckDisabled = useSelector(isBCheckDisabled);
  const risTutteUguali = useSelector(risposteTutteUguali);
  const rightRepModify = useSelector(haveRepModifyRight);
  const confirmAddFormClicked = useSelector(isBConfirmAddFormClicked);

  return (
    <>
      {rightRepModify || confirmAddFormClicked
        ? (
          <>
            {/* Se posso modificare il formulario */}
            {' '}
            {domanda.stateText
              ? (
                < >
                  {/* Bottone Menu */}
                  <Grid item xs={12} sm={2}>
                    <div>
                      {risTutteUguali ? <></>
                        : (
                          <IconButton
                            onClick={
              () => dispatch(openCloseDomandaCard(domanda.IDDomanda))
}
                            color="secondary"
                          >
                            {domanda.openCard
                              ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                          </IconButton>
                        ) }
                      {/* Bottone modifica */}
                      <IconButton
                        disabled={iconsDisabled}
                        onClick={() => {
                          dispatch(setBModifyDomandaClicked(domanda.IDDomanda));
                          dispatch(disableAll());
                          dispatch(setBCheckEnabled());
                        }}
                        color="primary"
                      >
                        <CreateIcon />
                      </IconButton>
                      {/* Bottone elimina */}
                      <IconButton
                        onClick={
                      () => dispatch(deleteDomandaFormPiuRes(domanda.IDDomanda))
                      }
                        disabled={iconsDisabled}
                        color="primary"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </Grid>
                </ >
              ) : (
                < >
                  {/* Bottone check */}
                  <Grid item xs={12} sm={1}>
                    <IconButton
                      onClick={() => {
                        dispatch(setBModifyDomandaUnclicked(domanda.IDDomanda));
                        dispatch(enableAll());
                      }}
                      disabled={bCheckDisabled}
                      color="primary"
                    >
                      <CheckCircleOutlineIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={12} sm={1} />

                </ >
              ) }
          </>
        ) : (
          (
            <>
              {/* Se non posso modificare il formulario */}
              {risTutteUguali
                ? <></> : (
                  <>
                    {' '}
                    {' '}
                    {/* Bottone menu */}
                    <Grid item xs={12} sm={2}>
                      <IconButton
                        onClick={
              () => dispatch(openCloseDomandaCard(domanda.IDDomanda))
}
                        color="secondary"
                      >
                        {domanda.openCard
                          ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                      </IconButton>
                    </Grid>
                  </>
                )}
              {' '}

            </>
          )
        )}
    </>
  );
};

export default ButtonsQuestionsAndAnswers;
