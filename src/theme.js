import theme from '@eoc/mui-theme';
import { createMuiTheme } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
const secondary = {
    lighter: teal['100'],
    light: teal['200'],
    dark: teal['900'],
    main: teal['500'],
};
const EOCTheme = createMuiTheme({
    ...theme,
    palette: {
        ...theme.palette,
        secondary,
    },
});
export default EOCTheme;