// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme) => ({

  Card: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignContent: 'center',
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),

  },
  Center: {
    display: 'inline-block',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

}));
export default useStyles;
