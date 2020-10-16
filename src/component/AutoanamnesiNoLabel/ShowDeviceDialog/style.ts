// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme) => ({

  margin: {
    marginTop: theme.spacing(10),
  },
  marginDialog: {
    margin: theme.spacing(2),
  },
  center: {
    textAlign: 'center',
    margin: theme.spacing(10),
  },
}));
export default useStyles;
