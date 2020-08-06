// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme: Theme) => ({

  spazio: {
    display: 'block',
    textAlign: 'right',
  },
  margini: {
    margin: theme.spacing(4),
  },
  titolo: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(5),
  },

}));
export default useStyles;
