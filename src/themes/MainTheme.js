import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { grey } from '@material-ui/core/colors';

// Besides the secondary color (which I override ) we're using the default theme

const MainTheme = createMuiTheme({
    palette: {
      secondary: {
        main: grey[600]
      }
    }
});

export default MainTheme;