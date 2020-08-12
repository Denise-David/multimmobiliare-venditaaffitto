import theme from '@eoc/mui-theme';
import { createMuiTheme } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';

const EOCTheme = createMuiTheme({
  ...theme,
  palette: {
    ...theme.palette,
  },
});
export default EOCTheme;
