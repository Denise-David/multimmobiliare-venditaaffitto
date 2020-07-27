// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme) => ({

  Content: {
    textAlign: 'center',
  },

  Margin: {
    margin: theme.spacing(4),
  },

  Logo: {
    display: 'inline-block',
    margin: '2em',

  },
  Card: {
    marginTop: theme.spacing(1),
    display: 'block',
    alignContent: 'center',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),

  },
  Center: {
    display: 'inline-block',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

}));
export default useStyles;
