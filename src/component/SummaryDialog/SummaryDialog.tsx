import React from 'react';
import { useSelector } from 'react-redux';
import { Dialog } from '@material-ui/core';
import { lastDocumentData, dialogStatus } from '../../store/slice/summaryDialogSlice';

const SummaryDialog = () => {
  const lastDataRisposte = useSelector(lastDocumentData);
  console.log('xx last', lastDataRisposte);
  const statusDialog = useSelector(dialogStatus);

  return (
    <Dialog fullScreen open={statusDialog}>
      <div />
    </Dialog>
  );
};

export default SummaryDialog;
