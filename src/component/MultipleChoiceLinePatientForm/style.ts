// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme) => ({

  margin: {
    margin: theme.spacing(3),

  },
  marginTop: {
    margin: theme.spacing(2),

  },
  datePicker: {
    textAlign: 'right',
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  group: {
    outlineStyle: 'solid',
    outlineWidth: '1px',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
  Intestazione: {
    outlineStyle: 'solid',
    outlineWidth: '1px',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    background: 'lightgrey',
  },
  risposta: {
    textAlign: 'right',

  },
}));
export default useStyles;
