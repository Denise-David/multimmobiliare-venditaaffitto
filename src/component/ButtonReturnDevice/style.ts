// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';
import createSpacing from '@material-ui/core/styles/createSpacing';
import { Z_BLOCK } from 'zlib';
import { authentication } from '@feathersjs/client';

const useStyles = makeStyles((theme:Theme) => ({

  margin: {
    marginTop: theme.spacing(10),
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

}));
export default useStyles;
