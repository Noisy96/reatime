import React from 'react';
import CustomAppBar from './componants/CustomAppBar';
import MainContainer from './componants/MainContainer';
import StickyFooter from './componants/StickyFooter';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: grey[600]
    }
  }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      {/* The AppBar */}
      <CustomAppBar />
      {/* The main container with text input and buttons */}
      <MainContainer />
      {/* Footer created from scratch */}
      <StickyFooter />
    </ThemeProvider>
  );
}

export default App;
