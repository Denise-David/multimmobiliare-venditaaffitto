// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme) => ({

  Card: {
    marginTop: theme.spacing(1),
    display: 'inline-block',
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: theme.spacing(5),

  },
  Center: {
    display: 'inline-block',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

}));
export default useStyles;
