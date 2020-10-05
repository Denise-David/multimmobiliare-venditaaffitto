// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme: Theme) => ({

  padding: {
    padding: theme.spacing(4),

  },
  width: {
    minWidth: '500px',
  },
  margin: {
    marginBottom: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(4),
    textAlign: 'center',
  },
}));
export default useStyles;
