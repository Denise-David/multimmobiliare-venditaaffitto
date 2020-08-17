import theme from '@eoc/mui-theme';
import { createMuiTheme } from '@material-ui/core';

const EOCTheme = createMuiTheme({
  ...theme,
  palette: {
    ...theme.palette,
  },
});
export default EOCTheme;
