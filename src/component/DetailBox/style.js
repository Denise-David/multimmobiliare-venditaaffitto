// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  div: {
    minHeight: '200px',
    marginTop: '40px',
    marginRight: '5%',
    marginLeft: '5%',
    backgroundColor: '#414141',
    boxShadow: '-4px 20px 20px 12px #000000',
    padding: '2%',
  },
  margin: {
    color: 'white',
  },
  font: {
    fontWeight: 'bold',
    marginRight: '20px',
  },
  div2: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginRight: '30px',
  },
  div3: {
    display: 'flex',
    alignItems: 'left',
    flexWrap: 'wrap',

  },

}));
export default useStyles;
