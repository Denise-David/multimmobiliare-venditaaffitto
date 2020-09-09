import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import {
  IconButton, Typography, AppBar, Collapse, Card, Menu, MenuItem, Checkbox,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { v4 as uuidv4 } from 'uuid';
import AnswerLineEditor from '../AnswerLineEditor/AnswerLineEditor';
import EmptyAnswerLineEditor from '../EmptyAnswerLineEditor/EmptyAnswerLineEditor';
import EmptyAddQuestionMoreAnswers from '../EmptyAddQuestionMoreAnswers/EmptyAddQuestionMoreAnswers';
import HeaderDomandaMoreAnswers from '../HeaderDomandaMoreAnswers/HeaderDomandaMoreAnswers';
import useStyles from './style';
import {
  domandeObject, deleteDomandaFormPiuRes,
  setBModifyDomandaClicked, setBModifyDomandaUnclicked,
  modifyDomandaInObjectDomande, openCloseDomandaCard, setBCheckDisabled,
  setBCheckEnabled, isBCheckDisabled,
} from '../../store/slice/domandeAddFormSlice';
import { objectToArray } from '../../util';
import { isBConfirmAddFormClicked } from '../../store/slice/addFormSlice';
import { haveRepModifyRight } from '../../store/slice/rightsSlice';
import { isBModifyDelAddReturnDisabled, enableAll, disableAll } from '../../store/slice/disableEnableSlice';
import { risposteTutteUguali, setRisposteTutteUguali } from '../../store/slice/menuDomandeERisposteSlice';
import HeaderRisposteMoreAnswers from '../HeaderRisposteMoreAnswers/HeaderRisposteMoreAnswers';

const QuestionsAndAnswersEditor = () => {
  const dispatch = useDispatch();

  const iconsDisabled = useSelector(isBModifyDelAddReturnDisabled);
  const classes = useStyles();
  const domandeAddedObject = useSelector(domandeObject);

  const arrayDomandeAdded = objectToArray(domandeAddedObject);
  const rightRepModify = useSelector(haveRepModifyRight);
  const confirmAddFormClicked = useSelector(isBConfirmAddFormClicked);
  const bCheckDisabled = useSelector(isBCheckDisabled);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const risTutteUguali = useSelector(risposteTutteUguali);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // vista domande da aggiunta nuovo form
  const listDomandeAdded = arrayDomandeAdded.map((domanda : any, index) => {
    const { IDDomanda } = domanda;

    return (

      <div key={domanda.ID}>
        {domanda.Tipo === 'a più risposte'
          ? (

            <>
              {' '}
              {risTutteUguali
                ? (
                  <>
                    {index === 0
                      ? (
                        <Card className={classes.bordiCardRisposte}>
                          <div className={classes.bordi}>
                            <HeaderRisposteMoreAnswers />
                            <AnswerLineEditor
                              id={domanda.IDDomanda}

                            />
                            {rightRepModify || confirmAddFormClicked
                              ? <EmptyAnswerLineEditor IDDomanda={domanda.IDDomanda} /> : <></>}
                          </div>
                        </Card>
                      ) : <></>}

                  </>
                )

                : <></>}
              <Card className={classes.bordiCard} elevation={3}>
                <div className={classes.bordi}>
                  <HeaderDomandaMoreAnswers />
                  <Grid container spacing={3}>
                    {/* bottoni domanda */}
                    {rightRepModify || confirmAddFormClicked
                      ? (
                        <>
                          {' '}
                          {domanda.stateText
                            ? (
                              < >

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

                                    <IconButton
                                      disabled={iconsDisabled}
                                      onClick={() => {
                                        dispatch(setBModifyDomandaClicked(domanda.IDDomanda));
                                        dispatch(disableAll());
                                      }}
                                      color="primary"
                                    >
                                      <CreateIcon />
                                    </IconButton>

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
                            {risTutteUguali
                              ? <></> : (
                                <>
                                  {' '}
                                  {' '}

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
                    {/* Text Field domanda */}
                    <Grid item xs={12} sm={9}>
                      <TextField
                        disabled={domanda.stateText}
                        value={domanda.Domanda}
                        fullWidth
                        onChange={(event) => {
                          const question = event.target.value;
                          if (question === '') {
                            dispatch(setBCheckDisabled());
                          } else if (bCheckDisabled === true) {
                            dispatch(setBCheckEnabled());
                          }
                          dispatch(modifyDomandaInObjectDomande(
                            { IDDomanda, question },
                          ));
                        }}
                      />

                    </Grid>
                  </Grid>
                  {risTutteUguali ? <></>
                    : (
                      <Collapse in={!domanda.openCard}>

                        <AnswerLineEditor
                          id={domanda.IDDomanda}

                        />
                        {rightRepModify || confirmAddFormClicked
                          ? <EmptyAnswerLineEditor IDDomanda={domanda.IDDomanda} /> : <></>}
                      </Collapse>
                    )}
                </div>
              </Card>
              {' '}

            </>
          ) : <></>}

      </div>

    );
  });
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <AppBar position="static" className={classes.NavColor}>

        <Typography variant="h5" align="left">
          {expanded
            ? (
              <IconButton onClick={handleExpandClick} className={classes.space}>
                <ExpandLessIcon fontSize="large" color="secondary" />
              </IconButton>
            ) : (
              <IconButton onClick={handleExpandClick} className={classes.space}>
                <ExpandMoreIcon fontSize="large" color="secondary" />
              </IconButton>
            ) }
          Domande e risposte
          <IconButton
            className={classes.spaceleft}
            color="secondary"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}

          >
            <MenuItem onClick={() => {
              dispatch(setRisposteTutteUguali());
              handleClose();
            }}
            >
              imposta risposte tutte uguali
              <Checkbox
                checked={risTutteUguali}
                onChange={() => {
                  dispatch(setRisposteTutteUguali());
                  handleClose();
                }}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </MenuItem>
          </Menu>
        </Typography>
      </AppBar>
      <Collapse in={expanded}>
        <div className={classes.padding}>
          <div className={classes.marginDivider} />
          {listDomandeAdded}
          {rightRepModify || confirmAddFormClicked
            ? <EmptyAddQuestionMoreAnswers /> : <></>}
        </div>
      </Collapse>
    </div>
  );
};

export default QuestionsAndAnswersEditor;
