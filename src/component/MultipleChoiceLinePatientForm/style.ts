import { DatePicker } from '@material-ui/pickers';
// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme) => ({

  margin: {
    margin: theme.spacing(3),

  },
  marginTop: {
    marginTop: theme.spacing(3),

  },
  datePicker: {
    textAlign: 'right',
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
export default useStyles;
