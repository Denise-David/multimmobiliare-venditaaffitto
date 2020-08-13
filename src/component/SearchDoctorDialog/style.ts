// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme) => ({

  margin: {
    margin: theme.spacing(4),
    textAlign: 'center',

  },
  button: {
    margin: theme.spacing(2),
  },

  dialogContent: {

    maxHeight: theme.spacing(50),

  },
}));
export default useStyles;
